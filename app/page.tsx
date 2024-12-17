import Link from "next/link";
import Header from "@/components/header";
import Cooking from "@/components/cooking";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl px-8 py-12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-8">
          <Cooking />

          <Services />

          <Projects />
        </div>

        <div className="flex flex-col gap-8 order-first md:order-last">
          <Header />

          <div className="flex justify-center items-center">
            <Image
              src="/me.png"
              alt=""
              width={200}
              height={200}
              className="rounded-2xl overflow-hidden"
            />
          </div>

          <p>
            Im a self-taught full stack developer with a focus on building cool,
            useful web applications and learning cybersecurity on the side.
            Outside of tech i train Martial Arts like Judo and Muay Thai.
          </p>

          <p>Want to reach me? Id love to chat, my Discord is @hugoqdesh</p>
        </div>
      </div>
    </main>
  );
}
