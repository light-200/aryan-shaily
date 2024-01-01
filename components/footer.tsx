"use client";

import { ShuffleBtn } from "@/components/elements/shufflebtn";
import { Cursor } from "@/components/elements/cursor";
import { useRef } from "react";
import { Libre_Barcode_128_Text } from "next/font/google";

const barcode = Libre_Barcode_128_Text({
  style: "normal",
  subsets: ["latin"],
  weight: "400",
});

export function Footer() {
  const ref = useRef(null);
  return (
    <>
      <footer className="flex justify-between items-end p-2 lg:p-6 h-max lg:min-h-[200px]">
        <div className="leading-snug">
          <h3>
            <i>Aryan-Shaily, </i> 2023
          </h3>

          <p className="">all rights reserved</p>
        </div>

        <a
          className={
            barcode.className +
            " justify-self-end text-right text-[32px] group relative "
          }
          href={"https://www.linkedin.com/in/aryan-shaily"}
          target={"_blank"}
        >
          <div
            className="absolute top-0 left-0 group-hover:scale-x-[2.5] group-hover:scale-y-[10] w-full h-full"
            ref={ref}
          ></div>
          lets connect
        </a>
      </footer>
      <Cursor targetBtn={ref} />
    </>
  );
}
