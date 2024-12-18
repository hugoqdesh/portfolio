import Header from "@/components/about";
import Cooking from "@/components/cooking";
import Services from "@/components/services";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="max-w-7xl px-8 py-8 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="flex flex-col gap-8">
          <Cooking />

          <Services />

          <Projects />
        </div>

        <div className="flex flex-col gap-8 order-first md:order-last">
          <Header />
        </div>
      </div>
    </main>
  );
}
