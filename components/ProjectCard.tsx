import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { v4 } from "uuid";

interface ProjectCardProps {
  ProjectName: string;
  ProjectImage: string;
  ProjectDesc: string;
  ProjectLinks?: {
    github?: string;
    live?: string;
  };
  ProjectStack: Array<string>;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  ProjectName,
  ProjectDesc,
  ProjectImage,
  ProjectLinks,
  ProjectStack,
}) => {
  return (
    <div className="flex flex-col w-[340px] h-[450px] bg-zinc-200 rounded-md border-zinc-500 gap-1 border-2 p-2 text-black items-center relative">
      <h1 className="text-left w-full text-lg">{ProjectName}</h1>
      <Image
        height={190}
        width={310}
        src={ProjectImage}
        alt={"Project Image"}
        className="bg-black w-full mb-4 rounded-sm"
      />
      <p className="w-full mb-2">{ProjectDesc}</p>
      <div className="flex flex-wrap gap-2 w-full h-max pb-4 mb-2 overflow-clip">
        {ProjectStack.map((tech) => (
          <motion.span
            drag={"x"}
            dragSnapToOrigin={true}
            whileTap={{
              scale: 0.95,
              transition: {
                duration: "50ms",
              },
            }}
            key={v4()}
            className="p-1 px-3 rounded-full bg-[#D9D9D9] h-min w-min whitespace-nowrap shadow-md border-[#C0BFBF] border-2 select-text z-10 cursor-grab active:focus-within:cursor-grabbing"
          >
            {tech}
          </motion.span>
        ))}
      </div>
      <div className="flex gap-4 text-2xl justify-end text-opacity-80 absolute bottom-3 right-4">
        {ProjectLinks?.github && (
          <Link
            href={ProjectLinks.github}
            className="hover:scale-105 transition-all duration-150 ease-in-out"
          >
            <BsGithub />
          </Link>
        )}
        {ProjectLinks?.live && (
          <Link
            href={ProjectLinks.live}
            className="hover:scale-105 transition-all duration-150 ease-in-out"
          >
            <FiExternalLink />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
