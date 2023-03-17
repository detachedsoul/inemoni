"use client";

import Link from "next/link";
import AccountCreationSuccessfulPopup from "@components/create-account/AccountCreationSuccessfulPopup";
import {useState, useEffect} from "react";
import {useRouter} from "next/router";

const CreatePinForm = () => {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);

    console.log(router);

    useEffect(() => {
		if (isActive) {
			document.querySelector("body").style.overflow = "hidden";
		} else {
			document.querySelector("body").style.overflow = "auto";
		}
	}, [isActive]);

    useEffect(() => {
		setIsActive(() => false);

		document.querySelector("body").style.overflow = "auto";
	}, [router.pathname]);

    return (
		<>
			<form
				className="space-y-6 rounded-md p-[5%] md:bg-white"
				method="POST"
			>
				<div className="mx-auto w-[90%] space-y-2 text-center">
					<h1 className="header text-2xl">
						Finish Your Registration
					</h1>

					<p className="text-base mx-auto w-4/5">
						Choose a secure pin for your account
					</p>
				</div>

				<div className="grid gap-4 md:gap-x-6">
					<label
						className="mx-auto grid w-4/5 gap-0.5"
						htmlFor="create-pin"
					>
						<span className="font-bold text-brand-dark-purple">
							Create PIN
						</span>

						<div className="flex items-center gap-2 overflow-x-auto max-w-full no-scrollbar">
							<input
								type="password"
								name="create-pin"
								id="create-pin"
								className="input-form border-2 border-[#34c759] p-2 w-[50px] h-[50px] text-center font-bold text-[#34c759] focus:border-[#34c759]"
								value="1"
                                readOnly
							/>

							<input
								type="password"
								name="create-pin"
								id="create-pin-value-2"
								className="input-form border-2 border-[#34c759] p-2 w-[50px] h-[50px] text-center font-bold text-[#34c759] focus:border-[#34c759]"
								value="1"
                                readOnly
							/>

							<input
								type="password"
								name="create-pin"
								id="create-pin-value-3"
								className="input-form border-[#979797] p-2 w-[50px] h-[50px] text-center font-bold focus:border-[#979797]"
							/>

							<input
								type="password"
								name="create-pin"
								id="create-pin-value-4"
								className="input-form border-[#979797] p-2 w-[50px] h-[50px] text-center font-bold focus:border-[#979797]"
							/>

							<input
								type="password"
								name="create-pin"
								id="create-pin-value-5"
								className="input-form border-[#979797] p-2 w-[50px] h-[50px] text-center font-bold focus:border-[#979797]"
							/>

							<input
								type="password"
								name="create-pin"
								id="create-pin-value-6"
								className="input-form border-[#979797] p-2 w-[50px] h-[50px] text-center font-bold focus:border-[#979797]"
							/>
						</div>
					</label>

					<label
						className="mx-auto grid w-4/5 gap-0.5"
						htmlFor="confirm-pin"
					>
						<span className="font-bold text-brand-dark-purple">
							Confirm Pin
						</span>

						<div className="flex items-center gap-2 overflow-x-auto max-w-full no-scrollbar">
							<input
								type="password"
								name="confirm-pin"
								id="confirm-pin"
								className="input-form border-[#979797] p-2 w-[50px] h-[50px] text-center font-bold focus:border-[#979797]"
							/>

							<input
								type="password"
								name="confirm-pin"
								id="confirm-pin-value-2"
								className="input-form border-[#979797] p-2 w-[50px] h-[50px] text-center font-bold focus:border-[#979797]"
							/>

							<input
								type="password"
								name="confirm-pin"
								id="confirm-pin-value-3"
								className="input-form border-[#979797] p-2 w-[50px] h-[50px] text-center font-bold focus:border-[#979797]"
							/>

							<input
								type="password"
								name="confirm-pin"
								id="confirm-pin-value-4"
								className="input-form border-[#979797] p-2 w-[50px] h-[50px] text-center font-bold focus:border-[#979797]"
							/>

							<input
								type="password"
								name="confirm-pin"
								id="confirm-pin-value-5"
								className="input-form border-[#979797] p-2 w-[50px] h-[50px] text-center font-bold focus:border-[#979797]"
							/>

							<input
								type="password"
								name="confirm-pin"
								id="confirm-pin-value-6"
								className="input-form border-[#979797] p-2 w-[50px] h-[50px] text-center font-bold focus:border-[#979797]"
							/>
						</div>
					</label>

					<p className="mx-auto w-4/5 text-center text-[#979797]">
						By clicking create account, you agree to Inemoni’s{" "}
						<Link
							className="text-brand-dark-purple"
							href="/legal/terms-of-use/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Terms of Use & Privacy Policy
						</Link>
						.
					</p>

					<button
						className="btn block rounded-md bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink disabled:cursor-not-allowed disabled:pointer-events-none disabled:select-none"
						type="submit"
						onClick={(e) =>
							setIsActive(() => {
								e.preventDefault();

								return true;
							})
						}
                        disabled={isActive}
					>
						Create Account
					</button>
				</div>
			</form>

			<AccountCreationSuccessfulPopup isActive={isActive} />
		</>
	);
};

export default CreatePinForm;
