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

const DOMTransferFinish = () => {
    const router = useRouter();

    const setParameters = usePrimaryDetails((state) => state.setParameters);

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

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [country, setCountry] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        router.query = {
            ...router.query,
            user_token: getCookie("user_token").sanitizedValue,
            receiver: {
                first_name: firstName,
                last_name: lastName,
                phone: phoneNumber,
                country: country,
                address: address
            },
        };

        setPreview(true);

        setPopup(() => true);

        setErrorMessage("");

        setParameters(router.query);
    };

    // Take the user back to the account selection page if no the need params are missing
    if (Object.keys(router.query).length < 1) {
        typeof window !== "undefined" && router.replace("/user/transfer/dom");

        return;
    }

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
                            Send to DOM Account
                        </h2>

                        <p>
                            Send to any Domiciliary account in Nigeria
                        </p>
                    </div>

                    <div className="grid gap-6">
                        <label className="space-y-1" htmlFor="first-name">
                            <span className="font-medium">
                                Receiver’s First Name
                            </span>

                            <input
                                className="dashboard-input"
                                type="text"
                                placeholder="Enter First Name"
                                id="first-name"
                                required
                                value={ firstName }
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </label>

                        <label className="space-y-1" htmlFor="last-name">
                            <span className="font-medium">
                                Receiver’s Last Name
                            </span>

                            <input
                                className="dashboard-input"
                                type="text"
                                placeholder="Enter Last Name"
                                id="last-name"
                                required
                                value={ lastName }
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </label>

                        <label className="space-y-1" htmlFor="phone-number">
                            <span className="font-medium">
                                Receiver’s Phone Number
                            </span>

                            <input
                                className="dashboard-input"
                                type="text"
                                placeholder="Enter Phone Number"
                                id="phone-number"
                                required
                                value={ phoneNumber }
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </label>

                        <label className="space-y-1" htmlFor="address">
                            <span className="font-medium">
                                Receiver’s Address
                            </span>

                            <input
                                className="dashboard-input"
                                type="text"
                                placeholder="Enter Address"
                                id="address"
                                required
                                value={ address }
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </label>

                        <label className="space-y-1" htmlFor="country">
                            <span className="font-medium">
                                Receiver’s Country
                            </span>

                            <input
                                className="dashboard-input"
                                type="text"
                                placeholder="Enter Country"
                                id="country"
                                required
                                value={ country }
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </label>

                        <button
                            className={`btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink ${!(firstName !== "" && lastName !== "" && phoneNumber !== "" && address !== "" && country !== "") ? 'bg-brand-purple/30 pointer-events-none select-none' : 'bg-brand-purple'} disabled:bg-brand-purple/30 disabled:pointer-events-none disabled:select-none`}
                            type="submit"
                            disabled={!(firstName !== "" && lastName !== "" && phoneNumber !== "" && address !== "" && country !== "")}
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>

            <Popup isActive={popup} setIsActive={setPopup} goBack={true}>
                {preview && (!pinPopup || pinPopup) && (
                    <TransferPreview name={`${firstName} ${lastName}`} narration={ router.query.narration } bank={ router.query.bank_name } amount={ router.query.amount } setPopup={ setPopup } isDollar={ true } />
                )}

                {isSuccessful && !preview && (
                    <SuccessfulPopup
                        header="Transfer Successful"
                        message={ `You’ve sent ${new Intl.NumberFormat("en-US", {
                            style: 'currency',
                            currency: 'USD',
                        }).format(Number(router.query.amount))} to ${firstName} ${lastName}` }
                    >
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
                    <PinPopup endpoint="domTransfer/transfer" />
                )}

                {isLoading && <LoadingIndicator />}
            </Popup>
        </>
    );
};

export default DOMTransferFinish;
