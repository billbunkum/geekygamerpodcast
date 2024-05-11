
export default function Embed() {
	return (
		<>
		<div className="w-full">

			<h2 className="text-4xl text-center font-bold">The Podcast</h2>
			{/*width="560"*/}
				<iframe 
					className="aspect-video mt-10"
					loading="lazy"
					src="https://www.youtube.com/embed/videoseries?si=tR95OW0PLANq-WPn&amp;list=PLKcCKSGU8sp1FDtNcrge8BOCxVdgdGrsW"
					title="Geeky Gamer Podcast" 
					frameBorder={0} 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
					referrerPolicy="strict-origin-when-cross-origin" 
					allowFullScreen>
				</iframe>
		</div>
		</>
	);
}
