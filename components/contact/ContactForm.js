const ContactForm = () => {
    return (
		<form
			className="grid place-content-center mx-[5%] p-[5%] rounded-md shadow-[rgba(0,0,0,0.03)_0px_0.25rem_0.5625rem_-0.0625rem,_rgba(0,0,0,0.05)_0px_0.275rem_1.25rem_-0.0625rem] lg:w-3/5 lg:mx-auto scroll-m-28"
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

				<div className="grid gap-4 lg:grid-cols-2 lg:gap-x-6">
					<label
						className="grid gap-0.5"
						htmlFor="fullname"
					>
						<span clasName="font-bold">Full Name</span>

						<input
							type="text"
							name="fullname"
							id="fullname"
							className="form-input"
						/>
					</label>

					<label
						className="grid gap-0.5"
						htmlFor="email-address"
					>
						<span clasName="font-bold">Email Address</span>

						<input
							type="email"
							name="email-address"
							id="email-address"
							className="form-input"
						/>
					</label>

					<label
						className="grid gap-0.5 lg:col-span-2"
						htmlFor="feedback-message"
					>
						<span clasName="font-bold">Your Feedback</span>

						<textarea
							className="form-input"
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
