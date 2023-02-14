import Image from "next/image";
import HeroText from "@components/HeroText";
import FeatureReview from "@components/FeatureReview";
import GetStarted from "@components/GetStarted";
import FooterCard from "@components/FooterCard";
import FooterBanner from "@components/FooterBanner";
import partners from "@assets/data/partners";
import Head from "next/head";
import Layout from "./_layout";

const Index = () => {
	return (
		<>
			<Head>
				<title>Inemoni | Home</title>
				<meta
					name="description"
					content="Inemoni - Bringing financial services to your doorsteps"
				/>
			</Head>

			<main className="space-y-[20%] sm:space-y-[10%]">
				<HeroText />
				<FeatureReview />

				<div className="flex flex-col gap-8 px-[10%] xl:px-[20%]">
					<h3 className="text-center text-xl font-medium">
						We are trusted by{" "}
						<span className="font-bold ">verified</span> businesses
					</h3>

					<div className="grid grid-cols-3 items-center gap-x-8 gap-y-6 sm:grid-cols-6">
						{partners.map((partner, id) => (
							<Image
								className="h-16 md:h-full"
								src={partner.logo}
								alt={partner.name}
								key={id}
								quality={100}
							/>
						))}
					</div>
				</div>

				<GetStarted />
			</main>

			<FooterCard />

			<FooterBanner />
		</>
	);
};

export default Index;

Index.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
