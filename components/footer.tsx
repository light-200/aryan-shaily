"use client";

import { Cursor } from "@/components/elements/cursor";
import { useRef } from "react";

export function Footer() {
  const ref = useRef(null);
  return (
    <>
      <footer
        ref={ref}
        className="flex justify-between rounded-[30px] bg-cardBg0 p-6 mt-[60px] mb-2"
      >
        <div className="flex flex-col h-[380px] justify-between">
          <div className="grid gap-6">
            <h2 className="text-3xl uppercase font-semibold">
              Wanna talk about your <br /> project?
            </h2>
            <p className="flex gap-2">
              <span className="uppercase bg-black rounded-md text-white py-[.5px] px-2">
                mail
              </span>{" "}
              <a href="mailto:aryanshaily123@gmail.com">
                aryanshaily123@gmail.com
              </a>
            </p>
          </div>
          <h3 className="uppercase">
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
