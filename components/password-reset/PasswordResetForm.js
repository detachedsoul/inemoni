import Link from "next/link";

const PasswordResetForm = () => {
	return (
		<form
			className="space-y-6 rounded-md p-[5%] md:bg-white"
			method="POST"
		>
			<div className="space-y-2 text-center w-[90%] mx-auto">
				<h1 className="header text-2xl">Hi 👋</h1>

				<p className="text-base">
					Just enter your email address below and we’ll send you a
					link to reset your pin.
				</p>
			</div>

			<div className="grid gap-6">
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
		</form>
	);
};

export default PasswordResetForm;
