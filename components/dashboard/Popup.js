import Image from "next/image";
import Link from "next/link";
import SuccessImage from "@assets/img/account-creation-successful-img.svg";
import ErrorImage from "@assets/img/auth-error.svg";
import {useRouter} from "next/router";
import {ArrowLeft, X} from "lucide-react";
import {useEffect} from "react";

const Popup = ({
	isActive,
	setIsActive,
	header = "Hello",
	message = "Message content",
	isError = false,
	buttonText = "Try Again",
	isLink = false,
	route = null,
	queryParams = {}
}) => {
    const router = useRouter();

    useEffect(() => {
        isActive ? document.querySelector("body").style.overflow = "hidden" : document.querySelector("body").style.overflow = "auto";
    }, []);

	return (
		<div
			className={`fixed top-0 left-0 z-[1024] flex h-full w-full flex-col place-content-center bg-black/50 backdrop-blur-[2px] transition-transform duration-500 ease-linear ${
				isActive ? "translate-y-0" : "translate-y-full"
			}`}
		>
			<div
				className="no-scrollbar z-[1024] my-12 ml-[5%] w-[calc(100%-10%)] grid gap-2 overflow-y-auto rounded-[12px] bg-[#F2F2F2] text-[#666666] px-6 pb-6 min-[500px]:ml-[calc((100%-60%)/2)] min-[500px]:w-3/5 min-[600px]:ml-[calc((100%-50%)/2)] min-[600px]:w-1/2 lg:ml-[calc((100%-45%)/2)] lg:w-[45%]"
			>
                <div className="flex items-center justify-between pt-6 sticky top-0 bg-[#F2F2F2] text-[#666666]">
                    <button className="flex items-center gap-2" type="button" onClick={() => router.back()}>
                        <ArrowLeft size={20} />
                        Back
                    </button>

                    <button className="flex items-center justify-between gap-2" type="button" onClick={() => setIsActive(() => false)} aria-label="Close transfer details preview popup">
                        <X size={20} />
                    </button>

                </div>

                <div className="py-4 px-8 space-y-4 hidden">
                    <h2 className="font-medium text-lg leading-snug text-[#262626]">
                        You are about to send money to CHUKWUELOBE DANIEL EMENIKE, Keystone Bank.
                    </h2>

                    <div className="grid gap-6">
                        <div className="grid gap-2">
                            <p className="flex flex-wrap items-center justify-between gap-2">
                                <span>
                                    Amount:
                                </span>

                                <span className="text-[#262626] font-medium">
                                    ₦25,400.00
                                </span>
                            </p>

                            <p className="flex flex-wrap items-center justify-between gap-2">
                                <span>
                                    Transfer Fee:
                                </span>

                                <span className="text-[#262626] font-medium">
                                    ₦20
                                </span>
                            </p>

                            <p className="flex flex-wrap items-center justify-between gap-2">
                                <span>
                                    Total Amount:
                                </span>

                                <span className="text-[#262626] font-medium">
                                    ₦20
                                </span>
                            </p>

                            <p className="flex flex-wrap items-center justify-between gap-2">
                                <span>
                                    Narration:
                                </span>

                                <span className="text-[#262626] font-medium">
                                    Money for Shoe Repair
                                </span>
                            </p>
                        </div>

                        <div className="grid gap-2">
                            <button
                                className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                                type="button"
                            >
                                Confirm
                            </button>

                            <button
                                className="btn block rounded-md hover:text-white transition-colors duration-300 ease-in hover:bg-[#666666]"
                                type="button"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>

                <form className="py-4 px-8 space-y-4" method="POST">
                    <div className="space-y-1.5">
                        <h2 className="font-medium text-lg text-[#262626]">
                            Enter your PIN
                        </h2>

                        <p className="leading-snug">
                            Please enter your Transaction PIN to approve transaction
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-medium">
                            Pin
                        </h3>

                        <div className="no-scrollbar flex max-w-full items-center gap-2 overflow-x-auto" id="create-pin">
							<input
								type="password"
                                inputMode="numeric"
								maxLength={1}
								pattern="[0-9]{1}"
								name="create-pin"
								className={`dashboard-input no-number-increment h-4 rounded-[8px] w-[calc(100%/6)] px-2 py-5 text-center font-bold lg:py-6`}
							/>

							<input
								type="password"
                                inputMode="numeric"
								maxLength={1}
								pattern="[0-9]{1}"
								name="create-pin-value-2"
								id="create-pin-value-2"
								className={`dashboard-input no-number-increment h-4 rounded-[8px] w-[calc(100%/6)] px-2 py-5 text-center font-bold lg:py-6`}
							/>

							<input
								type="password"
                                inputMode="numeric"
								maxLength={1}
								pattern="[0-9]{1}"
								name="create-pin-value-3"
								id="create-pin-value-3"
								className={`dashboard-input no-number-increment h-4 rounded-[8px] w-[calc(100%/6)] px-2 py-5 text-center font-bold lg:py-6`}
							/>

							<input
								type="password"
                                inputMode="numeric"
								maxLength={1}
								pattern="[0-9]{1}"
								name="create-pin-value-4"
								id="create-pin-value-4"
								className={`dashboard-input no-number-increment h-4 rounded-[8px] w-[calc(100%/6)] px-2 py-5 text-center font-bold lg:py-6`}
							/>

                            <input
								type="password"
                                inputMode="numeric"
								maxLength={1}
								pattern="[0-9]{1}"
								name="create-pin-value-4"
								id="create-pin-value-4"
								className={`dashboard-input no-number-increment h-4 rounded-[8px] w-[calc(100%/6)] px-2 py-5 text-center font-bold lg:py-6`}
							/>

                            <input
								type="password"
                                inputMode="numeric"
								maxLength={1}
								pattern="[0-9]{1}"
								name="create-pin-value-4"
								id="create-pin-value-4"
								className={`dashboard-input no-number-increment h-4 rounded-[8px] w-[calc(100%/6)] px-2 py-5 text-center font-bold lg:py-6`}
							/>
                        </div>
                    </div>

                    <button
                        className="btn block w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                        type="button"
                    >
                        Transfer
                    </button>
                </form>

                <div className="py-4 px-8 space-y-4 hidden">

                </div>
			</div>
		</div>
	);
};

export default Popup;
