import { easeInOut, motion } from "framer-motion";
import Image from "next/image";

export function Bubble({
  className,
  size,
}: {
  className: string;
  size: number;
}) {
  const floatVariant = {
    initial: {
      y: 0,
    },
    animate: {
      y: [0, 3 + (Math.floor(Math.random() * 7) % 7), 0],
      transition: {
        repeat: Infinity,
        duration: 3 + (Math.floor(Math.random() * 5) % 5),
        ease: easeInOut,
      },
    },
  };

  return (
    <motion.span
      variants={floatVariant}
      initial={"initial"}
      animate={"animate"}
      className={className}
    >
      <Image src={"/bubbles.svg"} alt="asset-01" width={size} height={size} />
    </motion.span>
  );
}
