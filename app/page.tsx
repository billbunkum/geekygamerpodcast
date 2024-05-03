import Image from 'next/image';
import Embed from './components/_embed';
import MainDescription from './components/_main-description';
import Navigation from './components/_navigation';

export default function Home() {
  return (
    <main className="font-mono flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="text-2xl text-center font-bold md:text-5xl">Geeky Gamer Podcast</h1>
			<Navigation />
			<MainDescription />
			<Embed />
    </main>
  );
}
