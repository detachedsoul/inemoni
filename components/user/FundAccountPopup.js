import Image from "next/image";
import CopyText from "@assets/img/copy-text.svg";
import useUser from "@store/useUser";

const FundAccountPopup = () => {
    const userDetails = useUser((state) => state.userDetails);

    return (
        <div className="py-4 px-8 grid gap-8">
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

                                <div className="flex items-center justify-between gap-2">
                                    <p className="text-[#262626] text-xl font-medium">
                                        { account?.account_name }
                                    </p>

                                    <button type="button" aria-label="Copy card name">
                                        <Image src={CopyText} alt="" />
                                    </button>
                                </div>
                            </div>

                            <div className="pb-1 border-b border-[#cccccc]">
                                <p className="text-sm">
                                    ACCOUNT NUMBER
                                </p>

                                <div className="flex items-center justify-between gap-2">
                                    <p className="text-[#262626] text-xl font-medium">
                                        { account?.account_number }
                                    </p>

                                    <button type="button" aria-label="Copy card name">
                                        <Image src={CopyText} alt="" />
                                    </button>
                                </div>
                            </div>

                            <div className="pb-1 border-b border-[#cccccc]">
                                <p className="text-sm">
                                    BANK NAME
                                </p>

                                <div className="flex items-center justify-between gap-2">
                                    <p className="text-[#262626] text-xl font-medium">
                                        { account?.account_bank }
                                    </p>

                                    <button type="button" aria-label="Copy card name">
                                        <Image src={CopyText} alt="" />
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
    );
};

export default FundAccountPopup;
