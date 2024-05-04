"use client";
import ProjectCard from "@/components/ProjectCard";
import { useRef } from "react";
import Image from "next/image";

export default function Index() {
  const landing = useRef(null);

  return (
    <main className="w-full overflow-x-hidden">
      <section ref={landing} className="grid place-content-center h-[70vh]">
        <div className="flex flex-col justify-center text-center">
          <h1 className="uppercase text-6xl font-extrabold">Work</h1>
        </div>
      </section>
      <section
        className="grid overflow-x-hidden place-content-center select-none grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-[10px]"
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
        <ProjectCard href="work/01" tag="Web">
          <Image
            src={"/w1.png"}
            alt="project image"
            fill
            objectFit="cover"
            objectPosition="bottom"
          />
        </ProjectCard>
        <ProjectCard href="work/03" tag="Graphics">
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
