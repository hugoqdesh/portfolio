import React from "react";
import { Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section className="space-y-6">
      <div className="flex justify-between md:justify-between items-center border border-white/10 p-4">
        <div className="flex items-center gap-2.5">
          <div className="flex flex-col">
            <p className="text-lg font-semibold">
              Hi, I&apos;m <span className="text-yellow-500">Hugo</span> 👋
            </p>
            <p className="text-sm text-white/40">Full Stack Developer</p>
          </div>
        </div>

        <div className="flex items-center gap-4 pr-1 text-white/40">
          <Link
            href="https://github.com/hugoqdesh"
            target="_blank"
            className="hover:text-yellow-500 hover:scale-105 transition-all duration-200"
          >
            <Github size={22} />
          </Link>
          <Link
            href="https://x.com/hugoqdesh"
            target="_blank"
            className="hover:text-yellow-500 hover:scale-105 transition-all duration-200"
          >
            <Twitter size={22} />
          </Link>
          <Link
            href="https://instagram.com/hugoqdesh"
            target="_blank"
            className="hover:text-yellow-500 hover:scale-105 transition-all duration-200"
          >
            <Instagram size={22} />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center gap-12 py-3">
          <Image
            src="/1.jpg"
            alt=""
            width={130}
            height={130}
            className="rounded-2xl overflow-hidden select-none cursor-pointer -rotate-6 hover:rotate-6 transition-all duration-300"
          />

          <Image
            src="/2.png"
            alt=""
            width={180}
            height={180}
            className="rounded-2xl overflow-hidden select-none cursor-pointer rotate-12 hover:-rotate-12 transition-all duration-300"
          />

          <Image
            src="/3.jpg"
            alt=""
            width={120}
            height={120}
            className="rounded-2xl overflow-hidden select-none cursor-pointer -rotate-3 hover:rotate-3 transition-all duration-300"
          />
        </div>
        <p>
          Im a self-taught developer! I focus on building cool, useful web
          applications for the world and learning cybersecurity on the side.
          Outside of tech i train Martial Arts like Judo and Muay Thai.
          <br />
          <br />
          Want to reach me? My Discord is{" "}
          <span className="bg-yellow-500/40 p-1 rounded">@hugoqdesh</span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold text-white/40">Knowledge</p>

        <div className="grid grid-cols-3 gap-y-2 text-center">
          <Link
            href="/"
            target="_blank"
            className="hover:bg-secondary/5 hover:text-yellow-500 transition-all duration-200 rounded-md py-1 w-28"
          >
            Next.js
          </Link>
          <Link
            href="/"
            target="_blank"
            className="hover:bg-secondary/5 hover:text-yellow-500 transition-all duration-200 rounded-md py-1 w-28"
          >
            React
          </Link>
          <Link
            href="/"
            target="_blank"
            className="hover:bg-secondary/5 hover:text-yellow-500 transition-all duration-200 rounded-md py-1 w-28"
          >
            JavaScript
          </Link>
          <Link
            href="/"
            target="_blank"
            className="hover:bg-secondary/5 hover:text-yellow-500 transition-all duration-200 rounded-md py-1 w-28"
          >
            TypeScript
          </Link>
          <Link
            href="/"
            target="_blank"
            className="hover:bg-secondary/5 hover:text-yellow-500 transition-all duration-200 rounded-md py-1 w-28"
          >
            Tailwind
          </Link>
          <Link
            href="/"
            target="_blank"
            className="hover:bg-secondary/5 hover:text-yellow-500 transition-all duration-200 rounded-md py-1 w-28"
          >
            Prisma
          </Link>
          <Link
            href="/"
            target="_blank"
            className="hover:bg-secondary/5 hover:text-yellow-500 transition-all duration-200 rounded-md py-1 w-28"
          >
            HTML
          </Link>
          <Link
            href="/"
            target="_blank"
            className="hover:bg-secondary/5 hover:text-yellow-500 transition-all duration-200 rounded-md py-1 w-28"
          >
            CSS
          </Link>
        </div>

        <p className="text-sm font-semibold text-white/40">
          I also know a bit of
        </p>

        <div className="grid grid-cols-3 gap-y-2 text-center">
          <Link
            href="/"
            target="_blank"
            className="hover:bg-secondary/5 hover:text-yellow-500 transition-all duration-200 rounded-md py-1 w-28"
          >
            Python
          </Link>
          <Link
            href="/"
            target="_blank"
            className="hover:bg-secondary/5 hover:text-yellow-500 transition-all duration-200 rounded-md py-1 w-28"
          >
            C#
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
