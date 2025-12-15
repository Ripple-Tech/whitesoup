import type { Metadata } from "next";
import { Inter, Cormorant_Upright } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const cormorant = Cormorant_Upright({
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  title: "White Soup Restaurant",
  description: "Fine dining restaurant experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${cormorant.variable}`}>
      <body>
        <Navbar />
        <main className="pt-16 lg:pt-20">{children}</main>
      </body>
    </html>
  );
}