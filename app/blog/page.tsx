import Link from "next/link";
import * as React from "react";

export default function Index() {
  return (
    <section className="grid max-h-screen h-[72vh] min-w-screen w-full grid-cols-2 grid-rows-[min-content_1fr_1fr] place-items-center relative items-center overflow-hidden">
      <div className="col-span-2 row-start-1 flex justify-between items-baseline lg:px-8 p-4 w-full">
        <div>
          <span className="text-xl">Aryan</span>
        </div>
        <div className="justify-self-end">
          <ul className="w-fit flex lg:gap-4">
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
      </div>
      <div className="col-span-2 grid row-start-2 h-full w-full row-span-full place-content-center">
        coming soon..
      </div>
    </section>
  );
}
