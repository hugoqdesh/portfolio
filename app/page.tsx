"use client";

import { FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isHoveredGithub, setIsHoveredGithub] = useState(false);
  const [isHoveredInstagram, setIsHoveredInstagram] = useState(false);

  const handleMouseEnterGithub = () => {
    setIsHoveredGithub(true);
  };

  const handleMouseLeaveGithub = () => {
    setIsHoveredGithub(false);
  };

  const handleMouseEnterInstagram = () => {
    setIsHoveredInstagram(true);
  };

  const handleMouseLeaveInstagram = () => {
    setIsHoveredInstagram(false);
  };

  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-center gap-2 select-none">
      <motion.p
        className="text-2xl xl:text-3xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hello, It&apos;s me
      </motion.p>

      <motion.div
        className="relative w-[90%] md:w-[50%] group md:mt-1 lg:mt-2 xl:mt-3 mb-0 lg:mb-3 xl:mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl xl:text-6xl font-bold group-hover:-translate-y-4 transition duration-300 relative z-10">
          Hugo / HJ
        </h1>

        <h1 className="text-[4rem] md:text-7xl lg:text-8xl xl:text-9xl blur-sm absolute -top-6 md:-top-3 lg:-top-8 xl:-top-10 left-1 text-black/10 z-0 w-full group-hover:text-[#FF5733]/40 transition duration-300">
          Hugo / HJ
        </h1>
      </motion.div>

      <motion.div
        className="bg-black/10 rounded py-1 px-2 -mb-4 mt-3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-md font-medium text-black/70">
          Programmer x Martial Artist
        </p>
      </motion.div>

      <motion.p
        className="max-w-sm md:max-w-lg text-lg mt-4 select-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        I am a fullstack focused webdeveloper. I design, construct, optimize and
        develop web apps and websites
      </motion.p>

      <motion.div
        className="flex gap-12 mt-2 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
      >
        <Link
          href="https://github.com/hugoqdesh"
          target="_blank"
          onMouseEnter={handleMouseEnterGithub}
          onMouseLeave={handleMouseLeaveGithub}
          className="relative flex flex-col items-center"
        >
          <FaGithub size={36} />
          {isHoveredGithub && (
            <p className="absolute top-full mt-2 bg-black/20 rounded p-2 transition">
              Github
            </p>
          )}
        </Link>
        <Link
          href="https://www.instagram.com/hugoqdesh"
          target="_blank"
          onMouseEnter={handleMouseEnterInstagram}
          onMouseLeave={handleMouseLeaveInstagram}
          className="relative flex flex-col items-center"
        >
          <FaInstagram size={36} />
          {isHoveredInstagram && (
            <p className="absolute top-full mt-2 bg-black/20 rounded p-2">
              Instagram
            </p>
          )}
        </Link>
      </motion.div>

      <motion.p
        className="fixed bottom-5 animate-bounce bg-[black]/20 rounded p-2 select-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        discord: hugoqdesh
      </motion.p>
    </section>
  );
}
