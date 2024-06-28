
export default function Embed() {
	return (
		<>
		<h2 className="text-4xl text-center font-bold">The Podcast</h2>

		<div className="flex flex-row justify-center">
		{/*width="560"*/}
			<iframe 
				className="w-full lg:w-3/4 aspect-video mt-10"
				loading="lazy"
				src="https://www.youtube.com/embed/videoseries?si=O5-cwXpS_8dr0zsa&amp;list=PLTPxvO7rOQ0YX3nRIrlsGBgBFEdEtCyBI"
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
