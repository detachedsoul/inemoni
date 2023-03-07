const PersonalDetailsForm = () => {
	return (
		<form
			className="mx-[5%] grid scroll-m-28 place-content-center rounded-md p-[5%] shadow-[rgba(0,0,0,0.03)_0px_0.25rem_0.5625rem_-0.0625rem,_rgba(0,0,0,0.05)_0px_0.275rem_1.25rem_-0.0625rem] md:mx-auto md:shadow-none md:w-3/5"
			method="POST"
		>
			<div className="space-y-6">
				<div className="space-y-2 text-center">
					<h1 className="header text-2xl">Hi, Welcome</h1>

					<p className="text-base">Confirm your personal details</p>
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
							placeholder="Enter your first name"
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
							placeholder="Enter middle name"
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
							placeholder="Enter last name"
						/>
					</label>

					<label
						className="grid gap-0.5"
						htmlFor="last-name"
					>
						<span className="font-bold text-brand-dark-purple">
							Gender
						</span>

						<select
							className="input-select form-select"
							name="gender"
							id="gender"
						>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</select>
					</label>

					<label
						className="grid gap-0.5"
						htmlFor="dob"
					>
						<span className="font-bold text-brand-dark-purple">
							Date of Birth
						</span>

						<input
							type="date"
							name="dob"
							id="dob"
							className="input-form"
							placeholder="02/03/2023"
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

export default PersonalDetailsForm;
