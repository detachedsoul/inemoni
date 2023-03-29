import Link from "next/link";
import AuthPopup from "@components/create-account/AuthPopup";
import { useState } from "react";
import validatePasswordField from "@helpers/validatePasswordField";
import { useRouter } from "next/router";

const SignInForm = () => {
	const router = useRouter();

	const [phoneNumber, setPhoneNumber] = useState("");
	const [password, setPassword] = useState("");
	const [keepSignin, setKeepSignin] = useState(false);
	const [header, setHeader] = useState("");
	const [buttonText, setButtonText] = useState("Try Again");
	const [message, setMessage] = useState("");
	const [isActive, setIsActive] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isLink, setIsLink] = useState(false);
	const [queryParams, setQueryParams] = useState({});
	const [isVisible, setIsVisible] = useState(false);
	const route = "/verify-account";

	const handlePhoneNumberChange = (e) => {
		setPhoneNumber(e.target.value);
	};

	const handlePasswordChange = (e) => {
		if (!validatePasswordField(e.target.value)) {
			return;
		}

		setPassword(e.target.value);
	};

	const handleKeepSigninChange = (e) => {
		setKeepSignin(e.target.checked);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			phone: phoneNumber,
			pin: password,
			keep_signin: keepSignin
		};

		const requestOptions = {
			method: "POST",
			body: JSON.stringify(data),
			redirect: "follow",
			headers: { "Content-Type": "application/json" },
		};

		try {
			const request = await fetch(
				"https://inemoni.org/api/login",
				requestOptions,
			);

			const response = await request.json();

			if (
				response.error === false &&
				response.account_verified === true
			) {
				setHeader(() => "Login Successful");

				setMessage(
					() =>
						"Login successful. You will be redirected to your dashboard shortly.",
				);

				setIsError(() => false);

				setIsActive(() => true);

				document.querySelector("body").style.overflow = "hidden";

				const now = new Date();
				const expiration = new Date(
					new Date(now.getTime() + (60 * 60 * 60 * 24 * 365 * 10)),
				);

				document.cookie = `user_auth_token=${response.data.login_token};expires=${expiration.toGMTString()};path=/`;

				setTimeout(() => {
					router.prefetch(`https://www.inemoni.org/mobile/__initSession?session_data=${response.data.session_data}`);

					router.replace(
						`https://www.inemoni.org/mobile/__initSession?session_data=${response.data.session_data}`,
					);

					document.querySelector("body").style.overflow = "auto";
				}, 3000);
			} else if (
				response.error === false &&
				response.account_verified === false
			) {
				setHeader(() => "Account Not Verified");

				setMessage(
					() =>
						"Your account has not been verified. Please verify your account to continue.",
				);

				setIsError(() => true);

				setIsActive(() => true);

				setButtonText(() => "Proceed to verify account");

				setIsLink(() => true);

				setQueryParams(() => response.data);

				document.querySelector("body").style.overflow = "hidden";
			} else {
				setHeader(() => "Login Failed");

				setMessage(
					() =>
						"Login failed. Please check your phone number and pin and try again.",
				);

				setIsError(() => true);

				setIsActive(() => true);

				document.querySelector("body").style.overflow = "hidden";
			}
		} catch (error) {
			setHeader(() => "Login Failed");

			setMessage(
				() =>
					"Login failed. Please check your phone number and pin and try again.",
			);

			setIsError(() => true);

			setIsActive(() => true);

			document.querySelector("body").style.overflow = "hidden";
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
							onChange={handlePhoneNumberChange}
							required={true}
						/>
					</label>

					<label
						className="relative grid gap-0.5"
						htmlFor="password"
					>
						<span className="font-bold text-brand-dark-purple">
							Pin
						</span>

						<input
							type={isVisible ? "text" : "password"}
							name="password"
							id="password"
							className="input-form"
							inputmode="numeric"
							placeholder="Enter your pin"
							pattern="[0-9]{6}"
							maxLength={6}
							minLength={6}
							onChange={handlePasswordChange}
							value={password}
							aria-label="Enter your pin. It should be six digits."
							required={true}
						/>

						<button
							className="absolute top-12 right-3"
							type="button"
							aria-label="Toggle password field visibility"
							onClick={() => setIsVisible(() => !isVisible)}
						>
							<i
								className={`${
									isVisible
										? "fi-rr-eye"
										: "fi-rr-eye-crossed"
								} text-xl`}
							></i>
						</button>
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
								onChange={handleKeepSigninChange}
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

			<AuthPopup
				isActive={isActive}
				header={header}
				message={message}
				isError={isError}
				setIsActive={setIsActive}
				isLink={isLink}
				route={route}
				buttonText={buttonText}
				queryParams={queryParams}
			/>
		</>
	);
};

export default SignInForm;
