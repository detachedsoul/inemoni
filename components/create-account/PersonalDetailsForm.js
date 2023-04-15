import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import AuthPopup from "@components/create-account/AuthPopup";

const PersonalDetailsForm = () => {
	const router = useRouter();
	const queryParams = router.query;

	const [header, setHeader] = useState("");
	const [message, setMessage] = useState("");
	const [isError, setIsError] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const [middleName, setMiddleName] = useState(queryParams.middlename);

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

	const handleMiddleNameChange = (e) => {
		setMiddleName(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Replace middle name in queryParams with the values gotten from the state
		queryParams.middlename = middleName;

		// Store the firstname gotten from queryParams in a cookie
		const fname = queryParams.firstname.toLowerCase().split(" ");
		const fnameCapitalized = fname.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		});

		document.cookie = `fname=${fnameCapitalized}`;

		// Map through queryParams and make sure all the values are not empty but exclude email and middlename
		for (const [key, value] of Object.entries(queryParams)) {
			if (value === "" && key !== "email" && key !== "middlename") {
				setHeader(() => "Error");
				setMessage(() => "Please fill all required fields");
				setIsError(() => true);
				setIsActive(() => true);
				return;
			}
		}

		router.push(
			{
				pathname: "/create-account/contact-information",
				query: { ...queryParams },
			},
			"/create-account/contact-information",
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
					<h1 className="header text-2xl">Hi, Welcome</h1>

					<p className="text-base">Confirm your personal details</p>
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
							placeholder="Enter your first name"
							value={queryParams.firstname}
							readOnly
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
							placeholder="Enter middle name"
							defaultValue={queryParams.middlename}
							onChange={handleMiddleNameChange}
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
							placeholder="Enter last name"
							value={queryParams.lastname}
							readOnly
						/>
					</label>

					<label
						className="grid gap-0.5"
						htmlFor="gender"
					>
						<span className="font-bold text-brand-dark-purple">
							Gender
						</span>

						<select
							className="input-select"
							name="gender"
							id="gender"
							readOnly
						>
							{queryParams.gender.toLocaleLowerCase() ===
							"male" ? (
								<option value="Male">Male</option>
							) : (
								<option value="Female">Female</option>
							)}
						</select>
					</label>

					<label
						className="grid gap-0.5"
						htmlFor="dob"
					>
						<span className="font-bold text-brand-dark-purple">
							Date of Birth
						</span>

						<input
							type="date"
							name="dob"
							id="dob"
							className="input-form"
							placeholder="02/03/2023"
							value={queryParams.dob}
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

export default PersonalDetailsForm;
