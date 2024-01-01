"use client";
import "./globals.css";
import { Inter, Libre_Barcode_128_Text } from "next/font/google";
import { ShuffleBtn } from "@/components/elements/shufflebtn";
import { Cursor } from "@/components/elements/cursor";
import { useRef } from "react";

const inter = Inter({
  style: "normal",
  subsets: ["latin"],
  weight: "400",
});

const barcode = Libre_Barcode_128_Text({
  style: "normal",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Aryan",
  description: "Web development and design portfolio of Aryan Shaily.",
  themeColor: "white",
  creator: "Aryan Shaily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " selection:text-black selection:bg-documentBg overflow-x-hidden scroll-smooth lg:p-0 p-2 text-sm"
        }
      >
        {children}
        <footer className="flex justify-between items-end p-2 lg:p-6 h-max lg:min-h-[200px]">
          <div className="leading-snug">
            <h3>
              <i>Aryan-Shaily, </i> 2023
            </h3>

            <p className="">all rights reserved</p>
          </div>
          <div
            className={
              barcode.className + " justify-self-end text-right text-[32px]"
            }
          >
            <ShuffleBtn
              ref={ref}
              className="font-medium"
              href={"https://www.linkedin.com/in/aryan-shaily"}
              newTab={true}
            >
              lets connect
            </ShuffleBtn>
          </div>
        </footer>
        <Cursor targetBtn={ref} />
      </body>
    </html>
  );
}
