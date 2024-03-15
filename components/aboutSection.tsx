import Image from "next/image";
import AboutCard from "./AboutCard";
import {
  animate,
  stagger,
  useAnimate,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";

export function AboutSection() {
  const [scope, animate] = useAnimate();
  const [animated, setAnimated] = useState(false);
  const isInView = useInView(scope, { amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: scope,
    offset: ["start end", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isInView && !animated && latest > 0.2) {
      animate([
        [
          ".about",
          { opacity: [0, 1], y: [30, 0] },
          { duration: 0.6, delay: stagger(0.3) },
        ],
      ]);
      setAnimated(true);
    }
  });

  return (
    <section
      className="min-h-screen w-full p-2 lg:p-6 flex flex-col place-content-center justify-center items-center relative overflow-hidden"
      id="about"
      ref={scope}
    >
      <div className="w-full">
        <span>About</span>
      </div>
      <div className="absolute max-w-screen h-fit overflow-hidden inline-flex justify-center">
        <Image
          priority
          src={"/waves.svg"}
          alt="asset-01"
          width={1255}
          height={346}
          className="relative select-none w-screen min-h-[346px] min-w-[1255px] top-40 pointer-events-none"
        />
      </div>
      <div className="flex justify-center items-center h-[100%] flex-grow">
        <div className="grid lg:grid-cols-4 gap-6 my-40 lg:my-0">
          <AboutCard>
            <span className="absolute right-3 bottom-2">Aryan Shaily, 21</span>
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
  );
}
