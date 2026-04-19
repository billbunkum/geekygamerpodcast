
export default function Footer() {

  const timestamp = new Date();
  const this_year = timestamp.getFullYear();

	return (
		<>
			<ul className="mt-10 text-center h-auto font-mono">
				<li>Darkeyes Design LLC &copy; {this_year}</li>
			</ul>
		</>
	);
}
