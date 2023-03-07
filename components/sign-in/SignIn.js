import Link from "next/link";

const SignInForm = () => {
    return (
		<form
			className="mx-[5%] grid scroll-m-28 place-content-center rounded-md p-[5%] shadow-[rgba(0,0,0,0.03)_0px_0.25rem_0.5625rem_-0.0625rem,_rgba(0,0,0,0.05)_0px_0.275rem_1.25rem_-0.0625rem] md:mx-auto md:w-3/5 md:shadow-none"
			method="POST"
			id="contact-form"
		>
			<div className="space-y-6">
				<div className="space-y-2 text-center">
					<h2 className="header text-2xl">Hi, Welcome</h2>

					<p className="text-base">
						Sign in to continue to an awesome experience
					</p>
				</div>

				<div className="grid gap-4 md:gap-x-6">
					<label
						className="grid gap-0.5"
						htmlFor="phone-number"
					>
						<span className="font-bold">Phone Number</span>

						<input
							type="tel"
							name="phone-number"
							id="phone-number"
							className="form-input"
							placeholder="Enter your phone number"
						/>
					</label>

					<label
						className="grid gap-0.5"
						htmlFor="password"
					>
						<span className="font-bold">Pin</span>

						<input
							type="password"
							name="password"
							id="password"
							className="form-input"
							placeholder="Enter your pin"
						/>
					</label>

					<button
						className="btn block rounded-md bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink"
						type="submit"
					>
						Validate Details
					</button>
				</div>

				<div className="sapce-y-5">
					<p className="text-center font-normal">Or</p>

					<p className="text-center">
						Don’t have an account?{" "}
						<Link
							className="font-medium text-brand-dark-purple"
							href="/sign-up"
						>
							Sign Up
						</Link>
					</p>
				</div>
			</div>
		</form>
	);
};

export default SignInForm;
