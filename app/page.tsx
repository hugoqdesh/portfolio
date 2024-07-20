"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Image from "next/image";
import Info from "@/components/Info";
import Thanks from "@/components/Thanks";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.15,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const scrollIndicatorVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 0.5 },
  },
  bounce: {
    y: [0, 10, 0],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 0.6,
      },
    },
  },
};

export default function Home() {
  return (
    <motion.main
      className="max-w-7xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Header />

      <motion.section
        className="py-40 lg:py-52 flex flex-col px-6 xl:px-0"
        variants={containerVariants}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2"
          variants={containerVariants}
        >
          <div>
            <motion.h1 className="text-4xl" variants={itemVariants}>
              <span className="text-white">Hugo (Johan) Di Maria</span> is a
              <span className="text-white"> Web Developer</span>
            </motion.h1>
            <br />
            <motion.p className="text-xl" variants={itemVariants}>
              A developer with a passion for building new web apps <br /> and
              websites that bring value to the world and their users! <br />{" "}
              Currently Working on{" "}
              <Link
                href="https://digestify.vercel.app/"
                target="_blank"
                className="text-white"
              >
                Digestify
              </Link>
            </motion.p>
            <br />
            <motion.p className="text-xl space-x-1" variants={itemVariants}>
              Also on{" "}
              <Link
                href="https://instagram.com/hugoqdesh"
                target="_blank"
                className="underline hover:text-white transition-all duration-300 underline-offset-4"
              >
                Insta
              </Link>{" "}
              <Link
                href="https://github.com/hugoqdesh"
                target="_blank"
                className="underline hover:text-white transition-all duration-300 underline-offset-4"
              >
                GitHub
              </Link>{" "}
              <Link
                href="https://www.linkedin.com/in/hugoqdesh/"
                target="_blank"
                className="underline hover:text-white transition-all duration-300 underline-offset-4"
              >
                LinkedIn
              </Link>{" "}
              <Link
                href="https://x.com/hugoqdesh"
                target="_blank"
                className="underline hover:text-white transition-all duration-300 underline-offset-4"
              >
                Twitter
              </Link>
            </motion.p>
          </div>

          <motion.div
            className="relative w-72 h-72 rounded-full overflow-hidden mx-auto mt-10 md:mt-0 md:ml-auto"
            variants={itemVariants}
          >
            <Image
              src="/pfp.jpg"
              alt="A circular image"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.div
        className="2xl:mt-10 hidden select-none w-max h-max lg:flex mx-auto cursor-pointer animate-bounce"
        initial="hidden"
        animate="visible"
        variants={scrollIndicatorVariants}
      >
        <ChevronDown size={36} />
      </motion.div>

      <Projects />

      <Info />

      <Thanks />

      <Footer />
    </motion.main>
  );
}
