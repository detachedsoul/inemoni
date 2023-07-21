import Image from "next/image";
import Link from "next/link";
import CardsOverview from "@assets/img/card-overview.png";
import { useState } from "react";
import Popup from "@components/user/Popup";
import FailedPopup from "@components/user/FailedPopup";
import SuccessfulPopup from "@components/user/SuccessfulPopup";
import DollarCard from "@assets/img/card-dollar-card.svg";
import NairaCard from "@assets/img/card-naira-card.svg";
import PhysicalCard from "@assets/img/card-physical-card.svg";
import MasterCard from "@assets/img/card-mastercard.svg";
import VisaCard from "@assets/img/card-visa-card.svg";
import VisaCardPreview from "@assets/img/visacard-preview.svg";
import MasterCardPreview from "@assets/img/mastercard-preview.svg";

const CardOverview = () => {
    const [isPopupActive, setIsPopupActive] = useState(false);

    // Show the card type preview by default when the popup is active, and the card creation successful or failed otherwise
    const [isPreview, setIsPreview] = useState(true);
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [isFailed, setIsFailed] = useState(false);

    // Store the type of card selected in a state
    const [isDollar, setIsDollar] = useState(false);
    const [isNaira, setIsNaira] = useState(false);
    const [isPhysical, setIsPhysical] = useState(false);

    // Store the type of dollar card selected in a state
    const [isVisa, setIsVisa] = useState(false);
    const [isMasterCard, setIsMasterCard] = useState(false);

     const handleSelection = () => {
        if (isDollar === false && isNaira === false && isPhysical === false) {
            return;
        }

        setIsPreview(() => false);
    };

    const handleDollarCardSelection = () => {
        if (isVisa === false && isMasterCard === false) {
            return;
        }

        setIsDollar(false);
        setIsNaira(false);
        setIsPhysical(false);
    };

    return (
        <>
            <div className="bg-[#F2F2F2] rounded-[12px] px-4 grid place-content-center min-h-screen pb-8">
                <div className="text-center lg:-space-y-20">
                    <div className="bg-red-500">
                        <Image className="lg:w-[70%] mx-auto lg:-mt-20 h-full w-full object-cover" src={CardsOverview} alt="Get your Inemoni Card instantly" />
                    </div>

                    <div className="space-y-2 text-center lg:w-3/5 mx-auto">
                        <h3 className="font-medium text-3xl">
                            Get your Inemoni Card instantly
                        </h3>

                        <div className="lg:w-2/3 mx-auto space-y-4">
                            <p>
                                With your Inemoni cards, you can shop with ease both in the real world and in the digital world
                            </p>

                            <button
                                className="btn block w-auto mx-auto rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                                type="button"
                                onClick={() => setIsPopupActive(() => true)}
                            >
                                Request for a card
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Popup isActive={isPopupActive} setIsActive={setIsPopupActive}>
                {isPreview && (
                    <div className="py-4 px-8 space-y-6">
                        <div>
                            <h2 className="font-medium text-xl text-[#262626]">
                                Choose your card
                            </h2>

                            <p className="leading-snug">
                                Select the card you would like to create
                            </p>
                        </div>

                        <div className="space-y-4">
                            <button className={`rounded-[10px] p-2 border-[0.090rem] flex items-center gap-4 btn w-full ${isDollar ? 'border-brand-purple' : 'border-[#cccccc] hover:border-brand-purple'}`} type="button" onClick={() => {
                                setIsDollar(true);
                                setIsNaira(false);
                                setIsPhysical(false);
                            }}>
                                <Image src={DollarCard} alt="Dollar Virtual Card" />

                                <p className="text-[#262626] font-medium text-lg">
                                    Dollar Virtual Card
                                </p>
                            </button>

                            <button className={`rounded-[10px] p-2 border-[0.090rem] flex items-center gap-4 btn w-full ${isNaira ? 'border-brand-purple' : 'border-[#cccccc] hover:border-brand-purple'}`} type="button" onClick={() => {
                                setIsDollar(false);
                                setIsNaira(true);
                                setIsPhysical(false);
                            }}>
                                <Image src={NairaCard} alt="Naira Virtual Card" />

                                <p className="text-[#262626] font-medium text-lg">
                                    Naira Virtual Card
                                </p>
                            </button>

                            <button className={`rounded-[10px] p-2 border-[0.090rem] flex items-center gap-4 btn w-full ${isPhysical ? 'border-brand-purple' : 'border-[#cccccc] hover:border-brand-purple'}`} type="button" onClick={() => {
                                setIsDollar(false);
                                setIsNaira(false);
                                setIsPhysical(true);
                            }}>
                                <Image src={PhysicalCard} alt="Physical Virtual Card" />

                                <p className="text-[#262626] font-medium text-lg">
                                    Physical Virtual Card
                                </p>
                            </button>
                        </div>

                        <button
                            className="btn block w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                            type="button"
                            onClick={handleSelection}
                        >
                            Next
                        </button>
                    </div>
                )}

                {isDollar && !isPreview && (
                    <div className="py-4 px-8 space-y-6">
                        <div>
                            <h2 className="font-medium text-xl text-[#262626]">
                                Choose your card type
                            </h2>

                            <p className="leading-snug">
                                Select the card type you would like to create
                            </p>
                        </div>

                        <div className="space-y-4">
                            <button className={`rounded-[10px] p-2 border-[0.090rem] flex items-center gap-4 btn w-full ${isVisa ? 'border-brand-purple' : 'border-[#cccccc] hover:border-brand-purple'}`} type="button" onClick={() => {
                                setIsVisa(true);
                                setIsMasterCard(false);
                            }}>
                                <Image src={VisaCard} alt="Visa Card" />

                                <p className="text-[#262626] font-medium text-lg">
                                    Visa Card
                                </p>
                            </button>

                            <button className={`rounded-[10px] p-2 border-[0.090rem] flex items-center gap-4 btn w-full ${isMasterCard ? 'border-brand-purple' : 'border-[#cccccc] hover:border-brand-purple'}`} type="button" onClick={() => {
                                setIsMasterCard(true);
                                setIsVisa(false);
                            }}>
                                <Image src={MasterCard} alt="Mastercard" />

                                <p className="text-[#262626] font-medium text-lg">
                                    Mastercard
                                </p>
                            </button>
                        </div>

                        <button
                            className="btn block w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                            type="button"
                            onClick={handleDollarCardSelection}
                        >
                            Next
                        </button>
                    </div>
                )}

                {(isVisa || isMasterCard) && !isDollar && (
                    <div className="py-4 px-8 space-y-6">
                        <Image className="w-full" src={isVisa ? VisaCardPreview : MasterCardPreview} alt={`Inemoni Virtual ${isVisa ? 'Visa' : 'MasterCard'} Card`} />

                        <div className="space-y-4">
                            <h2 className="font-medium text-xl text-[#262626]">
                                Inemoni Virtual Dollar Card, a passport to shop around the world
                            </h2>

                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    Available on both Master and Visa Card
                                </li>

                                <li>
                                    $2 Card creation fee
                                </li>

                                <li>
                                    $1 + 1% fee on Card funding
                                </li>

                                <li>
                                    No maintenance fee
                                </li>

                                <li>
                                    No Processing Fee
                                </li>

                                <li>
                                    Flexible exchange rate
                                </li>
                            </ul>
                        </div>

                        <button
                            className="btn block w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                            type="button"
                            onClick={() => {
                                setIsMasterCard(false);
                                setIsVisa(false);
                                setIsSuccessful(() => true);
                            }}
                        >
                            Create my Virtual Card
                        </button>
                    </div>
                )}

                {isSuccessful && (
                    <SuccessfulPopup header="Card Creation Successful" message="Your virtual dollar card has successfully been created">
                        <Link
                            className="btn block w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                            href="/dashboard"
                        >
                            Back to Dashboard
                        </Link>
                    </SuccessfulPopup>
                )}

                {isPhysical && !isPreview && (
                    <FailedPopup header="Oops!" text="Physical cards are not available yet. Stay tuned">
                        <button
                            className="btn block w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                            type="button"
                            onClick={() => {
                                setIsPreview(() => true);
                                setIsMasterCard(() => false);
                                setIsVisa(() => false);
                                setIsSuccessful(() => false);
                                setIsDollar(() => false);
                                setIsPhysical(() => false);
                                setIsNaira(() => false);
                                setIsSuccessful(() => false);
                                setIsFailed(() => false);
                            }}
                        >
                            Close
                        </button>
                    </FailedPopup>
                )}
            </Popup>
        </>
    );
};

export default CardOverview;
