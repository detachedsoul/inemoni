import Link from "next/link";
import Image from "next/image";
import CardsOverview from "@assets/img/card-overview.png";
import { useState } from "react";
import Popup from "@components/dashboard/Popup";

const CardOverview = () => {
    const [isPopupActive, setIsPopupActive] = useState(true);

    return (
        <>
            <div className="bg-[#F2F2F2] rounded-[12px] px-4 grid place-content-center min-h-screen pb-8">
                <div className="text-center -space-y-20">
                    <Image className="w-[70%] mx-auto -mt-20" src={CardsOverview} alt="Get your Inemoni Card instantly" />

                    <div className="space-y-2 text-center w-3/5 mx-auto">
                        <h3 className="font-medium text-[#262626] text-3xl">
                            Get your Inemoni Card instantly
                        </h3>

                        <div className="w-2/3 mx-auto space-y-4">
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

            <Popup isActive={isPopupActive} setIsActive={setIsPopupActive} />
        </>
    );
};

export default CardOverview;
