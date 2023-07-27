import AddCard from "@components/user/cards/AddCard";
import Popup from "@components/user/Popup";
import Image from "next/image";
import Link from "next/link";
import CardsOverview from "@assets/img/card-overview.png";
import { useState } from "react";

const CardOverview = () => {
    const [isPopupActive, setIsPopupActive] = useState(false);

    return (
        <>
            <div className="bg-[#F2F2F2] rounded-[12px] px-4 grid place-content-center min-h-screen pb-8">
                <div className="text-center -space-y-16 lg:-space-y-20">
                    <Image className="lg:w-[70%] mx-auto -mt-16 lg:-mt-20" src={CardsOverview} alt="Get your Inemoni Card instantly" />

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
                <AddCard />
            </Popup>
        </>
    );
};

export default CardOverview;
