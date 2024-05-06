import ProjectCard from "@/components/ProjectCard";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

async function getData() {
  const query = `*[_type=="project"] {
    id,
    tag,
    mockup
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function Index() {
  const data = await getData();

  console.log(data);

  return (
    <main className="w-full overflow-x-hidden">
      <section className="grid place-content-center h-[60vh]">
        <div className="flex flex-col justify-center text-center">
          <h1 className="uppercase text-6xl font-extrabold">Work</h1>
        </div>
      </section>
      <section
        className="grid overflow-x-hidden place-content-center select-none grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-[10px]"
        id="project"
      >
        {data
          ? data.map((v: any) => (
              <ProjectCard href={"work/" + v.id} tag={v.tag}>
                {v?.mockup && (
                  <Image
                    src={urlForImage(v?.mockup)}
                    alt="project image"
                    fill
                    objectFit="cover"
                    objectPosition="bottom"
                  />
                )}
              </ProjectCard>
            ))
          : "No projects added!!"}
      </section>
    </main>
  );
}
