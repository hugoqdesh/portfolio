import Image from "next/image";
import { MapPin } from "lucide-react";
import Link from "next/link";

export function Profile() {
  return (
    <section className="border-b border-white/5 pb-4 w-full">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
        <div className="relative group">
          <Image
            src="/pfp.png"
            alt="logo"
            className="rounded-full border-4 border-white/10 relative z-10 cursor-pointer select-none"
            width={80}
            height={80}
          />
          <div className="absolute inset-0 rounded-full border-4 border-transparent before:absolute before:inset-[-4px] before:rounded-full before:bg-gradient-to-t before:from-purple-300/50 before:to-purple-300/50 before:transition-all before:duration-500 before:[background-size:100%_0%] before:[background-position:0%_100%] before:bg-no-repeat group-hover:before:[background-size:100%_100%]" />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-2xl">Hey, I&apos;m Hugo 👋</h1>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <div className="bg-purple-300 w-2 h-2 rounded-full relative before:absolute before:inset-0 before:rounded-full before:bg-purple-300 before:animate-ping before:opacity-75" />
            <p className="underline underline-offset-4 text-white/50">
              Available for work
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-white/50 flex items-center gap-1 justify-center sm:justify-start">
          <MapPin className="w-4 h-4" />
          Estonia
        </p>
        <p className="mb-4 mt-2 text-center sm:text-left">
          I&apos;m a 17-year-old full-stack web developer, focused on user
          experiences and cybersecurity, training in Judo and Muay Thai.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-white/50">
        <Link
          href="https://x.com/hugoqdesh"
          target="_blank"
          className="hover:text-purple-300 transition-all duration-300"
        >
          X/Twitter
        </Link>
        <Link
          href="https://www.instagram.com/hugoqdesh/"
          target="_blank"
          className="hover:text-purple-300 transition-all duration-300"
        >
          Instagram
        </Link>
        <Link
          href="https://github.com/hugoqdesh"
          target="_blank"
          className="hover:text-purple-300 transition-all duration-300"
        >
          Github
        </Link>
        <p className="hover:text-purple-300 transition-all duration-300">
          Discord - hugoqdesh
        </p>
      </div>
    </section>
  );
}
