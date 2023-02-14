import HeroText from "@components/money-transfer/HeroText";
import FooterCard from "@components/FooterCard";
import FooterBanner from "@components/FooterBanner";
import Image from "next/image";
import SendMoney from "@assets/img/send-money.png";
import SuccessfulTransaction from "@assets/img/money-transfer-successful.png";
import Head from "next/head";
import Layout from "./_layout";

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

			<main className="space-y-[20%] sm:space-y-[10%]">
				<HeroText />

				<section className="px-[5%] xl:px-[7%]">
					<article className="grid grid-cols-1 items-center justify-between gap-12 lg:grid-cols-12 lg:gap-16">
						<div className="space-y-5 lg:col-span-7">
							<h2 className="header text-2xl leading-10 sm:text-5xl sm:text-[3.125rem] sm:leading-[4.063rem]">
								Money Transfer is easier when you use Inemoni.
							</h2>

							<p>
								Effortlessly connect with your loved ones and
								business partners with Inemoni’s Quick and
								Secure Fund Transfer. Say goodbye to checks and
								bank visits.
							</p>
						</div>

						<Image
							className="h-full w-full rounded-lg shadow-[0px_5px_20px_10px_rgba(0,0,10,0.05)] lg:col-span-5"
							src={SuccessfulTransaction}
							alt="Money Transfer is easier when you use Inemoni"
							quality={100}
						/>
					</article>
				</section>

				<section className="px-[5%] xl:px-[7%]">
					<article className="grid grid-cols-1 items-center justify-between gap-12 lg:grid-cols-12 lg:gap-16">
						<div className="space-y-5 lg:col-span-7">
							<h2 className="header text-2xl leading-10 sm:text-5xl sm:text-[3.125rem] sm:leading-[4.063rem]">
								Spare Yourself Time & Just Send in Seconds.
							</h2>

							<p>
								Effortlessly move your money, whenever and
								wherever you need it, with our hassle-free, and
								secure transfers. Experience the freedom of fast
								and free banking today!
							</p>
						</div>

						<Image
							className="h-full w-full lg:col-span-5"
							src={SendMoney}
							alt="Spare Yourself Time & Just Send in Seconds"
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

export default MoneyTransfer;

MoneyTransfer.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
