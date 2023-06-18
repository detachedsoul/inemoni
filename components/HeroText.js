import heroImage from "@assets/img/hero-image.svg";
import Image from "next/image";
import Link from "next/link";
import previewImage from "@assets/img/feature-preview.svg";

const HeroText = () => {
	return (
        <div className="mx-4 md:relative xl:mx-8">
            <div className="grid grid-cols-1 items-center gap-8 px-[5%] pt-10 pb-36 sm:gap-16 lg:pb-40 bg-[#E6E6E6] rounded-t-[30px] text-center sm:text-left relative lg:static">
                <div className="flex flex-col gap-5">
                    <h1 className="main-header lg:w-[70%]">
                        Bringing Financial Services To Your Doorsteps.
                    </h1>

                    <p className="sm:w-1/2 lg:w-2/5">
                        Easy access to financial services is our watchword while creating an avenue for our agents to make money using our amazing services.
                    </p>

                    <div className="flex flex-col place-items-center gap-4 sm:flex-wrap sm:flex-row">
                        <Link
                            className="btn bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink"
                            href="/create-account"
                        >
                            Create Account
                        </Link>

                        <Link
                            className="btn transition-colors duration-300 ease-in hover:bg-[#F2F2F2]"
                            href="/sign-in"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Login to Web App
                            <span className="sr-only">
                                Login to our web app and enjoy seamless transactions.
                            </span>
                        </Link>
                    </div>
                </div>

                <Image
                    className="z-30 w-[calc(100%-10%)] top-[calc((19%*4)+1rem)] sm:top-[calc((17%*4)+1rem)] absolute lg:top-[19.5%] lg:w-auto left-[5%] right-[2.5%] lg:left-auto xl:right-[5%] lg:h-[55%] aspect-auto object-cover"
                    src={heroImage}
                    alt="Inemoni app overview"
                    priority={true}
                />
            </div>

            <section className="grid grid-cols-1 gap-8 pt-[calc(19%*4.8)] pb-8 px-[5%] rounded-t-[30px] relative bg-[#F2F2F2] -top-[30px] sm:grid-cols-12 sm:place-content-center lg:grid-cols-1 -mb-[50px] lg:pt-8">
                <div className="space-y-4 sm:space-y-5 sm:col-span-6 lg:col-span-12 lg:w-2/5">
                    <h2 className="header text-2xl sm:text-3xl">Bills Payments</h2>

                    <p>
                        With Inemoni, paying bills is hassle-free. Our agents make it easy to pay for power, internet, and cable TV subscriptions from the comfort of your own home.
                    </p>
                </div>

                <div className="space-y-4 sm:space-y-5 sm:col-span-6 lg:col-span-12 lg:w-2/5">
                    <h2 className="header text-2xl sm:text-3xl">Accept Payments</h2>

                    <p>
                        Easily receive money from anyone, anytime and anywhere in the world.
                    </p>
                </div>

                <div className="space-y-4 sm:space-y-5 sm:col-span-12 sm:w-1/2 sm:text-center sm:mx-auto lg:mx-0 lg:text-left lg:w-2/5">
                    <h2 className="header text-2xl sm:text-3xl">Money Transfer</h2>

                    <p>
                        Make single or bulk transfers to bank accounts from your Inemoni dashboard. Your transfer goes through seamlessly with Inemoni.
                    </p>
                </div>
            </section>
        </div>
	);
};

export default HeroText;
