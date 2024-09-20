"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Portfolio",
    description: "The website you are on right now!",
    image: "/portfolio.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveDemo: "https://hugoqdesh.lol",
    sourceCode: "https://github.com/hugoqdesh/portfolio",
  },
  {
    id: 2,
    title: "Digestify",
    description: "Powerful Hashing Tools for Your Needs",
    image: "/digestify.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveDemo: "https://digestify.dev",
    sourceCode: "https://github.com/hugoqdesh/digestify",
  },
  {
    id: 3,
    title: "Zylo",
    description: "Link in bio service for social media",
    image: "/zylo.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveDemo: "https://zylo-bio.vercel.app/",
    sourceCode: "https://github.com/hugoqdesh/zylo",
  },
];

export default function ModernProjectShowcase() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">My Projects</h2>
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-64 object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center p-6 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4 text-center">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:underline"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:underline"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
