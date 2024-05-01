import Link from 'next/Link';

export default function Navigation() {
	return (
		<>
			{/* SITE LINKS */}
			<ul>
				<li><Link href="#">Guests</Link></li>
				<li><Link href="#">Contact</Link></li>
				<li><Link href="#">Support</Link></li>
			</ul>
			{/* SOCIALS */}
			<ul>
				<li>Twitter</li>
				<li>Instagram</li>
				<li>YouTube</li>
			</ul>
		</>
	);
}
