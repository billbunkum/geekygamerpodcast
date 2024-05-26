import Guests from './guests';

export default function GuestList() {
	return (
		<>
			<div className="text-3xl text-center font-bold md:text-5xl">
				<ul>
					<Guests />	
				</ul>
		</div>
	</>
);
}
