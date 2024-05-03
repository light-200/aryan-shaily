"use client";
import ProjectCard from "@/components/ProjectCard";
import { useRef } from "react";
import Image from "next/image";
import Card from "@/components/Card";

export default function Index() {
  const landing = useRef(null);

  return (
    <main className="w-full overflow-x-hidden">
      <section ref={landing} className="grid place-content-center h-[70vh]">
        <div className="flex flex-col justify-center text-center">
          <h1 className="uppercase text-6xl font-extrabold">Project</h1>
        </div>
      </section>
      <section
        className="grid place-content-center select-none grid-cols-1 md:grid-cols-2 gap-[10px] uppercase text-xl"
        id="project"
      >
        <ProjectCard
          href="#"
          tag="Web"
          className="md:col-span-2 col-span-1 max-h-[600px] w-full bg-gradient-radial from-[#7e7e7e] to-[#353535] flex items-end p-0"
        >
          <Image
            src={"/w0-cover.png"}
            alt="project image"
            width={1452}
            height={768}
          />
        </ProjectCard>
        <Card className="bg-cardBg0">
          <h2>Steploops redesign</h2>
        </Card>
        <ProjectCard href="work/00" tag="Web">
          <Image
            src={"/w0.png"}
            alt="project image"
            fill
            objectFit="cover"
            objectPosition="bottom"
          />
        </ProjectCard>
        <Card className="bg-cardBg0 flex flex-col gap-4 leading-snug">
          <p>
            Steploops is a company that provides IT consultancy to its clients.
          </p>
          <p>
            They wanted a landing page that would make them come out like a
            modern tech company that provides modern and meaningful solutions to
            its customers.
          </p>
          <p>
            I created a minimal and neat design for them, which reflects the
            work that they do. It also makes them look like a tech company of
            the new age. The website has clear call to action and description of
            the services they provide.
          </p>
        </Card>
        <Card className="flex justify-end items-end bg-cardBg0">
          <h2>Description</h2>
        </Card>
        <Card className="bg-cardBg0 flex items-end">
          <h2>Logo redesign</h2>
        </Card>
        <Card className="bg-cardBg0 bg-gradient-radial from-[#515151] to-[#1a1a1a] grid place-content-center">
          <Image
            src={"/w0-logo.png"}
            alt="project image"
            width={325}
            height={302}
          />
        </Card>
      </section>
    </main>
  );
}
