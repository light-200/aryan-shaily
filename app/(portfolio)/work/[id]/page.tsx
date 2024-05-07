import { client } from "@/sanity/lib/client";
import ProjectWeb from "@/components/ProjectViewWeb";
import ProjectGraphics from "@/components/ProjectViewGraphics";

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

  let render = null;

  switch (data?.tag) {
    case "graphics":
      render = <ProjectGraphics data={data} />;
      break;

    default:
      render = <ProjectWeb data={data} />;
      break;
  }

  return (
    <main className="w-full overflow-x-hidden">
      <section className="grid place-content-center h-[60vh]">
        <div className="flex flex-col justify-center text-center">
          <h1 className="uppercase text-6xl font-extrabold">Project</h1>
        </div>
      </section>
      {render}
    </main>
  );
}
