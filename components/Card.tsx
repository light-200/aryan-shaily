"use client";
import { animate, stagger } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

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
        { skewX: [-1, 0], opacity: [0, 1], y: [30, 0] },
        { duration: 0.6, delay: stagger(0.4) },
      ],
    ]);
  }, []);

  return (
    <motion.div
      className={twMerge(
        "card transform-gpu text-sm md:text-lg overflow-hidden rounded-[30px] p-6 relative select-none opacity-0 max-h-[700px] w-full aspect-square grid",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Card;
