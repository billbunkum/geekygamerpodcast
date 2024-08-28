import Link from 'next/link';
import Navigation from '../components/_navigation';

export default function Support() {
	return (
		<>
		<main className="">
			<h1 className="mt-10 text-3xl text-center font-bold md:text-5xl">Support GGP!</h1>
			<div className="mt-10 mb-10">
				<Navigation />
			</div>
			<div className="mt-10 text-center font-extrabold text-4xl">
				<ul>
					<li>
						<Link 
							href="https://www.patreon.com/geekygamerpodcast">
								<i className="fa-brands fa-patreon"></i>
								&nbsp;Patreon
						</Link>
					</li>
					<br />
					<li>
						<Link 
							href="https://ko-fi.com/dreadlore/">
								<i className="fa-solid fa-mug-hot"></i>
								&nbsp;Ko-Fi
						</Link>
					</li>
				</ul>
			</div>
		</main>
		</>
	);
}
