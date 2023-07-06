import InfoIcon from "@assets/img/info-icon.svg";
import whyBVNLogo from "@assets/img/why-bvn-logo.png";
import AuthPopup from "@components/create-account/AuthPopup";
import validateNumberField from "@helpers/validateNumberField";
import obscurePhoneNumber from "@helpers/obscurePhoneNumber";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const VerifyOTP = () => {
    const router = useRouter();

    const [isProcessing, setIsProcessing] = useState(false);

	const [isActive, setIsActive] = useState(false);
	const [authPopup, setAuthPopup] = useState(false);
	const [header, setHeader] = useState("");
	const [message, setMessage] = useState("");
	const [isError, setIsError] = useState(false);
	const [otp, setOTP] = useState("");
	const [isLink, setIsLink] = useState(false);
	const [buttonText, setButtonText] = useState("");
	const [queryParams, setQueryParams] = useState({});
	const route = "/create-account/contact-information";

	useEffect(() => {
		if (isActive) {
			document.querySelector("body").style.overflow = "hidden";
		} else {
			document.querySelector("body").style.overflow = "auto";
		}
	}, [isActive]);

    if (Object.keys(router.query).length < 1) {
        typeof window !== "undefined" &&
            router.replace("/create-account");

        return;
    }

	const handleOTPChange = (e) => {
        const cleanedValue = e.target.value.replace(/[^\d]/g, '');

        // Allow only numbers with maximum lenght of 6
        if (!validateNumberField(cleanedValue, 6)) {
            return;
        } else {
            setOTP(cleanedValue);
        }
    };

	const handleSubmit = async (e) => {
		e.preventDefault();

        const getURLOrigin = window.location.origin;

		const data = {
			requestId: router.query.requestId,
			otpCode: otp,
			request_origin: "webapp"
		};

		const encryptData = new LogadSecurity();

		const encryptedData = encryptData.encrypt(data);

		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(encryptedData),
			redirect: "follow",
		};

        setIsProcessing(() => true);

		try {
			const request = await fetch(
                `${getURLOrigin}/api/auth/verifyRegistrationOTP`,
				requestOptions,
			);

			const encryptedResponse = await request.json();

			const response = encryptData.decrypt(encryptedResponse);

			if (response.error === false) {
                response.data.otp = otp;

                const data = {
                    ...response.data,
                    ...router.query
                }

                // Store the firstname gotten from response in a cookie
                const fname = response.data.firstname.toLowerCase().split(" ");
                const fnameCapitalized = fname.map((word) => {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                });

                document.cookie = `fname=${fnameCapitalized}`;

				setHeader(() => "OTP Verified Successfully");

                setMessage(() => `${response.message}. You can now proceed to complete your registration.`);

				setIsError(() => false);

				setAuthPopup(() => true);

				setIsLink(() => true);

				setButtonText(() => "Continue");

				setQueryParams(() => data);

				document.querySelector("body").style.overflow = "hidden";
			} else {
				setHeader(() => "OTP Verification Failed");

				setMessage(() => response.message);

				setIsError(() => true);

				setAuthPopup(() => true);

				setButtonText(() => "Try Again");

                setIsProcessing(() => false);

				document.querySelector("body").style.overflow = "hidden";
			}
        } catch (error) {
            setHeader(() => "OTP Verification Failed");

			setMessage(
				() => error.message
			);

			setIsError(() => true);

			setAuthPopup(() => true);

			setButtonText(() => "Try Again");

            setIsProcessing(() => false);

			document.querySelector("body").style.overflow = "hidden";
		}
	};

    const generateOTP = async () => {
        const getURLOrigin = window.location.origin;

        const data = {
            requestId: router.query.requestId,
			request_origin: "webapp"
        };

        const encryptData = new LogadSecurity();

		const encryptedData = encryptData.encrypt(data);

		const requestOptions = {
			method: "POST",
			body: JSON.stringify(encryptedData),
			redirect: "follow",
			headers: { "Content-Type": "application/json" },
		};

        try {
            const request = await fetch(`${getURLOrigin}/api/auth/resendRegistrationOTP`, requestOptions);

            const response = await request.json();

            if (response.error === false) {
                setHeader(() => "OTP Sent");
                setMessage(() => response.message);
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
            setMessage(() => error.message);
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
                                maxLength={6}
                                minLength={6}
                                inputMode="numeric"
                                onChange={handleOTPChange}
                                value={otp}
                                aria-label="Enter the OTP sent to your phone number"
                                required={true}
                            />
                        </label>

                        <button
                            className={`btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink disabled:bg-brand-purple/30 disabled:cursor-not-allowed disabled:pointer-events-none ${isProcessing ? 'bg-brand-purple/30 pointer-events-none select-none animate-pulse' : 'bg-brand-purple'}`}
                            type="submit"
                            disabled={otp === "" || otp.length < 6 || isProcessing ? true : false}
                        >
                            {isProcessing ? "Processing..." : "Verify OTP"}
                        </button>
                    </div>
                </form>

                <p>
                    Did’nt get any OTP?{" "}
                    <button
                        className="font-medium text-brand-purple"
                        onClick={generateOTP}
                    >
                        Resend OTP
                    </button>
                </p>
            </div>

			<AuthPopup
				isActive={authPopup}
				header={header}
				message={message}
				isError={isError}
				setIsActive={setAuthPopup}
				isLink={isLink}
				route={route}
				buttonText={buttonText}
				queryParams={queryParams}
			/>

			<Script
				id="security-script-1"
				strategy="afterInteractive"
				src="https://www.inemoni.org/mobile/assets/js/cryptLibrary.js"
			/>

			<Script
				id="security-script-2"
				strategy="afterInteractive"
				src={`https://www.inemoni.org/mobile/assets/js/logadSecurity.js?time=${Date.now()}`}
			/>
		</>
	);
};

export default VerifyOTP;
