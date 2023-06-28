import "./globals.css";
import { Share_Tech } from "next/font/google";
const inter = Share_Tech({
  style: "normal",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "ARYAN",
  description: "WEB DEVELOPMENT AND DESIGN PORTFOLIO OF ARYAN SHAILY",
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
          " selection:text-white selection:bg-black overflow-x-hidden scroll-smooth bg-black text-white"
        }
      >
        {children}
        <footer className="grid grid-cols-3 p-2 lg:p-6">
          <div>
            <h3>Aryan Shaily</h3>
            <p>All rights reserved</p>
          </div>
          <div>
            <h3 className="font-semibold">Navigation Links</h3>
            <ul className="flex flex-col">
              <li>About</li>
              <li>Blog</li>
              <li>Projects</li>
              <li>Services</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Contact Links</h3>
            <ul className="flex flex-col">
              <li>Twitter</li>
              <li>Linkedin</li>
              <li>Mail</li>
              <li>Send A Message</li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
