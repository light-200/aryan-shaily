"use client";
import AboutCard from "@/components/AboutCard";
import ProjectCard from "@/components/ProjectCard";
import ServicesForm from "@/components/ServicesForm";
import Space from "@/components/Space";
import Link from "next/link";
import { SyntheticEvent, useState } from "react";
import { BsGithub, BsLinkedin, BsGit } from "react-icons/bs";
import { FaReact, FaFigma } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

export default function Index() {
  const [service, setService] = useState("");

  const handleServiceSelection = (e: SyntheticEvent) => {
    setService(e.currentTarget.innerHTML);
  };

  const triggerAnimation = () => {};

  return (
    <main className="w-full">
      <section className="grid max-h-screen h-screen w-full grid-cols-2 grid-rows-[min-content_1fr_1fr] relative items-center">
        <div className="col-span-2 flex justify-between items-baseline lg:px-8 p-2">
          <div>
            <span className="lg:text-2xl text-xl">Aryan</span>
          </div>
          <div className="justify-self-end">
            <ul className="w-fit flex lg:gap-4">
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
        <div className="row-start-3 col-span-2 w-full grid place-content-center lg:place-content-center p-2">
          <div className="flex lg:gap-4 gap-2 lg:text-4xl text-2xl items-center md:w-[600px] mb-16 justify-between whitespace-nowrap">
            <span className="lg:pr-3 border-r-2 border-zinc-300 text-xl select-none pr-2">
              Tech Stack
            </span>
            <FaReact />
            <TbBrandNextjs />
            <SiTailwindcss />
            <BsGithub />
            <BsGit />
            <FaFigma />
          </div>
        </div>
      </section>
      <section
        className="min-h-[80vh] w-full p-2 lg:p-6 flex flex-col relative"
        id="about"
      >
        <div>
          <span>About</span>
        </div>
        <div className="flex justify-center items-center h-[100%] flex-grow">
          <div className="grid lg:grid-cols-4 gap-6 my-40 lg:my-0">
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
        className="grid min-h-[80vh] w-full p-2 lg:p-6 lg:grid-cols-3 grid-rows-[max-content_1fr] gap-4 place-items-center"
        id="project"
      >
        <div className="lg:col-span-3 w-full h-full">
          <span>Projects</span>
        </div>
        <div className="lg:col-span-3 w-full flex flex-col lg:flex-row lg:gap-16 gap-4 my-40 lg:my-0 justify-center place-items-center">
          <ProjectCard
            ProjectName={"TheindianScholar"}
            ProjectImage={"/0.jpg"}
            ProjectDesc={"A blogging website made for the indian students."}
            ProjectStack={[
              "Nextjs",
              "Tailwind",
              "Hygraph",
              "Graphql",
              "Next-auth",
            ]}
            ProjectLinks={{
              live: "https://www.theindianscholar.com/",
            }}
          />
          <ProjectCard
            ProjectName={"type-master"}
            ProjectImage={"/1.jpg"}
            ProjectDesc={
              "A website to test your typing speed and improve upon it. Made using vanilla javascript and html, css. It also has firebase integration and users can signup to the website and have their name shown on the leaderboard."
            }
            ProjectStack={["javascript", "css", "firebase", "socket.io"]}
            ProjectLinks={{
              github: "https://github.com/light-200/type-master",
              live: "https://light-200.github.io/type-master/",
            }}
          />
          <ProjectCard
            ProjectName={"Indie-uber"}
            ProjectImage={"/2.jpg"}
            ProjectDesc={
              "An uber clone made using react native and firebase, it is a multipage application with nested navigation and firebase authentication."
            }
            ProjectStack={["firebase", "react-native", "tailwind"]}
            ProjectLinks={{
              github: "https://github.com/light-200/indie-uber",
            }}
          />
        </div>
      </section>
      <section
        className="grid auto-rows-[min-content_1fr] gap-6  lg:grid-cols-[1fr_2fr] grid-cols-1 place-items-center min-h-[80vh] w-full p-2 lg:p-6"
        id="services"
      >
        <div className="lg:col-span-2 w-full">
          <span>Services</span>
        </div>
        <div className="row-start-2 lg:w-60 w-full justify-self-end relative mt-40 lg:mt-0">
          <div className="hidden lg:flex justify-center items-center absolute -top-10 -right-10 border-2 rounded-md border-zinc-400 border-r-0 border-b-0 rounded-bl-none w-32 h-10 -z-1 select-none"></div>
          <ul className="flex flex-col  p-4 gap-2 rounded-md bg-zinc-200 text-black z-0 border-zinc-400 border-2">
            <li
              className="bg-zinc-100 border-[1px] border-zinc-400 px-2 p-1 rounded-md cursor-pointer active:scale-95 transition-all duration-150 ease-in-out select-none"
              onClick={handleServiceSelection}
            >
              Websites
            </li>
            <li
              className="bg-zinc-100 border-[1px] border-zinc-400 px-2 p-1 rounded-md cursor-pointer active:scale-95 transition-all duration-150 ease-in-out select-none"
              onClick={handleServiceSelection}
            >
              Web Design / UI-UX
            </li>
            <li
              className="bg-zinc-100 border-[1px] border-zinc-400 px-2 p-1 rounded-md cursor-pointer active:scale-95 transition-all duration-150 ease-in-out select-none"
              onClick={handleServiceSelection}
            >
              Graphic Design
            </li>
            <li
              className="bg-zinc-100 border-[1px] border-zinc-400 px-2 p-1 rounded-md cursor-pointer active:scale-95 transition-all duration-150 ease-in-out select-none"
              onClick={handleServiceSelection}
            >
              App Development
            </li>
          </ul>
        </div>

        <div className="lg:row-start-2 lg:col-start-2 lg:col-span-1 row-start-3 w-full lg:h-[105%] justify-self-center mb-40 lg:mb-0">
          <ServicesForm selectedService={service} />
        </div>
      </section>
    </main>
  );
}
