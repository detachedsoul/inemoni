import HeroText from "@components/pay-bills/HeroText";
import FooterCard from "@components/FooterCard";
import FooterBanner from "@components/FooterBanner";
import Image from "next/image";
import PosReceipt from "@assets/img/easy-bill-payment.png";
import SuccessfulTransaction from "@assets/img/successful-transaction.png";
import Head from "next/head";
import Layout from "./_layout";

const PayBills = () => {
	return (
		<>
			<Head>
				<title>Inemoni | Pay Bills</title>
				<meta
					name="description"
					content="Pay bills feature of Inemoni"
				/>
			</Head>

			<main>
				<HeroText />

                <div className="space-y-[10%] sm:space-y-[5%] -mb-12">
                    <section className="bg-[#E6E6E6] rounded-[30px] text-center sm:text-left pt-[5%] px-[5%] mx-4 xl:mx-8">
                        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16 sm:grid-cols-2">
                            <div className="space-y-5 lg:col-span-7">
                                <h2 className="secondary-header">
                                    Bill Payment is easier when you use Inemoni.
                                </h2>

                                <p>
                                    Easily and securely pay bills from one account
                                    with our solution, saving time and money.
                                </p>
                            </div>

                            <Image
                                className="h-full w-full lg:col-span-5"
                                src={PosReceipt}
                                alt="Bill Payment is easier when you use Inemoni"
                                quality={100}
                            />
                        </div>
                    </section>

                    <section className="px-[5%] lg:px-[10%]">
                        <div className="grid grid-cols-1 items-start gap-12 sm:gap-0 sm:grid-cols-2">
                            <Image
                                className="h-full object-contain aspect-auto w-3/4 mx-auto sm:mx-0"
                                src={SuccessfulTransaction}
                                alt="Spare Yourself Time & Pay Bills in Seconds"
                            />

                            <div className="space-y-5 order-first sm:order-last text-center sm:text-left">
                                <h2 className="secondary-header">
                                    Spare Yourself Time & Pay Bills in Seconds.
                                </h2>

                                <p>
                                    Make your payments from the comfort of your
                                    homes or on-the-go. Pay for your cable TV,
                                    electricity, water, education, toll, tax, and
                                    more.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
			</main>

			<FooterCard />

			<FooterBanner />
		</>
	);
};

export default PayBills;

PayBills.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
