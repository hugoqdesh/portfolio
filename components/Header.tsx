import Link from "next/link";
import React from "react";
import { RiMenu5Fill } from "react-icons/ri";

const Header = () => {
  return (
    <nav className="flex items-center justify-between max-w-sm md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl px-4 md:px-0 mx-auto mt-4">
      <div className="text-2xl lg:text-3xl font-bold">
        <p>HJ</p>
      </div>

      <div className="gap-6 text-lg hidden md:flex">
        <Link href="">About</Link>
        <Link href="">Projects</Link>
        <Link href="">Contact</Link>
      </div>

      <div className="md:hidden">
        <RiMenu5Fill size={24} />
      </div>
    </nav>
  );
};

export default Header;
