"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      name: "Zylo",
      thumbnail: "/zylo.png",
      description:
        "Zylo is a link in bio service for social media platforms. Sign up, fill in your information and share your profile across Discord, Instagram, Twitter or wherever.",
      url: "https://zylo-bio.vercel.app",
      underDevelopment: true,
    },
    {
      name: "Portfolio",
      thumbnail: "/portfolio.png",
      description:
        "This is my personal portfolio website you are currently viewing. Hope you enjoy it and see you soon!",
      url: "https://hugoqdesh.vercel.app",
      underDevelopment: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // const projectVariants = {
  //   hidden: { opacity: 0, scale: 0.9 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: { duration: 0.5, ease: "easeOut" },
  //   },
  // };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col items-center py-32 select-none">
        <div className="flex flex-col gap-10">
          <span className="text-5xl md:text-6xl text-center font-semibold">
            Projects
          </span>
          <motion.div
            className="flex flex-col items-center gap-8 w-full p-8"
            variants={containerVariants}
          >
            {projects.map((project) => (
              <motion.div
                key={project.name}
                className="p-[2px] rounded-[0.9rem] border-2 border-[#FF5733]/40"
              >
                <div className="flex flex-col max-w-96 md:max-w-xl items-center w-full h-full gap-4 md:gap-6 p-6 rounded-xl">
                  {project.underDevelopment && (
                    <div className="flex bg-yellow-400 px-2 py-1 rounded-md justify-center text-sm">
                      <p>Under Development</p>
                    </div>
                  )}
                  {!project.underDevelopment && (
                    <div className="flex bg-green-400 px-2 py-1 rounded-md justify-center text-sm">
                      <p>Active</p>
                    </div>
                  )}
                  <div className="flex aspect-[5/3]">
                    <Image
                      src={project.thumbnail}
                      alt={"Thumbnail"}
                      width={9999}
                      height={9999}
                      className="object-cover object-center select-none rounded-xl border border-neutral-200/60 shadow-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-3 py-1">
                    <div>
                      <span className="text-xl md:text-2xl lg:text-3xl">
                        {project.name}
                      </span>
                    </div>
                    <span className="text-sm md:text-base lg:text-lg select-text">
                      {project.description}
                    </span>
                  </div>
                  <div className="flex bg-[#FF5733]/40 p-2 rounded-md justify-center hover:cursor-pointer hover:bg-[#FF5733]/60 hover:scale-105 hover:shadow-lg hover:shadow-[#FF5733]/40 hover:text-white transition duration-300">
                    <Link
                      href={project.url}
                      target="_blank"
                      className="text-sm"
                    >
                      <p>Visit {project.name}</p>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
