"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ------------------------------------------------------------------ *
 * Whole-page scroll signal (0 at the top, 1 at the very bottom).
 * The lead car laps the circuit as you scroll the entire home page.
 * ------------------------------------------------------------------ */
function useScrollProgress() {
  const ref = useRef(0);
  useFrame(() => {
    if (typeof window === "undefined") return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    ref.current = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
  });
  return ref;
}

/* ------------------------------------------------------------------ *
 * The circuit curve — a gently undulating oval so it reads as a real
 * racetrack rather than a plain circle.
 * ------------------------------------------------------------------ */
function useTrackCurve() {
  return useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const count = 64;
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2;
      const wobble = 1 + 0.14 * Math.sin(a * 3);
      pts.push(
        new THREE.Vector3(
          Math.cos(a) * 40 * wobble,
          0,
          Math.sin(a) * 26 * wobble
        )
      );
    }
    return new THREE.CatmullRomCurve3(pts, true, "catmullrom", 0.5);
  }, []);
}

/* ------------------------------------------------------------------ *
 * Track ribbon: asphalt + glowing kerb edges + dashed centre line.
 * ------------------------------------------------------------------ */
function Track({ curve }: { curve: THREE.CatmullRomCurve3 }) {
  const { road, kerbL, kerbR, dashes } = useMemo(() => {
    const SEG = 700;
    const halfWidth = 5;
    const road = new THREE.BufferGeometry();
    const roadPos: number[] = [];
    const roadUv: number[] = [];
    const roadIdx: number[] = [];

    const leftEdge: THREE.Vector3[] = [];
    const rightEdge: THREE.Vector3[] = [];
    const centre: THREE.Vector3[] = [];
    const perps: THREE.Vector3[] = [];

    for (let i = 0; i <= SEG; i++) {
      const u = i / SEG;
      const c = curve.getPointAt(u);
      const t = curve.getTangentAt(u);
      const perp = new THREE.Vector3(-t.z, 0, t.x).normalize();
      const l = c.clone().addScaledVector(perp, halfWidth);
      const r = c.clone().addScaledVector(perp, -halfWidth);
      leftEdge.push(l);
      rightEdge.push(r);
      centre.push(c);
      perps.push(perp);
      roadPos.push(l.x, 0.01, l.z, r.x, 0.01, r.z);
      roadUv.push(0, u * 70, 1, u * 70);
    }
    for (let i = 0; i < SEG; i++) {
      const a = i * 2;
      roadIdx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
    road.setAttribute("position", new THREE.Float32BufferAttribute(roadPos, 3));
    road.setAttribute("uv", new THREE.Float32BufferAttribute(roadUv, 2));
    road.setIndex(roadIdx);
    road.computeVertexNormals();

    const ribbon = (edge: THREE.Vector3[], sign: number) => {
      const g = new THREE.BufferGeometry();
      const pos: number[] = [];
      const idx: number[] = [];
      const w = 0.55;
      for (let i = 0; i <= SEG; i++) {
        const inner = edge[i];
        const outer = edge[i].clone().addScaledVector(perps[i], sign * w);
        pos.push(inner.x, 0.04, inner.z, outer.x, 0.04, outer.z);
      }
      for (let i = 0; i < SEG; i++) {
        const a = i * 2;
        idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
      }
      g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
      g.setIndex(idx);
      g.computeVertexNormals();
      return g;
    };

    const kerbL = ribbon(leftEdge, 1);
    const kerbR = ribbon(rightEdge, -1);

    const dashes = new THREE.BufferGeometry();
    const dPos: number[] = [];
    const dIdx: number[] = [];
    let v = 0;
    for (let i = 0; i < SEG; i += 14) {
      const c = centre[i];
      const perp = perps[i];
      const fwd = centre[Math.min(i + 5, SEG)].clone().sub(c).normalize();
      const hw = 0.16;
      const hl = 1.3;
      const p1 = c.clone().addScaledVector(perp, hw).addScaledVector(fwd, -hl);
      const p2 = c.clone().addScaledVector(perp, -hw).addScaledVector(fwd, -hl);
      const p3 = c.clone().addScaledVector(perp, -hw).addScaledVector(fwd, hl);
      const p4 = c.clone().addScaledVector(perp, hw).addScaledVector(fwd, hl);
      dPos.push(p1.x, 0.05, p1.z, p2.x, 0.05, p2.z, p3.x, 0.05, p3.z, p4.x, 0.05, p4.z);
      dIdx.push(v, v + 1, v + 2, v, v + 2, v + 3);
      v += 4;
    }
    dashes.setAttribute("position", new THREE.Float32BufferAttribute(dPos, 3));
    dashes.setIndex(dIdx);
    dashes.computeVertexNormals();

    return { road, kerbL, kerbR, dashes };
  }, [curve]);

  return (
    <group>
      <mesh geometry={road} receiveShadow>
        <meshStandardMaterial color="#1b1826" roughness={0.7} metalness={0.2} />
      </mesh>
      <mesh geometry={kerbL}>
        <meshStandardMaterial color="#c084fc" emissive="#a855f7" emissiveIntensity={2.4} toneMapped={false} />
      </mesh>
      <mesh geometry={kerbR}>
        <meshStandardMaterial color="#c084fc" emissive="#a855f7" emissiveIntensity={2.4} toneMapped={false} />
      </mesh>
      <mesh geometry={dashes}>
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1.1} toneMapped={false} />
      </mesh>
    </group>
  );
}

