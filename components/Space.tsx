"use client";
import { Libre_Barcode_128_Text } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useEffect } from "react";
import { BsGithub, BsLinkedin, BsSend } from "react-icons/bs";
import { ShuffleBtn } from "./elements/shufflebtn";
import { motion } from "framer-motion";

interface SpaceProps {}

const barcode = Libre_Barcode_128_Text({
  style: "normal",
  subsets: ["latin"],
  weight: "400",
});

const Space: FunctionComponent<SpaceProps> = () => {
  return (
    <div className="w-full h-[82vh] grid gap-4 place-content-center relative  col-span-2 p-2 lg:p-0">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: [0, 1],
          y: 0,
          transition: {
            duration: 0.2,
          },
        }}
        className="backdrop-blur-md aspect-square w-fit grid content-center auto-rows-min gap-6 justify-around p-6 shadow"
      >
        <p className="italic">
          Hey I&apos;m Aryan, I make amazing websites
          <br />
          using nextjs and tailwind.
        </p>
        <ShuffleBtn
          className={barcode.className + " text-[32px] h-fit"}
          href={"#services"}
          newTab={false}
        >
          lets talk
        </ShuffleBtn>
      </motion.div>
    </div>
  );
};

export default Space;
