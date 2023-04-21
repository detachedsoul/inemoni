import Link from "next/link";
import AuthPopup from "@components/create-account/AuthPopup";
import { useState } from "react";
import getCookie from "@helpers/getCookie";
import validateNumberField from "@helpers/validateNumberField";
import { useRouter } from "next/router";

const LockScreenForm = () => {
	const router = useRouter();

	const [password, setPassword] = useState("");
	const [header, setHeader] = useState("");
	const [message, setMessage] = useState("");
	const [isActive, setIsActive] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const handlePasswordChange = (e) => {
		if (!validateNumberField(e.target.value, 6)) {
			return;
		}

		setPassword(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			user_token: getCookie("user_token").sanitizedValue,
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

			console.log(response)

			// Check if the login pin matches that of the login token
			if (
				response.error === false &&
				response.message === "Login successful"
			) {

				setHeader(() => "Login Successful");

				setMessage(
					() =>
						"Login successful. You will be redirected to your dashboard shortly.",
				);

				setIsError(() => false);

				setIsActive(() => true);

				document.querySelector("body").style.overflow =
					"hidden";

				setTimeout(() => {
					window.location.href = `https://www.inemoni.org/mobile/__initSession?session_data=${response.data.session_data}&keep_signin=${true}`;

					document.querySelector("body").style.overflow =
						"auto";
				}, 3000);
			} else {
				setHeader(() => "Login Failed");

				setMessage(
					() =>
						response.message ? response.message : `An error occured. Please try again later or contact support.`,
				);

				setIsError(() => true);

				setIsActive(() => true);

				document.querySelector("body").style.overflow =
					"hidden";
			}
		} catch (error) {
			setHeader(() => "Login Failed");

			setMessage(
				() =>
					error.message,
			);

			setIsError(() => true);

			setIsActive(() => true);

			document.querySelector("body").style.overflow = "hidden";
		}
	};

	const handleRedirect = (e) => {
		// Delete all user related cookies and redirect to login page
		document.cookie = "user_token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
		document.cookie = "user_name=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
		document.cookie = "is_logged_in=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
		document.cookie = "user_phone_number=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";

		router.push({
			pathname: "/sign-in",
		});
	};

	return (
		<>
			<form
				className="space-y-6 rounded-md p-[5%] md:bg-white"
				method="POST"
				onSubmit={handleSubmit}
			>
				<div className="mx-auto w-[90%] space-y-2 text-center">
					<h1 className="header text-2xl">
						Welcome back, {getCookie("user_name").sanitizedValue}
					</h1>

					<p className="text-base">Enter your pin to continue</p>
				</div>

				<div className="grid gap-6">
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
							inputMode="numeric"
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

				<div className="space-y-2">
					<p className="text-[#979797]">
						Don’t have an account?{" "}
						<Link
							className="font-medium text-brand-dark-purple"
							href="/create-account"
						>
							Create one
						</Link>
					</p>

					<p className="text-[#979797]">
						Want to sign in with another account?{" "}
						<button
							className="font-medium text-brand-dark-purple"
							type="button"
							onClick={handleRedirect}
						>
							Change account
						</button>
					</p>
				</div>
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
