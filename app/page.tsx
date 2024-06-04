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

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <>
      <div className="fixed inset-0 flex justify-center h-8 mt-20 select-none">
        <motion.div
          className="border-2 border-[#FF5733]/70 rounded p-4 flex items-center bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <p>
            <span className="text-[#FF5733]">!</span> This Portfolio is under
            development <span className="text-[#FF5733]">!</span>
          </p>
        </motion.div>
      </div>
      <motion.section
        className="flex min-h-screen flex-col items-center justify-center text-center gap-2 select-none"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-2xl xl:text-3xl font-semibold"
          variants={itemVariants}
        >
          Hello, It&apos;s me
        </motion.p>
        <motion.div
          className="relative w-[90%] md:w-[50%] group md:mt-1 lg:mt-2 xl:mt-3 mb-0 lg:mb-3 xl:mb-8"
          variants={itemVariants}
        >
          <motion.h1
            className="text-5xl xl:text-6xl font-bold relative z-10"
            variants={itemVariants}
            whileHover={{ letterSpacing: "0.1em" }}
          >
            Hugo / HJ
          </motion.h1>

          <motion.h1
            className="text-[4rem] md:text-7xl lg:text-8xl xl:text-9xl blur-sm absolute -top-6 md:-top-3 lg:-top-8 xl:-top-10 left-1 text-black/10 z-0 w-full group-hover:text-[#FF5733]/40 transition duration-300"
            variants={itemVariants}
          >
            Hugo / HJ
          </motion.h1>
        </motion.div>

        <motion.div
          className="bg-black/10 rounded py-1 px-2 -mb-4 mt-3"
          variants={itemVariants}
        >
          <p className="text-md font-medium text-black/70">
            Programmer x Martial Artist
          </p>
        </motion.div>

        <motion.p
          className="max-w-sm md:max-w-lg text-lg mt-4 select-text"
          variants={itemVariants}
        >
          I am a fullstack focused webdeveloper. I design, construct, optimize
          and develop web apps and websites
        </motion.p>
        <motion.div
          className="flex gap-12 mt-2 relative"
          variants={itemVariants}
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
              <motion.p
                className="absolute top-full mt-2 bg-black/20 rounded p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Github
              </motion.p>
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
              <motion.p
                className="absolute top-full mt-2 bg-black/20 rounded p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Instagram
              </motion.p>
            )}
          </Link>
        </motion.div>
        <motion.p
          className="fixed bottom-5 animate-bounce bg-[black]/20 rounded p-2 select-text"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
            ease: "easeInOut",
          }}
        >
          discord: hugoqdesh
        </motion.p>
      </motion.section>
    </>
  );
}
