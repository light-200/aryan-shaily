import ProjectCard from "@/components/ProjectCard";
import Title from "@/components/Title";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

async function getRecentPosts() {
  const query = `
      *[_type=="project"] | order(releaseDate desc) | order(_createdAt desc)
    `;
  const data = client.fetch(query);
  return data;
}

export default async function Index() {
  const data = await getRecentPosts();

  return (
    <main className="w-full overflow-x-hidden">
      <section className="grid place-content-center h-[60vh]">
        <div className="flex flex-col justify-center text-center">
          <h3 className="uppercase text-lg flex items-center justify-center gap-3">
            <div className="grid place-items-center relative">
              <span className="bg-black h-[8px] opacity-100 aspect-square rounded-full absolute" />
              <span className="bg-black opacity-50 h-[10px] aspect-square rounded-full absolute animate-ping" />
            </div>
            Available for freelance
          </h3>
          <Title>
            Web developer &<br /> designer
          </Title>
        </div>
      </section>
      <section
        className="grid overflow-x-hidden place-content-center select-none grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-[10px] min-h-screen"
        id="project"
      >
        {data &&
          data
            .filter((v: any) => v.tag == "web")
            .map((v: any) => {
              return (
                <ProjectCard href={"work/" + v.id} tag={v.tag} key={v.id}>
                  {v?.mockup && (
                    <Image
                      src={urlForImage(v?.mockup)}
                      alt="project image"
                      fill
                      priority
                      objectFit="cover"
                      objectPosition="bottom"
                    />
                  )}
                </ProjectCard>
              );
            })}
        {data &&
          [data.filter((v: any) => v.tag == "graphics")[0]].map((v: any) => {
            return (
              <ProjectCard
                href={"work/" + v.id}
                tag={v.tag}
                key={v.id}
                className="md:col-span-2 md:aspect-auto"
              >
                {v?.mockup && (
                  <Image
                    src={urlForImage(v?.mockup)}
                    alt="project image"
                    fill
                    priority
                    objectFit="cover"
                    objectPosition="bottom"
                  />
                )}
              </ProjectCard>
            );
          })}
      </section>
    </main>
  );
}
