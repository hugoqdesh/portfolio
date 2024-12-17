import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <section className="space-y-3.5">
      <h1 className="text-lg font-semibold text-white/40">Services</h1>

      <div className="grid grid-cols-2 gap-4">
        <Link
          href="/"
          className="border border-white/10 rounded-lg p-4 space-y-1 hover:scale-105 transition-all duration-200"
          target="_blank"
        >
          <h2>Hire me</h2>
          <p className="text-white/40 text-sm">
            with experience building production ready apps, i can build your
            next project.
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Services;
