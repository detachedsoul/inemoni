import heroImage from "@assets/img/money-transfer-hero-image.png";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

const HeroText = () => {
    return (
        <div className="mx-4 xl:mx-8 grid gap-8 sm:grid-cols-2 items-center px-[5%] pt-10 sm:pt-0">
            <div className="flex flex-col gap-5 text-center sm:text-left sm:-ml-[10%]">
                <motion.h1
                    initial={{
                        opacity: 0,
                        height: 0,
                        y: "100%"
                    }}
                    whileInView={{
                        opacity: 1,
                        height: "100%",
                        y: 0
                    }}
                    transition={{
                        duration: 1
                    }}
                    layout
                    className="main-header"
                >
                    Seamless Money Transfer with Inemoni.
                </motion.h1>

                <motion.p
                    initial={{
                        opacity: 0,
                        y: "100%"
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        ease: "linear",
                        duration: 1
                    }}
                    layout
                >
                    Unlock the power of your funds with Inemoni’s Money Transfer Solution - experience seamless access to your account, anytime, anywhere.
                </motion.p>

                <div className="flex flex-col place-items-center gap-4 sm:flex-wrap sm:flex-row">
                    <Link
                        className="btn bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink"
                        href="/create-account"
                    >
                        Create Account
                    </Link>

                    <Link
                        className="btn transition-colors duration-300 ease-in hover:bg-[#E6E6E6]"
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

            <motion.div
                initial={{
                    opacity: 0,
                    height: 0
                }}
                whileInView={{
                    opacity: 1,
                    height: "100%"
                }}
                transition={{
                    ease: "linear",
                    duration: 1
                }}
                layout
                className="order-last sm:order-first "
            >
                <Image
                    className="object-cover w-4/5 mx-auto sm:mx-0"
                    src={ heroImage }
                    alt="Inemoni app overview"
                    priority={ true }
                />
            </motion.div>
        </div>
    );
};

export default HeroText;
