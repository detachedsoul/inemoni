const ContactInformationForm = () => {
	return (
		<form
			className="mx-[5%] grid scroll-m-28 place-content-center rounded-md p-[5%] shadow-[rgba(0,0,0,0.03)_0px_0.25rem_0.5625rem_-0.0625rem,_rgba(0,0,0,0.05)_0px_0.275rem_1.25rem_-0.0625rem] md:mx-auto md:w-3/5 md:shadow-none"
			method="POST"
		>
			<div className="space-y-6">
				<div className="space-y-2 text-center">
					<h1 className="header text-2xl">Hi, Wisdom</h1>

					<p className="text-base">Review your contact information</p>
				</div>

				<div className="grid gap-6">
					<label
						className="grid gap-0.5"
						htmlFor="first-name"
					>
						<span className="font-bold text-brand-dark-purple">
							Phone Number
						</span>

						<input
							type="tel"
							name="phone-number"
							id="phone-number"
							className="input-form"
							placeholder="08105008304"
						/>
					</label>

					<label
						className="grid gap-0.5"
						htmlFor="email"
					>
						<span className="font-bold text-brand-dark-purple">
							Email Address
						</span>

						<input
							type="email"
							name="email"
							id="email"
							className="input-form"
							placeholder="vindicatedwisdom@gmail.com"
						/>
					</label>

					<label
						className="grid gap-0.5"
						htmlFor="house-address"
					>
						<span className="font-bold text-brand-dark-purple">
							House Address
						</span>

						<input
							type="text"
							name="house-address"
							id="house-address"
							className="input-form"
							placeholder="Rivers State University"
						/>
					</label>

					<button
						className="btn block rounded-md bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink"
						type="submit"
					>
						Continue
					</button>
				</div>
			</div>
		</form>
	);
};

export default ContactInformationForm;
