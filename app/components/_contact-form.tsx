
export default function ContactForm() {
	return (
		<>
		<div className="text-3xl text-center font-bold md:text-5xl">

			<form
  			action="https://formspree.io/f/xnqjayqv"
  			method="POST"
			>
  			<label>
    			Your email:
    			<input 
						className="text-black mt-3"
						maxLength={50}
						type="email" 
						name="email" />
  			</label>
  			<label>
					<div className="mt-5">
    				Your message:
					</div>
    			<textarea 
						className="text-black mt-3"
						maxLength={300}
						name="message"></textarea>
  			</label>

			  <button 
					className="mt-10 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					type="submit">Send</button>
			</form>
		</div>
		</>
	);
}
