import { redirect } from "next/navigation";

// The Competitions tab is now "Awards" — keep the old URL working.
export default function CompetitionsPage() {
  redirect("/awards");
}
