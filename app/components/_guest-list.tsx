import Link from 'next/link';

export default function GuestList(props: any) {
{/*	const guests = props.guests(); */}
{/*	guests[0]['guest']	*/}
{/*	console.log(props); */}

	const guest_list = [];
	for (let i = 0; i < props.guests.length; i++) { 
		guest_list.push(<li>
											<Link 
												href={props.guests[i]['link']}
												title={props.guests[i]['topic']}
												className="hover:underline leading-loose decoration-red-500"
											>
												{props.guests[i]['episode']}
												&nbsp;
												{props.guests[i]['guest']}
												&nbsp;.&nbsp;
												{props.guests[i]['date']}
											</Link>
										</li>)
	}
	
	return (
		<>
			<div className="ml-0 mr-0 text-sm text-left font-bold md:text-xl md:text-center">
				<ul>
					{ guest_list }
				</ul>
		</div>
	</>
);
}
