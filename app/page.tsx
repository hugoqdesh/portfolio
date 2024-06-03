import { FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center text-center gap-2">
        <p className="text-2xl xl:text-3xl font-semibold">
          Hello, It&apos;s me
        </p>
        <h1 className="text-5xl xl:text-6xl font-bold">Hugo - HJ</h1>
        <p className="max-w-sm md:max-w-lg text-lg mt-4">
          I am a fullstack focused webdeveloper. I design, construct, optimize
          and develop web apps and websites
        </p>
        <div className="flex gap-12 mt-2">
          <Link href="">
            <FaGithub size={36} />
          </Link>
          <Link href="">
            <FaInstagram size={36} />
          </Link>
        </div>
        <p className="mt-4 bg-black/20 rounded p-2">discord: hugoqdesh</p>
      </div>
    </>
  );
}
