import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import Card from "@/components/Card";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import PortableTextComp from "@/components/PortableTextComp";

async function getData(id: string) {
  const query = `
    *[_type=="project" && id=="${id}"]
  `;
  const data = await client.fetch(query);
  return data[0];
}

export default async function Index({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await getData(id);
  return (
    <main className="w-full overflow-x-hidden">
      <section className="grid place-content-center h-[60vh]">
        <div className="flex flex-col justify-center text-center">
          <h1 className="uppercase text-6xl font-extrabold">Project</h1>
        </div>
      </section>
      <section
        className="grid overflow-x-hidden place-content-center select-none grid-cols-1 md:grid-cols-2 gap-[10px] uppercase text-xl"
        id="project"
      >
        <ProjectCard
          href="#"
          tag="Web"
          className="md:col-span-2 col-span-1 max-h-[600px] w-full bg-gradient-radial from-[#7e7e7e] to-[#353535] flex items-end p-0"
        >
          <Image
            src={urlForImage(data.cover)}
            alt="project image"
            width={1452}
            height={768}
            objectFit="contain"
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
        <Card className="bg-cardBg0 flex flex-col gap-4 leading-snug prose">
          <PortableTextComp content={data.projectDescription} />
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
