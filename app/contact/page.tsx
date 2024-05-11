import ContactForm from '../components/_contact-form';
import Footer from '../components/_footer';
import Navigation from '../components/_navigation';

export default function Contact() {
  return (
		<>
		<main className="">
			<h1 className="mt-10 text-3xl text-center font-bold md:text-5xl">Contact Us</h1>
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
