import HeroText from "@components/savings/HeroText";
import FooterCard from "@components/FooterCard";
import FooterBanner from "@components/FooterBanner";
import Image from "next/image";
import Savings from "@assets/img/savings.png";
import SavingsBalance from "@assets/img/savings-balance.png";

const Index = () => {
    return (
		<>
			<main className="space-y-[20%] sm:space-y-[10%]">
				<HeroText />

				<section className="px-[5%] xl:px-[7%]">
					<article className="grid grid-cols-1 items-center justify-between gap-12 lg:grid-cols-12 lg:gap-16">
						<div className="space-y-5 lg:col-span-7">
							<h2 className="header text-2xl leading-10 sm:text-5xl sm:text-[3.125rem] sm:leading-[4.063rem]">
								Savings is Easier When You Use Inemoni.
							</h2>

							<p>
								Accelerate your savings journey with Inemoni’s
								Smart Saving Products - enjoy up to 15% interest
								returns per annum and withdraw your funds with
								unmatched convenience.
							</p>
						</div>

						<Image
							className="h-full w-full lg:col-span-5"
							src={Savings}
							alt="Savings is Easier When You Use Inemoni"
							quality={100}
						/>
					</article>
				</section>

				<section className="px-[5%] xl:px-[7%]">
					<article className="grid grid-cols-1 items-center justify-between gap-12 lg:grid-cols-12 lg:gap-16">
						<div className="space-y-5 lg:col-span-7">
							<h2 className="header text-2xl leading-10 sm:text-5xl sm:text-[3.125rem] sm:leading-[4.063rem]">
								Stash your money & watch it grow.
							</h2>

							<p>
								Unleash the full potential of your savings with
								Inemoni’s Fixed Plan - secure lump sums and soar
								to financial heights with Up to 15% annual
								interest.
							</p>
						</div>

						<Image
							className="h-full w-full lg:col-span-5"
							src={SavingsBalance}
							alt="Stash your money & watch it grow"
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

export default Index;
