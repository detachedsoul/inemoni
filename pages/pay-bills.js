import HeroText from "@components/pay-bills/HeroText";
import FooterCard from "@components/FooterCard";
import FooterBanner from "@components/FooterBanner";
import Image from "next/image";
import PosReceipt from "@assets/img/pos-receipt.png";
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

			<main className="space-y-[20%] sm:space-y-[10%]">
				<HeroText />

				<section className="px-[5%] xl:px-[7%]">
					<article className="grid grid-cols-1 items-center justify-between gap-12 lg:grid-cols-12 lg:gap-16">
						<div className="space-y-5 lg:col-span-7">
							<h2 className="header text-2xl leading-10 sm:text-5xl sm:text-[3.125rem] sm:leading-[4.063rem]">
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
					</article>
				</section>

				<section className="px-[5%] xl:px-[7%]">
					<article className="grid grid-cols-1 items-center justify-between gap-12 lg:grid-cols-12 lg:gap-16">
						<div className="space-y-5 lg:col-span-7">
							<h2 className="header text-2xl leading-10 sm:text-5xl sm:text-[3.125rem] sm:leading-[4.063rem]">
								Spare Yourself Time & Pay Bills in Seconds.
							</h2>

							<p>
								Make your payments from the comfort of your
								homes or on-the-go. Pay for your cable TV,
								electricity, water, education, toll, tax, and
								more.
							</p>
						</div>

						<Image
							className="h-full w-full lg:col-span-5"
							src={SuccessfulTransaction}
							alt="Spare Yourself Time & Pay Bills in Seconds"
							quality={100}
						/>
					</article>
				</section>
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
