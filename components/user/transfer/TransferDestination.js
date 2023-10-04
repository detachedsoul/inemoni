import FailedPopup from "@components/user/FailedPopup";
import Popup from "@components/user/Popup";
import Link from "next/link";
import Image from "next/image";
import BankTransfer from "@assets/img/transaction-bank-transfer.svg";
import Wallet from "@assets/img/transaction-wallet.svg";
import MobileMoney from "@assets/img/transaction-mobile-money.svg";
import DomAccount from "@assets/img/transaction-dom-account.svg";
import InternationalBankTransfer from "@assets/img/transaction-international-bank-transfer.svg";
import { useState } from "react";

const TransferDestination = () => {
    const [isPopupActive, setIsPopupActive] = useState(false);

    return (
        <>
            <div className="grid gap-4 lg:grid-cols-2 xL:grid-cols-3">
                <Link className="bg-[#F2F2F2] text-[#666666] rounded-[12px] p-3 flex items-center gap-2.5 hover:bg-[#1C052E]/90 hover:text-[#F2F2F2] transition-colors duration-300 ease-in group" href="/user/transfer/bank">
                    <Image className="h-12 w-12" src={BankTransfer} alt="Send to a local bank" />

                    <div className="space-y-0.5 text-left">
                        <p className="font-medium text-lg leading-none text-black group-hover:text-white">
                            Send to Bank Account
                        </p>

                        <p className="text-sm">
                            Send to a Local Bank Account
                        </p>
                    </div>
                </Link>

                <button className="bg-[#F2F2F2] text-[#666666] rounded-[12px] p-3 flex items-center gap-2.5 group hover:bg-[#003314]/90 hover:text-[#F2F2F2]" type="button" onClick={ () => setIsPopupActive(() => true) }>
                    <Image className="h-12 w-12" src={Wallet} alt="Send to any Inemoni account" />

                    <div className="space-y-0.5 text-left">
                        <p className="font-medium text-lg leading-none text-black group-hover:text-white">
                            Send to Wallet
                        </p>

                        <p className="text-sm">
                            Send to any Inemoni Account
                        </p>
                    </div>
                </button>

                <Link className="bg-[#F2F2F2] text-[#666666] rounded-[12px] p-3 flex items-center gap-2.5 group hover:bg-[#22111F]/90 hover:text-[#F2F2F2]" href="/user/transfer/dom">
                    <Image className="h-12 w-12" src={ DomAccount } alt="Send to DOM Account" />

                    <div className="space-y-0.5 text-left">
                        <p className="font-medium text-lg leading-none text-black group-hover:text-white">
                            Send to DOM Account
                        </p>

                        <p className="text-sm">
                            Send to any Domiciliary account in Nigeria
                        </p>
                    </div>
                </Link>

                <button className="bg-[#F2F2F2] text-[#666666] rounded-[12px] p-3 flex items-center gap-2.5 group hover:bg-[#1C052E]/90 hover:text-[#F2F2F2] w-full" type="button" onClick={() => setIsPopupActive(() => true)}>
                    <Image className="h-12 w-12" src={ InternationalBankTransfer } alt="Send to Mobile Money" />

                    <div className="space-y-0.5 text-left">
                        <p className="font-medium text-lg leading-none text-black group-hover:text-white">
                            International Bank Transfer
                        </p>

                        <p className="text-sm">
                            Send money to any bank in the world
                        </p>
                    </div>
                </button>

                <button className="bg-[#F2F2F2] text-[#666666] rounded-[12px] p-3 flex items-center gap-2.5 group hover:bg-[#2A2E05]/90 hover:text-[#F2F2F2] w-full" type="button" onClick={() => setIsPopupActive(() => true)}>
                    <Image className="h-12 w-12" src={ MobileMoney } alt="Send to Mobile Money" />

                    <div className="space-y-0.5 text-left">
                        <p className="font-medium text-lg leading-none text-black group-hover:text-white">
                            Send to Mobile Money
                        </p>

                        <p className="text-sm">
                            Send through Mobile Money to any country in Africa
                        </p>
                    </div>
                </button>
            </div>

            <Popup isActive={isPopupActive} setIsActive={setIsPopupActive}>
                <FailedPopup header="Coming Soon" text={`This feature is currently being developed. Stay tuned!`}>
                    <button
                        className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-dark-purple bg-brand-purple"
                        type="button"
                        onClick={() => setIsPopupActive(() => false)}
                    >
                        Close
                    </button>
                </FailedPopup>
            </Popup>
        </>
    );
};

export default TransferDestination;
