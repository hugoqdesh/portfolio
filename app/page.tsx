import ShinyButton from "@/components/ui/shiny-button";
import Link from "next/link";
import { Link2, MessageCircle, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Particles from "@/components/ui/particles";

export default function Home() {
  return (
    <main className="max-w-screen-md px-8 py-12 mx-auto space-y-8">
      <header className="flex justify-between md:justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="rounded-full overflow-hidden">
            <Image
              src="/cat.png"
              alt="hugoqdesh"
              width={50}
              height={50}
              className="rounded-full select-none"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">hugoqdesh</p>
            <p className="text-sm text-white/40">Full Stack Developer</p>
          </div>
        </div>

        <ShinyButton className="bg-black">Start a Project</ShinyButton>
      </header>
      <Particles
        className="absolute inset-0"
        quantity={45}
        ease={200}
        refresh
      />
      <section className="space-y-3.5">
        <h1 className="text-lg font-semibold text-white/40">About</h1>
        <p className="text-lg leading-relaxed">
          Im a self-taught full stack developer with a focus on building cool
          and useful web applications. Currently im not working on any projects
          {/* Currently building x to help people study faster */} but learning
          cybersecurity on the side. Outside of tech i train Martial Arts like
          Judo and Muay Thai.
        </p>
        <p className="text-lg leading-relaxed">
          Want to reach me? Id love to chat, my Discord is @hugoqdesh.
        </p>
      </section>

      <section className="space-y-3.5">
        <h1 className="text-lg font-semibold text-white/40">Projects</h1>
        <div className="flex flex-col gap-y-4 md:gap-y-4 w-full md:gap-x-12">
          <Link
            className="space-y-0.5 group hover:bg-white/5 rounded-lg p-4 w-full flex justify-between items-center transition-all duration-300"
            href="https://digestify.dev/"
            target="_blank"
          >
            <div>
              <span className="text-lg">Digestify</span>
              <p className="text-lg text-white/40">
                Hashing and Cryptographic Tools Suite
              </p>
            </div>
            <Link2 className="text-white/40 hidden md:block" />
          </Link>
        </div>
      </section>

      <section className="space-y-3.5">
        <h1 className="text-lg font-semibold text-white/40">Knowledge</h1>
        <div className="grid gap-2.5 grid-cols-3 w-fit md:gap-x-12">
          <Link
            className="space-y-0.5 group"
            href="https://nextjs.org/"
            target="_blank"
          >
            <span className="text-lg underline underline-offset-1">
              Next.js
            </span>
          </Link>
          <Link
            className="space-y-0.5 group"
            href="https://react.dev/"
            target="_blank"
          >
            <span className="text-lg underline underline-offset-1">React</span>
          </Link>
          <Link
            className="space-y-0.5 group"
            href="https://www.typescriptlang.org/"
            target="_blank"
          >
            <span className="text-lg underline underline-offset-1">
              TypeScript
            </span>
          </Link>
          <Link
            className="space-y-0.5 group"
            href="https://learn.microsoft.com/en-us/dotnet/csharp/"
            target="_blank"
          >
            <span className="text-lg underline underline-offset-1">C#</span>
          </Link>
          <Link
            className="space-y-0.5 group"
            href="https://www.python.org/"
            target="_blank"
          >
            <span className="text-lg underline underline-offset-1">Python</span>
          </Link>
          <Link
            className="space-y-0.5 group"
            href="https://tailwindcss.com/"
            target="_blank"
          >
            <span className="text-lg underline underline-offset-1">
              TailwindCSS
            </span>
          </Link>
          <Link
            className="space-y-0.5 group"
            href="https://supabase.com/"
            target="_blank"
          >
            <span className="text-lg underline underline-offset-1">
              Supabase
            </span>
          </Link>
          <Link
            className="space-y-0.5 group"
            href="https://neon.tech/"
            target="_blank"
          >
            <span className="text-lg underline underline-offset-1">Neon</span>
          </Link>
          <Link
            className="space-y-0.5 group"
            href="https://www.prisma.io/"
            target="_blank"
          >
            <span className="text-lg underline underline-offset-1">Prisma</span>
          </Link>
          <Link
            className="space-y-0.5 group"
            href="https://vercel.com/"
            target="_blank"
          >
            <span className="text-lg underline underline-offset-1">Vercel</span>
          </Link>
          <Link
            className="space-y-0.5 group"
            href="https://git-scm.com/"
            target="_blank"
          >
            <span className="text-lg underline underline-offset-1">Git</span>
          </Link>
          <Link
            className="space-y-0.5 group"
            href="https://fedoraproject.org/"
            target="_blank"
          >
            <span className="text-lg underline underline-offset-1">Fedora</span>
          </Link>
        </div>
      </section>

      <section className="space-y-3.5">
        <h1 className="text-lg font-semibold text-white/40">Links</h1>
        <div className="flex flex-wrap gap-x-5 gap-y-2.5">
          <Link
            className="flex gap-1 hover:text-white/40 transition-all duration-300"
            href="https://x.com/hugoqdesh"
            target="_blank"
          >
            <span className="text-lg">X.com</span>
          </Link>
          <Link
            className="flex gap-1 hover:text-white/40 transition-all duration-300"
            href="https://github.com/hugoqdesh"
            target="_blank"
          >
            <span className="text-lg">Github</span>
          </Link>
          <Link
            className="flex gap-1 hover:text-white/40 transition-all duration-300"
            href="https://instagram.com/hugoqdesh"
            target="_blank"
          >
            <span className="text-lg">Instagram</span>
          </Link>
        </div>
      </section>

      <footer className="flex flex-col items-center md:flex-row justify-center md:justify-between w-full gap-2 md:gap-0">
        <span className="text-sm font-semibold text-white/40">
          hugoqdesh &copy; 2024
        </span>
        <div className="flex items-center border border-white/10 rounded-full px-1 py-1 text-xs md:text-sm gap-2">
          <div className="bg-white/10 rounded-full py-0.5 px-3 flex items-center gap-1.5">
            <MessageCircle className="w-4 h-4" />
            <p>What&apos;s Happening? </p>
          </div>
          <p className="pr-1 flex items-center gap-0.5">
            Building{" "}
            <Link href="/" target="_blank" className="text-blue-500">
              Portfolio
            </Link>
            <MoveUpRight className="w-4 h-4 text-blue-500" />
          </p>
        </div>
      </footer>
    </main>
  );
}
