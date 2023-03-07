import Link from "next/link";

const emailResetForm = () => {
	return (
		<form
			className="mx-[5%] grid scroll-m-28 place-content-center rounded-md p-[5%] shadow-[rgba(0,0,0,0.03)_0px_0.25rem_0.5625rem_-0.0625rem,_rgba(0,0,0,0.05)_0px_0.275rem_1.25rem_-0.0625rem] md:mx-auto md:w-3/5 lg:w-1/2 md:shadow-none"
			method="POST"
		>
			<div className="space-y-6">
				<div className="space-y-2 text-center">
					<h1 className="header text-2xl">Hi 👋</h1>

					<p className="text-base">
						Just enter your email address below and we’ll send you a
						link to reset your pin.
					</p>
				</div>

				<div className="grid gap-4 md:gap-x-6">
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
							className="form-input"
							placeholder="Valid email required"
						/>
					</label>

					<button
						className="btn block rounded-md bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink"
						type="submit"
					>
						Get Reset Link
					</button>
				</div>

				<p className="text-center">
					<Link href="/sign-in">
						<span>Go back to </span>

						<span className="font-medium text-brand-dark-purple">
							Sign In
						</span>
					</Link>
				</p>
			</div>
		</form>
	);
};

export default emailResetForm;
