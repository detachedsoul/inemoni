import heroImage from "@assets/img/money-transfer-hero-image.png";
import Image from "next/image";
import Link from "next/link";

const HeroText = () => {
    return (
        <div className="mx-4 xl:mx-8 grid gap-8 sm:grid-cols-2 items-center px-[5%] pt-10 sm:pt-0">
            <div className="flex flex-col gap-5 text-center sm:text-left sm:-ml-[10%]">
                <h1 className="main-header">
                    Seamless Money Transfer with Inemoni.
                </h1>

                <p>
                    Unlock the power of your funds with Inemoni’s Money Transfer Solution - experience seamless access to your account, anytime, anywhere.
                </p>

                <div className="flex flex-col place-items-center gap-4 sm:flex-wrap sm:flex-row">
                    <Link
                        className="btn bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink"
                        href="https://play.google.com/store/apps/details?id=com.inemoni.com"
                    >
                        Download App
                    </Link>

                    <Link
                        className="btn transition-colors duration-300 ease-in hover:bg-[#E6E6E6]"
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
                className="object-cover order-last sm:order-first w-4/5 mx-auto sm:mx-0"
                src={ heroImage }
                alt="Inemoni app overview"
                priority={ true }
            />
        </div>
    );
};

export default HeroText;
