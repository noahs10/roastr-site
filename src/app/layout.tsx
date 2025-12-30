import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inconsolata } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "roastr - Explore Indo's Coffees and Roasters",
  description: "no B.S, just real human brews.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inconsolata.variable}`}
    >
      <body className="bg-background text-foreground">
        <TopBar />
        {children}
      </body>
    </html>
  );
}