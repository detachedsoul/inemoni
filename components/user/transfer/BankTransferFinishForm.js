import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import Popup from "@components/user/Popup";
import SuccessfulPopup from "@components/user/SuccessfulPopup";
import PinPopup from "@components/user/PinPopup";
import TransferPreview from "@components/user/TransferPreview";
import FailedPopup from "@components/user/FailedPopup";
import getCookie from "@helpers/getCookie";


const BankTransferFinishForm = () => {
    const router = useRouter();

    const [isToggled, setIsToggled] = useState(false);
    const [popup, setPopup] = useState(false);

    // State to show either the transfer preview, transfer failed, transfer successful popups
    const [preview, setPreview] = useState(false);
    const [pinPopup, setPinPopup] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [isFailed, setIsFailed] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // State to hold narration and amount to be transferred
    const [amount, setAmount] = useState(0);
    const [narration, setNarration] = useState("");

    // Take the user back to the account selection page if no recepient account, bank, and account name is found
    // if (Object.keys(router.query).length < 1) {
    //     router.replace("/user/transfer/bank");

    //     return;
    // }

    const handleAmountChange = (e) => {
        const amount = Number(e.target.value);

        if (Number.isNaN(amount) || amount < 1) {
            return;
        }

        setAmount(() => amount);
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

        setPreview(() => true);

        setPopup(() => true);

        setIsSuccessful(() => false);

        setIsFailed(() => false);

        setErrorMessage(() => "");
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
                        <label className="space-y-1" htmlFor="amount">
                            <span className="font-medium">
                                Amount
                            </span>

                            <input
                                className="dashboard-input no-number-increment"
                                type="number"
                                placeholder="₦0.00"
                                id="amount"
                                step="0.01"
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
                            className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-dark-purple bg-brand-purple"
                            type="submit"
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>

            <Popup isActive={popup} setIsActive={setPopup} goBack={true} width="35%">
                {preview && (!pinPopup || pinPopup) && (
                    <TransferPreview name={ router.query.account_name } narration={ narration } bank={ router.query.bank_name } amount={ amount } setPopup={ setPopup } setPinPopup={ setPinPopup } setPreview={ setPreview } />
                )}

                {isSuccessful && !preview && (
                    <SuccessfulPopup header="Transfer Successful" message={`You’ve sent ₦${amount}.00 to ${router.query.account_name}`}>
                        <div className="grid gap-2">
                            <Link
                                className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                                href="/user"
                            >
                                Back to Dashboard
                            </Link>

                            <Link
                                className="btn block rounded-md hover:text-white transition-colors duration-300 ease-in hover:bg-[#666666]"
                                href="/user"
                            >
                                View Reciept
                            </Link>
                        </div>
                    </SuccessfulPopup>
                )}

                {isFailed && !preview && errorMessage === "Invalid user pin" && (
                    <FailedPopup header="Transfers Failedsss" text={ errorMessage }>
                        <button
                            className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-dark-purple bg-brand-purple"
                            type="button"
                            onClick={() => {
                                setIsFailed(() => false);

                                setPinPopup(() => true);
                            }}
                        >
                            Try Again
                        </button>
                    </FailedPopup>
                )}

                {isFailed && !preview && errorMessage !== "Invalid user pin" && (
                    <FailedPopup header="Transfer Failed" text={ errorMessage } retryBtn={ setPopup } />
                )}

                {!preview && !isFailed && !isSuccessful && pinPopup && (
                    <PinPopup router={ router.query } setErrorMessage={ setErrorMessage } setIsFailed={ setIsFailed } setIsSuccessful={ setIsSuccessful } setPinPopup={ setPinPopup } />
                )}
            </Popup>
        </>
    );
};

export default BankTransferFinishForm;
