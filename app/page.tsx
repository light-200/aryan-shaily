import AboutCard from "@/components/AboutCard";
import ProjectCard from "@/components/ProjectCard";
import ServicesForm from "@/components/ServicesForm";
import Link from "next/link";

export default function Index() {
  return (
    <main className="w-full">
      <section className="grid min-h-screen w-full grid-cols-3 p-2 lg:p-6 relative">
        <div>
          <span>Aryan</span>
        </div>
        <div>
          <ul className="grid grid-rows-2 grid-cols-2 w-fit">
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
        <div>
          <ul className="grid grid-rows-2 grid-cols-2 w-fit">
            <li className="btn-primary">twitter</li>
            <li className="btn-primary">linkedin</li>
            <li className="btn-primary">mail</li>
          </ul>
        </div>

        <div className="absolute bottom-10 justify-self-center select-none">
          <span>scroll</span>
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
          <div className="grid grid-cols-4 gap-6">
            <AboutCard>
              <span className="absolute right-3 bottom-2">
                Aryan Shaily, 21
              </span>
            </AboutCard>

            <AboutCard>
              Hey I&apos;m a web developer and designer from India, I love
              music, art, books and flowers.
              <br />
              <br />I use figma for designing websites and react and nextjs to
              turn the design into a fully functional web app.
              <br />
              <br />I prefer minimal designs and impactful projects.
            </AboutCard>

            <AboutCard>
              Favorite Artists
              <br />
              <br />
              The 1975, TNBHD, Current Joys
              <br />
              <br />
              Favorite Stories
              <br />
              <br />
              The Great Gatsby, Tamasha
              <br />
              <br />
              Favorite Song
              <br />
              <br />A Different Age
              <span className="absolute right-3 bottom-2">Random</span>
            </AboutCard>

            <AboutCard>
              Design Tools
              <br />
              <br />
              Figma, Photoshop, Blender
              <br />
              <br />
              Frameworks
              <br />
              <br />
              Nextjs, Reactjs, React-native
              <br />
              <br />
              Languages
              <br />
              <br />
              Javascript, Python, Java, C++
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
      </section>
      <section
        className="grid auto-rows-[min-content_1fr] gap-6 grid-cols-[min-content_1fr] min-h-screen w-full p-2 lg:p-6"
        id="services"
      >
        <div className="col-span-2">
          <span>Services</span>
        </div>
        <div className="rows-start-2 w-60">
          <ul className="gap-4 flex flex-col">
            <li>Web Development</li>
            <li>Web Design / UI-UX</li>
            <li>Graphic Design</li>
            <li>App Development</li>
          </ul>
        </div>

        <div className="grid rows-start-2 col-start-2 w-full h-[90%] justify-items-end">
          <ServicesForm />
        </div>
      </section>
    </main>
  );
}
