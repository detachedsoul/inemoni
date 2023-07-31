import Image from "next/image";
import Popup from "@components/user/Popup";
import CopyText from "@assets/img/copy-text.svg";
import AddMoney from "@assets/img/card-add-money.svg";
import BlockCard from "@assets/img/card-block-card.svg";
import Transactions from "@assets/img/card-transactions.svg";
import Withdraw from "@assets/img/card-withdraw.svg";
import Card from "@components/user/Card";
import AddMoneyToCardPopup from "@components/user/cards/AddMoneyToCardPopup";
import { useState } from "react";

const BlockedCard = ({ cardDetails }) => {
    const [isPopupActive, setIsPopupActive] = useState(false);

    return (
        <>
            <div className="space-y-6">
                <Card cardDetails={cardDetails} />

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

            {/* <Popup isActive={isPopupActive} setIsActive={setIsPopupActive}>
                <AddMoneyToCardPopup />
            </Popup> */}
        </>
    );
};

export default BlockedCard;
