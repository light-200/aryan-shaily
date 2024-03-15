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
    <div className="group flex flex-col max-w-[340px] w-full h-[471px] bg-cardBg1 rounded-md  gap-[14px] p-3 text-black items-center relative shadow text-xs overflow-hidden">
      <h1 className="text-left w-full text-sm">{ProjectName}</h1>
      <div className="overflow-hidden bg-violet-300 mb-4 select-none">
        <Image
          height={190}
          width={310}
          src={ProjectImage}
          alt={"Project Image"}
          className="bg-black w-full pointer-events-none rounded-sm group-hover:scale-110 transition-all duration-500 ease-in-out transform-gpu origin-top-left"
        />
      </div>
      <p className="w-full mb-2 leading-4">{ProjectDesc}</p>
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
            className="px-3 p-1 grid place-items-center rounded-full bg-buttonBg h-[min] w-min whitespace-nowrap shadow-md border-buttonBorder border-2 select-text z-10 cursor-grab active:focus-within:cursor-grabbing"
          >
            {tech}
          </motion.span>
        ))}
      </div>
      <div className="flex gap-4 text-2xl justify-end text-opacity-80 absolute bottom-3 right-4">
        {ProjectLinks?.github && (
          <Link
            href={ProjectLinks.github}
            target="_blank"
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
