import ShinyButton from "@/components/ui/shiny-button";
import Link from "next/link";
import { ArrowRight, MessageCircle, MoveUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-screen-md px-8 py-12 mx-auto space-y-8">
      <header className="flex justify-start md:justify-end items-center">
        <ShinyButton>Start a Project</ShinyButton>
      </header>
      <section className="space-y-3.5">
        <h1 className="text-lg font-semibold opacity-30">About</h1>
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
        <h1 className="text-lg font-semibold opacity-30">Projects</h1>
        <div className="grid gap-y-4 md:grid-cols-2 md:gap-y-4 w-fit md:gap-x-12">
          <Link
            className="space-y-0.5 group"
            href="https://digestify.dev/"
            target="_blank"
          >
            <span className="text-lg underline underline-offset-1">
              Digestify
            </span>
            <p className="text-lg opacity-50 group-hover:underline group-hover:underline-offset-1">
              Hashing and Cryptographic Tools Suite
            </p>
          </Link>
        </div>
      </section>

      <section className="space-y-3.5">
        <h1 className="text-lg font-semibold opacity-30">My Tech Stack</h1>
        <div className="grid gap-y-4 md:grid-cols-2 md:gap-y-4 w-fit md:gap-x-12">
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
            href="https://tailwindcss.com/"
            target="_blank"
          >
            <span className="text-lg underline underline-offset-1">
              Tailwind CSS
            </span>
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
        </div>
      </section>

      <section className="space-y-3.5">
        <h1 className="text-lg font-semibold opacity-30">Links</h1>
        <div className="flex flex-wrap gap-x-5 gap-y-2.5">
          <Link
            className="flex gap-1 hover:opacity-50"
            href="https://x.com/hugodqdesh"
          >
            <span className="text-lg">X/Twitter</span>
          </Link>
          <Link
            className="flex gap-1 hover:opacity-50"
            href="https://github.com/hugodqdesh"
          >
            <span className="text-lg">Github</span>
          </Link>
          <Link
            className="flex gap-1 hover:opacity-50"
            href="https://instagram.com/hugodqdesh"
          >
            <span className="text-lg">Instagram</span>
          </Link>
        </div>
      </section>

      <footer
        className="flex flex-col items-center md:flex-row justify-center md:justify-between w-full gap-2 md:gap-0"
        data-svelte-h="svelte-oa8zu1"
      >
        <span className="text-sm font-semibold opacity-30">
          hugoqdesh &copy; 2024
        </span>
        <div className="flex items-center border border-white/10 rounded-full px-1 py-1 text-xs md:text-sm gap-2">
          <div className="bg-white/10 rounded-full py-0.5 px-3 flex items-center gap-1.5">
            <MessageCircle className="w-4 h-4" />
            <p>What&apos;s Happening? </p>
          </div>
          <p className="pr-1 flex items-center gap-0.5">
            Working on{" "}
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
