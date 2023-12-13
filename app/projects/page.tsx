"use client";
import { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import PageWrapper from "@/components/PageWrapper";
import ProjectDesc from "@/components/ProjectDesc";
import { animate, delay, motion, stagger } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const PROJECTS_LIST = [
  {
    name: "THEINDIANSCHOLAR",
    desc: `A BLOG WEBSITE FOR INDIAN STUDENTS.
          PUBLISHING INFORMATIONAL AND
          INTERESTING POSTS.`,
    image: "/0.jpg",
    link: "https://www.theindianscholar.com/",
  },
  {
    name: "TYPEMASTER",
    desc: "A website to test your typing speed and improve upon it. Made using vanilla javascript and html, css. It also has firebase integration and users can signup to the website and have their name shown on the leaderboard.",
    image: "/1.jpg",
    github: "https://github.com/light-200/type-master",
  },
  {
    name: "INDIE UBER",
    desc: "An uber clone made using react native and firebase, it is a multipage application with nested navigation and firebase authentication.",
    image: "/2.jpg",
    github: "https://github.com/light-200/indie-uber",
  },
];

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const handleActiveProject = (i: number) => {
    setCurrentProject(i);
  };

  useEffect(() => {
    animate(
      ".project-link",
      { opacity: 1, y: 0 },
      {
        delay: stagger(0.5, { from: "first", startDelay: 0.5, ease: "easeIn" }),
      }
    );
  }, []);

  return (
    <PageWrapper>
      <ProjectDesc
        desc={PROJECTS_LIST[currentProject].desc}
        image={PROJECTS_LIST[currentProject].image}
      />
      <div className="lg:row-start-5 row-start-4 flex flex-col justify-end col-span-3 z-10">
        {PROJECTS_LIST.map((project, index) => {
          return (
            <motion.div
              className="project-link cursor-pointer flex items-center gap-4 w-fit opacity-0 select-none"
              initial={{ y: 3 }}
              key={index}
            >
              <h1
                className={`text-2xl whitespace-nowrap lg:text-3xl uppercase cursor-pointer ${
                  index === currentProject ? "font-bold" : ""
                }`}
                key={project.name}
                onClick={() => handleActiveProject(index)}
              >
                {project.name}
              </h1>
              {project.link && (
                <Link href={project.link} target="_blank">
                  <motion.span
                    whileHover={{ x: "3px", y: "-2px" }}
                    whileTap={{ scale: 0.8 }}
                    className="grid place-content-center text-2xl lg:text-3xl"
                  >
                    <HiArrowUpRight />
                  </motion.span>
                </Link>
              )}
              {project.github && (
                <Link href={project.github} target="_blank">
                  <motion.span
                    whileHover={{ scale: 1.03 }}
                    className="grid place-content-center text-2xl lg:text-3xl"
                  >
                    <AiFillGithub />
                  </motion.span>
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>
      <PageTitle classes={"row-start-5"}>PROJECTS</PageTitle>
    </PageWrapper>
  );
}
