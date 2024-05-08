"use client";

import { Cursor } from "@/components/elements/cursor";
import Link from "next/link";
import { useRef, useState } from "react";
import { FiCopy } from "react-icons/fi";
import { RiSendPlaneFill } from "react-icons/ri";
import { twMerge } from "tailwind-merge";

export function Footer() {
  const ref = useRef(null);
  const [copied, setCopied] = useState(false);
  return (
    <>
      <footer
        ref={ref}
        className="flex justify-between rounded-[30px] bg-cardBg0 p-6 mt-[60px] mb-2"
      >
        <div className="flex flex-col h-[380px] justify-between">
          <div className="grid gap-6">
            <h2 className="text-xl md:text-5xl uppercase font-semibold">
              Wanna talk about your <br /> project?
            </h2>
            <div className="flex flex-col md:flex-row md:items-center space-x-2 space-y-2 text-xs md:text-lg lg:text-xl">
              <Link
                href="/contact"
                className="p-2 px-4 bg-documentBg w-fit rounded-full flex gap-2 items-center group uppercase"
              >
                Contact form
                <RiSendPlaneFill className="relative group-hover:-translate-y-[2px] group-hover:translate-x-[2px] group-hover:scale-105 transition-transform duration-300 ease-in-out" />
              </Link>
              <span>or copy</span>
              <p className="flex gap-2">
                <span className="uppercase text-xs bg-black rounded-md text-white px-2 grid place-items-center">
                  mail
                </span>
                <a href="mailto:aryanshaily123@gmail.com">
                  aryanshaily123@gmail.com
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("aryanshaily123@gmail.com");
                    setCopied(true);
                  }}
                  disabled={copied}
                  className={twMerge(["p-1", copied ? "text-gray-600" : ""])}
                >
                  <FiCopy />
                </button>
              </p>
            </div>
          </div>
          <h3 className="uppercase text-xs md:text-lg">
            Copyright © <i>Aryan Shaily, </i> 2024
          </h3>
        </div>
        <div className="flex flex-col h-[380px] justify-end">
          <div className="grid gap-2 uppercase relative group font-semibold">
            <a href="https://www.linkedin.com/in/aryan-shaily" target="_blank">
              Linkedin
            </a>
            <a href="https://twitter.com/aryan_shaily" target="_blank">
              Twitter
            </a>
          </div>
        </div>
      </footer>
      <Cursor targetBtn={ref} />
    </>
  );
}
