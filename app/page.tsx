"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import { ArrowUpRight, FolderGit, Github } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const projects = [
    {
      name: "Portfolio",
      description: "My portfolio",
      url: "https://hugoqdesh.vercel.app/",
    },
    {
      name: "Portfolio",
      description: "My portfolio",
      url: "https://hugoqdesh.vercel.app/",
    },
    {
      name: "Portfolio",
      description: "My portfolio",
      url: "https://hugoqdesh.vercel.app/",
    },
  ];

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="flex min-h-screen flex-col items-center mx-auto max-w-4xl px-4 py-20"
    >
      <section>
        <div className="flex justify-between">
          <div>
            <h1 className="text-4xl max-w-max font-semibold tracking-tight">
              Hey, I&apos;m Hugo - a web developer
            </h1>
            <p className="mt-4 text-lg max-w-max text-white/50">
              Here to help you with your next project <br /> while developing
              some of my own.
            </p>
          </div>

          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden hidden md:block mr-6">
            <Image
              src="/pfp.png"
              alt="Hugo"
              width={250}
              height={250}
              layout="intrinsic"
              className="object-cover object-center select-none w-full h-full"
              loading="eager"
              priority
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-10 mt-12">
          <div className="relative">
            <div className="border-2 border-white/15 rounded-xl">
              <span className="font-semibold absolute -rotate-6 -translate-y-3 translate-x-3 bg-[#121212] px-3 rounded-full border-2 border-white/50 select-none z-10">
                About
              </span>

              <p className="mt-6 mb-4 px-4 font-medium">
                I&apos;m Hugo (HJ), a <span>16-year-old</span> full stack dev
                with a passion for technology. <br />
                <br /> I started my journey a few years ago and now continually
                improving my skills. <br />
                <br /> I&apos;m interested in trying to start developing mobile
                apps soon.
                <br />
                Besides coding, I do Muay Thai and Judo.
              </p>

              <BorderBeam duration={15} />
            </div>
          </div>
          <div className="relative">
            <div className="border-2 border-white/15 rounded-xl">
              <span className="font-semibold absolute rotate-6 -translate-y-3 translate-x-3 bg-[#121212] px-3 rounded-full border-2 border-white/50 select-none z-10">
                Projects
              </span>

              <div className="mt-6 mb-4 px-4 grid grid-cols-2 gap-4">
                {projects.map((project) => (
                  <div key={project.name} className="mb-4">
                    <h2 className="text-xl font-semibold">{project.name}</h2>
                    <p className="text-white/80 mt-1">{project.description}</p>
                    <div className="flex items-center gap-2">
                      <FolderGit size={16} className="text-white/70 mt-1" />
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 items-center text-white/50 max-w-max hover:text-blue-400 hover:scale-105 transition duration-300 animate-pulse hover:animate-none mt-1 select-none"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <BorderBeam duration={10} />
            </div>
          </div>
          <div className="border-2 border-white/15 rounded-xl md:col-span-2 relative select-none">
            <span className="font-semibold absolute whitespace-nowrap bg-[#121212] px-3 rounded-full border-2 border-white/50 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
              Socials
            </span>

            <div className="mt-6 text-center px-1">
              <p className="text-xl font-bold text-blue-400">
                currently looking for work
              </p>
              <p className="font-medium text-sm mt-1 text-white/60">
                If you wish to hire me contact me down below <br />
              </p>
            </div>

            <div className="mt-8 mb-6 px-4 grid grid-cols-3 place-items-center gap-4 ">
              <a
                href="https://www.instagram.com/hugoqdesh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1 items-center text-white max-w-max group"
              >
                <p className="group-hover:text-blue-400 transition duration-300">
                  Instagram
                </p>
                <ArrowUpRight
                  size={16}
                  className="group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300"
                />
              </a>

              <p>|</p>

              <a
                href="mailto:gitjohan5@gmail.com.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1 items-center text-white max-w-max group"
              >
                <p className="group-hover:text-blue-400 transition duration-300">
                  Email
                </p>
                <ArrowUpRight
                  size={16}
                  className="group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300"
                />
              </a>
            </div>
            <div className="mt-8 mb-6 px-4 text-center">
              <p className="text-sm select-text">or via discord: hugoqdesh</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex gap-4 items-center justify-between px-2 text-white/50 text-sm">
          <div className="flex gap-2 items-center">
            <p>@hugoqdesh</p>
            <a
              href="https://www.github.com/hugoqdesh"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/50 rounded-full p-1 hover:scale-105 hover:border-blue-400 group transition duration-300"
            >
              <Github size={20} className="group-hover:text-blue-400" />
            </a>
          </div>

          <p>2007-2024</p>
        </div>
      </section>
    </motion.main>
  );
}
