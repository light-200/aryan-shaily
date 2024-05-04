import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Card from "./Card";

const ProjectCard = ({
  href,
  tag,
  children,
  className,
}: {
  href: string;
  tag?: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Card className={twMerge(className, "p-0 group")}>
      <Link
        href={href}
        className="select-text scale-100 group-hover:scale-[1.05] transition-transform duration-500 ease-in-out"
      >
        {children}
      </Link>
      {tag && (
        <div className="text-sm bg-[#0000004b] absolute top-[15px] left-[15px] rounded-[15px] w-[100px] text-center py-2 text-white">
          {tag}
        </div>
      )}
      <div className="absolute bg-[url(/gitter.png)] mix-blend-soft-light bg-repeat-round opacity-10 w-[200%] h-[200%] pointer-events-none"></div>
    </Card>
  );
};

export default ProjectCard;
