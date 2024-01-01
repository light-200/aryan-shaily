import { Footer } from "@/components/footer";
import "./globals.css";
import { Inter, Libre_Barcode_128_Text } from "next/font/google";

const inter = Inter({
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
          " selection:text-black selection:bg-documentBg overflow-x-hidden scroll-smooth lg:p-0 p-2 text-sm"
        }
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
