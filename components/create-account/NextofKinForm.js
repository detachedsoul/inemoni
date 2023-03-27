import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import AuthPopup from "@components/create-account/AuthPopup";

const NextofKinForm = () => {
	const router = useRouter();
	const queryParams = router.query;

	const [header, setHeader] = useState("");
	const [message, setMessage] = useState("");
	const [isError, setIsError] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const [firstName, setFirstName] = useState("");
	const [middleName, setMiddleName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [referralCode, setReferralCode] = useState("");

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

	const handleFirstNameChange = (e) => {
		setFirstName(e.target.value);
	};

	const handleMiddleNameChange = (e) => {
		setMiddleName(e.target.value);
	};

	const handleLastNameChange = (e) => {
		setLastName(e.target.value);
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePhoneNumberChange = (e) => {
		setPhoneNumber(e.target.value);
	};

	const handleReferralChange = (e) => {
		setReferralCode(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// List required fields
		const requiredFields = [firstName, lastName, phoneNumber];

		// Make sure that all required fields are filled
		for (const field of requiredFields) {
			if (field === "") {
				setHeader(() => "Error");
				setMessage(
					() =>
						"The first name, last name, and phone number fields are required",
				);
				setIsError(() => true);
				setIsActive(() => true);
				return;
			}
		}

		// Map through queryParams and make sure all the values are not empty except middlename and email
		for (const [key, value] of Object.entries(queryParams)) {
			if (value === "" && key !== "middlename" && key !== "email") {
				setHeader(() => "Error");
				setMessage(() => "Please fill all required fields");
				setIsError(() => true);
				setIsActive(() => true);
				return;
			}
		}

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

		// Add all fiedls gotten from state to queryParams
		queryParams.nokFname = firstName;
		queryParams.nokMname = middleName;
		queryParams.nokLname = lastName;
		queryParams.nokPhone = phoneNumber;
		queryParams.nokEmail = email;
		queryParams.referralCode = referralCode;

		router.push(
			{
				pathname: "/create-account/create-pin",
				query: { ...queryParams },
			},
			"/create-account/create-pin",
		);
	};

	return (
		<>
			<form
				className="space-y-6 rounded-md p-[5%] md:bg-white"
				method="POST"
				onSubmit={handleSubmit}
			>
				<div className="mx-auto w-[90%] space-y-2 text-center">
					<h1 className="header text-2xl">Next of Kin</h1>

					<p className="text-base">
						Confirm your next of kin details
					</p>
				</div>

				<div className="grid gap-6">
					<label
						className="grid gap-0.5"
						htmlFor="first-name"
					>
						<span className="font-bold text-brand-dark-purple">
							First Name
						</span>

						<input
							type="text"
							name="first-name"
							id="first-name"
							className="input-form"
							placeholder="First name"
							onChange={handleFirstNameChange}
							value={firstName}
						/>
					</label>

					<label
						className="grid gap-0.5"
						htmlFor="middle-name"
					>
						<span className="font-bold text-brand-dark-purple">
							Middle Name (Optional)
						</span>

						<input
							type="text"
							name="middle-name"
							id="middle-name"
							className="input-form"
							placeholder="Middle name"
							onChange={handleMiddleNameChange}
							value={middleName}
						/>
					</label>

					<label
						className="grid gap-0.5"
						htmlFor="last-name"
					>
						<span className="font-bold text-brand-dark-purple">
							Last Name
						</span>

						<input
							type="text"
							name="last-name"
							id="last-name"
							className="input-form"
							placeholder="Last name"
							onChange={handleLastNameChange}
							value={lastName}
						/>
					</label>

					<label
						className="grid gap-0.5"
						htmlFor="phone-name"
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
							onChange={handlePhoneNumberChange}
							value={phoneNumber}
						/>
					</label>

					<label
						className="grid gap-0.5"
						htmlFor="email"
					>
						<span className="font-bold text-brand-dark-purple">
							Email Address (Optional)
						</span>

						<input
							type="email"
							name="email"
							id="email"
							className="input-form"
							placeholder="email@example.com"
							onChange={handleEmailChange}
							value={email}
						/>
					</label>

					<label
						className="grid gap-0.5"
						htmlFor="referral-code"
					>
						<span className="font-bold text-brand-dark-purple">
							Referral Code (Optional)
						</span>

						<input
							type="text"
							name="referral-code"
							id="referral-code"
							className="input-form"
							placeholder="Enter Referral Code"
							onChange={handleReferralChange}
							value={referralCode}
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

export default NextofKinForm;
