import Image from "next/image";
import AmericanFlag from "@assets/img/american-flag.svg";
import NigerianFlag from "@assets/img/nigeria-flag-rounded.svg";
import DollarToNaira from "@assets/img/dollar-to-naira-amount-icon.svg";
import DollarRate from "@assets/img/dollar-rate-icon.svg";
import FundingFee from "@assets/img/funding-fee-icon.svg";

const AddMoneyToCardPopup = () => {
    return (
        <form className="py-4 px-8 space-y-12" method="POST">
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

                            <input className="dashboard-input px-4 py-3 pl-0 border-none no-number-increment" type="number" placeholder="Amount to fund in USD ($)" id="amount" min="2.00" />
                        </div>

                        <div className="w-4/5 mx-auto border-l border-[#cccccc] flex flex-col place-content-center gap-6 py-8 relative text-[#262626]">
                            <div className="pl-6 flex gap-4 items-center">
                                <Image className="absolute -translate-x-[200%]" src={DollarRate} alt="Exchange rate" />

                                <p>
                                    Current Rate: $1 = ₦759.25
                                </p>
                            </div>

                            <div className="pl-6 flex gap-4 items-center">
                                <Image className="absolute -translate-x-[200%]" src={FundingFee} alt="Funding fee" />

                                <p>
                                    Funding Fee: $2.00
                                </p>
                            </div>

                            <div className="pl-6 flex gap-4 items-center">
                                <Image className="absolute -translate-x-[200%]" src={DollarToNaira} alt="Total amount" />

                                <p>
                                    Total Amount: $1 = $40.35
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 px-4 py-3 rounded-[10px] border border-[#cccccc] text-[#262626]">
                            <Image src={NigerianFlag} alt="Enter amount to fund in USD ($)" />

                            <p>
                                60,929.81
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
                    type="submit"
                >
                    Continue
                </button>
            </div>
        </form>
    );
};

export default AddMoneyToCardPopup;
