import {useRouter} from "next/router";
import {ArrowLeft} from "lucide-react";

const BankTransferInitiationForm = () => {
    const router = useRouter();

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

                        <input className="dashboard-input" type="text" placeholder="Enter Account Number" id="account-number" required />
                    </label>

                    <label className="space-y-1" htmlFor="select-bank">
                        <span className="font-medium">
                            Select Bank
                        </span>

                        <select className="dashboard-select" id="select-bank">
                            <option>
                                Select Bank
                            </option>

                            <option>
                                UBA
                            </option>

                            <option>
                                First Bank
                            </option>

                            <option>
                                Ecobank
                            </option>
                        </select>
                    </label>

                    <label className="space-y-1" htmlFor="beneficiary-name">
                        <span className="font-medium">
                            Beneficiary Name
                        </span>

                        <input className="dashboard-input cursor-not-allowed" type="text" readOnly placeholder="Beneficiary Name" id="beneficiary-name" value="" required />
                    </label>

                    <button
                        className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                        type="submit"
                    >
                            Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BankTransferInitiationForm;
