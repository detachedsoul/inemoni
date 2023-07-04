import AuthPopup from "@components/create-account/AuthPopup";
import getCookie from "@helpers/getCookie";
import validateNumberField from "@helpers/validateNumberField";
import obscurePhoneNumber from "@helpers/obscurePhoneNumber";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Get list of all states including the FCT
const fetchStates = async () => {
    const getURLOrigin = window.location.origin;

    try {
        const req = await fetch(`${getURLOrigin}/api/validation/getStates`);

        const res = await req.json();

        return res.data;
    } catch (error) {
        return error;
    }
};

const ContactInformationForm = () => {
	const router = useRouter();
    const queryParams = router.query;

	const [header, setHeader] = useState("");
	const [message, setMessage] = useState("");
	const [isError, setIsError] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [email, setEmail] = useState(queryParams.email);
    const [address, setAddress] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [city, setCity] = useState("");
    const [states, setStates] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedState, setSelectedState] = useState("");

    // Get the number associated with the BVN
    const phoneNumber = obscurePhoneNumber(queryParams.phone, 5, 4);

	useEffect(() => {
		if (isActive) {
			document.querySelector("body").style.overflow = "hidden";
		} else {
			document.querySelector("body").style.overflow = "auto";
		}
	}, [isActive]);

    useEffect(() => {
        const getStates = async () => {
            const result = await fetchStates();

            setStates(() => result);
            setIsLoading(() => false);
        };

        getStates();
    }, []);

    if (Object.keys(queryParams).length < 1) {
        typeof window !== "undefined" &&
            router.replace("/create-account");

        return;
    }

    const handleZipCodeChange = (e) => {
		const cleanedValue = e.target.value.replace(/[^\d]/g, '');

        // Allow only numbers with maximum lenght of 6
		if (!validateNumberField(cleanedValue, 6)) {
            return;
		} else {
            setZipCode(cleanedValue);
        }
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleCityChange = (e) => {
        if (e.target.value < 1 || e.target.value > 37) {
            return;
        }

        setCity(e.target.value);
    };

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
    };

	const handleSubmit = (e) => {
        e.preventDefault();

        setIsProcessing(() => true);

		// Make sure the phone number is 11 digits
		if (queryParams.phone.length !== 11) {
            setIsProcessing(() => false);

			setHeader(() => "Error");
			setMessage(() => "Please enter a valid phone number");
			setIsError(() => true);
			setIsActive(() => true);
			return;
		}

		// Make sure the email is valid
		if ((email !== "" && !email.includes("@")) || email === "") {
            setIsProcessing(() => false);

			setHeader(() => "Error");
			setMessage(() => "Please enter a valid email");
			setIsError(() => true);
			setIsActive(() => true);
			return;
		}

        // Makes sure the zip code is valid
        if (zipCode.length !== 6) {
            setIsProcessing(() => false);

			setHeader(() => "Error");
			setMessage(() => "Please enter a valid zip code");
			setIsError(() => true);
			setIsActive(() => true);
			return;
		}

		// Replace email and phone number in queryParams with the values gotten from the state and add other necessary values
		queryParams.email = email;
		queryParams.phone = queryParams.phone;
        queryParams.zipCode = zipCode;
        queryParams.address = address;
        queryParams.city = city;
        queryParams.state = selectedState;

		// Map through queryParams and make sure all the values are not empty but exclude middlename
		for (const [key, value] of Object.entries(queryParams)) {
			if (value === "" && key !== "middlename" && key !== "email") {
                setIsProcessing(() => false);

				setHeader(() => "Error");
				setMessage(() => "All fields are required. Please fill them all");
				setIsError(() => true);
				setIsActive(() => true);
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
				className="space-y-6 rounded-[20px] p-[10%] bg-white shadow-[0px_10px_70px 10px_rgba(102,102,102,0.1)] text-[#666666] mx-4 md:mx-0"
				method="POST"
				onSubmit={handleSubmit}
			>
				<div className="space-y-2">
					<h1 className="font-medium text-2xl sm:text-3xl text-[#262626]">Hi, {typeof window !== "undefined" && getCookie("fname").sanitizedValue}</h1>

					<p className="text-base">Review your contact information</p>
				</div>

                {isLoading ? (
                    <p className="text-center font-medium text-lg">
                        Fetching state, please wait...
                    </p>
                ) : (
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
                                className="input-form disabled:cursor-not-allowed"
                                value={ phoneNumber }
                                required
                                disabled
                                readOnly
                            />
                        </label>

                        <label
                            className="grid gap-1"
                            htmlFor="email"
                        >
                            <span className="font-bold">
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
                            className="grid gap-1"
                            htmlFor="residential-address"
                        >
                            <span className="font-bold">
                                Residential Address
                            </span>

                            <input
                                type="text"
                                name="residential-address"
                                id="residential-address"
                                className="input-form"
                                placeholder="Residential Address"
                                onChange={handleAddressChange}
                            />
                        </label>

                        <label
                            className="grid gap-1"
                            htmlFor="city"
                        >
                            <span className="font-bold">
                                City
                            </span>

                            <input
                                type="text"
                                name="city"
                                id="city"
                                className="input-form"
                                placeholder="City"
                                onChange={handleCityChange}
                            />
                        </label>

                        <label className="grid gap-1" htmlFor="state-of-origin">
                            <span className="font-bold">
                                State of Origin
                            </span>

                            <select className="input-select" id="state-of-origin" onChange={handleStateChange}>
                                <option>
                                    Select State
                                </option>
                                {states?.map(state => (
                                    <option value={state.id} key={state.id}>
                                        { state.name }
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label
                            className="grid gap-1"
                            htmlFor="zip-code"
                        >
                            <span className="font-bold">
                                Zip Code
                            </span>

                            <input
                                type="text"
                                name="zip-code"
                                id="zip-code"
                                className="input-form no-number-increment"
                                placeholder="Zip Code"
                                onChange={handleZipCodeChange}
                                value={zipCode}
                                inputMode="numeric"
                                pattern="\d+"
                                maxLength={6}
                                minLength={6}
                            />
                        </label>

                        <button
                            className={ `btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink ${isProcessing ? 'bg-brand-purple/30 pointer-events-none select-none animate-pulse' : 'bg-brand-purple'} disabled:bg-brand-purple/30 disabled:pointer-events-none disabled:select-none disabled:animate-purple` }
                            type="submit"
                            disabled={ isProcessing }
                        >
                            { isProcessing ? "Processing..." : "Continue" }
                        </button>
                    </div>
                )}

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
