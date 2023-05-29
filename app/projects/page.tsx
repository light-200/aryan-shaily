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
  },
  {
    name: "TYPEMASTER",
    desc: "A website to test your typing speed and improve upon it. Made using vanilla javascript and html, css. It also has firebase integration and users can signup to the website and have their name shown on the leaderboard.",
  },
  {
    name: "INDIE UBER",
    desc: "An uber clone made using react native and firebase, it is a multipage application with nested navigation and firebase authentication.",
  },
];

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const handleActiveProject = (i: number) => {
    setCurrentProject(i);
  };

  return (
    <PageWrapper>
      <ProjectDesc desc={PROJECTS_LIST[currentProject].desc} />
      <div className="row-start-4 flex flex-col">
        {PROJECTS_LIST.map((project, index) => {
          return (
            <h1
              className={`text-3xl uppercase ${
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
      <PageTitle>PROJECTS</PageTitle>
    </PageWrapper>
  );
}
