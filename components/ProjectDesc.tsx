"use client";
import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";

export default function ProjectDesc({ desc }: { desc: string }) {
  const control = useAnimationControls();
  const control2 = useAnimationControls();

  useEffect(() => {
    control.start({
      opacity: [0, 1],
      y: [5, 0],
      transition: { duration: 0.5, ease: "anticipate" },
    });
    control2.start({
      scale: [0.99, 1],
      transition: { duration: 0.5, ease: "anticipate" },
    });
  }, [desc]);

  return (
    <>
      <div className="row-start-2 col-span-2 flex flex-col uppercase text-2xl gap-6">
        <h3 className="font-bold">About</h3>
        <motion.p animate={control}>{desc}</motion.p>
      </div>
      <motion.div
        animate={control2}
        className="row-start-2 col-start-5 col-span-2"
      >
        <Image
          src={""}
          alt="project ss"
          width={500}
          height={300}
          className="bg-black object-cover"
        />
      </motion.div>
    </>
  );
}
