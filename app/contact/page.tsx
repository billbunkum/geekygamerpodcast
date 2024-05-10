import ContactForm from '../components/_contact-form';
import Footer from '../components/_footer';
import Navigation from '../components/_navigation';

export default function Contact() {
  return (
		<>
		<main className="">
			<h1 className="text-3xl text-center font-bold md:text-5xl">Contact</h1>
			<div className="mt-10">
				<Navigation />
			</div>
			<div className="mt-10">
				<ContactForm />
			</div>
		</main>
		</>
  );
}
