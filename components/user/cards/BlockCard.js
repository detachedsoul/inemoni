import FailedPopup from "@components/user/FailedPopup";
import SuccessfulPopup from "@components/user/SuccessfulPopup";
import LoadingIndicator from "@components/user/LoadingIndicator";
import PinPopup from "@components/user/PinPopup";
import Link from "next/link";
import Card from "@components/user/Card";
import useUser from "@store/useUser";
import { usePrimaryDetails } from "@store/useServices";
import { useState } from "react";

const BlockCard = ({ cardDetails, closeModal }) => {
    const userToken = useUser((state) => state.userToken);
    const isLoading = usePrimaryDetails((state) => state.isLoading);
    const errorMessage = usePrimaryDetails((state) => state.errorMessage);
    const setParameters = usePrimaryDetails((state) => state.setParameters);
    const isSuccessful = usePrimaryDetails((state) => state.isSuccessful);

    const isFailed = usePrimaryDetails((state) => state.isFailed);
    const setIsFailed = usePrimaryDetails((state) => state.setIsFailed);

    const pinPopup = usePrimaryDetails((state) => state.pinPopup);
    const setPinPopup = usePrimaryDetails((state) => state.setPinPopup);

    const [confirmModal, setConfirmModal] = useState(false);

    if (isLoading) {
        return <LoadingIndicator />
    }

    if (pinPopup) {
        return <PinPopup endpoint="virtual-cards/block" buttonText="Block Card" />
    }

    if (confirmModal) {
        return (
            <div className="p-4 lg:px-8 space-y-16">
                <div className="space-y-1.5">
                    <h2 className="font-medium text-2xl text-[#262626]">
                        Confirmation
                    </h2>

                    <p className="leading-snug">
                        Are you sure you want to block this card?
                    </p>
                </div>

                <div className="grid gap-2">
                    <button
                        className="btn block w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                        type="button"
                        onClick={() => {
                            setConfirmModal(() => false);
                            setParameters({
                                user_token: userToken,
                                card_id: cardDetails.id,
                            });
                            setPinPopup(true);
                        }}
                    >
                        Continue
                    </button>

                    <button
                        className="btn block rounded-md hover:text-white transition-colors duration-300 ease-in hover:bg-[#666666]"
                        type="button"
                        onClick={() => closeModal(() => false)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        );
    }

    if (isSuccessful) {
        return (
            <SuccessfulPopup header="Card Blocking Successful" message="Your card has been blocked">
                <Link
                    className="btn block w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                    href="/user/dashboard"
                >
                    Back to Dashboard
                </Link>
            </SuccessfulPopup>
        );
    };

    if (isFailed) {
        return (
            <FailedPopup header="Card Blocking Failed" text={ errorMessage }>
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

                            setPinPopup(false);

                            setConfirmModal(() => false);
                        }}
                    >
                        Try Again
                    </button>
                )}
            </FailedPopup>
        );
    }

    return (
        <div className="p-4 lg:px-8 space-y-6">
            <Card cardDetails={ cardDetails } />

            <div className="space-y-2 text-center">
                <h2 className="font-medium text-2xl text-[#262626]">
                    Block Your Virtual Dollar Card
                </h2>

                <p>
                    This will temporarily freeze your virtual card from making payments, subscriptions, etc
                </p>
            </div>

            <button
                className="btn block w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                type="button"
                onClick={() => setConfirmModal(() => true)}
            >
                Block Card
            </button>
        </div>
    );
};

export default BlockCard;
