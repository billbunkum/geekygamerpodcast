
export default function Embed() {
	return (
		<>
			<h2 className="text-4xl text-center font-bold">The Podcast</h2>
			{/*width="560"*/}
			<div className="w-screen p-5">
				<iframe 
					className="w-full aspect-video"
					loading="lazy"
					src="https://www.youtube.com/embed/videoseries?si=tR95OW0PLANq-WPn&amp;list=PLKcCKSGU8sp1FDtNcrge8BOCxVdgdGrsW"
					title="Geeky Gamer Podcast" 
					frameborder={0} 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
					referrerpolicy="strict-origin-when-cross-origin" 
					allowfullscreen>
				</iframe>
			</div>
		</>
	);
}
