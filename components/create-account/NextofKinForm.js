const NextofKinForm = () => {
	return (
		<form
			className="mx-[5%] grid scroll-m-28 place-content-center rounded-md p-[5%] shadow-[rgba(0,0,0,0.03)_0px_0.25rem_0.5625rem_-0.0625rem,_rgba(0,0,0,0.05)_0px_0.275rem_1.25rem_-0.0625rem] md:mx-auto md:w-3/5 md:shadow-none"
			method="POST"
		>
			<div className="space-y-6">
				<div className="space-y-2 text-center">
					<h1 className="header text-2xl">Next of Kin</h1>

					<p className="text-base">
						Confirm your next of kin details
					</p>
				</div>

				<div className="grid gap-6">
                    <label
						className="grid gap-0.5"
						htmlFor="first-name"
					>
						<span className="font-bold text-brand-dark-purple">
							First Name
						</span>

						<input
							type="text"
							name="first-name"
							id="first-name"
							className="input-form"
							placeholder="Wisdom"
						/>
					</label>

                    <label
						className="grid gap-0.5"
						htmlFor="middle-name"
					>
						<span className="font-bold text-brand-dark-purple">
							Middle Name (Optional)
						</span>

						<input
							type="text"
							name="middle-name"
							id="middle-name"
							className="input-form"
							placeholder="Chukwumuenya"
						/>
					</label>

                    <label
						className="grid gap-0.5"
						htmlFor="last-name"
					>
						<span className="font-bold text-brand-dark-purple">
							Last Name
						</span>

						<input
							type="text"
							name="last-name"
							id="last-name"
							className="input-form"
							placeholder="Ojimah"
						/>
					</label>

                    <label
						className="grid gap-0.5"
						htmlFor="phone-name"
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
						htmlFor="referral-code"
					>
						<span className="font-bold text-brand-dark-purple">
							Referral Code (Optional)
						</span>

						<input
							type="text"
							name="referral-code"
							id="referral-code"
							className="input-form"
							placeholder="Enter Referral Code"
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

export default NextofKinForm;
