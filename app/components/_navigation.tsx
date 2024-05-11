import Link from 'next/link';

export default function Navigation() {
	return (
		<>
			{/* SITE LINKS */}
			<ul className="font-bold flex flex-row justify-center">
				<li className="mr-3"><Link href="/">Home</Link></li>
				<li className="mr-3"><Link href="guests/">Guests</Link></li>
				<li className="mr-3"><Link href="contact/">Contact</Link></li>
				<li><Link href="support/">Support</Link></li>
			</ul>
			{/* SOCIALS */}
			<ul className="flex flex-row mt-5 justify-center">
				<li className="mr-3">
					<Link href="https://www.youtube.com/@dreadlore3526">
						<i className="fa-brands fa-youtube fa-2xl"></i>
					</Link>
				</li>
				<li className="mr-3">
					<Link href="https://www.twitter.com/dreadloresystem">
						<i className="fa-brands fa-x-twitter fa-2xl"></i>
					</Link>
				</li>
				<li className="mr-3">
					<Link href="https://discord.com/invite/kKxH2FjuHG">
						<i className="fa-brands fa-discord fa-2xl"></i>
					</Link>
				</li>
			</ul>
		</>
	);
}
