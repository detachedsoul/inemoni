import heroImage from "@assets/img/savings-hero-image.png";
import Image from "next/image";
import Link from "next/link";

const HeroText = () => {
	return (
        <div className="mx-4 md:relative xl:mx-8">
            <div className="grid grid-cols-1 items-center gap-8 px-[5%] pt-10 sm:gap-16 lg:pb-40 bg-[#E6E6E6] rounded-t-[30px] text-center sm:text-left relative lg:static">
                <div className="flex flex-col gap-5 w-full">
                    <h1 className="main-header lg:w-[70%]">
                        Seamless Savings Solution With Inemoni.
                    </h1>

                    <p className="sm:w-1/2 lg:w-2/5">
                        Unlock unlimited financial possibilities with Inemoni’s Digitalized Savings - effortless deposits, quick withdrawals, and unrestricted access to your funds.
                    </p>

                    <div className="flex flex-col place-items-center gap-4 sm:flex-wrap sm:flex-row">
                        <Link
                            className="btn bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink"
                            href="https://play.google.com/store/apps/details?id=com.inemoni.com"
                        >
                            Download App
                        </Link>

                        <Link
                            className="btn transition-colors duration-300 ease-in hover:bg-[#F2F2F2]"
                            href="/sign-in"
                        >
                            Login to Web App
                            <span className="sr-only">
                                Login to our web app and enjoy seamless transactions.
                            </span>
                        </Link>
                    </div>
                </div>

                <Image
                    className="z-30 sm:w-1/2 sm:mx-auto md:absolute md:bottom-0 md:w-[calc(28%-2.25rem)] lg:w-[calc(28%-0.25rem)] md:right-[2.5%] md:left-auto object-center object-cover"
                    src={heroImage}
                    alt="Inemoni app overview"
                    priority={true}
                />
            </div>
        </div>
	);
};

export default HeroText;
