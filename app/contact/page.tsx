import Footer from '../components/_footer';
import Navigation from '../components/_navigation';

export default function Contact() {
  return (
		<>
		<main className="text-center font-mono flex min-h-screen flex-col items-center p-24">
			<h1 className="text-3xl text-center font-bold md:text-5xl">Contact</h1>
			<Navigation />
			<p>Flavor text</p>
		</main>
		</>
  );
}
