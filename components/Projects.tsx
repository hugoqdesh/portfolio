import React from "react";
import Image from "next/image";
import Link from "next/link";

const Project = [
  {
    description: "A General Security Tool Website",
    name: "Digestify",
    link: "https://digestify.vercel.app/",
    image: "/projects/digestify.png",
    technologies: ["Next.js", "Tailwind", "Typescript", "Vercel"],
  },
  {
    description: "My Portfolio Website",
    name: "Portfolio",
    link: "https://hugoqdesh.vercel.app/",
    image: "/projects/portfolio.png",
    technologies: ["Next.js", "Tailwind", "Typescript", "Vercel"],
  },
];

const Projects = () => {
  return (
    <div className="mt-20 scroll-smooth scroll-mt-20" id="work">
      <div className="grid grid-cols-1 px-2 xl:px-0 md:grid-cols-2 gap-4">
        {Project.map((project) => (
          <div key={project.name}>
            <Link href={project.link} target="_blank">
              <div className="relative group text-white">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={1200}
                  height={1200}
                  className="hover:translate-y-[-5px] group-hover:opacity-40 transition-all duration-300 ease-in-out w-full h-full "
                ></Image>

                <p className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out top-7 left-5 text-2xl tracking-wide w-[40%]">
                  {project.description}
                </p>

                <p className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out bottom-12 left-5 text-3xl tracking-wide">
                  {project.name}
                </p>

                <p className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out bottom-7 right-5 text-sm tracking-wide">
                  {project.technologies.join(" - ")}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
