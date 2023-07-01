import Link from "next/link";
import AuthPopup from "@components/create-account/AuthPopup";
import { useState } from "react";
import validateNumberField from "@helpers/validateNumberField";

const SignInForm = () => {
    const [isProcessing, setIsProcessing] = useState(false);
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
        const cleanedValue = e.target.value.replace(/[^\d]/g, '');

       // Allow only numbers with maximum lenght of 11
		if (!validateNumberField(cleanedValue, 11)) {
            return;
		} else {
            setPhoneNumber(cleanedValue);
        }
	};

	const handlePasswordChange = (e) => {
        const cleanedValue = e.target.value.replace(/[^\d]/g, '');

       // Allow only numbers with maximum lenght of 6
		if (!validateNumberField(cleanedValue, 6)) {
            return;
		} else {
            setPassword(cleanedValue);
        }
	};

	const handleKeepSigninChange = (e) => {
		setKeepSignin(e.target.checked);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

        setIsProcessing(() => true);

        const getURLOrigin = window.location.origin;

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
                `${getURLOrigin}/api/login`,
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

                // Set expiration date of cookie to be 7 days from current time
                const currentDate = new Date();
                const expirationDate = new Date(
                    currentDate.getTime() + 7 * 24 * 60 * 60 * 1000,
                );
                const expirationDateString = expirationDate.toUTCString();

                document.cookie = `user_token=${response.data.login_token};expires=${expirationDateString};path=/`;

                if (keepSignin) {
                    // Convert the fname gotten from response to lowercase and then make the first letter uppercase
                    const fname = response.data.fname.toLowerCase().split(" ");
                    const fnameCapitalized = fname.map((word) => {
                        return word.charAt(0).toUpperCase() + word.slice(1);
                    });

                    document.cookie = `user_name=${fnameCapitalized};expires=${expirationDateString};path=/`;

                    document.cookie = `is_logged_in=${true};expires=${expirationDateString};path=/`;
                }

                setIsProcessing(() => false);

				setTimeout(() => {
					window.location.href = `https://www.inemoni.org/mobile/__initSession?session_data=${response.data.session_data}&keep_signin=${keepSignin}`;

					document.querySelector("body").style.overflow = "auto";
				}, 3000);
			} else if (
				response.error === false &&
				response.account_verified === false
			) {
                setIsProcessing(() => false);

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
                setIsProcessing(() => false);

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
            setIsProcessing(() => false);

			setHeader(() => "Login Failed");

			setMessage(
				() => "An error occured. Please try again later",
			);

			setIsError(() => true);

			setIsActive(() => true);

			document.querySelector("body").style.overflow = "hidden";
		}
	};

	return (
		<>
			<form
				className="space-y-6 rounded-[20px] p-[10%] bg-white shadow-[0px_10px_70px 10px_rgba(102,102,102,0.1)] text-[#666666] mx-4 md:mx-0"
				method="POST"
				onSubmit={handleSubmit}
			>
				<div className="space-y-2">
					<h1 className="font-medium text-2xl sm:text-3xl text-[#262626]">
						Hello there 👋
					</h1>

					<p className="text-base">
                        Sign in to continue
                    </p>
				</div>

				<div className="grid gap-6">
					<label
						className="grid gap-1"
						htmlFor="phone-number"
					>
						<span className="font-bold">
							Phone Number
						</span>

						<input
							type="tel"
							name="phone-number"
							id="phone-number"
							inputMode="numeric"
							pattern="\d+"
							maxLength={11}
							minLength={11}
							className="input-form"
							placeholder="Enter your phone number"
							value={phoneNumber}
							onChange={handlePhoneNumberChange}
							required={true}
						/>
					</label>

					<label
						className="relative grid gap-1"
						htmlFor="password"
					>
						<span className="font-bold">
							Pin
						</span>

						<input
							type={isVisible ? "text" : "password"}
							name="password"
							id="password"
							className="input-form"
							inputMode="numeric"
							placeholder="Enter your pin"
							pattern="\d+"
							maxLength={6}
							minLength={6}
							onChange={handlePasswordChange}
							value={password}
							aria-label="Enter your pin. It should be six digits."
							required={true}
						/>

						<button
                            className="absolute top-[55%] right-3"
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
								Remember Me
							</span>
						</label>
						<Link
							className="text-brand-purple font-medium"
							href="/password-reset"
						>
							Forgot Password
						</Link>
					</div>

                    <button
                        className={ `btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink ${isProcessing ? 'bg-brand-purple/30 pointer-events-none select-none animate-pulse outline-0 border-none' : 'bg-brand-purple'} disabled:bg-brand-purple/30 disabled:pointer-events-none disabled:select-none disabled:animate-purple` }
                        type="submit"
                        disabled={ isProcessing }
                    >
                        { isProcessing ? "Processing..." : "Sign In" }
                    </button>
				</div>

				<p className="text-[#979797]">
					Don’t have an account?{" "}
					<Link
						className="font-medium text-brand-purple"
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
