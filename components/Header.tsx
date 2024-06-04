"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Projects", path: "/projects" },
    { id: 4, name: "Hire Me", path: "/hire" },
  ];

  return (
    <nav className="flex items-center justify-between max-w-sm md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl px-4 md:px-0 mx-auto mt-4 select-none">
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
        {NavLinks.map((link) => (
          <Link
            href={link.path}
            key={link.id}
            className={`hover:text-[#FF5733] font-semibold transition duration-300 ${
              pathname === link.path ? "text-[#FF5733]" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div onClick={handleMenu} className="md:hidden">
        <RiMenu5Fill size={24} />
        {isMenuOpen && (
          <div className="fixed top-14 right-4 flex flex-col gap-4 bg-white border-2 border-[#FF5733]/70 rounded p-4 items-center">
            <Link href="/" className="font-semibold">
              Home
            </Link>
            <Link href="/about" className="font-semibold">
              About
            </Link>
            <Link href="/projects" className="font-semibold">
              Projects
            </Link>
            <Link href="/hire" className="font-semibold">
              Hire Me
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
