"use client";

import PageTitle from "@/components/PageTitle";
import { useState } from "react";
import Image from "next/image";
import PageWrapper from "@/components/PageWrapper";

export default function About() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((p) => !p);
  };
  return (
    <PageWrapper>
      <p className="uppercase md:text-2xl xl:text-3xl row-start-3 selection:bg-black col-span-3">
        HEY I&apos;M ARYAN SHAILY,
        <br />A WEB DEVELOPER AND DESIGNER
        <br />
        FROM INDIA. I LOVE <strong>MUSIC, ART, BOOKS</strong> <br />
        AND <strong>FLOWERS.</strong>
      </p>
      <PageTitle>ABOUT</PageTitle>
      <div className="col-start-4 col-span-2 row-span-5 row-start-5 grid w-full h-full content-end justify-items-center overflow-hidden relative max-w-[500px] justify-self-end">
        <p
          className={`w-full flex top-0 overflow-hidden duration-500 transition-all absolute ${
            !active ? "top-full" : ""
          }`}
        >
          Well there&apos;s not much to know about me as of now. I&apos;ll
          update it as soon as possible though.
          <br />
          <br />
          Thanks for showing interest.
        </p>
        <span
          onClick={handleClick}
          className="bg-white w-full text-center z-10 select-none cursor-pointer font-medium"
        >
          {active ? (
            <span className="grid place-items-center">
              <Image
                src="/arrow.svg"
                alt="arrow"
                width={15}
                height={15}
                className="rotate-180"
              />
              <i>close</i>
            </span>
          ) : (
            <span className="grid place-items-center">
              <Image src="/arrow.svg" alt="arrow" width={15} height={15} />
              <i>Know more</i>
            </span>
          )}
        </span>
      </div>
    </PageWrapper>
  );
}
