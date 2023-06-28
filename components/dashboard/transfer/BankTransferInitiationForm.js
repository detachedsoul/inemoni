import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import validateNumberField from "@helpers/validateNumberField";
import useFetch from "@helpers/useFetch";

const fetcher = async (url) => {
	const res = await fetch(url);

	const {data} = await res.json();

	return data;
};

const BankTransferInitiationForm = () => {
    const router = useRouter();

    // Disable proceed button until all required fields are filled
    const [isReady, setIsReady] = useState(false);

    // State for account number, bank, and beneficiary name
    const [accountNumber, setAccountNumber] = useState("");
    const [bank, setBank] = useState("");
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
        setBank(() => e.target.value);
    };

    useEffect(() => {
        const validateAccountDetails = async () => {
            // Get acocunt name if bank and account number has been provided
            if (accountNumber && bank) {
                const data = {
                    bank_code : bank,
                    account_number : accountNumber,
                    amount: 0
                };

                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                    redirect: "follow",
                };

                try {
                    const request = await fetch(
                        `https://justcors.com/tl_a74b835/https://www.inemoni.org/api/account-details`,
                        requestOptions,
                    );

                    const response = await request.json();

                    if (response.error === false) {
                        setBeneficiaryName(() => response.data.account_name);
                        setIsReady(() => !isReady);
                    } else {
                        console.log(response.message)
                    }
                } catch(error) {
                    console.log(error);
                }
            }
        };

        validateAccountDetails();
    }, [accountNumber, bank]);

    console.log(accountNumber, bank, beneficiaryName)

    return (
        <div className="bg-[#F2F2F2] text-[#666666] rounded-[12px] p-4 lg:w-3/5">
            <button className="flex items-center gap-2" type="button" onClick={() => router.back()}>
                <ArrowLeft size={20} />
                Back
            </button>

            <form className="py-4 px-8 space-y-4" method="POST">
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
                                    <option value={bank.bank_code} key={bank.bank_code}>
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
                        className={`btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink ${!isReady? 'bg-brand-purple/30 pointer-events-none select-none' : 'bg-brand-purple'} disabled:bg-brand-purple/30 disabled:pointer-events-none disabled:select-none`}
						type="submit"
                        onClick={() => {
                            router.push({
                                pathname: '/dashboard/transfer/bank/finish',
                                query: { },
                            })
                        }}
                    >
                            Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BankTransferInitiationForm;
