import Link from "next/link";
import Lottie from "lottie-react";
import {useRouter} from "next/router";
import {ArrowLeft, X} from "lucide-react";
import {useEffect} from "react";
import Image from "next/image";
import TransactionSuccessful from "@assets/data/lottie-files/transfer-successful";
import NotAvailable from "@assets/data/lottie-files/not-available";
import DollarCard from "@assets/img/card-dollar-card.svg";
import NairaCard from "@assets/img/card-naira-card.svg";
import PhysicalCard from "@assets/img/card-physical-card.svg";
import MasterCard from "@assets/img/card-mastercard.svg";
import VisaCard from "@assets/img/card-visa-card.svg";
import VisaCardPreview from "@assets/img/visacard-preview.svg";
import MasterCardPreview from "@assets/img/mastercard-preview.svg";
import AmericanFlag from "@assets/img/american-flag.svg";

const Popup = ({
	isActive,
	setIsActive,
    goBack = false,
    children
}) => {
    const router = useRouter();

    useEffect(() => {
        isActive ? document.querySelector("body").style.overflow = "hidden" : document.querySelector("body").style.overflow = "auto";
    }, [isActive]);

	return (
		<div
			className={`fixed top-0 left-0 z-[1024] flex h-full w-full flex-col place-items-center bg-black/50 backdrop-blur-[2px] transition-transform duration-500 ease-linear overflow-y-auto ${
				isActive ? "translate-y-0" : "translate-y-full"
			}`}
		>
			<div
				className="h-auto z-[1024] my-8 w-[calc(100%-10%)] grid gap-2 rounded-[12px] bg-[#F2F2F2] text-[#666666] px-6 py-6 min-[500px]:w-3/5 min-[600px]:w-1/2 lg:w-[40%]"
			>
                <div className={`flex items-center ${goBack ? 'justify-between' : 'justify-end'} bg-[#F2F2F2] text-[#666666]`}>
                    {goBack && (
                        <button className="flex items-center gap-2" type="button" onClick={() => router.back()}>
                            <ArrowLeft size={20} />
                            Back
                        </button>
                    )}

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

                <form className="py-4 px-8 space-y-6 hidden" method="POST">
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

                <div className="py-4 px-8 space-y-2 text-center hidden">
                    <Lottie className="h-24" animationData={TransactionSuccessful} />

                    <div className="space-y-6">
                        <div className="space-y-1 w-4/5 mx-auto">
                            <h2 className="font-medium text-lg text-[#262626]">
                                Transfer Successful
                            </h2>

                            <p className="leading-snug">
                                You’ve sent ₦25,420.00 to CHUKWUELOBE DANIEL EMENIKE
                            </p>
                        </div>

                        <div className="grid gap-2">
                            <Link
                                className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                                href="/dashboard"
                            >
                                Back to Dashboard
                            </Link>

                            <button
                                className="btn block rounded-md hover:text-white transition-colors duration-300 ease-in hover:bg-[#666666]"
                                type="button"
                            >
                                View Reciept
                            </button>
                        </div>
                    </div>
                </div>

                <div className="py-4 px-8 space-y-6">
                    <div>
                        <h2 className="font-medium text-xl text-[#262626]">
                            Choose your card
                        </h2>

                        <p className="leading-snug">
                            Select the card you would like to create
                        </p>
                    </div>

                    <div className="space-y-4">
                        <button className="rounded-[10px] p-2 border border-[#cccccc] hover:border-brand-purple hover:border-2 flex items-center gap-4 btn w-full" type="button">
                            <Image src={DollarCard} alt="Dollar Virtual Card" />

                            <p className="text-[#262626] font-medium text-lg">
                                Dollar Virtual Card
                            </p>
                        </button>

                        <button className="rounded-[10px] p-2 border border-[#cccccc] hover:border-brand-purple hover:border-2 flex items-center gap-4 btn w-full" type="button">
                            <Image src={NairaCard} alt="Naira Virtual Card" />

                            <p className="text-[#262626] font-medium text-lg">
                                Naira Virtual Card
                            </p>
                        </button>

                        <button className="rounded-[10px] p-2 border border-[#cccccc] hover:border-brand-purple hover:border-2 flex items-center gap-4 btn w-full" type="button">
                            <Image src={PhysicalCard} alt="Physical Virtual Card" />

                            <p className="text-[#262626] font-medium text-lg">
                                Physical Virtual Card
                            </p>
                        </button>
                    </div>

                    <button
                        className="btn block w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                        type="button"
                    >
                        Next
                    </button>
                </div>

                <div className="py-4 px-8 space-y-6 hidden">
                    <div>
                        <h2 className="font-medium text-xl text-[#262626]">
                            Choose your card type
                        </h2>

                        <p className="leading-snug">
                            Select the card type you would like to create
                        </p>
                    </div>

                    <div className="space-y-4">
                        <button className="rounded-[10px] p-2 border border-[#cccccc] hover:border-brand-purple hover:border-2 flex items-center gap-4 btn w-full" type="button">
                            <Image src={VisaCard} alt="Visa Card" />

                            <p className="text-[#262626] font-medium text-lg">
                                Visa Card
                            </p>
                        </button>

                        <button className="rounded-[10px] p-2 border border-[#cccccc] hover:border-brand-purple hover:border-2 flex items-center gap-4 btn w-full" type="button">
                            <Image src={MasterCard} alt="Mastercard" />

                            <p className="text-[#262626] font-medium text-lg">
                                Mastercard
                            </p>
                        </button>
                    </div>

                    <button
                        className="btn block w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                        type="button"
                    >
                        Next
                    </button>
                </div>

                <div className="py-4 px-8 space-y-6 hidden">
                    <Image className="w-full" src={VisaCardPreview} alt="Inemoni Virtual Visa Card" />

                    <div className="space-y-4">
                        <h2 className="font-medium text-xl text-[#262626]">
                            Inemoni Virtual Dollar Card, a passport to shop around the world
                        </h2>

                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                Available on both Master and Visa Card
                            </li>

                            <li>
                                $2 Card creation fee
                            </li>

                            <li>
                                $1 + 1% fee on Card funding
                            </li>

                            <li>
                                No maintenance fee
                            </li>

                            <li>
                                No Processing Fee
                            </li>

                            <li>
                                Flexible exchange rate
                            </li>
                        </ul>
                    </div>

                    <button
                        className="btn block w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                        type="button"
                    >
                        Create my Virtual Card
                    </button>
                </div>

                <div className="py-4 px-8 space-y-6 hidden">
                    <Image className="w-full" src={MasterCardPreview} alt="Inemoni Virtual Visa Card" />

                    <div className="space-y-4">
                        <h2 className="font-medium text-xl text-[#262626]">
                            Inemoni Virtual Dollar Card, a passport to shop around the world
                        </h2>

                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                Available on both Master and Visa Card
                            </li>

                            <li>
                                $2 Card creation fee
                            </li>

                            <li>
                                $1 + 1% fee on Card funding
                            </li>

                            <li>
                                No maintenance fee
                            </li>

                            <li>
                                No Processing Fee
                            </li>

                            <li>
                                Flexible exchange rate
                            </li>
                        </ul>
                    </div>

                    <button
                        className="btn block w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                        type="button"
                    >
                        Create my Virtual Card
                    </button>
                </div>

                <div className="py-4 px-8 space-y-2 text-center hidden">
                    <Lottie className="h-24" animationData={NotAvailable} />

                    <div className="space-y-6">
                        <div className="space-y-1 w-4/5 mx-auto">
                            <h2 className="font-medium text-lg text-[#262626]">
                                Oops!
                            </h2>

                            <p className="leading-snug">
                                Physical cards are not available yet. Stay tuned
                            </p>
                        </div>


                        <button
                            className="btn block w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                            type="button"
                        >
                            Close
                        </button>
                    </div>
                </div>

                <div className="py-4 px-8 space-y-2 text-center hidden">
                    <Lottie className="h-24" animationData={TransactionSuccessful} />

                    <div className="space-y-6">
                        <div className="space-y-1 w-4/5 mx-auto">
                            <h2 className="font-medium text-lg text-[#262626]">
                                Card Creation Successful
                            </h2>

                            <p className="leading-snug">
                                Your virtual dollar card has successfully been created
                            </p>
                        </div>


                        <Link
                            className="btn block w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                            href="/dashboard"
                        >
                            Back to Dashboard
                        </Link>
                    </div>
                </div>

                <form className="py-4 px-8 space-y-12 hidden" method="POST">
                    <div className="space-y-4">
                        <h2 className="font-medium text-xl text-[#262626]">
                            Add Money to your Card
                        </h2>

                        <label className="block space-y-2" htmlFor="amount">
                            <span className="font-medium">
                                Enter Amount
                            </span>

                            <div className="flex gap-2 pl-4 rounded-[10px] border border-[#cccccc]">
                                <Image src={AmericanFlag} alt="Enter amount to fund in USD ($)" />

                                <input className="dashboard-input pl-0 border-none no-number-increment" type="number" placeholder="Amount to fund in USD ($)" id="amount" min="2.00" />
                            </div>
                        </label>
                    </div>

                    <div className="space-y-4">
                        <p>
                            <span className="font-medium">N.B.</span> Minimum funding amount is $2.00
                        </p>

                        <button
                            className="btn block w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                            type="submit"
                        >
                            Continue
                        </button>
                    </div>
                </form>

                <div className="py-4 px-8 space-y-2 text-center hidden">
                    <Lottie className="h-24" animationData={TransactionSuccessful} />

                    <div className="space-y-6">
                        <div className="space-y-1 w-4/5 mx-auto">
                            <h2 className="font-medium text-lg text-[#262626]">
                                Card Unblocking Successful
                            </h2>

                            <p className="leading-snug">
                                Your virtual dollar card has successfully been unblocked
                            </p>
                        </div>


                        <Link
                            className="btn block w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                            href="/dashboard"
                        >
                            Back to Dashboard
                        </Link>
                    </div>
                </div>
			</div>
		</div>
	);
};

export default Popup;
