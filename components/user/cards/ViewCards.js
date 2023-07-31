import Image from "next/image";
import Popup from "@components/user/Popup";
import AddMoneyToCardPopup from "@components/user/cards/AddMoneyToCardPopup";
import BlockedCard from "@components/user/cards/BlockedCard";
import AddCard from "@components/user/cards/AddCard";
import CopyText from "@assets/img/copy-text.svg";
import AddMoney from "@assets/img/card-add-money.svg";
import BlockCardLogo from "@assets/img/card-block-card.svg";
import Transactions from "@assets/img/card-transactions.svg";
import Withdraw from "@assets/img/card-withdraw.svg";
import Card from "@components/user/Card";
import BlockCard from "@components/user/cards/BlockCard";
import copyText from "@helpers/copyText";
import useUser from "@store/useUser";
import useFetch from "@helpers/useFetch";
import { useState, useEffect, useRef} from "react";
import { usePrimaryDetails } from "@store/useServices";

const fetcher = async (url) => {
	const res = await fetch(url);

	const {data} = await res.json();

	return data;
};

const ViewCard = () => {
    const { data: rates } = useFetch(`https://www.inemoni.org/api/virtual-cards/get-rates`, fetcher);
    const { data: features } = useFetch(`https://www.inemoni.org/api/virtual-cards/get-features`, fetcher);

    const userCards = useUser((state) => state.userCards);

    const [isPopupActive, setIsPopupActive] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(1);
    const [cardDetails, setCardDetails] = useState(null);
    const [cardID, setCardID] = useState(null);

    // Know which of the different card actions to show
    const [isAddCard, setIsAddCard] = useState(false);
    const [isAddMoney, setIsAddMoney] = useState(false);
    const [isWithdraw, setIsWithdraw] = useState(false);
    const [isTransactions, setIsTransactions] = useState(false);
    const [isBlock, setIsBlock] = useState(false);

    const container = useRef(null);

    useEffect(() => {
        if (isCopied) {
            setTimeout(() => {
                setIsCopied(() => false);
            }, 3000);
        }
    }, [isCopied]);

    const handleScroll = (slideIndex) => {
        // Do nothing if the current slide equals the index gotten from the button
        if (slideIndex === currentSlide) {
            return;
        }

        if (slideIndex > currentSlide) {
			// Know the positon of the clicked slide among other slides and then scroll to that slide
			const difference = slideIndex - currentSlide;

			if (difference === 1) {
                if (parseInt(window.getComputedStyle(container.current.childNodes[0]).getPropertyValue("margin-left")) <= 0) {
                    container.current.scrollLeft +=
					container.current.offsetWidth;
                } else {
                    container.current.scrollLeft +=
					container.current.offsetWidth / 2;
                }
			} else {
				if (difference <= slideIndex) {
                    if (parseInt(window.getComputedStyle(container.current.childNodes[0]).getPropertyValue("margin-left")) <= 0) {
                        container.current.scrollLeft +=
					    container.current.offsetWidth * difference;
                    } else {
                        container.current.scrollLeft +=
					    container.current.offsetWidth * (difference - 1);
                    }
                } else {
                    container.current.scrollLeft +=
					container.current.offsetWidth * slideIndex;
                }
			}
			setCurrentSlide(() => slideIndex);
		} else if (slideIndex <= currentSlide) {
			// Know the positon of the clicked slide among other slides and then scroll to that slide
			const difference = currentSlide - slideIndex;

            if (difference === 1) {
				if (parseInt(window.getComputedStyle(container.current.childNodes[0]).getPropertyValue("margin-left")) <= 0) {
                    container.current.scrollLeft -=
					container.current.offsetWidth;
                } else {
                    container.current.scrollLeft -=
					container.current.offsetWidth / 2;
                }
			} else {
				if (difference >= slideIndex) {
                    if (parseInt(window.getComputedStyle(container.current.childNodes[0]).getPropertyValue("margin-left")) <= 0) {
                        container.current.scrollLeft -=
					    container.current.offsetWidth * difference;
                    } else {
                        container.current.scrollLeft -=
					    container.current.offsetWidth * (difference - 1);
                    }
                } else {
                    container.current.scrollLeft -=
					container.current.offsetWidth * slideIndex;
                }
			}
			setCurrentSlide(() => slideIndex);
		} else {
			return;
		}
    };

    return !userCards ? (
        <p className="font-medium text-lg">
            There was an error getting your card details. Please try again or contact support if the issue persists.
        </p>
    ) : (
        <>
            <div className="bg-[#F2F2F2] rounded-[12px] flex flex-col place-content-center min-h-screen py-8">
                <div className="space-y-8">
                    <div className="flex flex-col lg:flex-row lg:mr-0 justify-between place-content-center gap-4 w-auto lg:w-[55%] mx-auto px-4 lg:px-8 lg:pl-0">
                        <div className="flex place-content-center gap-2 text-center">
                            {userCards.map((button, index) => (
                                <button
                                    type="button"
                                    key={ index + 1 }
                                    onClick={() => handleScroll(index + 1)}
                                >
                                    <span className={`block p-2 rounded-full ${((index + 1) === currentSlide) ? 'bg-brand-purple' : 'bg-[#CDBCDA]'}`}></span>
                                </button>
                            ))}
                        </div>

                        <button
                            className="btn block w-auto mx-auto rounded-md hover:text-white transition-colors duration-300 ease-in hover:bg-brand-navlink border border-[#666666] lg:mx-0"
                            type="button"
                            onClick={() => {
                                setIsPopupActive(() => true);
                                setIsAddCard(() => true);

                                setIsBlock(() => false);
                                setIsTransactions(() => false);
                                setIsWithdraw(() => false);
                                setIsAddMoney(() => false);
                            }}
                        >
                            Add Card
                        </button>
                    </div>

                    <div className="flex px-4 lg:px-0 gap-12 overflow-y-auto no-scrollbar snap-x snap-mandatory scroll-smooth min-w-full" ref={container}>
                        {userCards.map(cardDetails => (
                            <div className="min-w-full lg:min-w-[50%] lg:first:ml-[25%] lg:last:mr-[25%] space-y-4 snap-center" key={ cardDetails.id }>
                                {cardDetails.status === "blocked" ? (
                                    <BlockedCard cardDetails={ cardDetails } />
                                ) : (
                                    <>
                                        <Card cardDetails={ cardDetails } />

                                        <div className="grid grid-cols-2 px-2 gap-4 lg:grid-cols-4">
                                            <button className="text-sm space-y-1" type="button" onClick={ () => {
                                                setIsPopupActive(() => true);
                                                setIsAddMoney(() => true);
                                                setCardID(() => cardDetails.id);

                                                setIsAddCard(() => false);
                                                setIsBlock(() => false);
                                                setIsTransactions(() => false);
                                                setIsWithdraw(() => false);
                                            } }>
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

                                            <button className="text-sm space-y-1" type="button" onClick={() => {
                                                setCardDetails(() => cardDetails);
                                                setIsBlock(() => true);
                                                setIsAddCard(() => false);
                                                setIsTransactions(() => false);
                                                setIsWithdraw(() => false);
                                                setIsAddMoney(() => false);
                                                setIsPopupActive(() => true);
                                            }}>
                                                <Image className="w-10 mx-auto" src={BlockCardLogo} alt="" width={40} />

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
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Popup isActive={isPopupActive} setIsActive={setIsPopupActive} width={cardDetails ? 'lg:w-[45%]' : 'lg:w-[40%]'}>
                {isAddCard && <AddCard /> }

                {isBlock && <BlockCard cardDetails={ cardDetails } closeModal={ setIsPopupActive } />}

                {isAddMoney && <AddMoneyToCardPopup rate={ rates } features={ features } cardID={ cardID } />}
            </Popup>

            <p className={`text-successful bg-successful-bg fixed z-50 ${isCopied ? '-translate-y-20' : '-translate-y-[500%]'} transition-transform ease-in duration-300 font-medium py-2 px-4 left-[calc(25%)] lg:left-[calc(50%-2rem)] text-center`}>
                Copied to clipboard
            </p>
        </>
    );
};

export default ViewCard;
