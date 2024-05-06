import { Footer } from "@/components/footer";
import "./globals.css";
import { Inter, Libre_Barcode_128_Text } from "next/font/google";
import Link from "next/link";
import LenisScroll from "@/components/LenisScroll";

const inter = Inter({
  style: "normal",
  subsets: ["latin"],
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
      <head>
        <link rel="icon" href="icon-dark.svg" sizes="any" />
      </head>
      <body
        className={
          inter.className +
          " selection:text-black selection:bg-documentBg overflow-x-hidden snap-center md:p-[20px] p-2 h-screen max-w-screen-2xl mx-auto"
        }
      >
        <LenisScroll>
          <div className="col-span-2 flex justify-between items-baseline w-full">
            <Link
              href={"/"}
              className="flex gap-1 select-none uppercase py-1 px-2 rounded-md bg-cardBg0 shadow hover:shadow-sm transition-shadow duration-300"
            >
              <span className="text-lg">Aryan</span>
              <img src="/icon-dark.svg" alt="icon" />
            </Link>
            <div className="justify-self-end">
              <ul className="w-fit flex lg:gap-4 uppercase text-lg">
                <a href="/about" className="btn-primary">
                  About
                </a>
                <a href="/work" className="btn-primary">
                  Work
                </a>
                <a href="/contact" className="btn-primary">
                  Contact
                </a>
              </ul>
            </div>
          </div>
          {children}
          <Footer />
        </LenisScroll>
      </body>
    </html>
  );
}
