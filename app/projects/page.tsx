"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

export default function UltraModernProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <main className="max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-center mb-16">My Projects</h2>
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedProject(project.id)}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={600}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find((p) => p.id === selectedProject);
                if (!project) return null;
                return (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-64 object-cover rounded-xl mb-6"
                    />
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
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
                        className="flex items-center gap-2 text-sm font-medium text-[#ed4160] hover:text-[#ed4160]/60 transition-colors"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-[#ed4160] hover:text-[#ed4160]/60 transition-colors"
                      >
                        <Github size={18} />
                        Source Code
                      </a>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
