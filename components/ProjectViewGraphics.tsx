import { urlForImage } from "@/sanity/lib/image";
import Card from "./Card";
import PortableTextComp from "./PortableTextComp";
import Image from "next/image";

export default function ProjectGraphics({ data }: any) {
  return (
    <section
      className="overflow-x-hidden place-content-center select-none flex flex-col gap-[10px] uppercase text-xl"
      id="project"
    >
      <Card className="md:col-span-2 col-span-1 max-h-[600px] w-full bg-gradient-radial from-[#7e7e7e] to-[#353535] flex items-end p-0">
        <Image
          src={urlForImage(data?.cover)}
          alt="project image"
          fill
          sizes="100vw"
          priority
          objectFit="cover"
        />
      </Card>
      <div className="flex flex-col md:flex-row gap-[10px]">
        <Card className="bg-cardBg0">
          <h2>{data.title}</h2>
        </Card>
        <Card>
          <Image
            src={urlForImage(data?.mockup)}
            alt="project image"
            fill
            objectFit="cover"
            objectPosition="bottom"
          />
        </Card>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-[10px]">
        <Card className="bg-cardBg0 flex flex-col gap-4 leading-snug overflow-y-auto">
          <PortableTextComp content={data.projectDescription} />
        </Card>
        <Card className="flex justify-end bg-cardBg0">
          <h2>Description</h2>
        </Card>
      </div>
    </section>
  );
}
