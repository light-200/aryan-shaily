"use client";
import PageTitle from "@/components/PageTitle";
import { useState } from "react";
import Image from "next/image";

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
    <>
      <div className="row-start-2 col-span-2 flex flex-col uppercase text-2xl gap-6">
        <h3 className="font-bold">About</h3>
        <p className="">{PROJECTS_LIST[currentProject].desc}</p>
      </div>
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
      <div className="row-start-2 col-start-5 col-span-2">
        <Image
          src={""}
          alt="project ss"
          width={500}
          height={300}
          className="bg-black object-cover"
        />
      </div>
      <PageTitle>PROJECTS</PageTitle>
    </>
  );
}
