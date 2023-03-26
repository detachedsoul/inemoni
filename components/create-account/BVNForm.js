"use client";

import Link from "next/link";
import Image from "next/image";
import InfoIcon from "@assets/img/info-icon.svg";
import whyBVNLogo from "@assets/img/why-bvn-logo.png";
import { useState, useEffect } from "react";
import AuthPopup from "@components/create-account/AuthPopup";

const BVNForm = () => {
	const [isActive, setIsActive] = useState(false);
	const [authPopup, setAuthPopup] = useState(false);
	const [header, setHeader] = useState("");
	const [message, setMessage] = useState("");
	const [isError, setIsError] = useState(false);
	const [bvn, setBVN] = useState("");
	const [isLink, setIsLink] = useState(false);
	const [buttonText, setButtonText] = useState("");
	const route = "/create-account/personal-details";

	useEffect(() => {
		if (isActive) {
			document.querySelector("body").style.overflow = "hidden";
		} else {
			document.querySelector("body").style.overflow = "auto";
		}
	}, [isActive]);

	const handleBVNChange = (e) => {
		if (/^\d{0,11}$/.test(e.target.value) === false) {
			return;
		}

		setBVN(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			id_type: "bvn",
			id_number: bvn
		};

		const reqestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
			redirect: "follow",
		};

		try {
			const request = await fetch(
				"https://inemoni.org/api/auth/validate",
				reqestOptions,
			);

			const response = await request.json();

			if (response.error === false) {
				setHeader(() => "BVN Verified Successfully");

				setMessage(
					() =>
						"BVN verification successful. Please continue to create your account.",
				);

				setIsError(() => false);

				setAuthPopup(() => true);

				setIsLink(() => true);

				setButtonText(() => "Continue");

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

				document.querySelector("body").style.overflow = "hidden";
			}
		} catch (error) {
			setHeader(() => "BVN Verification Failed");

			setMessage(
				() =>
				"BVN verification failed. Please check your BVN and try again.",
			);

			setIsError(() => true);

			setAuthPopup(() => true);

			setButtonText(() => "Try Again");

			document.querySelector("body").style.overflow = "hidden";
		}
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

				<p className="text-base">
					Create an account with us and enjoy your life 😁
				</p>
			</div>

			<div className="grid gap-6">
				<label
					className="grid gap-0.5"
					htmlFor="bvn"
				>
					<span className="font-bold text-brand-dark-purple">
						BVN
					</span>

					<input
						type="number"
						name="bvn"
						id="bvn"
						className="input-form no-number-increment"
						placeholder="Enter BVN number"
						maxLength={ 11 }
						minLength={ 11 }
						pattern="[0-9]{11}"
						onChange={ (e) => handleBVNChange(e) }
						value={bvn}
						required={true}
					/>
				</label>

				<p className="text-sm font-medium text-brand-dark-purple">
					Tip: Dial *565*0# on your registered number to get your BVN
				</p>

				<button
					className="btn block rounded-md bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink"
					type="submit"
				>
					Validate Details
				</button>
			</div>

			<div className="space-y-5">
				<p className="text-center">
					<span className="relative -top-0.5 mr-4 inline">
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
						className="font-medium text-brand-dark-purple"
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
					<div className="no-scrollbar space-y-4 overflow-y-auto rounded-t-xl bg-brand-gray p-4 text-start text-base relative">
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
							The BVN verification process only confirms that your
							personal details provided on Inemoni are the same as
							it is in your BVN and doesn’t give access to your
							account or transactions.
						</p>
					</div>
				</div>
			</div>
		</form>

		<AuthPopup
			isActive={ authPopup }
			header={ header }
			message={ message }
			isError={ isError }
			setIsActive={ setAuthPopup }
			isLink={ isLink }
			route={ route }
			buttonText={ buttonText }
		/>

		</>
	);
};

export default BVNForm;
