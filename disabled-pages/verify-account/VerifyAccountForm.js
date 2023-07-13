import AuthPopup from "@components/create-account/AuthPopup";
import validateNumberField from "@helpers/validateNumberField";
import { useState } from "react";
import { useRouter } from "next/router";

const VerifyAccountForm = () => {
    const router = useRouter();
	const queryParams = router.query;

    const [isProcessing, setIsProcessing] = useState(false);
	const [header, setHeader] = useState("");
	const [message, setMessage] = useState("");
	const [isActive, setIsActive] = useState(false);
	const [isError, setIsError] = useState(false);
    const [isLink, setIsLink] = useState(false);
	const [buttonText, setButtonText] = useState("Try Again");
    const [otp, setOTP] = useState("");
    const route = "/sign-in";

    if (Object.keys(queryParams).length < 1) {
		typeof window !== "undefined" &&
			window.location.replace("/sign-in");

		return;
	}

    const handleOTPChange = (e) => {
        const cleanedValue = e.target.value.replace(/[^\d]/g, '');

       // Allow only numbers with maximum lenght of 4
		if (!validateNumberField(cleanedValue, 4)) {
            return;
		} else {
            setOTP(cleanedValue);
        }
    };

	const handleSubmit = async (e) => {
		e.preventDefault();

        setIsProcessing(() => true);

        const getURLOrigin = window.location.origin;

		const data = {
            user_token : queryParams.login_token,
            verification_code : otp
        };

		const requestOptions = {
			method: "POST",
			body: JSON.stringify(data),
			redirect: "follow",
			headers: { "Content-Type": "application/json" },
		};

		try {
			const request = await fetch(
				`https://justcors.com/tl_4aa3c46/https://www.inemoni.org/api/check-verification-code`,
				requestOptions,
			);

			const response = await request.json();

            if (response.error === false) {
                setIsProcessing(() => false);

                setHeader(() => "Account Successfully Verified");
                setMessage(() => "Your account has been verified successfully.");
                setIsError(() => false);
                setIsActive(() => true);
                setIsLink(() => true);
                setButtonText(() => "Login");
                document.querySelector("body").style.overflow = "hidden";
            } else if (
				response.error === true &&
				response.message === "Phone number already verified"
			) {
                setIsProcessing(() => false);

				setHeader(() => "Already Verified");
				setMessage(
					() => "Your phone number has already been verified.",
				);
				setIsError(() => false);
				setIsActive(() => true);
                setIsLink(() => true);
				setButtonText(() => "Login Instead");
				document.querySelector("body").style.overflow = "hidden";
			} else {
                setIsProcessing(() => false);

                setHeader(() => "Verification Failed");
				setMessage(
					() =>
						response.message,
				);
				setIsError(() => true);
				setIsActive(() => true);
				document.querySelector("body").style.overflow = "hidden";
            }
		} catch (error) {
            setIsProcessing(() => false);

			setHeader(() => "Verification Failed");
            setMessage(() => "An error occured. Please try again later");
            setIsError(() => true);
            setIsActive(() => true);
			document.querySelector("body").style.overflow = "hidden";
		}
	};

    // Generate a new OTP
    const generateOTP = async () => {
        const getURLOrigin = window.location.origin;

        const data = {
            user_token : queryParams.login_token
        };

		const requestOptions = {
			method: "POST",
			body: JSON.stringify(data),
			redirect: "follow",
			headers: { "Content-Type": "application/json" },
		};

        try {
            const request = await fetch(`${getURLOrigin}/api/send-verification-code?app=1`, requestOptions);

            const response = await request.json();

            if (response.error === false) {
                setHeader(() => "OTP Sent");
                setMessage(() => "A new OTP has been sent to your phone number");
                setIsError(() => false);
                setIsActive(() => true);

                document.querySelector("body").style.overflow = "hidden";

                setTimeout(() => {
                    setIsActive(() => false);
                    document.querySelector("body").style.overflow = "auto";
                }, 3000);
            } else {
                setHeader(() => "OTP Not Sent");
                setMessage(() => response.message);
                setIsError(() => true);
                setIsActive(() => true);

                document.querySelector("body").style.overflow = "hidden";
            }
        } catch (error) {
            setHeader(() => "OTP Not Sent");
            setMessage(() => "An error occured. Please try again later.");
            setIsError(() => true);
            setIsActive(() => true);

            document.querySelector("body").style.overflow = "hidden";
        }
    };

	return (
		<>
            <div className="space-y-6 rounded-[20px] p-[10%] bg-white shadow-[0px_10px_70px 10px_rgba(102,102,102,0.1)] text-[#666666] mx-4 md:mx-0">
                <form
                    className="space-y-6"
                    method="POST"
                    onSubmit={handleSubmit}
                >
                    <div className="space-y-2">
                        <h1 className="font-medium text-2xl sm:text-3xl text-[#262626]">Verify OTP</h1>

                        <p className="text-base">Enter OTP sent to your phone number</p>
                    </div>

                    <div className="grid gap-6">
                        <label
                            className="grid gap-1"
                            htmlFor="password"
                        >
                            <span className="font-bold">
                                Verification Code
                            </span>

                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="input-form"
                                placeholder="Enter OTP"
                                pattern="\d+"
                                maxLength={4}
                                minLength={4}
                                inputMode="numeric"
                                onChange={handleOTPChange}
                                value={otp}
                                aria-label="Enter the OTP sent to your phone number"
                                required={true}
                            />
                        </label>

                        <button
                            className={`btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink disabled:cursor-not-allowed disabled:pointer-events-none ${isProcessing ? 'bg-brand-purple/30 pointer-events-none select-none animate-pulse' : 'bg-brand-purple'}`}
                            type="submit"
                            disabled={otp === "" || isProcessing ? true : false}
                        >
                            {isProcessing ? "Processing..." : "Verify Account"}
                        </button>
                    </div>
                </form>

                <p>
                    Did’nt any OTP?{" "}
                    <button
                        className="font-medium text-brand-purple"
                        onClick={generateOTP}
                    >
                        Resend OTP
                    </button>
                </p>
            </div>

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

export default VerifyAccountForm;
