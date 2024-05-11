import GuestList from '../components/_guest-list';
import Navigation from '../components/_navigation';

export default function Guests() {
	return (
		<>
		<main className="">
			<h1 className="mt-10 text-3xl text-center font-bold md:text-5xl">Previous Guests</h1>
			<div className="mt-10">
				<Navigation />
			</div>
			<div className="mt-10">
				<GuestList />
			</div>
		</main>
		</>
	);
}
