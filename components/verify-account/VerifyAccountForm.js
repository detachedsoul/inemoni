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
    const [otp, setOTP] = useState("");

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

                console.lgo(response);

                // Show the authpopup with all the neccessary information
                setHeader(() => "Account Verified");
                setMessage(() => "Your account has been verified successfully. You will be redirected to your dashboard shortly.");
                setIsError(() => false);
                setIsActive(() => true);
                document.querySelector("body").style.overflow = "hidden";


                // 	const now = new Date();
                // 	const expiration = new Date(
                // 		new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000),
                // 	);

                // 	const data = {
                // 		phone: getCookie("phone_number").sanitizedValue.toString(),
                // 		pin: password
                // 	};

                // 	const requestOptions = {
                // 		method: "POST",
                // 		body: JSON.stringify(data),
                // 		redirect: "follow",
                // 		headers: { "Content-Type": "application/json" },
                // 	};

                // 	const request = await fetch(
                // 		"https://inemoni.org/api/login",
                // 		requestOptions,
                // 	);

                // 	const response = await request.json();

                // 	if (
                // 		response.error === false &&
                // 		response.account_verified === true
                // 	) {
                // 		setHeader(() => "Login Successful");

                // 		setMessage(
                // 			() =>
                // 				"Login successful. You will be redirected to your dashboard shortly.",
                // 		);

                // 		setIsError(() => false);

                // 		setIsActive(() => true);

                // 		document.querySelector("body").style.overflow = "hidden";

                // 		document.cookie = `is_logged_in=${true};expires=${expiration.toGMTString()};path=/`;
                // 		document.cookie = `user_login_token=${
                // 			response.data.login_token
                // 		};expires=${expiration.toGMTString()};path=/`;
                // 		document.cookie = `phone_number=0${
                // 			response.data.uid
                // 		};expires=${expiration.toGMTString()};path=/`;
                // 		document.cookie = `session_data=${
                // 			response.data.session_data
                // 		};expires=${expiration.toGMTString()};path=/`;

                // 		setTimeout(() => {
                // 			window.location.replace(
                // 				`https://www.inemoni.org/mobile/__initSession?session_data=${response.data.session_data}`,
                // 			);

                // 			document.querySelector("body").style.overflow = "auto";
                // 		}, 3000);
                // 	} else if (
                // 		response.error === false &&
                // 		response.account_verified === false
                // 	) {
                // 		setHeader(() => "Account Not Verified");

                // 		setMessage(
                // 			() =>
                // 				"Your account has not been verified. Please verify your account to continue.",
                // 		);

                // 		setIsError(() => true);

                // 		setIsActive(() => true);

                // 		document.querySelector("body").style.overflow = "hidden";
                // 	} else {
                // 		setHeader(() => "Login Failed");

                // 		setMessage(
                // 			() =>
                // 				"Login failed. Please check your phone number and pin and try again.",
                // 		);

                // 		setIsError(() => true);

                // 		setIsActive(() => true);

                // 		document.querySelector("body").style.overflow = "hidden";
                // 	}
                // } else if (
                // 	response.error === false &&
                // 	response.account_verified === false
                // ) {
                // 	setHeader(() => "Account Not Verified");

                // 	setMessage(
                // 		() =>
                // 			"Your account has not been verified. Please verify your account to continue.",
                // 	);

                // 	setIsError(() => true);

                // 	setIsActive(() => true);

                // 	document.querySelector("body").style.overflow = "hidden";
                // } else {
                // 	setHeader(() => "Login Failed");

                // 	setMessage(
                // 		() => "Login failed. Please check your pin and try again.",
                // 	);

                // 	setIsError(() => true);

                // 	setIsActive(() => true);

                // 	document.querySelector("body").style.overflow = "hidden";
                // }
            } else {
                setHeader(() => "Verification Failed");
                setMessage(() => "The verification code you entered is incorrect. Please try again.");
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
                                pattern="[0-9]{6}"
                                maxLength={6}
                                minLength={6}
                                onChange={handleOTPChange}
                                value={otp}
                                aria-label="Enter the OTP sent to your phone number"
                                required={true}
                            />
                        </label>

                        <button
                            className="btn block rounded-md bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink"
                            type="submit"
                        >
                            Sign In
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
			/>
		</>
	);
};

export default VerifyAccountForm;
