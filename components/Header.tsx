import Link from "next/link";
import React from "react";
import { RiMenu5Fill } from "react-icons/ri";

const Header = () => {
  return (
    <nav className="flex items-center justify-between max-w-sm md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl px-4 md:px-0 mx-auto mt-4">
      <div className="font-bold">
        <Link href="/" className="text-2xl group">
          <span className="text-black group-hover:text-[#FF5733] transition duration-300">
            H
          </span>
          <span className="text-[#FF5733] group-hover:text-black transition duration-300">
            J
          </span>
        </Link>
      </div>

      <div className="gap-6 text-lg hidden md:flex text-black/60">
        <Link
          href=""
          className="hover:text-[#FF5733] font-semibold transition duration-300"
        >
          Home
        </Link>
        <Link
          href=""
          className="hover:text-[#FF5733] font-semibold transition duration-300"
        >
          About
        </Link>
        <Link
          href=""
          className="hover:text-[#FF5733] font-semibold transition duration-300"
        >
          Projects
        </Link>
        <Link
          href=""
          className="hover:text-[#FF5733] font-semibold transition duration-300"
        >
          Contact
        </Link>
      </div>

      <div className="md:hidden">
        <RiMenu5Fill size={24} />
      </div>
    </nav>
  );
};

export default Header;
