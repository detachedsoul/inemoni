import Link from "next/link";
import AuthPopup from "@components/create-account/AuthPopup";
import { useState } from "react";

const SignInForm = () => {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [password, setPassword] = useState("");
	const [header, setHeader] = useState("");
	const [message, setMessage] = useState("");
	const [isActive, setIsActive] = useState(false);
	const [isError, setIsError] = useState(false);

	const handlePhoneNumberChange = (e) => {
		setPhoneNumber(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			phone: phoneNumber,
			pin: password,
		};

		const requestOptions = {
			method: "POST",
			body: JSON.stringify(data),
			redirect: "follow",
			headers: { "Content-Type": "application/json" }
		};

		try {
			const request = await fetch(
				"https://inemoni.org/api/login",
				requestOptions,
			);

			const response = await request.json();

			if (response.error === false && response.account_verified === true) {
				setHeader(() => "Login Successful");

				setMessage(() => "Login successful. You will be redirected to your dashboard shortly.");

				setIsError(() => false);

				setIsActive(() => true);

				document.querySelector("body").style.overflow = "hidden";

				setTimeout(() => {
					// document.cookie = `user_auth_token=${response.data.login_token}; path=/`;

					window.location.href = "https://inemoni.org/mobile";

					document.querySelector("body").style.overflow = "auto";

					// console.log(document.cookie);
				}, 3000);
			} else if (
				response.error === false &&
				response.account_verified === false
			) {
				setHeader(() => "Account Not Verified");

				setMessage(() => "Your account has not been verified. Please verify your account to continue.");

				setIsError(() => true);

				setIsActive(() => true);
			} else {
				setHeader(() => "Login Failed");

				setMessage(() => "Login failed. Please check your phone number and pin and try again.");

				setIsError(() => true);

				setIsActive(() => true);
			}

			console.log(response);

		} catch (error) {
			console.log(error);
		}
	};

    return (
		<>
			<form
				className="space-y-6 rounded-md p-[5%] md:bg-white"
				method="POST"
				onSubmit={handleSubmit}
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
							onChange={(e) => handlePhoneNumberChange(e)}
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
							onChange={(e) => handlePasswordChange(e)}
						/>
					</label>

					<div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
						<label
							className="flex cursor-pointer items-center gap-2"
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

			<AuthPopup isActive={isActive} header={header} message={message} isError={isError} />
		</>
	);
};

export default SignInForm;
