import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '../public/assets/fontawesome/css/brands.min.css';
import '../public/assets/fontawesome/css/fontawesome.min.css';
import Footer from './components/_footer';
import Navigation from './components/_navigation';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geeky Gamer Podcast",
  description: "Two gamers interviewing people about their geekiness.",
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

      <body className={inter.className}>
				<main className="font-mono flex min-h-screen flex-col items-center justify-between p-10">

					{children}

					<Footer />
				</main>
			</body>
    </html>
  );
}
