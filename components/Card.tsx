import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "aspect-square overflow-hidden rounded-[30px] p-6 relative select-none",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
