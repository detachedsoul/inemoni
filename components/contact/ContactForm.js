const ContactForm = () => {
    return (
		<form
			className="grid place-content-center mx-[5%] p-[5%] rounded-md md:w-3/5 md:mx-auto scroll-m-28"
            method="POST"
            id="contact-form"
		>
			<div className="space-y-6">
				<div className="space-y-2 text-center">
					<h2 className="header text-2xl">
						Looking to Give a Feedback?
					</h2>

					<p>
						Fill out the form below and we will respond as soon as
						possible
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2">
					<label
						className="grid gap-0.5"
						htmlFor="fullname"
					>
						<span className="font-bold">Full Name</span>

						<input
							type="text"
							name="fullname"
							id="fullname"
							className="input-form"
						/>
					</label>

					<label
						className="grid gap-0.5"
						htmlFor="email-address"
					>
						<span className="font-bold">Email Address</span>

						<input
							type="email"
							name="email-address"
							id="email-address"
							className="input-form"
						/>
					</label>

					<label
						className="grid gap-0.5 md:col-span-2"
						htmlFor="feedback-message"
					>
						<span className="font-bold">Your Feedback</span>

						<textarea
							className="input-form"
							id="feedback-message"
							rows="5"
						></textarea>
					</label>

					<button
						className="bg-brand-purple text-white btn block hover:bg-brand-navlink transition-colors duration-300 ease-in rounded-md"
						type="submit"
					>
						Send Feedback
					</button>
				</div>
			</div>
		</form>
	);
};

export default ContactForm;
