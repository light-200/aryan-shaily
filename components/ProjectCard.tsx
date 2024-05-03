import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

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
    <div
      className={twMerge(
        "aspect-square overflow-hidden rounded-[30px] p-[15px] relative select-none",
        className
      )}
    >
      <Link href={href} className="select-text">
        {children}
      </Link>
      {tag && (
        <div className="text-sm bg-[#0000004b] absolute top-[15px] left-[15px] rounded-[15px] w-[100px] text-center py-2 text-white">
          {tag}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
