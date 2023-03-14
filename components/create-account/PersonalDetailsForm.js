const PersonalDetailsForm = () => {
	return (
		<form
			className="rounded-md p-[5%] md:bg-white space-y-6"
			method="POST"
		>
			<div className="space-y-2 text-center w-[90%] mx-auto">
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
					htmlFor="gender"
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
		</form>
	);
};

export default PersonalDetailsForm;
