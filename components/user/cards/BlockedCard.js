import Popup from "@components/user/Popup";
import Card from "@components/user/Card";
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

            </Popup> */}
        </>
    );
};

export default BlockedCard;
