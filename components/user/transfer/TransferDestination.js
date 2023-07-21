import Link from "next/link";
import Image from "next/image";
import BankTransfer from "@assets/img/transaction-bank-transfer.svg";
import Wallet from "@assets/img/transaction-wallet.svg";
import MobileMoney from "@assets/img/transaction-mobile-money.svg";
import DomAccount from "@assets/img/transaction-dom-account.svg";

const TransferDestination = () => {
    return (
        <div className="space-y-4 lg:w-3/5">
            <Link className="bg-[#F2F2F2] text-[#666666] rounded-[12px] p-3 flex items-center gap-2.5 hover:bg-[#1C052E]/90 hover:text-[#F2F2F2] transition-colors duration-300 ease-in group" href="/user/transfer/bank">
                <Image className="h-12 w-12" src={BankTransfer} alt="Send to a local bank" />

                <div className="space-y-0.5">
                    <p className="font-medium text-lg leading-none text-black group-hover:text-white">
                        Send to Bank Account
                    </p>

                    <p className="text-sm">
                        Send to a Local Bank Account
                    </p>
                </div>
            </Link>

            <Link className="bg-[#F2F2F2] text-[#666666] rounded-[12px] p-3 flex items-center gap-2.5 group hover:bg-[#003314]/90 hover:text-[#F2F2F2]" href="/user/transfer/wallet">
                <Image className="h-12 w-12" src={Wallet} alt="Send to any Inemoni account" />

                <div className="space-y-0.5">
                    <p className="font-medium text-lg leading-none text-black group-hover:text-white">
                        Send to Wallet
                    </p>

                    <p className="text-sm">
                        Send to any Inemoni Account
                    </p>
                </div>
            </Link>

            <Link className="bg-[#F2F2F2] text-[#666666] rounded-[12px] p-3 flex items-center gap-2.5 group hover:bg-[#22111F]/90 hover:text-[#F2F2F2]" href="/user/transfer/wallet">
                <Image className="h-12 w-12" src={ DomAccount } alt="Send to DOM Account" />

                <div className="space-y-0.5">
                    <p className="font-medium text-lg leading-none text-black group-hover:text-white">
                        Send to DOM Account
                    </p>

                    <p className="text-sm">
                        Send to any Domiciliary account in Nigeria
                    </p>
                </div>
            </Link>

            <Link className="bg-[#F2F2F2] text-[#666666] rounded-[12px] p-3 flex items-center gap-2.5 group hover:bg-[#2A2E05]/90 hover:text-[#F2F2F2]" href="/user/transfer/wallet">
                <Image className="h-12 w-12" src={ MobileMoney } alt="Send to Mobile Money" />

                <div className="space-y-0.5">
                    <p className="font-medium text-lg leading-none text-black group-hover:text-white">
                        Send to Mobile Money
                    </p>

                    <p className="text-sm">
                        Send through Mobile Money to any country in Africa
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default TransferDestination;
