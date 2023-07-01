import Image from "next/image";
import Popup from "@components/user/Popup";
import CopyText from "@assets/img/copy-text.svg";
import AddMoney from "@assets/img/card-add-money.svg";
import BlockCard from "@assets/img/card-block-card.svg";
import Transactions from "@assets/img/card-transactions.svg";
import Withdraw from "@assets/img/card-withdraw.svg";
import Card from "@components/user/Card";
import { useState } from "react";

const BlockedCard = () => {
    const [isPopupActive, setIsPopupActive] = useState(false);

    return (
        <>
            <div className="bg-[#F2F2F2] rounded-[12px] px-8 flex flex-col place-content-center min-h-screen py-8">
                <div className="space-y-8">
                    <button
                        className="btn block w-auto ml-auto rounded-md hover:text-white transition-colors duration-300 ease-in hover:bg-brand-navlink border border-[#666666]"
                        type="button"
                        onClick={() => setIsPopupActive(() => true)}
                    >
                        Add Card
                    </button>

                    <div className="w-3/5 mx-auto space-y-8">
                        <Card />

                        <div className="text-center">
                            <p className="bg-[#FFD6D6] text-[#FF0000] text-center inline-block font-bold rounded-full py-1 px-4 text-sm">
                                Card Blocked
                            </p>
                        </div>

                        <div className="space-y-4 text-center">
                            <h3 className="font-medium text-3xl leading-none">
                                Your card has been blocked
                            </h3>

                            <p>
                                Kindly unblock your card to continue using it
                            </p>

                            <button
                                className="btn block mx-auto rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                                type="button"
                            >
                                Unblock Card
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Popup isActive={isPopupActive} setIsActive={setIsPopupActive} />
        </>
    );
};

export default BlockedCard;
