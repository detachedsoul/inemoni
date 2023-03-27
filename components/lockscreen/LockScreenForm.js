import Link from "next/link";
import AuthPopup from "@components/create-account/AuthPopup";
import { useState } from "react";
import getCookie from "@helpers/getCookie";
import validatePasswordField from "@helpers/validatePasswordField";

const LockScreenForm = () => {
	const [password, setPassword] = useState("");
	const [header, setHeader] = useState("");
	const [message, setMessage] = useState("");
	const [isActive, setIsActive] = useState(false);
	const [isError, setIsError] = useState(false);

	const handlePasswordChange = (e) => {
		if (!validatePasswordField(e.target.value)) {
			return;
		}

		setPassword(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			user_token: getCookie("user_login_token").sanitizedValue.toString(),
			pin: password,
		};

		const requestOptions = {
			method: "POST",
			body: JSON.stringify(data),
			redirect: "follow",
			headers: { "Content-Type": "application/json" },
		};

		try {
			const request = await fetch(
				"https://inemoni.org/api/verify-login",
				requestOptions,
			);

			const response = await request.json();

			if (
				response.error === false &&
				response.message === "Login successful"
			) {
				const now = new Date();
				const expiration = new Date(
					new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000),
				);

				const data = {
					phone: getCookie("phone_number").sanitizedValue.toString(),
					pin: password
				};

				const requestOptions = {
					method: "POST",
					body: JSON.stringify(data),
					redirect: "follow",
					headers: { "Content-Type": "application/json" },
				};

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

					document.cookie = `is_logged_in=${true};expires=${expiration.toGMTString()};path=/`;
					document.cookie = `user_login_token=${
						response.data.login_token
					};expires=${expiration.toGMTString()};path=/`;
					document.cookie = `phone_number=0${
						response.data.uid
					};expires=${expiration.toGMTString()};path=/`;
					document.cookie = `session_data=${
						response.data.session_data
					};expires=${expiration.toGMTString()};path=/`;

					setTimeout(() => {
						window.location.replace(
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

				document.querySelector("body").style.overflow = "hidden";
			} else {
				setHeader(() => "Login Failed");

				setMessage(
					() => "Login failed. Please check your pin and try again.",
				);

				setIsError(() => true);

				setIsActive(() => true);

				document.querySelector("body").style.overflow = "hidden";
			}
		} catch (error) {
			console.log(error)

			setHeader(() => "Login Failed");

			setMessage(
				() =>
					"Login failed. Please check your pin and try again.",
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
					<h1 className="header text-2xl">Welcome back</h1>

					<p className="text-base">Enter your pin to continue</p>
				</div>

				<div className="grid gap-6">
					<label
						className="grid gap-0.5"
						htmlFor="password"
					>
						<span className="font-bold text-brand-dark-purple">
							Pin
						</span>

						<input
							type="number"
							name="password"
							id="password"
							className="input-form no-number-increment [-webkit-text-security:square]"
							placeholder="Enter your pin"
							pattern="[0-9]{6}"
							maxLength={6}
							minLength={6}
							onChange={handlePasswordChange}
							onInput={handlePasswordChange}
							value={password}
							aria-label="Enter your pin. It should be six digits."
							required={true}
						/>
					</label>

                    <Link
                        className="text-brand-dark-purple"
                        href="/password-reset"
                    >
                        Forgot Password
                    </Link>

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
			/>
		</>
	);
};

export default LockScreenForm;
