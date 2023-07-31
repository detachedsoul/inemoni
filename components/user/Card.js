import Image from "next/image";
import Logo from "@assets/img/virtual-card-logo.svg";
import LogoDark from "@assets/img/virtual-card-logo-dark.svg";
import MasterCardLogo from "@assets/img/mastercard-logo.svg";
import VisaCardLogo from "@assets/img/visa-logo.svg";
import localFont from "next/font/local";

const neutralFace = localFont({
	subsets: ["latin"],
	variable: "--font-neutralFace",
	display: "swap",
    src: [
        {
            path: "../../public/fonts/NeutralFace-Bold.otf",
            weight: "700",
            style: "normal"
        },
    ]
});

const Card = ({ cardDetails }) => {
    const splitNumberAfterFourDigits = (number) => {
        // Convert the number to a string
        const numberString = number?.toString();

        // Use a regular expression to split the string after every 4 digits
        const splitString = numberString?.match(/.{1,4}/g);

        return splitString || [];
    };

    return (
        <div className={`${cardDetails.card_type === "MASTERCARD" ? "bg-mastercard-bg text-white" : "bg-visacard-bg backdrop-blur-[4.681672096252441px] border-b-[2px] border-white border-l-[2px] text-[#1c1c1c] bg-repeat"} bg-cover rounded-[25.928px] p-4 lg:p-8 space-y-10`}>
            <div className="flex items-center justify-between gap-4">
                <Image src={cardDetails.card_type === "MASTERCARD" ? Logo : LogoDark} alt="Inemoni Logo" priority />

                <span className={`${cardDetails.card_type === "MASTERCARD" ? 'bg-white text-[#262626]' : 'bg-[#262626] text-white'} py-1 px-3 text-xs rounded-full inline-block`}>
                    VIRTUAL CARD
                </span>
            </div>

            <p className={`font-bold flex shrink-0 gap-2 justify-between text-sm lg:text-[1.35038rem] ${neutralFace.className}`}>
                { splitNumberAfterFourDigits(cardDetails.masked_number).map((numberGroup, index) => (
                    <span className="tracking-[0.2rem]" key={index}>{ numberGroup }</span>
                )) }
            </p>

            <div className="flex items-center justify-between gap-4">
                <div>
                    <p className="lg:text-2xl text-left leading-none">
                        { cardDetails.balance }
                    </p>

                    <span className={`${cardDetails.card_type === "MASTERCARD" ? 'text-[#E6E6E6]' : 'text-[#666666]'} text-sm inline-block leading-none`}>
                        Card Balance
                    </span>
                </div>

                <Image className="w-10 h-10 lg:w-16 lg:h-16" src={ cardDetails.card_type === 'MASTERCARD' ? MasterCardLogo : VisaCardLogo } alt="Mastercard Logo" priority />
            </div>
        </div>
    );
};

export default Card;
