import { Profile } from "@/components/Profile";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center max-w-lg mx-auto py-12 px-4 sm:py-24 sm:px-0">
      <Profile />
      <Projects />
    </main>
  );
}
