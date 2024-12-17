import React from "react";
import { Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between md:justify-between items-center border border-white/10 p-4">
      <div className="flex items-center gap-2.5">
        <div className="flex flex-col">
          <p className="text-lg font-semibold"> Hi, I&apos;m Hugo 👋</p>
          <p className="text-sm text-white/40">Full Stack Developer</p>
        </div>
      </div>

      <div className="flex items-center gap-2.5 text-white/40">
        <Link
          href="https://github.com/hugoqdesh"
          target="_blank"
          className="hover:text-white transition-all duration-200"
        >
          <Github size={22} />
        </Link>
        <Link
          href="https://x.com/hugoqdesh"
          target="_blank"
          className="hover:text-white transition-all duration-200"
        >
          <Twitter size={22} />
        </Link>
        <Link
          href="https://instagram.com/hugoqdesh"
          target="_blank"
          className="hover:text-white transition-all duration-200"
        >
          <Instagram size={22} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
