"use client";
import AboutCard from "@/components/AboutCard";
import ProjectCard from "@/components/ProjectCard";
import ServicesForm from "@/components/ServicesForm";
import Space from "@/components/Space";
import Link from "next/link";
import { SyntheticEvent, useState } from "react";

export default function Index() {
  const [service, setService] = useState("");

  const handleServiceSelection = (e: SyntheticEvent) => {
    setService(e.currentTarget.innerHTML);
  };

  return (
    <main className="w-full">
      <section className="grid min-h-screen w-full grid-cols-2 auto-rows-min relative items-center">
        <div className="col-span-2 flex justify-between items-center lg:px-8 px-2  p-3">
          <div>
            <span className="text-2xl">Aryan</span>
          </div>
          <div className="justify-self-end">
            <ul className="w-fit flex gap-4">
              <Link href="#about" className="btn-primary">
                About
              </Link>
              <Link href="/blog" className="btn-primary">
                Blog
              </Link>
              <Link href="#project" className="btn-primary">
                Project
              </Link>
              <Link href="#services" className="btn-primary">
                Services
              </Link>
            </ul>
          </div>
        </div>
        <Space />
      </section>
      <section
        className="min-h-screen w-full p-2 lg:p-6 flex flex-col relative"
        id="about"
      >
        <div>
          <span>About</span>
        </div>
        <div className="flex justify-center items-center h-[100%] flex-grow">
          <div className="grid grid-cols-4 gap-6">
            <AboutCard>
              <span className="absolute right-3 bottom-2">
                Aryan Shaily, 21
              </span>
            </AboutCard>

            <AboutCard>
              <p>
                Hey I&apos;m a web developer and designer from India, I love
                music, art, books and flowers.
              </p>
              <p>
                I use figma for designing websites and react and nextjs to turn
                the design into a fully functional web app.
              </p>
              <p>I prefer minimal designs and impactful projects.</p>
            </AboutCard>

            <AboutCard>
              <div>
                <h1>Favorite Artists</h1>
                <p>The 1975, TNBHD, Current Joys</p>
              </div>
              <div>
                <h1>Favorite Stories</h1>
                <p>The Great Gatsby, Tamasha</p>
              </div>
              <div>
                <h1>Favorite Song</h1>
                <p>A Different Age</p>
              </div>
              <span className="absolute right-3 bottom-2">Random</span>
            </AboutCard>

            <AboutCard>
              <div>
                <h1>Design Tools</h1>
                <p>Figma, Photoshop, Blender</p>
              </div>
              <div>
                <h1>Frameworks</h1>
                <p>Nextjs, Reactjs, React-native</p>
              </div>
              <div>
                <h1>Languages</h1>
                <p>Javascript, Python, Java, C++</p>
              </div>
              <span className="absolute right-3 bottom-2">Skills</span>
            </AboutCard>
          </div>
        </div>
      </section>
      <section
        className="grid min-h-screen w-full p-2 lg:p-6 grid-cols-3 grid-rows-[max-content_1fr] gap-4 place-items-center"
        id="project"
      >
        <div className="col-span-3 w-full h-full">
          <span>Projects</span>
        </div>
        <div className="col-span-3 w-full flex gap-16 justify-center">
          <ProjectCard
            ProjectName={"TheindianScholar"}
            ProjectImage={"/someimage"}
            ProjectDesc={"A blogging website made for the indian students."}
            ProjectStack={[
              "Nextjs",
              "Tailwind",
              "Hygraph",
              "Graphql",
              "Next-auth",
            ]}
            ProjectLinks={{
              github: "https://github.com/light-200/type-master",
              live: "https://light-200.github.io/type-master/",
            }}
          />
          <ProjectCard
            ProjectName={"TheindianScholar"}
            ProjectImage={"/someimage"}
            ProjectDesc={"A blogging website made for the indian students."}
            ProjectStack={[
              "Nextjs",
              "Tailwind",
              "Hygraph",
              "Graphql",
              "Next-auth",
            ]}
          />
          <ProjectCard
            ProjectName={"TheindianScholar"}
            ProjectImage={"/someimage"}
            ProjectDesc={"A blogging website made for the indian students."}
            ProjectStack={[
              "Nextjs",
              "Tailwind",
              "Hygraph",
              "Graphql",
              "Next-auth",
            ]}
          />
        </div>
      </section>
      <section
        className="grid auto-rows-[min-content_1fr] gap-6 grid-cols-[1fr_2fr] place-items-center min-h-screen w-full p-2 lg:p-6"
        id="services"
      >
        <div className="col-span-2 w-full">
          <span>Services</span>
        </div>
        <div className="rows-start-2 w-60 justify-self-end relative">
          <div className="hidden lg:block absolute -top-10 -right-10 border-2 rounded-md border-zinc-300 border-r-0 border-b-0 rounded-bl-none w-32 h-10 -z-1"></div>
          <ul className="flex flex-col  p-4 gap-2 rounded-md bg-zinc-300 text-black z-0">
            <li
              className="bg-zinc-200 border-[1px] border-zinc-400 px-2 p-1 rounded-md"
              onClick={handleServiceSelection}
            >
              Websites
            </li>
            <li
              className="bg-zinc-200 border-[1px] border-zinc-400 px-2 p-1 rounded-md"
              onClick={handleServiceSelection}
            >
              Web Design / UI-UX
            </li>
            <li
              className="bg-zinc-200 border-[1px] border-zinc-400 px-2 p-1 rounded-md"
              onClick={handleServiceSelection}
            >
              Graphic Design
            </li>
            <li
              className="bg-zinc-200 border-[1px] border-zinc-400 px-2 p-1 rounded-md"
              onClick={handleServiceSelection}
            >
              App Development
            </li>
          </ul>
        </div>

        <div className="lg:rows-start-2 lg:col-start-2 lg:col-span-1 row-strat-3 col-span-2 w-full h-[90%] justify-self-center">
          <ServicesForm selectedService={service} />
        </div>
      </section>
    </main>
  );
}
