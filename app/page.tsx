"use client";

import Link from "next/link";
import { MoveUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <header className="mb-8">
        <h1 className="text-2xl">hugoqdesh</h1>
      </header>

      <section className="mb-8">
        <p className="text-lg">
          I&apos;m a self-taught web developer from Estonia who&apos;s looking
          to get into mobile development soon, currently working on{" "}
          <Link
            href="https://www.digestify.dev/"
            target="_blank"
            className="text-[#ed4160] font-semibold"
          >
            @digestify
          </Link>{" "}
          and{" "}
          <Link href="" className="text-[#ed4160] font-semibold">
            @betterus
          </Link>
          .
        </p>
        <br />
        <p className="text-lg">
          My primary focus is on developing full stack web applications and apps
          that are meaningful for the users. On the side i do Judo and Muay
          Thai, which help me stay focused and disciplined.
        </p>
        <br />
        <p className="text-lg">
          Want to reach me? Id love to chat, my Discord is{" "}
          <span className="font-semibold">@hugoqdesh</span>
        </p>
      </section>

      <footer className="flex flex-col md:flex-row gap-4 group">
        <Link
          href="https://github.com/hugoqdesh"
          target="_blank"
          className="flex gap-1 items-center text-black/50 hover:text-black transition duration-200"
        >
          {" "}
          <MoveUpRight size={18} /> github
        </Link>
        <Link
          href="https://www.instagram.com/hugoqdesh/"
          target="_blank"
          className="flex gap-1 items-center text-black/50 hover:text-black transition duration-200"
        >
          {" "}
          <MoveUpRight size={18} /> instagram
        </Link>
      </footer>
    </main>
  );
}
