import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import Popup from "@components/dashboard/Popup";

const BankTransferFinishForm = () => {
    const router = useRouter();
    const [isToggled, setIsToggled] = useState(false);
    const [isTransactionPreviewModalAactive, setIsTransactionPreviewModalAactive] = useState(false);

    return (
        <>
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
                        <label className="space-y-1" htmlFor="amount">
                            <span className="font-medium">
                                Amount
                            </span>

                            <input className="dashboard-input no-number-increment" type="number" placeholder="₦0.00" id="amount" required />
                        </label>

                        <label className="space-y-1" htmlFor="narration">
                            <span className="font-medium">
                                Narration
                            </span>

                            <input className="dashboard-input" type="text" placeholder="Narration" id="narration" required />
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
                            className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                            type="button"
                            onClick={() => setIsTransactionPreviewModalAactive(() => true)}
                        >
                                Next
                        </button>
                    </div>
                </form>
            </div>

            <Popup isActive={isTransactionPreviewModalAactive} setIsActive={setIsTransactionPreviewModalAactive} />
        </>
    );
};

export default BankTransferFinishForm;
