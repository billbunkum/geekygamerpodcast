import Link from 'next/Link';

export default function Navigation() {
	return (
		<>
			{/* SITE LINKS */}
			<ul className="font-bold flex flex-row justify-center">
				<li className="mr-3"><Link href="/">Home</Link></li>
				<li className="mr-3"><Link href="guests/">Guests</Link></li>
				<li className="mr-3"><Link href="contact/">Contact</Link></li>
				<li><Link href="#">Support</Link></li>
			</ul>
			{/* SOCIALS */}
			<ul className="flex flex-row mt-3 justify-center">
				<li>
					<a href="https://www.instagram.com/dreadloresystem">
						<img src="assets/instagram.png"
							className="w-40"
							alt="Instagram"
							title="IG link"
						/>
					</a>
				</li>
				<li>
					<a href="https://www.twitter.com/dreadloresystem">
						<img src="assets/twitter.png"
							className="w-40"
							alt="Twitter"
							title="Twitter link"
						/>
					</a>
				</li>
				<li>
					<a href="https://www.youtube.com/@dreadlore3526">
						<img src="assets/youtube.png"
							className="w-40"
							alt="YouTube"
							title="YouTube link"
						/>
					</a>
				</li>
			</ul>
		</>
	);
}
