import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section className="space-y-3.5">
      <h1 className="text-lg font-semibold text-white/40">Projects</h1>

      <div className="grid grid-cols-2 gap-4">
        <Link
          href="https://www.digestify.dev/"
          className="border border-white/10 rounded-lg p-3 space-y-1 hover:scale-105 transition-all duration-200"
          target="_blank"
        >
          <Image
            src="/digestify.png"
            alt="digestify"
            width={300}
            height={300}
            className="mx-auto rounded-xl pb-1"
          />
          <h2>Digestify</h2>
          <p className="text-white/40 text-sm">
            Streamline your hashing workflows with our suite of cutting-edge
            tools.
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
