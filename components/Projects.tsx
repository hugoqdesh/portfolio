import Image from "next/image";
import Link from "next/link";

export function Projects() {
  return (
    <section className="mt-4 w-full flex flex-col gap-4">
      <p className="mb-1 w-fit rounded-md bg-white/10 px-1.5 py-1 text-white/50 text-xs">
        Projects
      </p>

      <Link
        href="https://www.digestify.dev/"
        target="_blank"
        className="grid grid-cols-1 gap-4"
      >
        <div className="group rounded-xl border border-white/5 p-4 sm:p-6 hover:bg-purple-500/5 transition-all duration-300">
          <div className="block overflow-hidden rounded-lg">
            <Image
              src="/digestify.png"
              alt="Project thumbnail"
              className="rounded-lg object-cover select-none"
              width={800}
              height={400}
            />
          </div>
          <div className="mt-4 text-center sm:text-left">
            <h2 className="text-xl font-medium">Digestify</h2>
            <p className="mt-2 text-white/50">
              Hashing and Cryptographic Tools Suite
            </p>
          </div>
        </div>
      </Link>

      <p className="text-white/50 text-center">WAIT! more to come soon...</p>
    </section>
  );
}
