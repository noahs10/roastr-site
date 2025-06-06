import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "roastr - Explore Indo's Coffees and Roasters",
  description: "no B.S, just real human brews.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.className}>
      <body>
        <TopBar />
        {children}
      </body>
    </html>
  )
}