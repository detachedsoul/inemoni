import Image from "next/image";
import Link from "next/link";
import BankTransfer from "@assets/img/transaction-bank-transfer.svg";
import ContactSupport from "@assets/img/transaction-support-icon.svg";

const TransactionDetails = () => {
    return (
        <div className="py-4 px-8 space-y-6">
            <div className="rounded-[10px] bg-[#E6E6E6] p-4 flex gap-4">
                <Image className="h-11 w-11" src={BankTransfer} alt="Bank Transfer" />

                <div className="-space-y-0.5">
                    <h2 className="font-medium leading-normal text-[#262626]">
                        Joseph Chikadibia
                    </h2>

                    <p>
                        Bank Transfer
                    </p>

                    <p className="text-successful font-bold">
                        +₦5,780.00
                    </p>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-[#cccccc] pb-2">
                    <span>
                        Status
                    </span>

                    <span className="font-medium text-[#262626]">
                        <span className="inline-block rounded-full p-1 bg-successful"></span> Successful
                    </span>
                </div>

                <div className="flex items-center justify-between gap-2 border-b border-[#cccccc] pb-2">
                    <span>
                        Type
                    </span>

                    <span className="font-medium text-successful">
                        Credit
                    </span>
                </div>

                <div className="flex items-center justify-between gap-2 border-b border-[#cccccc] pb-2">
                    <span>
                        Charge
                    </span>

                    <span className="font-medium text-[#262626]">
                        ₦0.00
                    </span>
                </div>

                <div className="flex items-center justify-between gap-2 border-b border-[#cccccc] pb-2">
                    <span>
                        Transaction ID
                    </span>

                    <span className="font-medium text-[#262626]">
                        61277281991821092189
                    </span>
                </div>

                <div className="flex items-center justify-between gap-2 border-b border-[#cccccc] pb-2">
                    <span>
                        Bank Name
                    </span>

                    <span className="font-medium text-[#262626]">
                        Zenith Bank
                    </span>
                </div>

                <div className="flex items-center justify-between gap-2 border-b border-[#cccccc] pb-2">
                    <span>
                        Account Number
                    </span>

                    <span className="font-medium text-[#262626]">
                        9878907812
                    </span>
                </div>

                <div className="flex items-center justify-between gap-2 border-b border-[#cccccc] pb-2">
                    <span>
                        Narration
                    </span>

                    <span className="font-medium text-[#262626]">
                        Money for Cloth
                    </span>
                </div>

                <div className="flex items-center justify-between gap-2 border-b border-[#cccccc] pb-2">
                    <span>
                        Session ID
                    </span>

                    <span className="font-medium text-[#262626]">
                        901278849389129043784783110
                    </span>
                </div>

                <div className="flex items-center justify-between gap-2 border-b border-[#cccccc] pb-2">
                    <span>
                        Date
                    </span>

                    <span className="font-medium text-[#262626]">
                        15 June, 2023, 10:02AM
                    </span>
                </div>
            </div>

            <div className="rounded-[10px] bg-white p-4 flex gap-4 shadow-[0px_4px_40px_0px_rgba(102,102,102,0.15)]">
                <Image className="h-11 w-11" src={ContactSupport} alt="Contact support" />

                <Link href="/contact-us" target="_blank" rel="noopener noreferrer">
                    <p className="font-medium leading-normal text-black">
                        Contact Support
                    </p>

                    <p className="text-sm">
                        Have an issue with this transaction?
                    </p>
                </Link>
            </div>

            <button
                className="btn block w-auto mx-auto rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                type="submit"
            >
                Download Receipt
            </button>
        </div>
    );
};

export default TransactionDetails;
