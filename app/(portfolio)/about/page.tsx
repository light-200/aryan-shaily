"use client";
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
      <section ref={landing} className="grid place-content-center h-[60vh]">
        <div className="flex flex-col justify-center text-center">
          <h1 className="uppercase md:text-6xl text-4xl font-extrabold">
            Aryan Shaily
          </h1>
        </div>
      </section>
      <section className="grid place-content-center select-none grid-cols-1 md:grid-cols-2 gap-[10px] uppercase text-xl">
        <Card className="flex justify-end items-end bg-cardBg0">
          <h3>Aryan Shaily, 22</h3>
        </Card>
        <Card className="flex flex-col gap-5 bg-cardBg0">
          <p>
            Hey I&apos;m a web developer and designer from India, I love music,
            art, books and flowers.
          </p>
          <p>
            I use figma for designing websites and react and nextjs to turn the
            design into a fully functional web app.
          </p>
          <p>I prefer minimal designs and impactful projects.</p>
        </Card>
      </section>
    </main>
  );
}
