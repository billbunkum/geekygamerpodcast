
export default function ContactForm() {
	return (
		<>
		<div className="text-center">

			<form
  			action="https://formspree.io/f/xrgnvagw"
  			method="POST"
				className="overflow-scroll"
			>
  			<label>
					<div className="mt-5">
	    			Your email:
					</div>
    			<input 
						className="text-black mt-3 text-lg"
						maxLength={50}
						type="email" 
						name="email" />
  			</label>

  			<label>
					<div className="mt-5">
    				Your message:
					</div>
    			<textarea 
						className="text-black mt-3 text-lg"
						maxLength={300}
						name="message"></textarea>
  			</label>

				<div className="mt-10 mb-10">
				  <button 
						className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						type="submit">Send</button>
				</div>

			</form>
		</div>
		</>
	);
}
