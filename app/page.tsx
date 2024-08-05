"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Instagram } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <header className="mb-8">
        <div className="flex flex-col justify-center items-center">
          <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/me.jpg"
              alt=""
              width={1000}
              height={1000}
              className="object-cover select-none"
            />
          </div>
          <h1 className="text-2xl mt-3">hugoqdesh</h1>
        </div>
      </header>

      <section className="mb-8 text-center">
        <p className="text-lg">
          I&apos;m 16 years old self-taught web developer from Estonia and
          looking to get into mobile development soon. Currently working on{" "}
          <Link
            href="https://www.digestify.dev/"
            target="_blank"
            className="text-[#ed4160] font-semibold"
          >
            @digestify
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.digestify.dev/"
            target="_blank"
            className="text-[#ed4160] font-semibold"
          >
            @instgrow
          </Link>
          .
        </p>
        <br />
        <p className="text-lg">
          My primary focus is developing full stack web applications and apps
          that are meaningful for the users. Besides coding i train Judo and
          Muay Thai, which help me stay focused and disciplined.
        </p>
        <br />
        <p className="text-lg">
          Want to reach me? My Discord is{" "}
          <span className="font-semibold">@hugoqdesh</span>
        </p>
      </section>

      <footer className="flex flex-col md:flex-row justify-center gap-4 group">
        <Link
          href="https://github.com/hugoqdesh"
          target="_blank"
          className="flex gap-1 items-center text-black/50 hover:text-black transition duration-200"
        >
          {" "}
          <Github size={18} /> github
        </Link>
        <Link
          href="https://www.instagram.com/hugoqdesh/"
          target="_blank"
          className="flex gap-1 items-center text-black/50 hover:text-black transition duration-200"
        >
          {" "}
          <Instagram size={18} /> instagram
        </Link>
      </footer>
    </main>
  );
}
