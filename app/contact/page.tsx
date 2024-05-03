"use client";
import ProjectCard from "@/components/ProjectCard";
import ServicesForm from "@/components/ServicesForm";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Card from "@/components/Card";

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
          <h3 className="uppercase text-lg">Aryan Shaily</h3>
          <h1 className="uppercase md:text-6xl text-4xl font-extrabold">
            Lets talk
          </h1>
        </div>
      </section>
      <section className="grid place-content-center select-none grid-cols-1 lg:grid-cols-2 gap-[10px]">
        <Card className="p-0 aspect-auto lg:aspect-square">
          <ServicesForm />
        </Card>
        <ProjectCard
          href="work/00"
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
      </section>
    </main>
  );
}
