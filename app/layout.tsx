import Link from "next/link";
import "./globals.css";
import { Share_Tech } from "next/font/google";
const inter = Share_Tech({
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
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " selection:text-white selection:bg-black overflow-x-hidden scroll-smooth bg-[#121212] text-white text-opacity-80 lg:p-0 p-2"
        }
      >
        {children}
        <footer className="grid lg:grid-cols-3 grid-cols-2 p-2 lg:p-6 lg:pb-10 pb-4  border-[1px] border-transparent border-t-zinc-600 h-[100%] lg:justify-items-center">
          <div className="lg:col-span-1 col-span-2">
            <h3>Aryan Shaily</h3>
            <p className="lg:w-5/6">
              I&apos;m a 21yo Web developer/designer. Looking forward to solve
              your problems with design and tech.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Navigation Links</h3>
            <ul className="flex flex-col">
              <Link href={"#aboutt"}>About</Link>
              <Link href={"/blog"}>Blog</Link>
              <Link href={"#project"}>Projects</Link>
              <Link href={"#services"}>Services</Link>
            </ul>
          </div>
          <div className="justify-self-end text-right">
            <h3 className="font-semibold">Contact Links</h3>
            <ul className="flex flex-col">
              <Link href={"https://www.linkedin.com/in/aryan-shaily/"}>
                Linkedin
              </Link>
              <Link href={"mailto:aryanshaily123@gmail.com"}>Mail</Link>
              <Link href={"#services"}>Send A Message</Link>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
