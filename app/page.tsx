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
import Image from "next/image";

export default function Index() {
  const [service, setService] = useState("");

  const handleServiceSelection = (e: SyntheticEvent) => {
    setService(e.currentTarget.innerHTML);
  };

  const triggerAnimation = () => {};

  return (
    <main className="w-full overflow-x-clip">
      <section className="grid max-h-screen h-screen w-full grid-cols-2 grid-rows-[min-content_1fr_1fr] relative items-center">
        <div className="col-span-2 flex justify-between items-baseline lg:px-8 p-4">
          <div>
            <span className="">Aryan</span>
          </div>
          <div className="justify-self-end">
            <ul className="w-fit flex lg:gap-4">
              <Link href="#about" className="btn-primary">
                about
              </Link>
              <Link href="/blog" className="btn-primary">
                blog
              </Link>
              <Link href="#project" className="btn-primary">
                project
              </Link>
              <Link href="#services" className="btn-primary">
                services
              </Link>
            </ul>
          </div>
        </div>
        <Space />
        <div className="row-start-3 col-span-2 w-full grid place-content-center lg:place-content-center p-2">
          scroll
        </div>
      </section>
      <section
        className="min-h-screen w-full p-2 lg:p-6 flex flex-col relative"
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
        className="grid min-h-screen w-full p-2 lg:p-6 lg:grid-cols-3 grid-rows-[max-content_1fr] gap-4 place-items-center"
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
            ProjectName={"Type-master"}
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
        className="grid auto-rows-[min-content_1fr] gap-6  lg:grid-cols-[1fr_2fr] grid-cols-1 place-items-center min-h-screen w-full p-2 lg:p-6 text-sm"
        id="services"
      >
        <div className="lg:col-span-2 w-full">
          <span>Services</span>
        </div>
        <div className="row-start-2 lg:w-60 w-full justify-self-end relative mt-40 lg:mt-0 lg:left-4">
          <div className="hidden lg:flex justify-center items-center absolute -top-10 -right-10 border-2 border-cardBg0 rounded-md border-r-0 border-b-0 rounded-bl-none w-32 h-10 -z-10 select-none"></div>
          <ul className="flex flex-col p-4 gap-2 rounded-md bg-cardBg0 text-black z-0">
            <li
              className="bg-inputBg px-2 p-1 rounded-md cursor-pointer active:scale-95 transition-all duration-150 ease-out select-none h-[40px] inline-flex items-center"
              onClick={handleServiceSelection}
            >
              Websites
            </li>
            <li
              className="bg-inputBg px-2 p-1 rounded-md cursor-pointer active:scale-95 transition-all duration-150 ease-out select-none h-[40px] inline-flex items-center"
              onClick={handleServiceSelection}
            >
              Web Design / UI-UX
            </li>
            <li
              className="bg-inputBg px-2 p-1 rounded-md cursor-pointer active:scale-95 transition-all duration-150 ease-out select-none h-[40px] inline-flex items-center"
              onClick={handleServiceSelection}
            >
              Graphic Design
            </li>
            <li
              className="bg-inputBg px-2 p-1 rounded-md cursor-pointer active:scale-95 transition-all duration-150 ease-out select-none h-[40px] inline-flex items-center"
              onClick={handleServiceSelection}
            >
              App Development
            </li>
          </ul>
        </div>

        <div className="lg:row-start-2 lg:col-start-2 lg:col-span-1 row-start-3 w-full lg:h-[90%] justify-self-center mb-40 lg:mb-0">
          <ServicesForm selectedService={service} />
        </div>
      </section>
    </main>
  );
}
