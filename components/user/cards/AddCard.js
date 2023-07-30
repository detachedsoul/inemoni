import FailedPopup from "@components/user/FailedPopup";
import SuccessfulPopup from "@components/user/SuccessfulPopup";
import LoadingIndicator from "@components/user/LoadingIndicator";
import PinPopup from "@components/user/PinPopup";
import Link from "next/link";
import Image from "next/image";
import DollarCard from "@assets/img/card-dollar-card.svg";
import NairaCard from "@assets/img/card-naira-card.svg";
import PhysicalCard from "@assets/img/card-physical-card.svg";
import MasterCard from "@assets/img/card-mastercard.svg";
import VisaCard from "@assets/img/card-visa-card.svg";
import VisaCardPreview from "@assets/img/visacard-preview.svg";
import MasterCardPreview from "@assets/img/mastercard-preview.svg";
import useFetch from "@helpers/useFetch";
import useUser from "@store/useUser";
import { usePrimaryDetails } from "@store/useServices";
import { useState } from "react";

const fetcher = async (url) => {
	const res = await fetch(url);

	const {data} = await res.json();

	return data;
};

const AddCard = () => {
    const userToken = useUser((state) => state.userToken);
    const isLoading = usePrimaryDetails((state) => state.isLoading);
    const errorMessage = usePrimaryDetails((state) => state.errorMessage);
    const setParameters = usePrimaryDetails((state) => state.setParameters);

    // Show the card type preview by default when the popup is active, and the card creation successful or failed otherwise
    const preview = usePrimaryDetails((state) => state.preview);
    const setPreview = usePrimaryDetails((state) => state.setPreview);

    const setIsSuccessful = usePrimaryDetails((state) => state.setIsSuccessful);
    const isSuccessful = usePrimaryDetails((state) => state.isSuccessful);

    const isFailed = usePrimaryDetails((state) => state.isFailed);
    const setIsFailed = usePrimaryDetails((state) => state.setIsFailed);

    const pinPopup = usePrimaryDetails((state) => state.pinPopup);
    const setPinPopup = usePrimaryDetails((state) => state.setPinPopup);

    // Store the type of card selected in a state
    const [isDollar, setIsDollar] = useState(false);
    const [isNaira, setIsNaira] = useState(false);
    const [isPhysical, setIsPhysical] = useState(false);

    // Store the type of dollar card selected in a state
    const [isVisa, setIsVisa] = useState(false);
    const [isMasterCard, setIsMasterCard] = useState(false);

    // Fetch card features
    const { data: features } = useFetch(`https://www.inemoni.org/api/virtual-cards/get-features?type=${isDollar ? 'usd' : 'naira'}`, fetcher);

    const handleSelection = () => {
        if (isDollar === false && isNaira === false && isPhysical === false) {
            return;
        }

        setPreview(false);
    };

    const handleDollarCardSelection = () => {
        if (isVisa === false && isMasterCard === false) {
            return;
        }

        setIsDollar(false);
        setIsNaira(false);
        setIsPhysical(false);
    };

    // Show preview
    if (preview) {
        return (
            <div className="p-4 lg:px-8 space-y-6">
                <div>
                    <h2 className="font-medium text-xl text-[#262626]">
                        Choose your card
                    </h2>

                    <p className="leading-snug">
                        Select the card you would like to create
                    </p>
                </div>

                <div className="space-y-4">
                    <button className={ `rounded-[10px] p-2 border-[0.090rem] flex items-center gap-4 btn w-full ${isDollar ? 'border-brand-purple' : 'border-[#cccccc] hover:border-brand-purple'}` } type="button" onClick={ () => {
                        setIsDollar(true);
                        setIsNaira(false);
                        setIsPhysical(false);
                    } }>
                        <Image src={ DollarCard } alt="Dollar Virtual Card" />

                        <p className="text-[#262626] font-medium text-lg">
                            Dollar Virtual Card
                        </p>
                    </button>

                    <button className={ `rounded-[10px] p-2 border-[0.090rem] flex items-center gap-4 btn w-full ${isNaira ? 'border-brand-purple' : 'border-[#cccccc] hover:border-brand-purple'}` } type="button" onClick={ () => {
                        setIsDollar(false);
                        setIsNaira(true);
                        setIsPhysical(false);
                    } }>
                        <Image src={ NairaCard } alt="Naira Virtual Card" />

                        <p className="text-[#262626] font-medium text-lg">
                            Naira Virtual Card
                        </p>
                    </button>

                    <button className={ `rounded-[10px] p-2 border-[0.090rem] flex items-center gap-4 btn w-full ${isPhysical ? 'border-brand-purple' : 'border-[#cccccc] hover:border-brand-purple'}` } type="button" onClick={ () => {
                        setIsDollar(false);
                        setIsNaira(false);
                        setIsPhysical(true);
                    } }>
                        <Image src={ PhysicalCard } alt="Physical Virtual Card" />

                        <p className="text-[#262626] font-medium text-lg">
                            Physical Virtual Card
                        </p>
                    </button>
                </div>

                <button
                    className="btn block w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                    type="button"
                    onClick={ handleSelection }
                >
                    Next
                </button>
            </div>
        );;
    }

    if (isDollar) {
        return (
            <div className="p-4 lg:px-8 space-y-6">
                <div>
                    <h2 className="font-medium text-xl text-[#262626]">
                        Choose your card type
                    </h2>

                    <p className="leading-snug">
                        Select the card type you would like to create
                    </p>
                </div>

                <div className="space-y-4">
                    <button className={ `rounded-[10px] p-2 border-[0.090rem] flex items-center gap-4 btn w-full ${isVisa ? 'border-brand-purple' : 'border-[#cccccc] hover:border-brand-purple'}` } type="button" onClick={ () => {
                        setIsVisa(true);
                        setIsMasterCard(false);
                    } }>
                        <Image src={ VisaCard } alt="Visa Card" />

                        <p className="text-[#262626] font-medium text-lg">
                            Visa Card
                        </p>
                    </button>

                    <button className={ `rounded-[10px] p-2 border-[0.090rem] flex items-center gap-4 btn w-full ${isMasterCard ? 'border-brand-purple' : 'border-[#cccccc] hover:border-brand-purple'}` } type="button" onClick={ () => {
                        setIsMasterCard(true);
                        setIsVisa(false);
                    } }>
                        <Image src={ MasterCard } alt="Mastercard" />

                        <p className="text-[#262626] font-medium text-lg">
                            Mastercard
                        </p>
                    </button>
                </div>

                <button
                    className="btn block w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                    type="button"
                    onClick={ handleDollarCardSelection }
                >
                    Next
                </button>
            </div>
        );
    }

    if (isVisa || isMasterCard ) {
        return (
            <div className="p-4 lg:px-8 space-y-6">
                <Image className="w-full" src={ isVisa ? VisaCardPreview : MasterCardPreview } alt={ `Inemoni Virtual ${isVisa ? 'Visa' : 'MasterCard'} Card` } priority />

                <div className="space-y-4">
                    <h2 className="font-medium text-xl text-[#262626]">
                        Inemoni Virtual Dollar Card, a passport to shop around the world
                    </h2>

                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            Available on both Master and Visa Card
                        </li>

                        <li>
                            {features.card_creation_fee} Card creation fee
                        </li>

                        <li>
                            {features.funding_fee} fee on Card funding
                        </li>

                        <li>
                            {features.maintanance_fee === 'free' ? 'No maintenance fee' : `${features.maintanance_fee} maintenance fee`}
                        </li>

                        <li>
                            No processing Fee
                        </li>

                        <li>
                            Flexible exchange rate
                        </li>
                    </ul>
                </div>

                <button
                    className="btn block w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                    type="button"
                    onClick={ () => {
                        setIsMasterCard(false);
                        setIsVisa(false);
                        setParameters({
                            user_token: userToken,
                            amount: 1,
                            type: isVisa ? 'visa' : 'mastercard'
                        });
                        setPinPopup(true);
                    } }
                >
                    Create my Virtual Card
                </button>
            </div>
        );
    }

    if (isLoading) {
        return <LoadingIndicator />
    }

    if (pinPopup) {
        return <PinPopup endpoint="virtual-cards/create" buttonText="Create Card" />
    }

    if (isSuccessful) {
        return (
            <SuccessfulPopup header="Card Creation Successful" message="Your virtual dollar card has successfully been created">
                <Link
                    className="btn block w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                    href="/user/dashboard"
                >
                    Back to Dashboard
                </Link>
            </SuccessfulPopup>
        );
    };

    if (isPhysical || isNaira) {
        return (
            <FailedPopup header="Oops!" text={`${isPhysical ? 'Physical cards are not available yet. Stay tuned' : 'Naira virtual cards are not available yet. Stay tuned'}`}>
                <button
                    className="btn block w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                    type="button"
                    onClick={() => {
                        setPreview(true);

                        setIsMasterCard(() => false);
                        setIsVisa(() => false);
                        setIsDollar(() => false);
                        setIsPhysical(() => false);
                        setIsNaira(() => false);
                    }}
                >
                    Choose Another Card
                </button>
            </FailedPopup>
        );
    }

    if (isFailed) {
        return (
            <FailedPopup header="Card Creation Failed" text={ errorMessage }>
                {errorMessage === "Invalid user pin" ? (
                    <button
                        className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-dark-purple bg-brand-purple"
                        type="button"
                        onClick={() => {
                            setIsFailed(false);

                            setPinPopup(true);
                        }}
                    >
                        Try Again
                    </button>
                ) : (
                    <button
                        className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-dark-purple bg-brand-purple"
                        type="button"
                        onClick={() => {
                            setIsFailed(false);

                            setPreview(true);

                            setPinPopup(false);

                            setIsMasterCard(() => false);
                            setIsVisa(() => false);
                            setIsDollar(() => false);
                            setIsPhysical(() => false);
                            setIsNaira(() => false);
                        }}
                    >
                        Try Again
                    </button>
                )}
            </FailedPopup>
        );
    }
};

export default AddCard;
