import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import AuthPopup from "@components/create-account/AuthPopup";

const CreatePinForm = () => {
	const router = useRouter();
	const queryParams = router.query;

	const confirmPinRef = useRef(null);

    const [isProcessing, setIsProcessing] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const [header, setHeader] = useState("");
	const [message, setMessage] = useState("");
	const [isError, setIsError] = useState(false);
	const [isLink, setIsLink] = useState(false);
	const [buttonText, setButtonText] = useState("");
	const route = "/sign-in";

	// Create 6 states to hold the 6 digits of the pin
	const [pin1, setPin1] = useState("");
	const [pin2, setPin2] = useState("");
	const [pin3, setPin3] = useState("");
	const [pin4, setPin4] = useState("");
	const [pin5, setPin5] = useState("");
	const [pin6, setPin6] = useState("");

	// Create another 6 states to hold the 6 digits of the confirm pin
	const [confirmPin1, setConfirmPin1] = useState("");
	const [confirmPin2, setConfirmPin2] = useState("");
	const [confirmPin3, setConfirmPin3] = useState("");
	const [confirmPin4, setConfirmPin4] = useState("");
	const [confirmPin5, setConfirmPin5] = useState("");
	const [confirmPin6, setConfirmPin6] = useState("");

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

	// Update the pin fields when the user types in the pin fields and makes sure it is a number with a length of 1 and focus the next field automatically
	const handlePin1Change = (e) => {
		if (e.target.value.length > 1 || isNaN(e.target.value)) {
			return;
		}

		setPin1(e.target.value);

		if(e.target.nextElementSibling.value.length < 1 && e.target.value.length > 0) {
			e.target.nextElementSibling.focus();
		}
	};

	const handlePin2Change = (e) => {
		if (e.target.value.length > 1 || isNaN(e.target.value)) {
			return;
		}

		setPin2(e.target.value);

		if(e.target.nextElementSibling.value.length < 1 && e.target.value.length > 0) {
			e.target.nextElementSibling.focus();
		}
	};

	const handlePin3Change = (e) => {
		if (e.target.value.length > 1 || isNaN(e.target.value)) {
			return;
		}

		setPin3(e.target.value);

		if(e.target.nextElementSibling.value.length < 1 && e.target.value.length > 0) {
			e.target.nextElementSibling.focus();
		}
	};

	const handlePin4Change = (e) => {
		if (e.target.value.length > 1 || isNaN(e.target.value)) {
			return;
		}

		setPin4(e.target.value);

		if(e.target.nextElementSibling.value.length < 1 && e.target.value.length > 0) {
			e.target.nextElementSibling.focus();
		}
	};

	const handlePin5Change = (e) => {
		if (e.target.value.length > 1 || isNaN(e.target.value)) {
			return;
		}

		setPin5(e.target.value);

		if(e.target.nextElementSibling.value.length < 1 && e.target.value.length > 0) {
			e.target.nextElementSibling.focus();
		}
	};

	const handlePin6Change = (e) => {
		if (e.target.value.length > 1 || isNaN(e.target.value)) {
			return;
		}

		setPin6(e.target.value);

		if(confirmPinRef.current.value.length < 1 && e.target.value.length > 0) {
			confirmPinRef.current.focus();
		}
	};

	const handlePin7Change = (e) => {
		if (e.target.value.length > 1 || isNaN(e.target.value)) {
			return;
		}

		setConfirmPin1(e.target.value);

		if(e.target.nextElementSibling.value.length < 1 && e.target.value.length > 0) {
			e.target.nextElementSibling.focus();
		}
	};

	const handlePin8Change = (e) => {
		if (e.target.value.length > 1 || isNaN(e.target.value)) {
			return;
		}

		setConfirmPin2(e.target.value);

		if (e.target.nextElementSibling.value.length < 1 && e.target.value.length > 0) {
			e.target.nextElementSibling.focus();
		}
	};

	const handlePin9Change = (e) => {
		if (e.target.value.length > 1 || isNaN(e.target.value)) {
			return;
		}

		setConfirmPin3(e.target.value);

		if(e.target.nextElementSibling.value.length < 1 && e.target.value.length > 0) {
			e.target.nextElementSibling.focus();
		}
	};

	const handlePin10Change = (e) => {
		if (e.target.value.length > 1 || isNaN(e.target.value)) {
			return;
		}

		setConfirmPin4(e.target.value);

		if(e.target.nextElementSibling.value.length < 1 && e.target.value.length > 0) {
			e.target.nextElementSibling.focus();
		}
	};

	const handlePin11Change = (e) => {
		if (e.target.value.length > 1 || isNaN(e.target.value)) {
			return;
		}

		setConfirmPin5(e.target.value);

		if(e.target.nextElementSibling.value.length < 1 && e.target.value.length > 0) {
			e.target.nextElementSibling.focus();
		}
	};

	const handlePin12Change = (e) => {
		if (e.target.value.length > 1 || isNaN(e.target.value)) {
			return;
		}

		setConfirmPin6(e.target.value);
	};

	// Enable the submit button when all the pin fields are filled
	const pins = [pin1, pin2, pin3, pin4, pin5, pin6, confirmPin1, confirmPin2, confirmPin3, confirmPin4, confirmPin5, confirmPin6];
	const isDisabled = pins.some((pin) => pin === "");

	const handleSubmit = async (e) => {
		e.preventDefault();

        setIsProcessing(() => true);

        const getURLOrigin = window.location.origin;

		// Merge all the pin to one value
		const pin = `${pin1}${pin2}${pin3}${pin4}${pin5}${pin6}`;

		// Merge all the confirm pin to one value
		const confirmPin = `${confirmPin1}${confirmPin2}${confirmPin3}${confirmPin4}${confirmPin5}${confirmPin6}`;

		// Check if both set of pins match
		if (pin !== confirmPin) {
            setIsProcessing(() => false);

			setHeader(() => "Error");
			setMessage(() => "The pins do not match");
			setIsError(() => true);
			setIsActive(() => true);
			setButtonText(() => "Try Again");
			return;
		}

		// Structure values to be sent to the server
		const data = {
			id_type: "bvn",
    		id_number: queryParams.bvn,
			fname: queryParams.firstname,
			lname: queryParams.lastname,
			mname: queryParams.middlename,
			email: queryParams.email,
			phone: queryParams.phone,
			dob: queryParams.dob,
			address: queryParams.address,
			pin: confirmPin,
			referral_code: queryParams.referralCode,
			requestId: queryParams.requestId,
			nokFname: queryParams.nokFname,
			nokLname: queryParams.nokLname,
			nokMname: queryParams.nokMname,
			nokEmail: queryParams.nokEmail,
			nokPhone: queryParams.nokPhone,
            city: queryParams.city,
            zipCode: queryParams.zipCode,
            state: queryParams.state
		};

		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
			redirect: "follow"
		};

		try {
            const request = await fetch(`${getURLOrigin}/api/auth/register`, requestOptions);

			const response = await request.json();

			if (response.error === false) {
                setIsProcessing(() => false);

				setHeader(() => "Registration Successful");
				setMessage(
					() => response.message,
				);
				setIsError(() => false);
				setIsActive(() => true);
				setIsLink(() => true);
				setButtonText(() => "Proceed to login");
			} else {
                setIsProcessing(() => false);

				setHeader(() => "Error");
				setMessage(() =>   response.message);
				setIsError(() => true);
				setButtonText(() => "Try Again");
				setIsActive(() => true);
			}
		} catch (error) {
            setIsProcessing(() => false);

			setHeader(() => "Error");
			setMessage(() => "An error occured");
			setIsError(() => true);
			setIsActive(() => true);
			setButtonText(() => "Try Again");
			setIsActive(() => true);
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
						Finish Your Registration
					</h1>

					<p className="text-base">
						Setup secure PIN for your account
					</p>
				</div>

				<div className="grid gap-4 md:gap-x-6">
					<label
						className="grid gap-1"
						htmlFor="create-pin"
					>
						<span className="font-bold">
							Create PIN
						</span>

						<div className="no-scrollbar flex max-w-full items-center gap-2 overflow-x-auto" id="create-pin">
							<input
								type="password"
                                inputMode="numeric"
								maxLength={1}
								pattern="[0-9]{1}"
								name="create-pin"
								className={`input-form no-number-increment h-[calc(100%/6)] w-[calc(100%/6)] px-2 py-5 text-center font-bold lg:py-6 ${
									pin1 !== ""
										? "border-2 border-[#34c759] text-[#34c759] hover:border-[#34c759] focus:border-[#34c759] hover:outline-[#34c759] focus:outline-[#34c759]"
										: "border-[#979797] focus:border-brand-purple"
								}`}
								value={pin1}
								onChange={handlePin1Change}
							/>

							<input
								type="password"
                                inputMode="numeric"
								maxLength={1}
								pattern="[0-9]{1}"
								name="create-pin-value-2"
								id="create-pin-value-2"
								className={`input-form no-number-increment h-[calc(100%/6)] w-[calc(100%/6)] px-2 py-5 text-center font-bold lg:py-6 ${
									pin2 !== ""
										? "border-2 border-[#34c759] text-[#34c759] hover:border-[#34c759] focus:border-[#34c759] hover:outline-[#34c759] focus:outline-[#34c759]"
										: "border-[#979797] focus:border-brand-purple"
								}`}
								value={pin2}
								onChange={handlePin2Change}
							/>

							<input
								type="password"
                                inputMode="numeric"
								maxLength={1}
								pattern="[0-9]{1}"
								name="create-pin-value-3"
								id="create-pin-value-3"
								className={`input-form no-number-increment h-[calc(100%/6)] w-[calc(100%/6)] px-2 py-5 text-center font-bold lg:py-6 ${
									pin3 !== ""
										? "border-2 border-[#34c759] text-[#34c759] hover:border-[#34c759] focus:border-[#34c759] hover:outline-[#34c759] focus:outline-[#34c759]"
										: "border-[#979797] focus:border-brand-purple"
								}`}
								value={pin3}
								onChange={handlePin3Change}
							/>

							<input
								type="password"
                                inputMode="numeric"
								maxLength={1}
								pattern="[0-9]{1}"
								name="create-pin-value-4"
								id="create-pin-value-4"
								className={`input-form no-number-increment h-[calc(100%/6)] w-[calc(100%/6)] px-2 py-5 text-center font-bold lg:py-6 ${
									pin4 !== ""
										? "border-2 border-[#34c759] text-[#34c759] hover:border-[#34c759] focus:border-[#34c759] hover:outline-[#34c759] focus:outline-[#34c759]"
										: "border-[#979797] focus:border-brand-purple"
								}`}
								value={pin4}
								onChange={handlePin4Change}
							/>

							<input
								type="password"
                                inputMode="numeric"
								maxLength={1}
								pattern="[0-9]{1}"
								name="create-pin-value-5"
								id="create-pin-value-5"
								className={`input-form no-number-increment h-[calc(100%/6)] w-[calc(100%/6)] px-2 py-5 text-center font-bold lg:py-6 ${
									pin5 !== ""
										? "border-2 border-[#34c759] text-[#34c759] hover:border-[#34c759] focus:border-[#34c759] hover:outline-[#34c759] focus:outline-[#34c759]"
										: "border-[#979797] focus:border-brand-purple"
								}`}
								value={pin5}
								onChange={handlePin5Change}
							/>

							<input
								type="password"
                                inputMode="numeric"
								maxLength={1}
								pattern="[0-9]{1}"
								name="create-pin-value-6"
								id="create-pin-value-6"
								className={`input-form no-number-increment h-[calc(100%/6)] w-[calc(100%/6)] px-2 py-5 text-center font-bold lg:py-6 ${
									pin6 !== ""
										? "border-2 border-[#34c759] text-[#34c759] hover:border-[#34c759] focus:border-[#34c759] hover:outline-[#34c759] focus:outline-[#34c759]"
										: "border-[#979797] focus:border-brand-purple"
								}`}
								value={pin6}
								onChange={handlePin6Change}
							/>
						</div>
					</label>

					<label
						className="grid gap-1"
						htmlFor="confirm-pin"
					>
						<span className="font-bold">
							Confirm Pin
						</span>

						<div className="no-scrollbar flex max-w-full items-center gap-2 overflow-x-auto" id="confirm-pin">
							<input
								type="password"
                                inputMode="numeric"
								maxLength={ 1 }
								pattern="[0-9]{1}"
								name="confirm-pin"
								className={ `input-form no-number-increment h-[calc(100%/6)] w-[calc(100%/6)] px-2 py-5 text-center font-bold lg:py-6 ${confirmPin1 !== ""
										? "border-2 border-[#34c759] text-[#34c759] hover:border-[#34c759] focus:border-[#34c759] hover:outline-[#34c759] focus:outline-[#34c759]"
										: "border-[#979797] focus:border-brand-purple"
									}` }
								value={ confirmPin1 }
								onChange={ handlePin7Change }
								ref={ confirmPinRef }
							/>

							<input
								type="password"
                                inputMode="numeric"
								maxLength={1}
								pattern="[0-9]{1}"
								name="confirm-pin-value-2"
								id="confirm-pin-value-2"
								className={`input-form no-number-increment h-[calc(100%/6)] w-[calc(100%/6)] px-2 py-5 text-center font-bold lg:py-6 ${
									confirmPin2 !== ""
										? "border-2 border-[#34c759] text-[#34c759] hover:border-[#34c759] focus:border-[#34c759] hover:outline-[#34c759] focus:outline-[#34c759]"
										: "border-[#979797] focus:border-brand-purple"
								}`}
								value={confirmPin2}
								onChange={handlePin8Change}
							/>

							<input
								type="password"
                                inputMode="numeric"
								maxLength={1}
								pattern="[0-9]{1}"
								name="confirm-pin-value-3"
								id="confirm-pin-value-3"
								className={`input-form no-number-increment h-[calc(100%/6)] w-[calc(100%/6)] px-2 py-5 text-center font-bold lg:py-6 ${
									confirmPin3 !== ""
										? "border-2 border-[#34c759] text-[#34c759] hover:border-[#34c759] focus:border-[#34c759] hover:outline-[#34c759] focus:outline-[#34c759]"
										: "border-[#979797] focus:border-brand-purple"
								}`}
								value={confirmPin3}
								onChange={handlePin9Change}
							/>

							<input
								type="password"
                                inputMode="numeric"
								maxLength={1}
								pattern="[0-9]{1}"
								name="confirm-pin-value-4"
								id="confirm-pin-value-4"
								className={`input-form no-number-increment h-[calc(100%/6)] w-[calc(100%/6)] px-2 py-5 text-center font-bold lg:py-6 ${
									confirmPin4 !== ""
										? "border-2 border-[#34c759] text-[#34c759] hover:border-[#34c759] focus:border-[#34c759] hover:outline-[#34c759] focus:outline-[#34c759]"
										: "border-[#979797] focus:border-brand-purple"
								}`}
								value={confirmPin4}
								onChange={handlePin10Change}
							/>

							<input
								type="password"
                                inputMode="numeric"
								maxLength={1}
								pattern="[0-9]{1}"
								name="confirm-pin-value-5"
								id="confirm-pin-value-5"
								className={`input-form no-number-increment h-[calc(100%/6)] w-[calc(100%/6)] px-2 py-5 text-center font-bold lg:py-6 ${
									confirmPin5 !== ""
										? "border-2 border-[#34c759] text-[#34c759] hover:border-[#34c759] focus:border-[#34c759] hover:outline-[#34c759] focus:outline-[#34c759]"
										: "border-[#979797] focus:border-brand-purple"
								}`}
								value={confirmPin5}
								onChange={handlePin11Change}
							/>

							<input
								type="password"
                                inputMode="numeric"
								maxLength={1}
								pattern="[0-9]{1}"
								name="confirm-pin-value-6"
								id="confirm-pin-value-6"
								className={`input-form no-number-increment h-[calc(100%/6)] w-[calc(100%/6)] px-2 py-5 text-center font-bold lg:py-6 ${
									confirmPin6 !== ""
										? "border-2 border-[#34c759] text-[#34c759] hover:border-[#34c759] focus:border-[#34c759] hover:outline-[#34c759] focus:outline-[#34c759]"
										: "border-[#979797] focus:border-brand-purple"
								}`}
								value={confirmPin6}
								onChange={handlePin12Change}
							/>
						</div>
					</label>

					<p className="font-medium">
						By clicking create account, you agree to Inemoni’s{" "}
						<Link
							className="text-brand-purple underline underline-brand-purple underline-offset-4"
							href="/legal/terms-of-use/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Terms of Use
						</Link>{" "}
						&{" "}
						<Link
							className="text-brand-purple underline underline-brand-purple underline-offset-4"
							href="/legal/privacy-policy/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Privacy Policy
						</Link>
						.
					</p>

					<button
						className={`btn block rounded-md bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink disabled:pointer-events-none disabled:cursor-not-allowed disabled:select-none ${isProcessing ? 'bg-brand-purple/30 pointer-events-none select-none animate-pulse' : 'bg-brand-purple'}`}
						type="submit"
						disabled={(isDisabled && !isProcessing) || isProcessing}
					>
                        { isProcessing ? "Processing..." : "Create Account" }
					</button>
				</div>
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
			/>
		</>
	);
};

export default CreatePinForm;
