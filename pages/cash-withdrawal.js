import InemoniCard from "@assets/img/inemoni-card.png";
import PurpleBackgroundPOS from "@assets/img/purple-background-pos.png";
import HeroText from "@components/cash-withdrawal/HeroText";
import FooterCard from "@components/FooterCard";
import FooterBanner from "@components/FooterBanner";
import Image from "next/image";
import Head from "next/head";
import Layout from "./_layout";

const CashWithdrawal = () => {
	return (
		<>
			<Head>
				<title>Inemoni | Cash Withdrawal</title>
				<meta
					name="description"
					content="Cash withdrawal feature of Inemoni"
				/>
			</Head>

			<main className="space-y-[10%] sm:space-y-[5%]">
				<HeroText />

				<section className="bg-[#E6E6E6] rounded-[30px] text-center p-[5%] mx-4 xl:mx-8 text-center grid gap-2">
                    <h2 className="secondary-header text-2xl sm:text-3xl sm:w-3/5 lg:w-2/5 sm:mx-auto">
                        Seamless card payments everywhere. No more cash hassles.
                    </h2>

                    <Image
                        className="sm:w-1/2 lg:w-1/3 sm:mx-auto object-contain"
                        src={InemoniCard}
                        alt="Savings is Easier When You Use Inemoni"
                    />

                    <p className="sm:w-3/5 sm:mx-auto lg:w-2/5">
                        Enjoy seamless access to your favorite entertainment and payments with our cards on Spotify, Netflix, Prime Video, Showmax, and more.
                    </p>
				</section>

				<section className="px-[5%] xl:px-[7%] grid gap-4 sm:grid-cols-12 items-start">
					<h2 className="secondary-header text-center sm:text-left sm:col-span-8 lg:col-span-7">
                        Experience Seamless Transactions Tailored to Your Business.
                    </h2>

                    <Image
                        className="h-full w-full sm:col-span-4 lg:col-span-5"
                        src={PurpleBackgroundPOS}
                        alt="Experience Seamless Transactions Tailored to Your Business."
                    />
				</section>
			</main>

			<FooterCard />
			<FooterBanner />
		</>
	);
};

export default CashWithdrawal;

CashWithdrawal.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
