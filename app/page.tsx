"use client";

import { FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

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
    <>
      <div className="flex min-h-screen flex-col items-center justify-center text-center gap-2 select-none">
        <p className="text-2xl xl:text-3xl font-semibold">
          Hello, It&apos;s me
        </p>
        <div className="relative">
          <h1 className="text-5xl xl:text-6xl font-bold relative z-10">
            Hugo - HJ
          </h1>
          <h1 className="text-5xl xl:text-6xl font-bold absolute top-1 left-1 text-[#FF5733]/80 z-0 w-full">
            Hugo - HJ
          </h1>
        </div>
        <p className="max-w-sm md:max-w-lg text-lg mt-4">
          I am a fullstack focused webdeveloper. I design, construct, optimize
          and develop web apps and websites
        </p>
        <div className="flex gap-12 mt-2 relative">
          <Link
            href="https://github.com/hugoqdesh"
            onMouseEnter={handleMouseEnterGithub}
            onMouseLeave={handleMouseLeaveGithub}
            className="relative flex flex-col items-center"
          >
            <FaGithub size={36} />
            {isHoveredGithub && (
              <p className="absolute top-full mt-2 bg-black/20 rounded p-2">
                Github
              </p>
            )}
          </Link>
          <Link
            href="https://www.instagram.com/hugoqdesh"
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
        </div>
        <p className="fixed bottom-5 bg-[black]/20 rounded p-2 select-text">
          discord: hugoqdesh
        </p>
      </div>
    </>
  );
}
