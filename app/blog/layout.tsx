import Link from "next/link";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="col-span-2 flex justify-between items-baseline lg:px-8 p-2">
        <div>
          <span className="lg:text-2xl text-xl">Aryan</span>
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
      {children}
    </>
  );
}
