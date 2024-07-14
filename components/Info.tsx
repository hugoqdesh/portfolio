import React from "react";
import Image from "next/image";

const Info = () => {
  return (
    <div className="mt-64 scroll-smooth" id="info">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <p className="text-3xl xl:text-4xl px-6">
          Hello! I&apos;m <span className="text-white">Hugo</span>, also known
          as HJ. I&apos;m a 16-year-old full stack web developer from{" "}
          <span className="text-white">Estonia</span> with a passion for
          building new web <span className="text-white">applications</span>.
          <br />
          <br />
          My journey into <span className="text-white">
            web development
          </span>{" "}
          started with a simple curiosity on how things work and are being made,
          since then it has become a deep love. I enjoy working on both
          <span className="text-white"> front-end</span> and{" "}
          <span className="text-white">back-end</span> projects, and I&apos;m
          constantly building new stuff while learning along the way. Soon, I
          want to try{" "}
          <span className="text-white">developing some mobile apps</span>.
          <br />
          <br />
          Outside of <span className="text-white">coding</span>, I&apos;m
          passionate about martial arts, practicing Judo and Muay Thai which
          help me build{" "}
          <span className="text-white">
            discipline, focus, and resilience,{" "}
          </span>{" "}
          which I apply to my{" "}
          <span className="text-white">development work</span> as well.
        </p>
        <Image
          src="/me.jpg"
          alt=""
          width={400}
          height={400}
          className="mx-auto md:ml-auto mt-12 md:mt-0 rounded-md px-6 md:px-0"
        />
      </div>

      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Info;
