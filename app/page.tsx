import Image from 'next/image';
import Embed from './components/_embed';
import Footer from './components/_footer';
import MainDescription from './components/_main-description';
import Navigation from './components/_navigation';

export default function Home() {
  return (
		<>
			<h1 className="text-2xl text-center font-bold md:text-5xl">Geeky Gamer Podcast</h1>
			<div className="mt-10">
				<Navigation />
			</div>
			<div className="mt-10">
				<MainDescription />
			</div>
			<div className="mt-10">
				<Embed />
			</div>
		</>
  );
}
