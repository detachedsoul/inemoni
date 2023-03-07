import Link from "next/link";

const UpdatePinForm = () => {
	return (
		<form
			className="mx-[5%] grid scroll-m-28 place-content-center rounded-md p-[5%] shadow-[rgba(0,0,0,0.03)_0px_0.25rem_0.5625rem_-0.0625rem,_rgba(0,0,0,0.05)_0px_0.275rem_1.25rem_-0.0625rem] md:mx-auto md:w-3/5 md:shadow-none"
			method="POST"
		>
			<div className="space-y-6">
				<div className="space-y-2 text-center">
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
							className="form-input"
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
							className="form-input"
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
			</div>
		</form>
	);
};

export default UpdatePinForm;
