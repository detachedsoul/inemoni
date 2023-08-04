import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { usePrimaryDetails } from "@store/useServices";
import Popup from "@components/user/Popup";
import SuccessfulPopup from "@components/user/SuccessfulPopup";
import PinPopup from "@components/user/PinPopup";
import TransferPreview from "@components/user/TransferPreview";
import FailedPopup from "@components/user/FailedPopup";
import LoadingIndicator from "@components/user/LoadingIndicator";
import getCookie from "@helpers/getCookie";
import formatCurrency from "@helpers/formatCurrency";
import stripNonNumeric from "@helpers/stripNonNumeric";

const BankTransferFinishForm = () => {
    const router = useRouter();
    const setParameters = usePrimaryDetails((state) => state.setParameters);

    const [isToggled, setIsToggled] = useState(false);
    const [popup, setPopup] = useState(false);

    // State to show either the transfer preview, transfer failed, transfer successful popups
    const preview = usePrimaryDetails((state) => state.preview);
    const setPreview = usePrimaryDetails((state) => state.setPreview);

    const pinPopup = usePrimaryDetails((state) => state.pinPopup);
    const setPinPopup = usePrimaryDetails((state) => state.setPinPopup);

    const errorMessage = usePrimaryDetails((state) => state.errorMessage);
    const setErrorMessage = usePrimaryDetails((state) => state.setErrorMessage);

    const isFailed = usePrimaryDetails((state) => state.isFailed);
    const setIsFailed = usePrimaryDetails((state) => state.setIsFailed);

    const isLoading = usePrimaryDetails((state) => state.isLoading);
    const isSuccessful = usePrimaryDetails((state) => state.isSuccessful);

    // State to hold narration and amount to be transferred
    const [amount, setAmount] = useState("");
    const [narration, setNarration] = useState("");

    // Take the user back to the account selection page if no recepient account, bank, and account name is found
    if (Object.keys(router.query).length < 1) {
        typeof window !== "undefined" && router.replace("/user/transfer/bank");

        return;
    }

    const handleAmountChange = (e) => {
        const { value } = e.target;

        // Strip all characters except number and period(.)
        const cleanedValue = stripNonNumeric(value);

        setAmount(() => cleanedValue);
    };

    const handleNarrationChange = (e) => {
        setNarration(() => e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        router.query = {
            ...router.query,
            user_token: getCookie("user_token").sanitizedValue,
            amount: amount,
            narration: narration,
        };

        setPreview(true);

        setPopup(() => true);

        setParameters(router.query);
    };

    return (
        <>
            <div className="bg-[#F2F2F2] text-[#666666] rounded-[12px] p-4 lg:w-3/5">
                <button className="flex items-center gap-2" type="button" onClick={() => router.back()}>
                    <ArrowLeft size={20} />
                    Back
                </button>

                <form
                    className="py-4 px-8 space-y-4"
                    method="POST"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <h2 className="font-medium text-lg leading-none text-black">
                            Bank Transfer
                        </h2>

                        <p>
                            Send to a Local Bank Account
                        </p>
                    </div>

                    <div className="grid gap-6">
                        <label className="grid gap-1" htmlFor="amount">
                            <span className="font-medium">
                                Amount
                            </span>

                            <span className="text-[#262626] font-bold">
                                {formatCurrency(amount)}
                            </span>

                            <input
                                className="dashboard-input no-number-increment"
                                type="text"
                                inputMode="decimal"
                                placeholder="Enter amount"
                                id="amount"
                                value={amount}
                                required
                                onChange={handleAmountChange}
                            />
                        </label>

                        <label className="space-y-1" htmlFor="narration">
                            <span className="font-medium">
                                Narration
                            </span>

                            <input
                                className="dashboard-input"
                                type="text"
                                placeholder="Narration"
                                id="narration"
                                required
                                value={narration}
                                onChange={handleNarrationChange}
                            />
                        </label>

                        <div className="flex flex-wrap items-center gap-2 justify-between">
                            <p>
                                Save as a Beneficiary
                            </p>

                            <button className="rounded-full py-1.5 px-4 bg-[#cccccc] relative" onClick={() => setIsToggled(() => !isToggled)} type="button">
                                <span className={`inline-block rounded-full p-2 transition-all ease-in duration-300 -translate-y-1/2 absolute ${isToggled ? 'translate-x-0 bg-brand-purple' : '-translate-x-full bg-white'}`}></span>
                            </button>
                        </div>

                        <button
                            className={`btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink ${!(narration !== "" && amount !== "" && amount > 0) ? 'bg-brand-purple/30 pointer-events-none select-none' : 'bg-brand-purple'} disabled:bg-brand-purple/30 disabled:pointer-events-none disabled:select-none`}
                            type="submit"
                            disabled={!(narration !== "" && amount !== "" && amount > 0)}
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>

            <Popup isActive={popup} setIsActive={setPopup} goBack={true}>
                {preview && (!pinPopup || pinPopup) && (
                    <TransferPreview name={ router.query.account_name } narration={ narration } bank={ router.query.bank_name } amount={ amount } setPopup={ setPopup } />
                )}

                {isSuccessful && !preview && (
                    <SuccessfulPopup header="Transfer Successful" message={`You’ve sent ${formatCurrency(amount)} to ${router.query.account_name}`}>
                        <div className="grid gap-2">
                            <Link
                                className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                                href="/user"
                            >
                                Back to Dashboard
                            </Link>

                            <Link
                                className="btn block rounded-md hover:text-white transition-colors duration-300 ease-in hover:bg-[#666666]"
                                href="/user/transactions"
                            >
                                View Reciept
                            </Link>
                        </div>
                    </SuccessfulPopup>
                )}

                {isFailed && !preview && errorMessage === "Invalid user pin" && (
                    <FailedPopup header="Transfer Failed" text={ errorMessage }>
                        <button
                            className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-dark-purple bg-brand-purple"
                            type="button"
                            onClick={() => {
                                setIsFailed(false);

                                setPinPopup(true);

                                setErrorMessage("");
                            }}
                        >
                            Try Again
                        </button>
                    </FailedPopup>
                )}

                {isFailed && !preview && errorMessage !== "Invalid user pin" && (
                    <FailedPopup header="Transfer Failed" text={ errorMessage }>
                        <button
                            className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-dark-purple bg-brand-purple"
                            type="button"
                            onClick={() => {
                                setIsFailed(false);

                                setPinPopup(false);

                                setPreview(true);

                                setErrorMessage("");
                            }}
                        >
                            Try Again
                        </button>
                    </FailedPopup>
                )}

                {!preview && !isFailed && !isSuccessful && pinPopup && (
                    <PinPopup endpoint="bank-transfer" />
                )}

                {isLoading && <LoadingIndicator />}
            </Popup>
        </>
    );
};

export default BankTransferFinishForm;
