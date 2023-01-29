import HeroText from "@components/money-transfer/HeroText";
import FooterCard from "@components/FooterCard";
import Image from "next/image";
import SendMoney from "@assets/img/send-money.png";
import SuccessfulTransaction from "@assets/img/successful-transaction.png";

const Index = () => {
	return (
		<>
			<main className="space-y-[20%] sm:space-y-[10%]">
				<HeroText />

				<section className="px-[5%] xl:px-[7%]">
					<article className="grid grid-cols-1 items-center justify-between gap-12 lg:grid-cols-12 lg:gap-16">
						<div className="space-y-5 lg:col-span-7">
							<h2 className="header text-2xl leading-10 sm:text-5xl sm:text-[3.125rem] sm:leading-[4.063rem]">
								Money Transfer is easier when you use Inemoni.
							</h2>

							<p>
								With just a few clicks, you can quickly and securely transfer funds to friends, family, or business associates without the hassle of writing checks or visiting a bank.
							</p>
						</div>

						<Image
							className="h-full w-full lg:col-span-5"
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
								We believe in moving money quickly and free of charge, so you can count on getting free transfers to other banks every month forever.
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
		</>
	);
};

export default Index;
