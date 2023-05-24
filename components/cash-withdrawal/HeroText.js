import heroImage from "@assets/img/cash-withdrawal-hero-image.png";
import Image from "next/image";
import Link from "next/link";

const HeroText = () => {
    return (
        <div className="mx-4 md:relative xl:mx-8">
            <div className="grid grid-cols-1 items-start gap-8 px-[5%] pt-10 md:gap-4 text-center sm:text-left sm:grid-cols-12">
                <h1 className="main-header sm:text-center md:text-left sm:col-span-12 md:col-span-4">
                    Effortlessly Withdraw Your Cash Anywhere, Anytime.
                </h1>

                <div className="md:col-span-3 sm:col-span-6 space-y-4 md:order-3">
                    <p>
                        Effortlessly withdraw your cash, anytime, anywhere with Inemoni on your mobile app, debit, or credit card.
                    </p>

                    <Link
                        className="btn inline-block bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink"
                        href="https://play.google.com/store/apps/details?id=com.inemoni.com"
                    >
                        Download App
                    </Link>
                </div>

                <Image
                    className="object-cover sm:col-span-6 md:col-span-5 md:order-2"
                    src={ heroImage }
                    alt="Inemoni app overview"
                    priority={ true }
                />
            </div>
        </div>
    );
};

export default HeroText;
