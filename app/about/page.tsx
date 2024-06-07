"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      <div className="flex flex-col items-center py-32 select-none">
        <div className="flex flex-col gap-10">
          <span className="text-5xl md:text-6xl text-center font-semibold">
            About Myself
          </span>
        </div>

        <div className="flex flex-col gap-10 mt-10 md:mt-16">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-16 px-6">
            <motion.div
              className="flex justify-center items-center w-48 md:w-80 mx-auto relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              <Image
                src="/pfp.png"
                alt="Profile Picture"
                width={320}
                height={320}
                className="rounded-full object-cover"
              />
            </motion.div>

            <motion.div
              className="text-center md:text-left text-md font-medium select-text md:px-10 xl:px-0 md:mt-5 lg:mt-10 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
              <p className="mb-4">
                I&apos;m Hugo, also known as HJ, a 16-year-old coder/programmer
                with a passion for technology.
              </p>
              <p className="mb-4">
                My journey started some years ago. And now, it has become a big
                part of my life. Im always trying to learn new things and
                improve my skills. Im open to new opportunities and challenges.
              </p>
              <p>
                Outside of coding, Im also passionate about training and martial
                arts. It helps me stay physically in shape and build discipline,
                focus, and a growth mindset, which is crucial for programming.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="flex flex-col items-center mt-12 md:mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          >
            <span className="text-4xl md:text-5xl text-center font-semibold">
              Tech Stack I Use
            </span>
            <p className="text-sm mt-1 font-medium">(everything)</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-5 px-20 md:px-30 lg:px-40 xl:px-96 place-items-center gap-10 md:mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          >
            <i className="devicon-nextjs-plain colored text-4xl"></i>
            <i className="devicon-react-original colored text-4xl"></i>
            <i className="devicon-vscode-plain colored text-4xl"></i>
            <i className="devicon-css3-plain colored text-4xl"></i>
            <i className="devicon-html5-plain colored text-4xl"></i>
            <i className="devicon-javascript-plain colored text-4xl"></i>
            <i className="devicon-typescript-plain colored text-4xl"></i>
            <i className="devicon-git-plain colored text-4xl"></i>
            <i className="devicon-postman-plain colored text-4xl"></i>
            <i className="devicon-vercel-original colored text-4xl"></i>
            <i className="devicon-npm-original-wordmark colored text-4xl"></i>
            <i className="devicon-tailwindcss-original colored text-4xl"></i>
            <i className="devicon-prisma-original colored text-4xl"></i>
            <i className="devicon-mongodb-plain colored text-4xl"></i>
            <i className="devicon-mongoose-original colored text-4xl"></i>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
