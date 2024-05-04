"use client";
import ProjectCard from "@/components/ProjectCard";
import ServicesForm from "@/components/ServicesForm";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "lenis";

export default function Index() {
  const landing = useRef(null);

  return (
    <main className="w-full overflow-x-hidden">
      <section ref={landing} className="grid place-content-center h-[70vh]">
        <div className="flex flex-col justify-center text-center">
          <h3 className="uppercase text-lg">Available for freelance</h3>
          <h1 className="uppercase md:text-6xl text-4xl font-extrabold">
            Web developer &<br /> designer
          </h1>
        </div>
      </section>
      <section
        className="grid place-content-center select-none grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-[10px]"
        id="project"
      >
        <ProjectCard href="work/00" tag="Web">
          <Image
            src={"/w0.png"}
            alt="project image"
            fill
            objectFit="cover"
            objectPosition="bottom"
          />
        </ProjectCard>
        <ProjectCard href="https://theindianscholar.com/" tag="Web">
          <Image
            src={"/w1.png"}
            alt="project image"
            fill
            objectFit="cover"
            objectPosition="center"
          />
        </ProjectCard>
        <ProjectCard
          href="#"
          tag="Graphics"
          className={"md:col-span-2 md:aspect-auto"}
        >
          <Image
            src={"/g0.png"}
            alt="project image"
            fill
            objectFit="cover"
            objectPosition="center"
          />
        </ProjectCard>
      </section>
    </main>
  );
}
