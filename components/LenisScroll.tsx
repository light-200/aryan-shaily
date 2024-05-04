"use client";
import Lenis from "lenis";
import { ReactNode, useEffect } from "react";

export default function LenisScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {
      console.log(e);
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return <>{children}</>;
}
