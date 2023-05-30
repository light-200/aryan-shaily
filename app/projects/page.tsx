"use client";
import { useState } from "react";
import PageTitle from "@/components/PageTitle";
import PageWrapper from "@/components/PageWrapper";
import ProjectDesc from "@/components/ProjectDesc";

const PROJECTS_LIST = [
  {
    name: "THEINDIANSCHOLAR",
    desc: `A BLOG WEBSITE FOR INDIAN STUDENTS.
          PUBLISHING INFORMATIONAL AND
          INTERESTING POSTS.`,
    image: "/0.jpg",
  },
  {
    name: "TYPEMASTER",
    desc: "A website to test your typing speed and improve upon it. Made using vanilla javascript and html, css. It also has firebase integration and users can signup to the website and have their name shown on the leaderboard.",
    image: "/1.jpg",
  },
  {
    name: "INDIE UBER",
    desc: "An uber clone made using react native and firebase, it is a multipage application with nested navigation and firebase authentication.",
    image: "/2.jpg",
  },
];

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const handleActiveProject = (i: number) => {
    setCurrentProject(i);
  };

  return (
    <PageWrapper>
      <ProjectDesc
        desc={PROJECTS_LIST[currentProject].desc}
        image={PROJECTS_LIST[currentProject].image}
      />
      <div className="lg:row-start-5 row-start-4 flex flex-col justify-end bg-white col-span-3 z-10">
        {PROJECTS_LIST.map((project, index) => {
          return (
            <h1
              className={`text-2xl whitespace-nowrap lg:text-3xl uppercase ${
                index === currentProject ? "font-bold" : ""
              }`}
              key={project.name}
              onClick={() => handleActiveProject(index)}
            >
              {project.name}
            </h1>
          );
        })}
      </div>
      <PageTitle classes={"row-start-5"}>PROJECTS</PageTitle>
    </PageWrapper>
  );
}
