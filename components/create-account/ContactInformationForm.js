import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import AuthPopup from "@components/create-account/AuthPopup";
import getCookie from "@helpers/getCookie";
import validateNumberField from "@helpers/validateNumberField";

const ContactInformationForm = () => {
	const router = useRouter();
	const queryParams = router.query;

	const [header, setHeader] = useState("");
	const [message, setMessage] = useState("");
	const [isError, setIsError] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState(queryParams.phone);
	const [email, setEmail] = useState(queryParams.email);

	useEffect(() => {
		if (isActive) {
			document.querySelector("body").style.overflow = "hidden";
		} else {
			document.querySelector("body").style.overflow = "auto";
		}
	}, [isActive]);

	if (Object.keys(queryParams).length < 1) {
		typeof window !== "undefined" &&
			window.location.replace("/create-account");

		return;
	}

	const handlePhoneNumberChange = (e) => {
		if (!validateNumberField(e.target.value, 11)) {
			return;
		}

		setPhoneNumber(e.target.value);
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Make sure the phone number is 11 digits
		if (phoneNumber.length !== 11) {
			setHeader(() => "Error");
			setMessage(() => "Please enter a valid phone number");
			setIsError(() => true);
			setIsActive(() => true);
			return;
		}

		// Make sure the email is valid
		if (email !== "" && !email.includes("@")) {
			setHeader(() => "Error");
			setMessage(() => "Please enter a valid email");
			setIsError(() => true);
			setIsActive(() => true);
			return;
		}

		if (email === "") {
			setHeader(() => "Missing Field");
			setMessage(() => "Please enter a valid email");
			setIsError(() => true);
			setIsActive(() => true);
			return;
		}

		// Replace email and phone number in queryParams with the values gotten from the state
		queryParams.email = email;
		queryParams.phone = phoneNumber;

		// Map through queryParams and make sure all the values are not empty but exclude middlename
		for (const [key, value] of Object.entries(queryParams)) {
			if (value === "" && key !== "middlename" && key !== "email") {
				setHeader(() => "Error");
				setMessage(() => "Please fill all fields required fields");
				setIsError(() => true);
				setIsActive(() => true)
				return;
			}
		}

		router.push(
			{
				pathname: "/create-account/next-of-kin",
				query: { ...queryParams },
			},
			"/create-account/next-of-kin",
		);
	};

	return (
		<>
			<form
				className="space-y-6 rounded-md p-[5%] md:bg-white"
				method="POST"
				onSubmit={handleSubmit}
			>
				<div className="space-y-2 text-center">
					<h1 className="header text-2xl">Hi, {typeof window !== "undefined" && getCookie("fname").sanitizedValue}</h1>

					<p className="text-base">Review your contact information</p>
				</div>

				<div className="grid gap-6">
					<label
						className="grid gap-0.5"
						htmlFor="first-name"
					>
						<span className="font-bold text-brand-dark-purple">
							Phone Number
						</span>

						<input
							type="tel"
							name="phone-number"
							id="phone-number"
							className="input-form"
							placeholder="08105008304"
							inputMode="numeric"
							pattern="[0-9]{11}"
							maxLength={11}
							minLength={11}
							onChange={handlePhoneNumberChange}
							value={phoneNumber}
						/>
					</label>

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
							placeholder="email@example.com"
							defaultValue={queryParams.email}
							onChange={handleEmailChange}
						/>
					</label>

					<label
						className="grid gap-0.5"
						htmlFor="house-address"
					>
						<span className="font-bold text-brand-dark-purple">
							House Address
						</span>

						<input
							type="text"
							name="house-address"
							id="house-address"
							className="input-form"
							placeholder="Rivers State University"
							value={queryParams.address}
							readOnly
						/>
					</label>

					<button
						className="btn block rounded-md bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink"
						type="submit"
					>
						Continue
					</button>
				</div>
			</form>

			<AuthPopup
				isActive={isActive}
				setIsActive={setIsActive}
				header={header}
				message={message}
				isError={isError}
			/>
		</>
	);
};

export default ContactInformationForm;
