import AuthPopup from "@components/create-account/AuthPopup";
import Link from "next/link";
import { useState } from "react";

const PasswordResetForm = () => {
	const [email, setEmail] = useState("");
	const [header, setHeader] = useState("");
	const [message, setMessage] = useState("");
	const [isActive, setIsActive] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isLink, setIsLink] = useState(false);
	const [buttonText, setButtonText] = useState("Try Again");
	const route = "/sign-in";

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordReset = async (e) => {
		e.preventDefault();

		// Check if the typed string is a valid email
		const isValidEmail = /^[^\s@]*@[^\s@]+\.[^\s@]+$/.test(email);
		if (!isValidEmail) {
			setHeader(() => "Password Reset Failed");

			setMessage(() => "Please enter a valid email address");

			setIsError(() => true);

			setIsActive(() => true);

			document.querySelector("body").style.overflow = "hidden";

			return;
		}

		const data = {
			email: email,
		};

		const requestOptions = {
			method: "POST",
			body: JSON.stringify(data),
			redirect: "follow",
			headers: { "Content-Type": "application/json" },
		};

		try {
			const request = await fetch(
				`https://www.inemoni.org/api/send-reset-code`,
				requestOptions,
			);

			const response = await request.json();

			if (response.error === false) {
				// Delete all user related cookies and redirect to login page
				document.cookie = "user_token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
				document.cookie = "user_name=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
				document.cookie = "is_logged_in=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";

				setHeader(() => "Password Reset Link Sent Successfully");

				setMessage(
					() => response.message
				);

				setIsError(() => false);

				setIsActive(() => true);

				setButtonText(() => "Continue");

				setIsLink(() => true);

				document.querySelector("body").style.overflow = "hidden";
			} else {
				setHeader(() => "Password Reset Failed");

				setMessage(() =>
					response.message
						? response.message
						: `An error occured. Please try again later or contact support.`,
				);

				setIsError(() => true);

				setIsActive(() => true);

				document.querySelector("body").style.overflow = "hidden";
			}
		} catch (error) {
			setHeader(() => "Password Reset Failed");

			setMessage(() => error.message);

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
				onSubmit={handlePasswordReset}
			>
				<div className="mx-auto w-[90%] space-y-2 text-center">
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
							onChange={(e) => handleEmailChange(e)}
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

			<AuthPopup
				isActive={isActive}
				header={header}
				message={message}
				isError={isError}
				setIsActive={setIsActive}
				route={route}
				isLink={isLink}
				buttonText={buttonText}
			/>
		</>
	);
};

export default PasswordResetForm;
