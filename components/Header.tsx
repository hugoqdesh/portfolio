"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <header className="fixed py-5 xl:px-0 px-6 max-w-7xl mx-auto w-full flex justify-between items-center z-10 bg-[#121212]">
        <div className="select-none text-xl">
          <Link href="/" className="text-white">
            Hugo Di Maria
          </Link>
        </div>

        <nav className="hidden md:flex gap-8 text-lg">
          <Link
            href="/#work"
            className="hover:text-white transition ease-in-out duration-300"
          >
            Work
          </Link>
          <Link
            href="/#info"
            className="hover:text-white transition ease-in-out duration-300"
          >
            Info
          </Link>
        </nav>

        <button
          className="md:hidden text-xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <Menu />
        </button>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#121212] z-20 flex flex-col items-center justify-center text-8xl"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.5 }}
          >
            <nav className="flex flex-col text-center gap-16 text-white">
              <Link href="/#work" onClick={toggleMenu}>
                Work
              </Link>
              <Link href="/#info" onClick={toggleMenu}>
                Info
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
