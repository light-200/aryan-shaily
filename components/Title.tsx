import { Inter } from "next/font/google";
import React, { ReactNode } from "react";

const inter = Inter({
  style: "normal",
  subsets: ["latin"],
});

export default function Title({ children }: { children: ReactNode }) {
  return (
    <h1
      className={
        inter.className +
        " uppercase md:text-6xl text-4xl font-extrabold tracking-tighter"
      }
    >
      {children}
    </h1>
  );
}
