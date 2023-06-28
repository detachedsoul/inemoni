import Image from "next/image";
import Popup from "@components/dashboard/Popup";
import CopyText from "@assets/img/copy-text.svg";
import AddMoney from "@assets/img/card-add-money.svg";
import BlockCard from "@assets/img/card-block-card.svg";
import Transactions from "@assets/img/card-transactions.svg";
import Withdraw from "@assets/img/card-withdraw.svg";
import Card from "@components/dashboard/Card";
import { useState } from "react";

const ViewCard = () => {
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

                    <div className="w-3/5 mx-auto space-y-6">
                        <Card />

                        <div className="grid grid-cols-4 px-4 gap-4">
                            <button className="text-sm space-y-1" type="button">
                                <Image className="mx-auto" src={AddMoney} alt="" width={40} />

                                <span className="inline-block">
                                    Add Money
                                </span>
                            </button>

                            <button className="text-sm space-y-1" type="button">
                                <Image className="mx-auto" src={Withdraw} alt="" width={40} />

                                <span className="inline-block">
                                    Withdraw
                                </span>
                            </button>

                            <button className="text-sm space-y-1" type="button">
                                <Image className="mx-auto" src={Transactions} alt="" width={40} />

                                <span className="inline-block">
                                    Transactions
                                </span>
                            </button>

                            <button className="text-sm space-y-1" type="button">
                                <Image className="mx-auto" src={BlockCard} alt="" width={40} />

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
                                            James Benjamin
                                        </p>

                                        <button type="button" aria-label="Copy card name">
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
                                            1234 5678 3344 5678
                                        </p>

                                        <button type="button" aria-label="Copy card number">
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
                                            06/25
                                        </p>

                                        <button type="button" aria-label="Copy card expiry date">
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
                                            734
                                        </p>

                                        <button type="button" aria-label="Copy card CVV">
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
                                            8 The Green Street
                                        </p>

                                        <button type="button" aria-label="Copy card address">
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
                                            19901
                                        </p>

                                        <button type="button" aria-label="Copy card ZIP code">
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
                                            Delaware
                                        </p>

                                        <button type="button" aria-label="Copy card state">
                                            <Image src={CopyText} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Popup isActive={isPopupActive} setIsActive={setIsPopupActive} />
        </>
    );
};

export default ViewCard;
