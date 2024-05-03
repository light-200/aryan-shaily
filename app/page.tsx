"use client";
import ProjectCard from "@/components/ProjectCard";
import ServicesForm from "@/components/ServicesForm";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Index() {
  const [service, setService] = useState("");
  const landing = useRef(null);

  const handleServiceSelection = (e: SyntheticEvent) => {
    setService(e.currentTarget.innerHTML);
  };

  return (
    <main className="w-full overflow-x-hidden">
      <section ref={landing} className="grid place-content-center h-[70vh]">
        <div className="flex flex-col justify-center text-center">
          <h3 className="uppercase text-lg">Available for freelance</h3>
          <h1 className="uppercase text-6xl font-extrabold">
            Web developer &<br /> designer
          </h1>
        </div>
      </section>
      <section
        className="grid place-content-center select-none grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-[10px]"
        id="project"
      >
        <ProjectCard
          href="#"
          tag="Web"
          className="pointer-events-none cursor-not-allowed"
        >
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
            objectPosition="bottom"
          />
        </ProjectCard>
        <ProjectCard
          href="#"
          tag="Graphics"
          className={"col-span-2 aspect-auto"}
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
