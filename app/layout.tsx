import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geeky Gamer Podcast",
  description: "Two gamers interviewing people about what they're geeky.",
	creator: "Bill Bunkum",
	authors: [
		{name: "Ken Howl"}, 
		{name: "Bill Bunkum"}, 
		{url: "https://youtube.com/playlist?list=PLKcCKSGU8sp1FDtNcrge8BOCxVdgdGrsW&si=hLRA7mXl_fflSS1K"},
	]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
