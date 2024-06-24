"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      name: "ViroDo",
      thumbnail: "/virodo.png",
      description:
        "ViroDo is an online platform that allows users to learn different martial art styles.",
      url: "https://virodo.vercel.app",
    },
    {
      name: "Zylo",
      thumbnail: "/zylo.png",
      description:
        "Zylo is a link in bio service for social media platforms. Sign up, fill in your information and share your profile across Discord, Instagram, Twitter or wherever.",
      url: "https://zylo-bio.vercel.app",
    },
    {
      name: "Portfolio",
      thumbnail: "/portfolio.png",
      description:
        "This is my personal portfolio website you are currently viewing. Hope you enjoy it and see you soon!",
      url: "https://hugoqdesh.vercel.app",
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
          <div className="flex flex-col items-center gap-8 w-full p-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className="p-[2px] rounded-[0.9rem] border-2 border-[#FF5733]/15 bg-[#f8f8f8]"
              >
                <div className="flex flex-col max-w-96 md:max-w-xl items-center w-full h-full gap-4 md:gap-6 p-6 rounded-xl">
                  <div className="flex aspect-[5/3] mt-2">
                    <Image
                      src={project.thumbnail}
                      alt={"Thumbnail"}
                      width={320}
                      height={320}
                      className="object-cover object-center select-none rounded-xl border border-neutral-200/60 shadow-lg"
                      loading="eager"
                      priority
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
