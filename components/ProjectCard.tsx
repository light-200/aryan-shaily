import Image from "next/image";
import { FunctionComponent } from "react";

interface ProjectCardProps {
  ProjectName: string;
  ProjectImage: string;
  ProjectDesc: string;
  ProjectLinks?: Array<string>;
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
    <div className="flex flex-col w-[330px] h-[500px] bg-zinc-300 gap-4 p-2 text-black rounded-sm">
      <h1>{ProjectName}</h1>
      <Image
        height={190}
        width={310}
        src={ProjectImage}
        alt={"Project Image"}
        className="bg-black"
      />
      <p>{ProjectDesc}</p>
      <div className="grid grid-flow-col auto-cols-min grid-rows-2 gap-3 py-2">
        {ProjectStack.map((tech) => (
          <span className="p-1 px-2 rounded-full bg-zinc-400 h-min w-min whitespace-nowrap">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
