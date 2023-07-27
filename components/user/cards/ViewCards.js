import Image from "next/image";
import Popup from "@components/user/Popup";
import AddCard from "@components/user/cards/AddCard";
import CopyText from "@assets/img/copy-text.svg";
import AddMoney from "@assets/img/card-add-money.svg";
import BlockCard from "@assets/img/card-block-card.svg";
import Transactions from "@assets/img/card-transactions.svg";
import Withdraw from "@assets/img/card-withdraw.svg";
import Card from "@components/user/Card";
import copyText from "@helpers/copyText";
import useUser from "@store/useUser";
import { useState, useEffect } from "react";
import { usePrimaryDetails } from "@store/useServices";

const ViewCard = () => {
    const userDetails = useUser((state) => state.userDetails);
    const userCards = useUser((state) => state.userCards);
    const errorMessage = usePrimaryDetails((state) => state.errorMessage);

    const [isPopupActive, setIsPopupActive] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        if (isCopied) {
            setTimeout(() => {
                setIsCopied(() => false);
            }, 3000);
        }
    }, [isCopied]);

    return errorMessage ? (
        <p className="font-medium text-lg">{ errorMessage }</p>
    ) : (
        <>
            <div className="bg-[#F2F2F2] rounded-[12px] px-4 lg:px-8 flex flex-col place-content-center min-h-screen py-8">
                <div className="space-y-8">
                    <div className="flex justify-between items-center gap-4 w-[55%] ml-auto">
                        <div className="flex items-center gap-2 text-center">
                            <button
                                type="button"
                            >
                                <span className="block p-2 rounded-full bg-brand-purple"></span>
                            </button>

                            <button
                                type="button"
                            >
                                <span className="block p-2 rounded-full bg-[#CDBCDA]"></span>
                            </button>
                        </div>

                        <button
                            className="btn block w-auto rounded-md hover:text-white transition-colors duration-300 ease-in hover:bg-brand-navlink border border-[#666666]"
                            type="button"
                            onClick={() => setIsPopupActive(() => true)}
                        >
                            Add Card
                        </button>
                    </div>

                    {userCards.map(cardDetails => (
                        <div className="lg:w-3/5 mx-auto space-y-6" key={ cardDetails.id }>
                            <Card cardDetails={ cardDetails } />

                            <div className="grid grid-cols-4 px-4 gap-4">
                                <button className="text-sm space-y-1" type="button">
                                    <Image className="w-10 mx-auto" src={AddMoney} alt="" width={40} />

                                    <span className="inline-block">
                                        Add Money
                                    </span>
                                </button>

                                <button className="text-sm space-y-1" type="button">
                                    <Image className="w-10 mx-auto" src={Withdraw} alt="" width={40} />

                                    <span className="inline-block">
                                        Withdraw
                                    </span>
                                </button>

                                <button className="text-sm space-y-1" type="button">
                                    <Image className="w-10 mx-auto" src={Transactions} alt="" width={40} />

                                    <span className="inline-block">
                                        Transactions
                                    </span>
                                </button>

                                <button className="text-sm space-y-1" type="button">
                                    <Image className="w-10 mx-auto" src={BlockCard} alt="" width={40} />

                                    <span className="inline-block">
                                        Block Card
                                    </span>
                                </button>
                            </div>

                            <div className="bg-white px-4 pt-4 pb-8 rounded-[16px] space-y-6">
                                <h3 className="font-medium text-lg">
                                    Your Card Details
                                </h3>

                                <div className="space-y-4">
                                    <div className="border-b border-[#cccccc] pb-1.5">
                                        <h4 className="text-[#666666] text-sm">
                                            Card Name
                                        </h4>

                                        <div className="flex items-center gap-4 justify-between">
                                            <p className="font-medium">
                                                { cardDetails.card_name }
                                            </p>

                                            <button type="button" aria-label="Copy card name" onClick={() => copyText(cardDetails.card_name, setIsCopied)}>
                                                <Image src={CopyText} alt="" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="border-b border-[#cccccc] pb-1.5">
                                        <h4 className="text-[#666666] text-sm">
                                            Card Number
                                        </h4>

                                        <div className="flex items-center gap-4 justify-between">
                                            <p className="font-medium">
                                                { cardDetails.card_number }
                                            </p>

                                            <button type="button" aria-label="Copy card number" onClick={() => copyText(cardDetails.card_number, setIsCopied)}>
                                                <Image src={CopyText} alt="" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="border-b border-[#cccccc] pb-1.5">
                                        <h4 className="text-[#666666] text-sm">
                                            Expiry Date
                                        </h4>

                                        <div className="flex items-center gap-4 justify-between">
                                            <p className="font-medium">
                                                { cardDetails.expiry_date }
                                            </p>

                                            <button type="button" aria-label="Copy card expiry date" onClick={() => copyText(cardDetails.expiry_date, setIsCopied)}>
                                                <Image src={CopyText} alt="" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="border-b border-[#cccccc] pb-1.5">
                                        <h4 className="text-[#666666] text-sm">
                                            CVV
                                        </h4>

                                        <div className="flex items-center gap-4 justify-between">
                                            <p className="font-medium">
                                                { cardDetails.cvv }
                                            </p>

                                            <button type="button" aria-label="Copy card CVV" onClick={() => copyText(cardDetails.vv, setIsCopied)}>
                                                <Image src={CopyText} alt="" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="border-b border-[#cccccc] pb-1.5">
                                        <h4 className="text-[#666666] text-sm">
                                            Billing Address
                                        </h4>

                                        <div className="flex items-center gap-4 justify-between">
                                            <p className="font-medium">
                                                { cardDetails.address }
                                            </p>

                                            <button type="button" aria-label="Copy card address" onClick={() => copyText(cardDetails.address, setIsCopied)}>
                                                <Image src={CopyText} alt="" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="border-b border-[#cccccc] pb-1.5">
                                        <h4 className="text-[#666666] text-sm">
                                            ZIP Code
                                        </h4>

                                        <div className="flex items-center gap-4 justify-between">
                                            <p className="font-medium">
                                                { cardDetails.zip_code }
                                            </p>

                                            <button type="button" aria-label="Copy card ZIP code" onClick={() => copyText(cardDetails.zip_code, setIsCopied)}>
                                                <Image src={CopyText} alt="" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="border-b border-[#cccccc] pb-1.5">
                                        <h4 className="text-[#666666] text-sm">
                                            State
                                        </h4>

                                        <div className="flex items-center gap-4 justify-between">
                                            <p className="font-medium">
                                                { cardDetails.city }
                                            </p>

                                            <button type="button" aria-label="Copy card state" onClick={() => copyText(cardDetails.city, setIsCopied)}>
                                                <Image src={CopyText} alt="" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Popup isActive={isPopupActive} setIsActive={setIsPopupActive}>
                <AddCard />
            </Popup>

            <p className={`text-successful bg-successful-bg fixed z-50 ${isCopied ? '-translate-y-20' : '-translate-y-[500%]'} transition-transform ease-in duration-300 font-medium py-2 px-4 left-[calc(25%)] lg:left-[calc(50%-2rem)] text-center`}>
                Copied to clipboard
            </p>
        </>
    );
};

export default ViewCard;
