import type { Metadata } from "next";
import Image from 'next/image';
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
				<main className="font-mono flex min-h-screen p-10 flex-col">
					<div className="flex-row">
						<a href="/">
							<Image 
								src="/assets/ggp-logo.png"
								className="w-32"
								width={50}
								height={50}
								alt="GGP-Brand"
								title="brand"
					 		/>
						</a>
						<h1 className="text-2xl font-bold md:text-5xl">Geeky Gamer Podcast</h1>

					</div>					

					<div className="items-center justify-between">
						{children}

						<Footer />
					</div>

				</main>
			</body>
    </html>
  );
}
