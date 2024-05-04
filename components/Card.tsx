import { animate, stagger } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  useEffect(() => {
    animate([
      [
        ".card",
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.6, delay: stagger(0.3) },
      ],
    ]);
  }, []);

  return (
    <div
      className={twMerge(
        "card overflow-hidden rounded-[30px] p-6 relative select-none opacity-0 max-h-[700px] w-full h-[600px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
