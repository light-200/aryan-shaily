import Link from "next/link";
import { FunctionComponent, Suspense, useRef } from "react";
import { BsGithub, BsLinkedin, BsGit } from "react-icons/bs";
import { FaReact, FaFigma } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

interface SpaceProps {}

const Space: FunctionComponent<SpaceProps> = () => {
  return (
    <div className="w-full h-[82vh] grid gap-2 place-content-center  col-span-2">
      <h1 className="text-4xl font-bold mb-2">Nextjs Frontend Developer</h1>
      <p className="text-xl mb-6">
        Hey I'm Aryan Shaily. A creative frontend developer based in India.
      </p>
      <div className="flex gap-4 text-4xl mb-10">
        <Link href={"https://github.com/light-200"} target="_blank">
          <BsGithub />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/aryan-shaily/"}
          target="_blank"
        >
          <BsLinkedin />
        </Link>
      </div>
      <div className="flex gap-4 text-4xl items-center">
        <span className="pr-3 border-r-2 border-zinc-300 text-2xl">
          Tech Stack
        </span>
        <FaReact />
        <TbBrandNextjs />
        <SiTailwindcss />
        <BsGithub />
        <BsGit />
        <FaFigma />
      </div>
    </div>
  );
};

export default Space;
