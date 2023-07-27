import Image from "next/image";
import CopyText from "@assets/img/copy-text.svg";
import useUser from "@store/useUser";
import copyText from "@helpers/copyText";
import { useState, useEffect } from "react";

const FundAccountPopup = () => {
    const userDetails = useUser((state) => state.userDetails);

    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        if (isCopied) {
            setTimeout(() => {
                setIsCopied(() => false);
            }, 3000);
        }
    }, [isCopied]);

    return (
        <>
            <div className="p-4 lg:px-8 grid gap-8">
                <div className="grid gap-2">
                    <h2 className="font-medium text-2xl leading-snug text-[#262626]">
                        Fund Your Account
                    </h2>

                    <p>
                        To add money to your Inemoni account, make a transfer to the account below. Funds reflect instantly.
                    </p>
                </div>

                <div className="grid gap-6">
                    {userDetails?.virtual_accounts?.map(account => (
                        <div className="grid gap-6" key={ account.id }>
                            <div className="pb-1 border-b border-[#cccccc]">
                                <p className="text-sm">
                                    BENEFICIARY
                                </p>

                                <div className="flex items-center flex-wrap justify-between gap-2">
                                    <p className="text-[#262626] text-lg lg:text-xl font-medium">
                                        { account?.account_name }
                                    </p>

                                    <button className="relative" type="button" aria-label="Copy account name" onClick={() => copyText(account?.account_name, setIsCopied)}>
                                        <Image src={CopyText} alt="Copy account name" />
                                    </button>
                                </div>
                            </div>

                            <div className="pb-1 border-b border-[#cccccc]">
                                <p className="text-sm">
                                    ACCOUNT NUMBER
                                </p>

                                <div className="flex items-center flex-wrap justify-between gap-2">
                                    <p className="text-[#262626] text-lg lg:text-xl font-medium">
                                        { account?.account_number }
                                    </p>

                                    <button className="relative" type="button" aria-label="Copy account number" onClick={() => copyText(account?.account_number, setIsCopied)}>
                                        <Image src={CopyText} alt="Copy account number" />
                                    </button>
                                </div>
                            </div>

                            <div className="pb-1 border-b border-[#cccccc]">
                                <p className="text-sm">
                                    BANK NAME
                                </p>

                                <div className="flex items-center flex-wrap justify-between gap-2">
                                    <p className="text-[#262626] text-lg lg:text-xl font-medium">
                                        { account?.account_bank }
                                    </p>

                                    <button className="relative" type="button" aria-label="Copy bank name" onClick={() => copyText(account?.account_bank, setIsCopied)}>
                                        <Image src={CopyText} alt="Copy bank name" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <p className="text-sm">
                        N.B. There will be a stamp duty charge of ₦50 applicable to all transactions exceeding ₦9,999
                    </p>
                </div>
            </div>

            <p className={`text-successful bg-successful-bg fixed ${isCopied ? '-translate-y-8' : '-translate-y-[250%]'} transition-transform ease-in duration-300 font-medium py-2 px-4 left-[calc(25%)] lg:left-[calc(45%-2rem)] text-center`}>
                Copied to clipboard
            </p>
        </>
    );
};

export default FundAccountPopup;
