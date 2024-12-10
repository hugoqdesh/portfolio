import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-screen-md px-8 py-12 mx-auto space-y-8">
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
        className="flex justify-between w-full"
        data-svelte-h="svelte-oa8zu1"
      >
        <span className="text-sm font-semibold opacity-30">@hugoqdesh</span>
        <span className="text-sm font-semibold opacity-30">
          Last updated: December 10, 2024
        </span>
      </footer>
    </main>
  );
}
