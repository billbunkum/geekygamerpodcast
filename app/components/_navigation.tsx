import Link from 'next/link';

export default function Navigation() {
	return (
		<>
			{/* SITE LINKS */}
			<ul className="font-bold flex flex-row justify-center">
				<li className="mr-3"><Link href="/">HOME</Link></li>
				<li className="mr-3"><Link href="guests/">GUESTS</Link></li>
				<li className="mr-3"><Link href="contact/">CONTACT</Link></li>
				<li><Link href="support/">SUPPORT</Link></li>
			</ul>
			{/* SOCIALS */}
			<ul className="flex flex-row mt-5 justify-center">
				<li className="mr-3">
					<Link href="https://www.youtube.com/@geekygamerpodcast">
						<i className="fa-brands fa-youtube fa-2xl"></i>
					</Link>
				</li>
				<li className="mr-3">
					<Link href="https://www.twitter.com/geekygamerpod">
						<i className="fa-brands fa-x-twitter fa-2xl"></i>
					</Link>
				</li>
				<li className="mr-3">
					<Link href="https://discord.gg/jg5Gt2Eebx">
						<i className="fa-brands fa-discord fa-2xl"></i>
					</Link>
				</li>
			</ul>
		</>
	);
}
