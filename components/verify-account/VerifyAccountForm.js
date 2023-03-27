import Link from "next/link";
import AuthPopup from "@components/create-account/AuthPopup";
import { useState } from "react";
import { useRouter } from "next/router";

const VerifyAccountForm = () => {
    const router = useRouter();
	const queryParams = router.query;

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
        setOTP(e.target.value);
    };

	const handleSubmit = async (e) => {
		e.preventDefault();

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
				"https://inemoni.org/api/check-verification-code",
				requestOptions,
			);

			const response = await request.json();

            if (response.error === false) {
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
				setHeader(() => "Already Verified");
				setMessage(
					() => "Your phone number has already been verified.",
				);
				setIsError(() => false);
				setIsActive(() => true);
                setIsLink(() => true);
				setButtonText(() => "Login Instead");
				document.querySelector("body").style.overflow = "hidden";

                console.log(response)
			} else {
                setHeader(() => "Verification Failed");
				setMessage(
					() =>
						"The verification code you entered is incorrect. Please try again.",
				);
				setIsError(() => true);
				setIsActive(() => true);
				document.querySelector("body").style.overflow = "hidden";
            }
		} catch (error) {
			setHeader(() => "Verification Failed");
            setMessage(() => "An error occured. Please try again later");
            setIsError(() => true);
            setIsActive(() => true);
			document.querySelector("body").style.overflow = "hidden";
		}
	};

    // Generate a new OTP
    const generateOTP = async () => {
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
            const request = await fetch(`https://inemoni.org/api/send-verification-code?app=0`, requestOptions);

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
                }, 5000);
            } else {
                setHeader(() => "OTP Not Sent");
                setMessage(() => "An error occured. Please try again later");
                setIsError(() => true);
                setIsActive(() => true);

                document.querySelector("body").style.overflow = "hidden";
            }
        } catch (error) {
            setHeader(() => "OTP Not Sent");
            setMessage(() => "An error occured. Please try again later");
            setIsError(() => true);
            setIsActive(() => true);

            document.querySelector("body").style.overflow = "hidden";
        }
    };

	return (
		<>
            <div className="rounded-md p-[5%] md:bg-white space-y-6">
                <form
                    className="space-y-6"
                    method="POST"
                    onSubmit={handleSubmit}
                >
                    <div className="mx-auto w-[90%] space-y-2 text-center">
                        <h1 className="header text-2xl">Verify OTP</h1>

                        <p className="text-base">Enter OTP sent to your phone number</p>
                    </div>

                    <div className="grid gap-6">
                        <label
                            className="grid gap-0.5"
                            htmlFor="password"
                        >
                            <span className="font-bold text-brand-dark-purple">
                                Verification Code
                            </span>

                            <input
                                type="number"
                                name="password"
                                id="password"
                                className="input-form no-number-increment [-webkit-text-security:square]"
                                placeholder="Enter OTP"
                                pattern="[0-9]{4}"
                                maxLength={4}
                                minLength={4}
                                onChange={handleOTPChange}
                                value={otp}
                                aria-label="Enter the OTP sent to your phone number"
                                required={true}
                            />
                        </label>

                        <button
                            className="btn block rounded-md bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink disabled:pointer-events-none disabled:cursor-not-allowed disabled:select-none"
                            type="submit"
                            disabled={otp === "" ? true : false}
                        >
                            Verify Account
                        </button>
                    </div>
                </form>

                <p className="text-[#979797]">
                    Did’nt any OTP?{" "}
                    <button
                        className="font-medium text-brand-dark-purple"
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
