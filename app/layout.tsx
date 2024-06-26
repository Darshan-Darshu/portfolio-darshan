import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-[rgb(36,36,36)] text-white overflow-y-scroll overflow-x-hidden scrollbar scrollbar-thumb-[#F7AB0A]/80`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
