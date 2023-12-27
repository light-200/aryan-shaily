import { Libre_Barcode_128_Text } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { BsGithub, BsLinkedin, BsSend } from "react-icons/bs";

interface SpaceProps {}

const barcode = Libre_Barcode_128_Text({
  style: "normal",
  subsets: ["latin"],
  weight: "400",
});

const Space: FunctionComponent<SpaceProps> = () => {
  return (
    <div className="w-full h-[82vh] grid gap-4 place-content-center relative top-10 lg:-left-20  col-span-2 p-2 lg:p-0">
      <p className="italic">
        Hey I'm Aryan, I make amazing websites
        <br />
        using nextjs and tailwind.
      </p>
      <span className={barcode.className + " text-[32px]"}>Hire me</span>
    </div>
  );
};

export default Space;
