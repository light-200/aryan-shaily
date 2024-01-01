import { Inter, Libre_Barcode_128_Text } from "next/font/google";
import { ShuffleBtn } from "@/components/elements/shufflebtn";
import { Cursor } from "@/components/elements/cursor";

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
  return <>{children}</>;
}