/* ------------------------------------------------------------------ *
 * Stylised low-poly F1 car. Built nose-first along -Z.
 * ------------------------------------------------------------------ */
function F1Car({
  color,
  accent,
  headlights = false,
}: {
  color: string;
  accent: string;
  headlights?: boolean;
}) {
  return (
    <group>
      <mesh castShadow position={[0, 0.35, 0.1]}>
        <boxGeometry args={[0.8, 0.32, 3.2]} />
        <meshStandardMaterial color={color} metalness={0.55} roughness={0.28} />
      </mesh>
      <mesh castShadow position={[0, 0.28, -2.05]}>
        <boxGeometry args={[0.42, 0.24, 1.3]} />
        <meshStandardMaterial color={color} metalness={0.55} roughness={0.28} />
      </mesh>
      {/* side pods */}
      <mesh castShadow position={[0.55, 0.34, 0.4]}>
        <boxGeometry args={[0.35, 0.3, 1.6]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.32} />
      </mesh>
      <mesh castShadow position={[-0.55, 0.34, 0.4]}>
        <boxGeometry args={[0.35, 0.3, 1.6]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.32} />
      </mesh>
      {/* engine cover / airbox */}
      <mesh castShadow position={[0, 0.64, 0.95]}>
        <boxGeometry args={[0.5, 0.38, 1.1]} />
        <meshStandardMaterial color={color} metalness={0.55} roughness={0.28} />
      </mesh>
      {/* cockpit + halo */}
      <mesh castShadow position={[0, 0.6, 0.15]}>
        <boxGeometry args={[0.44, 0.26, 0.6]} />
        <meshStandardMaterial color="#08080c" metalness={0.7} roughness={0.25} />
      </mesh>
      <mesh position={[0, 0.8, -0.15]}>
        <torusGeometry args={[0.26, 0.045, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#141018" metalness={0.8} roughness={0.25} />
      </mesh>
      {/* front wing */}
      <mesh castShadow position={[0, 0.16, -2.75]}>
        <boxGeometry args={[1.95, 0.07, 0.5]} />
        <meshStandardMaterial color={accent} metalness={0.45} roughness={0.35} />
      </mesh>
      {/* rear wing */}
      <mesh castShadow position={[0, 0.82, 1.85]}>
        <boxGeometry args={[1.55, 0.52, 0.1]} />
        <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.35} toneMapped={false} />
      </mesh>
      <mesh position={[0, 1.0, 1.9]}>
        <boxGeometry args={[1.55, 0.06, 0.6]} />
        <meshStandardMaterial color="#08080c" metalness={0.6} roughness={0.35} />
      </mesh>
      {/* wheels */}
      {[
        [0.66, -1.55],
        [-0.66, -1.55],
        [0.66, 1.5],
        [-0.66, 1.5],
      ].map(([x, z], i) => (
        <mesh key={i} castShadow position={[x, 0.4, z]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.44, 0.44, 0.34, 22]} />
          <meshStandardMaterial color="#0a0a0d" roughness={0.65} metalness={0.25} />
        </mesh>
      ))}
      {headlights && (
        <>
          <mesh position={[0.18, 0.28, -2.68]}>
            <boxGeometry args={[0.12, 0.08, 0.05]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={3} toneMapped={false} />
          </mesh>
          <mesh position={[-0.18, 0.28, -2.68]}>
            <boxGeometry args={[0.12, 0.08, 0.05]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={3} toneMapped={false} />
          </mesh>
        </>
      )}
    </group>
  );
}

/* Ambient cars that circulate on their own (background traffic). */
function RacingCar({
  curve,
  color,
  accent,
  offset,
  speed,
}: {
  curve: THREE.CatmullRomCurve3;
  color: string;
  accent: string;
  offset: number;
  speed: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const pos = useMemo(() => new THREE.Vector3(), []);
  const tan = useMemo(() => new THREE.Vector3(), []);
  const look = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = (state.clock.elapsedTime * speed + offset) % 1;
    curve.getPointAt(t, pos);
    curve.getTangentAt(t, tan);
    ref.current.position.set(pos.x, 0.05, pos.z);
    look.set(pos.x + tan.x, 0.05, pos.z + tan.z);
    ref.current.lookAt(look);
  });

  return (
    <group ref={ref} scale={1.5}>
      <F1Car color={color} accent={accent} />
    </group>
  );
}

/* ------------------------------------------------------------------ *
 * Lead car + chase camera. The car's position around the lap is driven
 * by whole-page scroll (plus a slow idle drift), and the camera trails
 * it from behind-and-above so the car stays big and central.
 * ------------------------------------------------------------------ */
function LeadCarChaseCam({
  curve,
  scroll,
}: {
  curve: THREE.CatmullRomCurve3;
  scroll: React.RefObject<number>;
}) {
  const { camera } = useThree();
  const carRef = useRef<THREE.Group>(null);
  const pos = useMemo(() => new THREE.Vector3(), []);
  const tan = useMemo(() => new THREE.Vector3(), []);
  const side = useMemo(() => new THREE.Vector3(), []);
  const desired = useMemo(() => new THREE.Vector3(), []);
  const look = useMemo(() => new THREE.Vector3(), []);
  const lookTarget = useMemo(() => new THREE.Vector3(), []);

  useFrame((state, delta) => {
    const s = scroll.current;
    // one full lap over the page + gentle idle drift so it's alive at rest
    const t = (s * 1.0 + state.clock.elapsedTime * 0.01) % 1;
    curve.getPointAt(t, pos);
    curve.getTangentAt(t, tan);

    if (carRef.current) {
      carRef.current.position.set(pos.x, 0.05, pos.z);
      look.set(pos.x + tan.x, 0.05, pos.z + tan.z);
      carRef.current.lookAt(look);
    }

    side.set(-tan.z, 0, tan.x); // ground-plane perpendicular
    desired.set(
      pos.x - tan.x * 11 + side.x * 3,
      6.2,
      pos.z - tan.z * 11 + side.z * 3
    );
    const k = 1 - Math.pow(0.0015, delta); // frame-rate independent smoothing
    camera.position.lerp(desired, k);

    lookTarget.set(pos.x + tan.x * 6, 1.4, pos.z + tan.z * 6);
    camera.lookAt(lookTarget);
  });

  return (
    <group ref={carRef} scale={1.7}>
      <F1Car color="#a855f7" accent="#ffffff" headlights />
      {/* forward headlight pool */}
      <pointLight position={[0, 0.6, -3]} intensity={16} distance={22} color="#f5f0ff" />
    </group>
  );
}

function Scene() {
  const curve = useTrackCurve();
  const scroll = useScrollProgress();

  const cars = useMemo(
    () => [
      { color: "#7c3aed", accent: "#e9d5ff", offset: 0.22, speed: 0.05 },
      { color: "#5b21b6", accent: "#c084fc", offset: 0.46, speed: 0.045 },
      { color: "#c084fc", accent: "#ffffff", offset: 0.7, speed: 0.053 },
    ],
    []
  );

  return (
    <>
      <color attach="background" args={["#05030a"]} />
      <fog attach="fog" args={["#06040c", 34, 150]} />

      <hemisphereLight args={["#c4b5fd", "#0a0612", 0.7]} />
      <ambientLight intensity={0.25} color="#b794f6" />
      <directionalLight
        position={[28, 50, 18]}
        intensity={1.6}
        color="#ffffff"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-90}
        shadow-camera-right={90}
        shadow-camera-top={90}
        shadow-camera-bottom={-90}
        shadow-camera-far={160}
      />
      {/* purple rim / mood lights */}
      <pointLight position={[0, 26, 0]} intensity={500} color="#a855f7" distance={150} />
      <pointLight position={[-55, 16, -42]} intensity={320} color="#7c3aed" distance={170} />
      <pointLight position={[55, 16, 42]} intensity={260} color="#c084fc" distance={170} />

      <LeadCarChaseCam curve={curve} scroll={scroll} />

      {/* ground + tech grid */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.06, 0]} receiveShadow>
        <planeGeometry args={[600, 600]} />
        <meshStandardMaterial color="#0a0713" roughness={1} metalness={0} />
      </mesh>
      <gridHelper args={[600, 120, "#5b21b6", "#241640"]} position={[0, -0.03, 0]} />

      <Track curve={curve} />
      {cars.map((c, i) => (
        <RacingCar key={i} curve={curve} {...c} />
      ))}
    </>
  );
}

export default function RaceScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ fov: 46, near: 0.1, far: 400, position: [50, 6, 0] }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      <Scene />
    </Canvas>
  );
}
