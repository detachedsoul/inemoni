import InfoIcon from "@assets/img/info-icon.svg";
import whyBVNLogo from "@assets/img/why-bvn-logo.png";
import AuthPopup from "@components/create-account/AuthPopup";
import validateNumberField from "@helpers/validateNumberField";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

const BVNForm = () => {
    const [isProcessing, setIsProcessing] = useState(false);

	const [isActive, setIsActive] = useState(false);
	const [authPopup, setAuthPopup] = useState(false);
	const [header, setHeader] = useState("");
	const [message, setMessage] = useState("");
	const [isError, setIsError] = useState(false);
	const [bvn, setBVN] = useState("");
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

	const handleBVNChange = (e) => {
		const cleanedValue = e.target.value.replace(/[^\d]/g, '');

        // Allow only numbers with maximum lenght of 11
		if (!validateNumberField(cleanedValue, 11)) {
            return;
		} else {
            setBVN(cleanedValue);
        }
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

        const getURLOrigin = window.location.origin;

		const data = {
			id_type: "bvn",
			id_number: bvn,
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
				`${getURLOrigin}/api/auth/validate`,
				requestOptions,
			);

			const encryptedResponse = await request.json();

			const response = encryptData.decrypt(encryptedResponse);

			if (response.error === false) {
                // Store the firstname gotten from response in a cookie
                const fname = response.data.firstname.toLowerCase().split(" ");
                const fnameCapitalized = fname.map((word) => {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                });

                document.cookie = `fname=${fnameCapitalized}`;

				response.data.bvn = bvn;

				setHeader(() => "BVN Verified Successfully");

				setMessage(
					() =>
						"BVN verification successful. Please continue to create your account.",
				);

				setIsError(() => false);

				setAuthPopup(() => true);

				setIsLink(() => true);

				setButtonText(() => "Continue");

				setQueryParams(() => response.data);

				document.querySelector("body").style.overflow = "hidden";
			} else {
				setHeader(() => "BVN Verification Failed");

				setMessage(
					() =>
					"BVN verification failed. Please check your BVN and try again.",
				);

				setIsError(() => true);

				setAuthPopup(() => true);

				setButtonText(() => "Try Again");

                setIsProcessing(() => false);

				document.querySelector("body").style.overflow = "hidden";
			}
        } catch (error) {
            setHeader(() => "BVN Verification Failed");

			setMessage(
				() =>
				"BVN verification failed. Please try again later."
			);

			setIsError(() => true);

			setAuthPopup(() => true);

			setButtonText(() => "Try Again");

            setIsProcessing(() => false);

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
					<h1 className="font-medium text-2xl sm:text-3xl text-[#262626]">Get Started Now</h1>

					<p className="text-base">
						Enter your details to create your account
					</p>
				</div>

				<div className="grid gap-6">
					<label
						className="grid gap-1"
						htmlFor="bvn"
					>
						<span className="font-bold">
							BVN
						</span>

						<input
							type="text"
							name="bvn"
							id="bvn"
							className="input-form no-number-increment"
							placeholder="Enter BVN number"
							maxLength={11}
							minLength={11}
							inputMode="numeric"
							pattern="\d+"
							onChange={handleBVNChange}
							value={bvn}
							required={true}
						/>
					</label>

					<p className="text-sm font-medium">
						Tip: Dial *565*0# on your registered number to get your
						BVN
					</p>

					<button
						className={`btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink ${isProcessing ? 'bg-brand-purple/30 pointer-events-none select-none animate-pulse' : 'bg-brand-purple'} disabled:bg-brand-purple/30 disabled:pointer-events-none disabled:select-none disabled:animate-purple`}
						type="submit"
                        disabled={isProcessing}
					>
                        {isProcessing ? "Processing..." : "Validate Details"}
					</button>
				</div>

				<div className="space-y-5">
					<p className="text-center">
						<span className="relative -top-0.5 mr-2.5 inline">
							<Image
								className="inline-block"
								src={InfoIcon}
								alt=""
								height={20}
								width={20}
								quality={100}
							/>
						</span>

						<button
							className="text-center font-normal"
							type="button"
							onClick={() => setIsActive(() => true)}
						>
							Why do we need your BVN?
						</button>
					</p>

					<p className="text-[#979797]">
						Already have an account?{" "}
						<Link
							className="font-medium text-brand-purple"
							href="/sign-in"
						>
							Sign In
						</Link>
					</p>
				</div>

				<div
					className={`fixed -top-6 bottom-0 left-0 z-[1024] h-full w-full bg-black/60 transition-transform duration-500 ease-linear ${
						isActive ? "translate-y-0" : "translate-y-full"
					}`}
				>
					<div
						className={`fixed top-1/4 bottom-0 left-[5%] z-[1024] grid  w-[calc(100%-10%)] place-content-center transition-transform duration-500 ease-linear min-[500px]:left-[calc((100%-60%)/2)] min-[500px]:w-3/5 min-[600px]:left-[calc((100%-50%)/2)] min-[600px]:w-1/2 lg:left-[calc((100%-30%)/2)] lg:w-[30%]`}
					>
						<div className="no-scrollbar relative space-y-4 overflow-y-auto rounded-t-xl bg-brand-gray p-4 text-start text-base">
							<button
								className="absolute right-2 top-2 rounded-md bg-brand-purple py-1 px-2 text-white"
								type="button"
								aria-label="Close dialog"
								onClick={() => setIsActive(() => !isActive)}
							>
								<i className="fi-rr-cross relative top-0.5"></i>
							</button>

							<h3 className="header font-medium">
								Why is BVN information needed?
							</h3>

							<p>
								As a method of detecting fraudulent accounts, we
								request your bvn details for:
							</p>

							<ul className="list-inside list-none space-y-4">
								<li className="flex items-baseline gap-4">
									<Image
										src={whyBVNLogo}
										alt=""
										width={10}
										height={10}
									/>{" "}
									First Name
								</li>
								<li className="flex items-baseline gap-4">
									<Image
										src={whyBVNLogo}
										alt=""
										width={10}
										height={10}
									/>{" "}
									Last Name
								</li>
								<li className="flex items-baseline gap-4">
									<Image
										src={whyBVNLogo}
										alt=""
										width={10}
										height={10}
									/>{" "}
									Phone Number
								</li>
								<li className="flex items-baseline gap-4">
									<Image
										src={whyBVNLogo}
										alt=""
										width={10}
										height={10}
									/>{" "}
									Date of Birth
								</li>
								<li className="flex items-baseline gap-4">
									<Image
										src={whyBVNLogo}
										alt=""
										width={10}
										height={10}
									/>{" "}
									Image ID
								</li>
							</ul>

							<p className="text-sm">
								The BVN verification process only confirms that
								your personal details provided on Inemoni are
								the same as it is in your BVN and doesn’t give
								access to your account or transactions.
							</p>
						</div>
					</div>
				</div>
			</form>

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

export default BVNForm;
