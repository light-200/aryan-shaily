import Link from "next/link";
import { FunctionComponent } from "react";
import { BsGithub, BsLinkedin, BsSend } from "react-icons/bs";

interface SpaceProps {}

const Space: FunctionComponent<SpaceProps> = () => {
  return (
    <div className="w-full h-[82vh] grid gap-2 place-content-center  col-span-2 p-2 lg:p-0">
      <h1 className="lg:text-4xl text-2xl font-bold mb-2">
        Nextjs Frontend Developer
      </h1>
      <p className="lg:text-xl text-lg mb-6 w-full md:w-[600px]">
        Hey I'm Aryan Shaily. A creative frontend developer based in India.
      </p>
      <div className="flex flex-col h-full justify-between gap-24">
        <div className="flex gap-4 lg:text-4xl text-2xl items-center">
          <Link href={"https://github.com/light-200"} target="_blank">
            <BsGithub />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/aryan-shaily/"}
            target="_blank"
          >
            <BsLinkedin />
          </Link>
          <Link
            href={"#services"}
            className="lg:text-xl text-lg flex items-center lg:p-1 px-2 gap-1 text-black bg-white rounded-sm opacity-80 cursor-pointer active:scale-95"
          >
            <span>Send a message</span>
            <BsSend />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Space;
