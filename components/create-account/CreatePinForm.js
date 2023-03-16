"use client";

import Link from "next/link";
import AccountCreationSuccessfulPopup from "@components/create-account/AccountCreationSuccessfulPopup";
import {useState, useEffect} from "react";

const CreatePinForm = () => {
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
		if (isActive) {
			document.querySelector("body").style.overflow = "hidden";
		} else {
			document.querySelector("body").style.overflow = "auto"
		}
	}, [isActive]);

    return (
        <>
            <form
                className="space-y-6 rounded-md p-[5%] md:bg-white"
                method="POST"
            >
                <div className="mx-auto w-[90%] space-y-2 text-center">
                    <h1 className="header text-2xl">Hi 👋</h1>

                    <p className="text-base">
                        Choose a secure pin for your account
                    </p>
                </div>

                <div className="grid gap-4 md:gap-x-6">
                    <label
                        className="grid gap-0.5"
                        htmlFor="new-password"
                    >
                        <span className="font-bold text-brand-dark-purple">
                            Create PIN
                        </span>

                        <div className="flex items-center gap-2">
                            <input
                                type="password"
                                name="new-password"
                                id="new-password"
                                className="input-form text-center py-2 px-0 font-bold"
                            />

                            <input
                                type="password"
                                name="new-password"
                                id="new-password"
                                className="input-form text-center py-2 px-0 font-bold"
                            />

                            <input
                                type="password"
                                name="new-password"
                                id="new-password"
                                className="input-form text-center py-2 px-0 font-bold"
                            />

                            <input
                                type="password"
                                name="new-password"
                                id="new-password"
                                className="input-form text-center py-2 px-0 font-bold"
                            />

                            <input
                                type="password"
                                name="new-password"
                                id="new-password"
                                className="input-form text-center py-2 px-0 font-bold"
                            />

                            <input
                                type="password"
                                name="new-password"
                                id="new-password"
                                className="input-form text-center py-2 px-0 font-bold"
                            />
                        </div>
                    </label>

                    <label
                        className="grid gap-0.5"
                        htmlFor="confirm-password"
                    >
                        <span className="font-bold text-brand-dark-purple">
                            Confirm Pin
                        </span>

                        <input
                            type="password"
                            name="confirm-password"
                            id="confirm-password"
                            className="input-form"
                            placeholder="Confirm your new pin"
                        />
                    </label>

                    <p className="text-[#979797]">
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
                        className="btn block rounded-md bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink"
                        type="submit"
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
