import Image from "next/image";
import Logo from "@assets/img/virtual-card-logo.svg";
import MasterCardLogo from "@assets/img/mastercard-logo.svg";
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

const Card = () => {
    return (
        <div className="bg-card-bg bg-cover rounded-[25.928px] p-8 space-y-10">
            <div className="flex items-center justify-between gap-4">
                <Image src={Logo} alt="Inemoni Logo" />

                <span className="bg-white py-1 px-3 text-xs rounded-full inline-block">
                    VIRTUAL CARD
                </span>
            </div>

            <p className={`font-bold flex gap-2 justify-between text-white text-[1.35038rem] ${neutralFace.className}`}>
                <span>1 2 3 4</span>  <span>5 6 * *</span> <span>* * * *</span> <span>5 6 7 8</span>
            </p>

            <div className="flex items-center justify-between gap-4">
                <div>
                    <p className="text-2xl text-left text-white leading-none">
                        $27.50
                    </p>

                    <span className="text-[#E6E6E6] text-sm inline-block leading-none">
                        Card Balance
                    </span>
                </div>

                <Image src={MasterCardLogo} alt="Mastercard Logo" />
            </div>
        </div>
    );
};

export default Card;
