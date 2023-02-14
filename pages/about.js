import Head from "next/head";
import HeroText from "@components/about/HeroText";
import NationalReach from "@components/about/NationalReach";
import Testimonials from "@components/about/Testimonials";
import FooterCard from "@components/FooterCard";
import FooterBanner from "@components/FooterBanner";
import Image from "next/image";
import partners from "@assets/data/partners";
import Layout from "./_layout";

const About = () => {
    return (
		<>
			<Head>
				<title>Inemoni | About</title>
				<meta
					name="description"
					content="Description of what Inemoni is all about, services they offer, etc"
				/>
			</Head>

			<main className="space-y-[10%] lg:pb-[2%]">
				<HeroText />

				<section className="px-[10%] space-y-4 text-center sm:space-y-6 sm:text-left">
					<h3 className="text-xl font-medium text-center">
						We are trusted by <span className="font-bold ">verified</span> businesses
					</h3>

					<div className="grid grid-cols-3 sm:grid-cols-6 items-center gap-x-12 gap-y-4">
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
				</section>

				<NationalReach />
				<Testimonials />
			</main>

			<FooterCard />
			<FooterBanner />
		</>
	);
};

export default About;

About.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
