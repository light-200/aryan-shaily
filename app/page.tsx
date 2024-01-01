"use client";
import AboutCard from "@/components/AboutCard";
import ProjectCard from "@/components/ProjectCard";
import ServicesForm from "@/components/ServicesForm";
import Space from "@/components/Space";
import Link from "next/link";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { BsGithub, BsLinkedin, BsGit } from "react-icons/bs";
import { FaReact, FaFigma } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import Image from "next/image";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { Bubble } from "@/components/elements/bubble";
import { ShuffleBtn } from "@/components/elements/shufflebtn";

const floatVariant = {
  initial: {
    y: -4,
  },
  animate: {
    y: [-4, 4, -4],
    transition: {
      repeat: Infinity,
      duration: 4,
      ease: easeInOut,
    },
  },
};

export default function Index() {
  const [service, setService] = useState("");
  const landing = useRef(null);
  const circleRef = useRef<HTMLDivElement>(null);

  const handleServiceSelection = (e: SyntheticEvent) => {
    setService(e.currentTarget.innerHTML);
  };

  return (
    <main className="w-full overflow-x-hidden">
      <section
        ref={landing}
        className="grid max-h-screen h-screen min-w-screen w-full grid-cols-2 grid-rows-[min-content_1fr_1fr] place-items-center relative items-center overflow-hidden"
      >
        <div className="col-span-2 flex justify-between items-baseline lg:px-8 p-4 w-full">
          <div>
            <span className="text-xl">Aryan</span>
          </div>
          <div className="justify-self-end">
            <ul className="w-fit flex lg:gap-4">
              <a href="#about" className="btn-primary">
                About
              </a>
              <a href="/blog" className="btn-primary">
                Blog
              </a>
              <a href="#project" className="btn-primary">
                Project
              </a>
              <a href="#services" className="btn-primary">
                Services
              </a>
            </ul>
          </div>
        </div>
        <Bubble className="absolute bubble top-[50px] -right-[150px] lg:block md:hidden select-none opacity-40">
          <Image src={"/bubbles.svg"} alt="asset-01" width={354} height={354} />
        </Bubble>
        <div className="absolute w-fit">
          <motion.span
            variants={floatVariant}
            initial={"initial"}
            animate={"animate"}
            className="w-fit block"
          >
            <Image
              src={"/clockwize.png"}
              alt="asset-01"
              width={473.62}
              height={476.01}
              className="relative -top-14 left-10 select-none"
            />
          </motion.span>
          <Bubble className="absolute bubble -bottom-[10%] -right-[55%] select-none opacity-90">
            <Image
              src={"/bubbles.svg"}
              alt="asset-01"
              width={204}
              height={204}
            />
          </Bubble>
        </div>
        <Bubble className="absolute bottom-10 bubble -left-28 select-none">
          <Image src={"/bubbles.svg"} alt="asset-01" width={229} height={229} />
        </Bubble>
        <Bubble className="absolute top-[20%] bubble left-[15%] select-none opacity-60">
          <Image src={"/bubbles.svg"} alt="asset-01" width={61} height={61} />
        </Bubble>

        <Space />
      </section>
      <section
        className="min-h-screen w-full p-2 lg:p-6 flex flex-col place-content-center justify-center items-center relative overflow-hidden"
        id="about"
      >
        <div className="w-full">
          <span>About</span>
        </div>
        <div className="absolute max-w-screen h-fit overflow-hidden inline-flex justify-center">
          <Image
            src={"/waves.svg"}
            alt="asset-01"
            width={1255}
            height={346}
            className="relative select-none w-screen min-h-[346px] min-w-[1255px] top-40"
          />
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
        className="grid min-h-screen w-full p-2 lg:p-6 lg:grid-cols-3 grid-rows-[max-content_1fr] gap-4 place-items-center overflow-hidden"
        id="project"
      >
        <div className="lg:col-span-3 w-full h-full">
          <span>Projects</span>
        </div>
        <div className="absolute w-screen overflow-hidden inline-flex justify-center">
          <Image
            src={"/line.svg"}
            alt="asset-01"
            width={1519}
            height={12}
            className="relative select-none w-full min-w-[1910px]"
          />
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
        className="grid auto-rows-[min-content_1fr] gap-6  lg:grid-cols-[1fr_2fr] grid-cols-1 place-items-center min-h-screen w-full p-2 lg:p-6 text-sm overflow-hidden"
        id="services"
      >
        <div className="lg:col-span-2 w-full">
          <span>Services</span>
        </div>
        <div className="absolute w-screen overflow-hidden inline-flex justify-center">
          <Image
            src={"/stripe.svg"}
            alt="asset-01"
            width={1519}
            height={120}
            className="relative select-none w-full min-w-[1910px]"
          />
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

        <div className="lg:row-start-2 lg:col-start-2 lg:col-span-2 row-start-3 w-full lg:h-[90%] justify-self-center mb-40 lg:mb-0">
          <ServicesForm selectedService={service} />
        </div>
      </section>
    </main>
  );
}
