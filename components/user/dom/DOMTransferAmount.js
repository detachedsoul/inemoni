import Image from "next/image";
import AmericanFlag from "@assets/img/american-flag.svg";
import NigerianFlag from "@assets/img/nigeria-flag-rounded.svg";
import DollarToNaira from "@assets/img/dollar-to-naira-amount-icon.svg";
import DollarRate from "@assets/img/dollar-rate-icon.svg";
import FundingFee from "@assets/img/funding-fee-icon.svg";
import formatCurrency from "@helpers/formatCurrency";
import useFetch from "@helpers/useFetch";
import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";;
import { useState } from "react";

const fetcher = async (url) => {
	const res = await fetch(url);

	const {data} = await res.json();

	return data;
};

const DOMTransferAmount = () => {
    const router = useRouter();

    const { data: rate } = useFetch(`https://www.inemoni.org/api/virtual-cards/get-rates`, fetcher);

    const { data: transferFee } = useFetch(`https://www.inemoni.org/api/service-fees`, fetcher);

    const [amount, setAmount] = useState("");
    const [totalAmount, setTotalAmount] = useState(0);

    const handleAmountChange = (e) => {
        const cleanedValue = e.target.value.replace(/[^\d]/g, '');

        setAmount(cleanedValue);

        if (cleanedValue > 0) {
            setTotalAmount(() => Number(cleanedValue) + Number(transferFee?.dom_bank_transfer));
        }
    };

    // Take the user back to the account selection page if no the need params are missing
    if (Object.keys(router.query).length < 1) {
        typeof window !== "undefined" && router.replace("/user/transfer/dom");

        return;
    }

    return (
        <div className="bg-[#F2F2F2] text-[#666666] rounded-[12px] p-4 lg:w-3/5 space-y-8">
            <button className="flex items-center gap-2" type="button" onClick={() => router.back()}>
                <ArrowLeft size={20} />
                Back
            </button>

            <div className="space-y-4 px-8">
                <h2 className="font-medium text-xl text-[#262626]">
                    Send to DOM Account
                </h2>

                <label className="block space-y-2" htmlFor="amount">
                    <span className="font-medium">
                        Enter Amount
                    </span>

                    <div className="">
                        <div className="flex gap-3 pl-4 rounded-[10px] border border-[#cccccc]">
                            <Image src={AmericanFlag} alt="Enter amount to fund in USD ($)" />

                            <input className="dashboard-input px-4 py-3 pl-0 border-none no-number-increment" type="text" placeholder="Amount to transfer in USD ($)" id="amount" value={ amount } onChange={ handleAmountChange } />
                        </div>

                        <div className="w-4/5 mx-auto border-l border-[#cccccc] flex flex-col place-content-center gap-6 py-8 relative text-[#262626]">
                            <div className="pl-6 flex gap-4 items-center">
                                <Image className="absolute -translate-x-[200%] w-4" src={DollarRate} alt="Exchange rate" />

                                <p>
                                    Current Rate: $1 = { rate?.funding_rate_formatted }
                                </p>
                            </div>

                            <div className="pl-6 flex gap-4 items-center">
                                <Image className="absolute -translate-x-[200%] w-4" src={FundingFee} alt="Funding fee" />

                                <p>
                                    Transfer Fee: ${ transferFee?.dom_bank_transfer }
                                </p>
                            </div>

                            <div className="pl-6 flex gap-4 items-center">
                                <Image className="absolute -translate-x-[200%] w-4" src={DollarToNaira} alt="Total amount" />

                                <p>
                                    Total Amount: { amount ? new Intl.NumberFormat("en-US", {
                                        style: 'currency',
                                        currency: 'USD',
                                    }).format(totalAmount) : new Intl.NumberFormat("en-US", {
                                        style: 'currency',
                                        currency: 'USD',
                                    }).format(amount) }
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 px-4 py-3 rounded-[10px] border border-[#cccccc] text-[#262626]">
                            <Image src={NigerianFlag} alt="Enter amount to fund in USD ($)" />

                            <p>
                                { formatCurrency(amount ? totalAmount * rate?.funding_rate : amount) }
                            </p>
                        </div>
                    </div>
                </label>
            </div>

            <div className="px-8">
                <button
                    className={`btn w-full block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink ${!amount ? 'bg-brand-purple/30 pointer-events-none select-none' : 'bg-brand-purple'} disabled:bg-brand-purple/30 disabled:pointer-events-none disabled:select-none`}
                    disabled={!amount}
                    type="button"
                    onClick={() => {
                        const queryParams = {
                            ...router.query,
                            amount: amount,
                        };

                        router.push(
                            {
                                pathname: '/user/transfer/dom/finish',
                                query: {...queryParams},
                            },
                            "/user/transfer/dom/finish"
                        );
                    }}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default DOMTransferAmount;
