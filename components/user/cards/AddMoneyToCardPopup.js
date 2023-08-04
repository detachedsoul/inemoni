import PinPopup from "@components/user/PinPopup";
import FailedPopup from "@components/user/FailedPopup";
import SuccessfulPopup from "@components/user/SuccessfulPopup";
import LoadingIndicator from "@components/user/LoadingIndicator";
import Image from "next/image";
import Link from "next/link";
import AmericanFlag from "@assets/img/american-flag.svg";
import NigerianFlag from "@assets/img/nigeria-flag-rounded.svg";
import DollarToNaira from "@assets/img/dollar-to-naira-amount-icon.svg";
import DollarRate from "@assets/img/dollar-rate-icon.svg";
import FundingFee from "@assets/img/funding-fee-icon.svg";
import formatCurrency from "@helpers/formatCurrency";
import useUser from "@store/useUser";
import { usePrimaryDetails } from "@store/useServices";
import { useState } from "react";

const AddMoneyToCardPopup = ({ rate, features, cardID }) => {
    const calculatePercent = (number, percent) => {
        return (percent / 100) * number;
    }

    const [amount, setAmount] = useState("");
    const [totalAmount, setTotalAmount] = useState(0);

    const isSuccessful = usePrimaryDetails((state) => state.isSuccessful);

    const isFailed = usePrimaryDetails((state) => state.isFailed);
    const setIsFailed = usePrimaryDetails((state) => state.setIsFailed);

    const pinPopup = usePrimaryDetails((state) => state.pinPopup);
    const setPinPopup = usePrimaryDetails((state) => state.setPinPopup);

    const userToken = useUser((state) => state.userToken);
    const isLoading = usePrimaryDetails((state) => state.isLoading);
    const errorMessage = usePrimaryDetails((state) => state.errorMessage);
    const setParameters = usePrimaryDetails((state) => state.setParameters);

    const handleAmountChange = (e) => {
        const cleanedValue = e.target.value.replace(/[^\d]/g, '');

        setAmount(cleanedValue);

        setTotalAmount(() => Number(cleanedValue) + Number((calculatePercent(cleanedValue, features.funding_fee.split("%")[0]) + 1)));
    };

    if (isLoading) {
        return <LoadingIndicator />
    }

    if (isFailed) {
        return (
            <FailedPopup header="Card Creation Failed" text={ errorMessage }>
                {errorMessage === "Invalid user pin" ? (
                    <button
                        className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-dark-purple bg-brand-purple"
                        type="button"
                        onClick={() => {
                            setIsFailed(false);

                            setPinPopup(true);
                        }}
                    >
                        Try Again
                    </button>
                ) : (
                    <button
                        className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-dark-purple bg-brand-purple"
                        type="button"
                        onClick={() => {
                            setIsFailed(false);

                            setPinPopup(false);
                        }}
                    >
                        Try Again
                    </button>
                )}
            </FailedPopup>
        );
    }

    if (pinPopup) {
        return <PinPopup endpoint="virtual-cards/topup" buttonText="Confirm" />
    }

    if (isSuccessful) {
        return (
            <SuccessfulPopup header="Card Funding Successful" message="Your virtual dollar card has successfully been funded">
                <Link
                    className="btn block w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                    href="/user/dashboard"
                >
                    Back to Dashboard
                </Link>
            </SuccessfulPopup>
        );
    };

    return (
        <form className="p-4 lg:px-8 space-y-12" method="POST">
            <div className="space-y-4">
                <h2 className="font-medium text-xl text-[#262626]">
                    Add Money to your Card
                </h2>

                <label className="block space-y-2" htmlFor="amount">
                    <span className="font-medium">
                        Enter Amount
                    </span>

                    <div className="">
                        <div className="flex gap-3 pl-4 rounded-[10px] border border-[#cccccc]">
                            <Image src={AmericanFlag} alt="Enter amount to fund in USD ($)" />

                            <input className="dashboard-input px-4 py-3 pl-0 border-none no-number-increment" type="text" placeholder="Amount to fund in USD ($)" id="amount" value={ amount } onChange={ handleAmountChange } />
                        </div>

                        <div className="w-4/5 mx-auto border-l border-[#cccccc] flex flex-col place-content-center gap-6 py-8 relative text-[#262626]">
                            <div className="pl-6 flex gap-4 items-center">
                                <Image className="absolute -translate-x-[200%] w-4" src={DollarRate} alt="Exchange rate" />

                                <p>
                                    Current Rate: $1 = { rate.funding_rate_formatted }
                                </p>
                            </div>

                            <div className="pl-6 flex gap-4 items-center">
                                <Image className="absolute -translate-x-[200%] w-4" src={FundingFee} alt="Funding fee" />

                                <p>
                                    Funding Fee: ${ (calculatePercent(amount, features.funding_fee.split("%")[0]) + 1) }
                                </p>
                            </div>

                            <div className="pl-6 flex gap-4 items-center">
                                <Image className="absolute -translate-x-[200%] w-4" src={DollarToNaira} alt="Total amount" />

                                <p>
                                    Total Amount: { new Intl.NumberFormat("en-US", {
                                        style: 'currency',
                                        currency: 'USD',
                                    }).format(totalAmount) }
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 px-4 py-3 rounded-[10px] border border-[#cccccc] text-[#262626]">
                            <Image src={NigerianFlag} alt="Enter amount to fund in USD ($)" />

                            <p>
                                { formatCurrency(totalAmount * rate.funding_rate) }
                            </p>
                        </div>
                    </div>
                </label>
            </div>

            <div className="space-y-4">
                <p>
                    <span className="font-medium">N.B.</span> Minimum funding amount is $2.00
                </p>

                <button
                    className="btn block w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                    type="button"
                    onClick={() => {
                        setPinPopup(true);
                        setParameters({
                            user_token: userToken,
                            amount: totalAmount,
                            card_id: cardID
                        });
                    }}
                >
                    Continue
                </button>
            </div>
        </form>
    );
};

export default AddMoneyToCardPopup;
