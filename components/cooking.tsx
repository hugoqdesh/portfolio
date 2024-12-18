import Link from "next/link";
import React from "react";

const Cooking = () => {
  return (
    <section className="space-y-3.5">
      <h1 className="text-lg font-semibold text-white/40">Currently Cooking</h1>

      <div className="flex flex-col gap-2">
        <div className="space-y-0.5">
          <Link
            href="/"
            target="_blank"
            className="text-lg hover:underline underline-offset-2"
          >
            Nothing yet | got ideas coming up...
          </Link>
          <p className="text-sm text-white/40"></p>
        </div>
      </div>
    </section>
  );
};

export default Cooking;
