import Logo from "@/components/Logo";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ARYAN",
  description: "WEB DEVELOPMENT AND DESIGN PORTFOLIO OF ARYAN SHAILY",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className + " selection:text-white selection:bg-black"}
      >
        <main className="grid grid-rows-6 grid-cols-5 min-h-screen p-16 h-screen">
          <Logo />
          {children}
        </main>
      </body>
    </html>
  );
}
