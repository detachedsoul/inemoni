import Link from "next/link";

const SignInForm = () => {
    return (
		<form
			className="space-y-6 rounded-md p-[5%] md:bg-white"
			method="POST"
		>
			<div className="mx-auto w-[90%] space-y-2 text-center">
				<h1 className="header text-2xl">Hi, Welcome</h1>

				<p className="text-base">
					Sign in to continue to an awesome experience
				</p>
			</div>

			<div className="grid gap-6">
				<label
					className="grid gap-0.5"
					htmlFor="phone-number"
				>
					<span className="font-bold text-brand-dark-purple">
						Phone Number
					</span>

					<input
						type="tel"
						name="phone-number"
						id="phone-number"
						className="input-form"
						placeholder="Enter your phone number"
					/>
				</label>

				<label
					className="grid gap-0.5"
					htmlFor="password"
				>
					<span className="font-bold text-brand-dark-purple">
						Pin
					</span>

					<input
						type="password"
						name="password"
						id="password"
						className="input-form"
						placeholder="Enter your pin"
					/>
				</label>

				<div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
					<label
						className="flex items-center gap-2 cursor-pointer"
						htmlFor="remember-me"
					>
						<input
							className="input-checkbox"
							type="checkbox"
							id="remember-me"
						/>
						<span className="text-[#979797]">
							Keep me signed in
						</span>
					</label>
					<Link
						className="text-brand-dark-purple"
						href="/password-reset"
					>
						Forgot Password
					</Link>
				</div>

				<button
					className="btn block rounded-md bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink"
					type="submit"
				>
					Sign In
				</button>
			</div>

			<p className="text-[#979797]">
				Don’t have an account?{" "}
				<Link
					className="font-medium text-brand-dark-purple"
					href="/create-account"
				>
					Create one
				</Link>
			</p>
		</form>
	);
};

export default SignInForm;
