"use client";
import { Libre_Barcode_128_Text } from "next/font/google";
import { FunctionComponent, useRef } from "react";
import { ShuffleBtn } from "./elements/shufflebtn";
import { motion, useScroll, useTransform } from "framer-motion";

interface SpaceProps {}

const barcode = Libre_Barcode_128_Text({
  style: "normal",
  subsets: ["latin"],
  weight: "400",
});

const Space: FunctionComponent<SpaceProps> = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <div
      ref={ref}
      className="w-full h-[82vh] grid gap-4 place-content-center relative  col-span-2 p-2 lg:p-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: [0, 1],
          y: 0,
          transition: {
            duration: 0.1,
          },
        }}
        className="backdrop-blur-md relative aspect-square w-fit min-w-fit grid content-center auto-rows-min gap-6 justify-around lg:p-6 p-2 shadow"
        style={{
          bottom: y,
        }}
      >
        <p className="italic">
          Hey I&apos;m Aryan, I make amazing websites
          <br />
          using nextjs and tailwind.
        </p>
        <ShuffleBtn
          className={barcode.className + " text-[32px] h-fit z-50"}
          href={"#services"}
          newTab={false}
        >
          lets connect
        </ShuffleBtn>
      </motion.div>
    </div>
  );
};

export default Space;
