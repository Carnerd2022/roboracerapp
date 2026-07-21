"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

const MODEL_URL = "/models/f1.glb";
const TARGET_LENGTH = 5.4; // world units the finished car should span

const PURPLE = "#7c3aed";
const BLACK = "#0b0b10";

/* ------------------------------------------------------------------ *
 * Scroll progress (0 at top of page, 1 at bottom)
 * ------------------------------------------------------------------ */
function useScrollTarget() {
  const target = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      target.current = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return target;
}

function mulberry32(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ------------------------------------------------------------------ *
 * Load the CAD assembly, flatten its part occurrences into a single
 * space, convert CAD Z-up -> Y-up, and normalise scale/position.
 * ------------------------------------------------------------------ */
function usePreparedCar() {
  const gltf = useLoader(GLTFLoader, MODEL_URL);

  return useMemo(() => {
    const source = gltf.scene.clone(true);

    // 1. collect the individual part occurrences (Onshape names them this way)
    const occurrences: THREE.Object3D[] = [];
    source.traverse((o) => {
      if (/^occurrence of/i.test(o.name)) occurrences.push(o);
    });
    // fallback: if naming differs, use every node that owns a mesh
    if (occurrences.length === 0) {
      source.traverse((o) => {
        if ((o as THREE.Mesh).isMesh && o.parent) occurrences.push(o);
      });
    }

    // 2. Flatten every part into one space and bake the CAD Z-up -> Y-up
    //    rotation in. NOTE: Object3D.attach() deliberately PRESERVES world
    //    transform, so re-parenting through a rotated group cancels itself
    //    out — the rotation has to be composed onto the matrix explicitly.
    source.updateMatrixWorld(true);
    const R = new THREE.Matrix4().makeRotationX(-Math.PI / 2);
    const worlds = occurrences.map((o) => o.matrixWorld.clone());
    const flat = new THREE.Group();
    occurrences.forEach((o, i) => {
      flat.add(o);
      new THREE.Matrix4()
        .multiplyMatrices(R, worlds[i])
        .decompose(o.position, o.quaternion, o.scale);
    });
    flat.updateMatrixWorld(true);

    // 3. normalise: centre on origin, scale to TARGET_LENGTH, sit on the ground
    const box = new THREE.Box3().setFromObject(flat);
    const size = new THREE.Vector3();
    const centre = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(centre);
    const s = TARGET_LENGTH / Math.max(size.x, size.y, size.z);

    const parts = [...flat.children];
    parts.forEach((p) => {
      p.position.sub(centre).multiplyScalar(s);
      p.scale.multiplyScalar(s);
      p.position.y += (size.y / 2) * s; // rest on y = 0
    });

    // 4. how many nodes reuse each mesh — repeated meshes are the wheels
    const meshUse = new Map<string, number>();
    parts.forEach((p) => {
      p.traverse((o) => {
        const m = o as THREE.Mesh;
        if (m.isMesh && m.geometry) {
          const id = m.geometry.uuid;
          meshUse.set(id, (meshUse.get(id) ?? 0) + 1);
        }
      });
    });

    // 5. purple / black livery. Repeated parts (wheels) + small parts go black.
    const partBox = new THREE.Box3();
    parts.forEach((p) => {
      partBox.setFromObject(p);
      const psize = new THREE.Vector3();
      partBox.getSize(psize);
      const maxDim = Math.max(psize.x, psize.y, psize.z);
      let repeated = false;
      p.traverse((o) => {
        const m = o as THREE.Mesh;
        if (m.isMesh && m.geometry && (meshUse.get(m.geometry.uuid) ?? 0) > 1) repeated = true;
      });
      const dark = repeated || maxDim < TARGET_LENGTH * 0.12;
      p.traverse((o) => {
        const m = o as THREE.Mesh;
        if (!m.isMesh) return;
        m.castShadow = true;
        m.receiveShadow = true;
        m.material = new THREE.MeshPhysicalMaterial({
          color: dark ? BLACK : PURPLE,
          metalness: dark ? 0.35 : 0.55,
          roughness: dark ? 0.55 : 0.28,
          clearcoat: dark ? 0.2 : 0.85,
          clearcoatRoughness: 0.12,
        });
      });
      p.userData.dark = dark;
      p.userData.maxDim = maxDim;
    });

    return { parts, count: parts.length };
  }, [gltf]);
}

/* ------------------------------------------------------------------ *
 * The assembling car
 * ------------------------------------------------------------------ */
function Car({ progress }: { progress: React.RefObject<number> }) {
  const { parts } = usePreparedCar();
  const carRef = useRef<THREE.Group>(null);

  // remember each part's finished transform + build a scattered start
  const layout = useMemo(() => {
    const rnd = mulberry32(20260720);
    // biggest parts settle first, small trim last
    const ordered = [...parts].sort(
      (a, b) => (b.userData.maxDim ?? 0) - (a.userData.maxDim ?? 0)
    );
    const cols = 5;
    return ordered.map((p, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      return {
        obj: p,
        finalPos: p.position.clone(),
        finalQuat: p.quaternion.clone(),
        scatterPos: new THREE.Vector3(
          (col - (cols - 1) / 2) * 2.1 + (rnd() - 0.5) * 0.7,
          0.04 + rnd() * 0.03,
          (row - 1) * 1.9 + (rnd() - 0.5) * 0.6
        ),
        // lie flat on the bench with a random spin
        scatterQuat: new THREE.Quaternion().setFromEuler(
          new THREE.Euler((rnd() - 0.5) * 0.25, rnd() * Math.PI * 2, (rnd() - 0.5) * 0.25)
        ),
        order: i / Math.max(ordered.length - 1, 1),
      };
    });
  }, [parts]);

  useFrame(() => {
    const p = progress.current;
    for (const l of layout) {
      const start = l.order * 0.7;
      let t = (p - start) / 0.3;
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const e = 1 - Math.pow(1 - t, 3); // easeOutCubic
      l.obj.position.lerpVectors(l.scatterPos, l.finalPos, e);
      l.obj.quaternion.slerpQuaternions(l.scatterQuat, l.finalQuat, e);
    }
    if (carRef.current) {
      const settle = Math.max(0, (p - 0.9) / 0.1);
      carRef.current.rotation.y = settle * 0.45;
    }
  });

  return (
    <group ref={carRef}>
      {layout.map((l, i) => (
        <primitive key={i} object={l.obj} />
      ))}
    </group>
  );
}

function Rig({ progress }: { progress: React.RefObject<number> }) {
  const { camera } = useThree();
  useFrame(() => {
    const p = progress.current;
    const radius = 10.5 - p * 3.8;
    const angle = 2.25 + p * 1.6;
    const height = 5.2 - p * 3.4;
    camera.position.set(Math.sin(angle) * radius, height, Math.cos(angle) * radius);
    camera.lookAt(0, 0.5, 0);
  });
  return null;
}

function Scene() {
  const target = useScrollTarget();
  const progress = useRef(0);

  useFrame((_, delta) => {
    const mapped = Math.min(target.current / 0.78, 1);
    const k = 1 - Math.pow(0.015, delta);
    progress.current += (mapped - progress.current) * k;
  });

  return (
    <>
      <color attach="background" args={["#07050d"]} />
      <fog attach="fog" args={["#07050d", 16, 40]} />

      <hemisphereLight args={["#ddd6fe", "#150c26", 1.0]} />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[6, 10, 5]}
        intensity={3.0}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
      />
      <pointLight position={[-6, 4, -4]} intensity={110} color="#a855f7" distance={30} />
      <pointLight position={[6, 3, 5]} intensity={80} color="#c084fc" distance={30} />
      <pointLight position={[0, 6, -6]} intensity={70} color="#ffffff" distance={30} />

      <Rig progress={progress} />
      <Suspense fallback={null}>
        <Car progress={progress} />
      </Suspense>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[90, 90]} />
        <meshStandardMaterial color="#0d0a16" roughness={0.95} metalness={0.05} />
      </mesh>
      <gridHelper args={[90, 60, "#3b1d6e", "#1a1030"]} position={[0, 0, 0]} />
    </>
  );
}

export default function F1Assembly() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ fov: 40, near: 0.1, far: 140, position: [-6, 5, 7] }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      onCreated={({ scene, gl }) => {
        // procedural environment map — real reflections, no external asset
        const pmrem = new THREE.PMREMGenerator(gl);
        scene.environment = pmrem.fromScene(new THREE.Scene(), 0.04).texture;
        pmrem.dispose();
      }}
    >
      <Scene />
    </Canvas>
  );
}
