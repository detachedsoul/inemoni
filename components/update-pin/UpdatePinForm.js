import Link from "next/link";

const UpdatePinForm = () => {
	return (
		<form
			className="space-y-6 rounded-md p-[5%] md:bg-white"
			method="POST"
		>
			<div className="mx-auto w-[90%] space-y-2 text-center">
				<h1 className="header text-2xl">Hi 👋</h1>

				<p className="text-base">
					Please enter your new pin below to update your account.
				</p>
			</div>

			<div className="grid gap-4 md:gap-x-6">
				<label
					className="grid gap-0.5"
					htmlFor="new-password"
				>
					<span className="font-bold text-brand-dark-purple">
						New Pin
					</span>

					<input
						type="password"
						name="new-password"
						id="new-password"
						className="input-form"
						placeholder="Enter your new pin"
					/>
				</label>

				<label
					className="grid gap-0.5"
					htmlFor="confirm-password"
				>
					<span className="font-bold text-brand-dark-purple">
						Confirm Pin
					</span>

					<input
						type="password"
						name="confirm-password"
						id="confirm-password"
						className="input-form"
						placeholder="Confirm your new pin"
					/>
				</label>

				<button
					className="btn block rounded-md bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink"
					type="submit"
				>
					Update Pin
				</button>
			</div>
		</form>
	);
};

export default UpdatePinForm;
