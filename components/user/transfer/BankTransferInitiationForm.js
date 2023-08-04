import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import validateNumberField from "@helpers/validateNumberField";
import useFetch from "@helpers/useFetch";
import Popup from "@components/user/Popup";
import FailedPopup from "@components/user/FailedPopup";
import LoadingIndicator from "@components/user/LoadingIndicator";

const fetcher = async (url) => {
	const res = await fetch(url);

	const {data} = await res.json();

	return data;
};

const BankTransferInitiationForm = () => {
    const router = useRouter();

    // State to hold error messages for account details verification
    const [validationError, setValidationError] = useState("");

    // State to handle showing or hiding the popup
    const [popup, setPopup] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    // Disable proceed button until all required fields are filled
    const [isReady, setIsReady] = useState(false);

    // State for account number, bank, and beneficiary name
    const [accountNumber, setAccountNumber] = useState("");
    const [bankCode, setBankCode] = useState("");
    const [bankName, setBankName] = useState("");
    const [beneficiaryName, setBeneficiaryName] = useState("");

    // Get list of banks, error if any, and set the loading state
    const { data, isLoading, error } = useFetch(`https://www.inemoni.org/api/all-banks`, fetcher);

    const handleAccountNumberChange = async (e) => {
        const cleanedValue = e.target.value.replace(/[^\d]/g, '');

        // Allow only numbers with maximum lenght of 10
		if (!validateNumberField(cleanedValue, 10)) {
            return;
		} else {
            setAccountNumber(cleanedValue);
        }
    };

    const handleBankChange = async (e) => {
        const { value } = e.target;

        if (value === "Select Bank") {
            return "";
        }

        // Get the bank name and bank code
        const bankDetails = value.split(",");

        setBankCode(() => bankDetails[0]);
        setBankName(() => bankDetails[1]);
    };

    useEffect(() => {
        const validateAccountDetails = async () => {
            const getURLOrigin = window.location.origin;

            // Get acocunt name if bank and account number has been provided
            if (accountNumber.length === 10 && bankCode.length === 6) {
                setValidationError(() => "");

                const data = {
                    bank_code: bankCode,
                    account_number: accountNumber
                };

                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                    redirect: "follow",
                };

                setIsProcessing(() => true);
                setPopup(() => true);

                try {
                    const request = await fetch(
                        `${getURLOrigin}/api/account-details`,
                        requestOptions,
                    );

                    const response = await request.json();

                    if (response.error === false && response.data.account_name !== "default") {
                        setIsProcessing(() => false);

                        setBeneficiaryName(() => response.data.account_name);

                        setIsReady(() => true);

                        setPopup(() => false);
                    } else {
                        setIsProcessing(() => false);

                        setBeneficiaryName(() => "");

                        setIsReady(() => false);

                        setValidationError(() => "Failed to validate account details. Please check the account number and recipient bank and try again.");

                        setPopup(() => true);
                    }
                } catch(error) {
                    setIsProcessing(() => false);

                    setBeneficiaryName(() => "");

                    setIsReady(() => false);

                    setValidationError(() => error.message);

                    setPopup(() => true);
                }
            }
        };

        validateAccountDetails();
    }, [accountNumber, bankCode]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const queryParams = {
            bank_code: bankCode,
            account_number: accountNumber,
            bank_name: bankName,
            account_name: beneficiaryName
        };

        if (isReady) {
            router.push(
                {
                    pathname: '/user/transfer/bank/finish',
                    query: {...queryParams},
                },
                "/user/transfer/bank/finish"
            );
        }
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
                        <label className="space-y-1" htmlFor="account-number">
                            <span className="font-medium">
                                Account Number
                            </span>

                            <input
                                className="dashboard-input"
                                type="text"
                                placeholder="Enter Account Number"
                                id="account-number"
                                inputMode="numeric"
                                pattern="\d+"
                                maxLength={10}
                                minLength={10}
                                required
                                value={accountNumber}
                                onChange={handleAccountNumberChange}
                            />
                        </label>

                        <label className="space-y-1" htmlFor="select-bank">
                            <span className="font-medium">
                                Select Bank
                            </span>

                            {isLoading && (
                                <p>
                                    Fetching banks...
                                </p>
                            )}

                            {typeof error === "undefined" && typeof data === "undefined" && isLoading === false && (
                                <p>
                                    An error occured. Please try again later.
                                </p>
                            )}

                            {data && (
                                <select className="dashboard-select" id="select-bank" onChange={handleBankChange}>
                                    <option>
                                        Select Bank
                                    </option>

                                    {data.map((bank) => (
                                        <option value={[bank.bank_code, bank.bank_name]} key={bank.bank_code}>
                                            {bank.bank_name}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </label>

                        <label className="space-y-1" htmlFor="beneficiary-name">
                            <span className="font-medium">
                                Beneficiary Name
                            </span>

                            <input
                                className="dashboard-input cursor-not-allowed"
                                type="text"
                                readOnly
                                placeholder="Beneficiary Name"
                                id="beneficiary-name"
                                defaultValue={beneficiaryName}
                                required
                            />
                        </label>

                        <button
                            className={`btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink ${!isReady ? 'bg-brand-purple/30 pointer-events-none select-none' : 'bg-brand-purple'} disabled:bg-brand-purple/30 disabled:pointer-events-none disabled:select-none`}
                            disabled={!isReady}
                            type="submit"
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>

            <Popup isActive={popup} setIsActive={setPopup} goBack={!isProcessing}>
                {isProcessing && !validationError ? (
                    <LoadingIndicator />
                ) : !isProcessing && !validationError ? null
                    : (
                        <FailedPopup header="Verification Failed" text={validationError} retryBtn={setPopup} />
                    )
                }
            </Popup>
        </>
    );
};

export default BankTransferInitiationForm;
