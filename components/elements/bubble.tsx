import { easeInOut, motion } from "framer-motion";
import React from "react";

export function Bubble({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  const floatVariant = {
    initial: {
      y: -8,
    },
    animate: {
      y: [-8, 5 + (Math.floor(Math.random() * 8) % 8), -8],

      transition: {
        repeat: Infinity,
        duration: 3 + (Math.floor(Math.random() * 5) % 5),
        ease: easeInOut,
      },
    },
  };

  return (
    <div className={className}>
      <motion.span
        variants={floatVariant}
        initial={"initial"}
        animate={"animate"}
        className="block"
      >
        {children}
      </motion.span>
    </div>
  );
}
