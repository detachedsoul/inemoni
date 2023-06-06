import HeroText from "@components/money-transfer/HeroText";
import FooterCard from "@components/FooterCard";
import FooterBanner from "@components/FooterBanner";
import Image from "next/image";
import SendMoney from "@assets/img/send-money.png";
import SuccessfulTransaction from "@assets/img/successful-transaction.png";
import Head from "next/head";
import Layout from "./_layout";
import {motion} from "framer-motion";

const MoneyTransfer = () => {
	return (
		<>
			<Head>
				<title>Inemoni | Money Transfer</title>
				<meta
					name="description"
					content="Money transfer feature of Inemoni"
				/>
			</Head>

			<main className="space-y-[10%] sm:space-y-[5%] -mb-12">
				<HeroText />

                <section className="bg-[#E6E6E6] rounded-[30px] px-[5%] pt-[5%] mx-4 xl:mx-8 text-center grid grid-cols-1 items-start justify-between gap-12 lg:grid-cols-12 lg:gap-16 sm:grid-cols-2 sm:text-left">
                    <div className="space-y-5 lg:col-span-7">
                        <h2 className="secondary-header">
                            Money Transfer is easier when you use Inemoni.
                        </h2>

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
                                duration: 1
                            }}
                        >
                            Effortlessly connect with your loved ones and
                            business partners with Inemoni’s Quick and
                            Secure Fund Transfer. Say goodbye to checks and
                            bank visits.
                        </motion.p>
                    </div>

                    {/* <motion.div
                        intial={{
                            opacity: 0,
                            scale: 0,
                            y: "100%"
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            y: 0
                        }}
                        layout
                        className="mx-auto sm:mx-0 lg:col-span-5"
                    >
                        <Image
                            className="h-full w-full aspect-auto"
                            src={SuccessfulTransaction}
                            alt="Money Transfer is easier when you use Inemoni"
                        />
                    </motion.div> */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            height: "100%",
                            y: "50%"
                        }}
                        whileInView={{
                            height: "100%",
                            y: 0,
                            opacity: 1,
                        }}
                        transition={{
                            ease: "linear",
                            duration: 1
                        }}
                        layout
                        className="lg:col-span-5"
                    >
                            <Image
                                className="mx-auto sm:mx-0 h-full w-full"
                                src={ SuccessfulTransaction }
                                alt="Money Transfer is easier when you use Inemoni"
                            />
                    </motion.div>
				</section>

				<section className="px-[5%]">
                    <div className="text-center grid place-items-center gap-5 sm:w-4/5 sm:mx-auto">
                        <div className="sapce-y-4">
                            <h3 className="secondary-header font-bold">
                                Spare Yourself Time & <br/>
                                Just Send in Seconds.
                            </h3>

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
                                className="w-4/5 sm:w-3/5 mx-auto"
                            >
                                Effortlessly move your money, whenever and wherever you need it, with our hassle-free, and secure transfers. Experience the freedom of fast and free banking today!
                            </motion.p>
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
                        >
                            <Image
                                className="aspect-auto mx-auto w-3/5 sm:w-1/2"
                                src={ SendMoney }
                                alt="Spare Yourself Time & Just Send in Seconds"
                            />
                        </motion.div>
                    </div>
				</section>
			</main>

			<FooterCard />

			<FooterBanner />
		</>
	);
};

export default MoneyTransfer;

MoneyTransfer.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
