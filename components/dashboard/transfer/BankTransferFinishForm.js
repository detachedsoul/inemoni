import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import Popup from "@components/dashboard/Popup";
import SuccessfulPopup from "@components/dashboard/SuccessfulPopup";
import TransferPreview from "@components/dashboard/TransferPreview";
import FailedPopup from "@components/dashboard/FailedPopup";

const ConfirmTransfer = ({ router, setIsSuccessful, setIsFailed, setErrorMessage, setPinPopup }) => {
    const [isProcessing, setIsProcessing] = useState(false);

    // Store the user pin in a state
	const [pin1, setPin1] = useState("");
	const [pin2, setPin2] = useState("");
	const [pin3, setPin3] = useState("");
	const [pin4, setPin4] = useState("");

    const handlePin1Change = (e) => {
		if (e.target.value.length > 1 || isNaN(e.target.value)) {
			return;
		}

		setPin1(e.target.value);

		if(e.target.nextElementSibling.value.length < 1 && e.target.value.length > 0) {
			e.target.nextElementSibling.focus();
		}
	};

	const handlePin2Change = (e) => {
		if (e.target.value.length > 1 || isNaN(e.target.value)) {
			return;
		}

		setPin2(e.target.value);

		if(e.target.nextElementSibling.value.length < 1 && e.target.value.length > 0) {
			e.target.nextElementSibling.focus();
		}
	};

	const handlePin3Change = (e) => {
		if (e.target.value.length > 1 || isNaN(e.target.value)) {
			return;
		}

		setPin3(e.target.value);

		if(e.target.nextElementSibling.value.length < 1 && e.target.value.length > 0) {
			e.target.nextElementSibling.focus();
		}
	};

	const handlePin4Change = (e) => {
		if (e.target.value.length > 1 || isNaN(e.target.value)) {
			return;
		}

		setPin4(e.target.value);
	};

    // Merge all the pin to one value
	const pin = `${pin1}${pin2}${pin3}${pin4}`;

    // Enable the submit button when all the pin fields are filled
	const pins = [pin1, pin2, pin3, pin4];
	const isDisabled = pins.some((pin) => pin === "");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            pin: pin,
            ...router
        };

        const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
			redirect: "follow",
		};

        setIsProcessing(() => true);

        try {
            const request = await fetch(
                `https://justcors.com/tl_95efa64/https://www.inemoni.org/api/bank-transfer`,
                requestOptions,
            );

            const response = await request.json();

            if (response.error === false) {
                setIsProcessing(() => false);

                setIsSuccessful(() => true);

                setErrorMessage(() => response.message);
            } else {
                setIsProcessing(() => false);

                setIsFailed(() => true);

                setErrorMessage(() => response.message);

                setPinPopup(() => false);
            }
        } catch(error) {
            setIsProcessing(() => false);

            setIsFailed(() => true);

            setErrorMessage(() => "An error occured. Please try again later.");

            setPinPopup(() => false);
        }
    };

    return (
        <form
            className="py-4 px-8 space-y-6"
            method="POST"
            onSubmit={handleSubmit}
        >
            <div className="space-y-1.5">
                <h2 className="font-medium text-xl text-[#262626]">
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
                        className={`dashboard-input no-number-increment h-4 rounded-[8px] w-[calc(100%/4)] px-2 py-5 text-center font-bold lg:py-6`}
                        value={pin1}
                        onChange={handlePin1Change}
                    />

                    <input
                        type="password"
                        inputMode="numeric"
                        maxLength={1}
                        pattern="[0-9]{1}"
                        name="create-pin-value-2"
                        id="create-pin-value-2"
                        className={`dashboard-input no-number-increment h-4 rounded-[8px] w-[calc(100%/4)] px-2 py-5 text-center font-bold lg:py-6`}
                        value={pin2}
                        onChange={handlePin2Change}
                    />

                    <input
                        type="password"
                        inputMode="numeric"
                        maxLength={1}
                        pattern="[0-9]{1}"
                        name="create-pin-value-3"
                        id="create-pin-value-3"
                        className={`dashboard-input no-number-increment h-4 rounded-[8px] w-[calc(100%/4)] px-2 py-5 text-center font-bold lg:py-6`}
                        value={pin3}
                        onChange={handlePin3Change}
                    />

                    <input
                        type="password"
                        inputMode="numeric"
                        maxLength={1}
                        pattern="[0-9]{1}"
                        name="create-pin-value-4"
                        id="create-pin-value-4"
                        className={`dashboard-input no-number-increment h-4 rounded-[8px] w-[calc(100%/4)] px-2 py-5 text-center font-bold lg:py-6`}
                        value={pin4}
                        onChange={handlePin4Change}
                    />
                </div>
            </div>

            <button
                className={`btn block w-full rounded-md bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink disabled:pointer-events-none disabled:cursor-not-allowed disabled:select-none ${isProcessing ? 'bg-brand-purple/30 pointer-events-none select-none animate-pulse' : 'bg-brand-purple'} ${isDisabled && !isProcessing ? 'bg-brand-purple/30' : ''}`}
                type="submit"
                disabled={(isDisabled && !isProcessing) || isProcessing}
            >
                { isProcessing ? "Processing..." : "Transfer" }
            </button>
        </form>
    );
};

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

    const handleAmountChange = (e) => {
        const amount = Number(e.target.value);

        if (Number.isNaN(amount)) {
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
            user_token: "11a688eddf02d3522340dbb7",
            amount: amount,
            narration: narration,
        };

        setPreview(() => true);

        setPopup(() => true);

        setIsSuccessful(() => false);

        setIsFailed(() => false);

        setErrorMessage(() => "");
    };

    console.log(pinPopup, preview, popup, isFailed, isSuccessful, preview && !pinPopup)

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

            <Popup isActive={popup} setIsActive={setPopup} goBack={true}>
                {preview && !pinPopup || preview && pinPopup && (
                    <TransferPreview name={ router.query.account_name } narration={ narration } bank={ router.query.bank_name } amount={ amount } setPopup={ setPopup } setPinPopup={ setPinPopup } setPreview={ setPreview } />
                )}

                {isSuccessful && !preview && (
                    <SuccessfulPopup header="Transfer Successful" message={`You’ve sent ₦25,420.00 to ${router.query.account_name}`}>
                        <div className="grid gap-2">
                            <Link
                                className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                                href="/dashboard"
                            >
                                Back to Dashboard
                            </Link>

                            <Link
                                className="btn block rounded-md hover:text-white transition-colors duration-300 ease-in hover:bg-[#666666]"
                                href="/dashboard"
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
                    <ConfirmTransfer router={ router.query } setErrorMessage={ setErrorMessage } setIsFailed={ setIsFailed } setIsSuccessful={ setIsSuccessful } setPinPopup={ setPinPopup } />
                )}
            </Popup>
        </>
    );
};

export default BankTransferFinishForm;
