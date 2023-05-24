import HeroText from "@components/savings/HeroText";
import FooterCard from "@components/FooterCard";
import FooterBanner from "@components/FooterBanner";
import Image from "next/image";
import Savings from "@assets/img/savings.png";
import SavingsBalance from "@assets/img/savings-balance.png";
import Head from "next/head";
import Layout from "./_layout";

const SavingsFeature = () => {
    return (
		<>
			<Head>
				<title>Inemoni | Savings</title>
				<meta
					name="description"
					content="Savings feature of Inemoni"
				/>
			</Head>

			<main className="space-y-[10%] sm:space-y-[5%]">
				<HeroText />

                <div className="space-y-[10%] sm:space-y-0">
                    <section className="px-[5%]">
                        <div className="grid grid-cols-1 items-center justify-between gap-8 lg:grid-cols-12 lg:gap-16 sm:gap-12 sm:grid-cols-2">
                            <h2 className="secondary-header ont-bold text-center sm:hidden">
                                Savings is Easier When You Use Inemoni.
                            </h2>

                            <Image
                                className="h-full w-full lg:col-span-5"
                                src={Savings}
                                alt="Savings is Easier When You Use Inemoni"
                            />

                            <div className="sm:space-y-5 lg:col-span-7">
                                <h2 className="secondary-header lg:w-[90%] hidden sm:block">
                                    Savings is Easier When You Use Inemoni.
                                </h2>

                                <p className="lg:w-[70%] sm:text-left text-center">
                                    Accelerate your savings journey with Inemoni’s Smart Saving Products - enjoy up to 15% interest returns per annum and withdraw your funds with unmatched convenience.
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="pt-5 bg-[#E6E6E6] rounded-[30px] text-center px-[5%] mx-4 xl:mx-8">
                        <Image
                            className="sm:w-4/5 sm:mx-auto object-cover"
                            src={SavingsBalance}
                            alt="Savings is Easier When You Use Inemoni"
                        />
                    </div>
                </div>

				<section className="px-[5%]">
					<div className="text-center grid place-items-center gap-5 sm:w-1/2 sm:mx-auto">
                        <h3 className="secondary-header font-bold">
                            Stash Your Money <br />
                            & Watch It Grow.
                        </h3>

                        <p className="w-4/5 sm:w-[70%] mx-auto">
                            Unleash the full potential of your savings with Inemoni’s Fixed Plan - secure lump sums and soar to financial heights with Up to 15% annual interest.
                        </p>
                    </div>
				</section>
			</main>

			<FooterCard />

			<FooterBanner />
		</>
	);
};

export default SavingsFeature;

SavingsFeature.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
