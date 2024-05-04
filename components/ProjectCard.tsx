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
    <Card className={className}>
      <Link href={href} className="select-text">
        {children}
      </Link>
      {tag && (
        <div className="text-sm bg-[#0000004b] absolute top-[15px] left-[15px] rounded-[15px] w-[100px] text-center py-2 text-white">
          {tag}
        </div>
      )}
    </Card>
  );
};

export default ProjectCard;
