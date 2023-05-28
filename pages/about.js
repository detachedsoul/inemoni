import Head from "next/head";
import HeroText from "@components/about/HeroText";
import BriefHistory from "@components/about/BriefHistory";
import OurAim from "@components/about/OurAim";
import OurTeam from "@components/about/OurTeam";
import FooterCard from "@components/FooterCard";
import FooterBanner from "@components/FooterBanner";
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

			<main>
				<HeroText />

                <div className="space-y-[10%] sm:space-y-[5%]">
                    <BriefHistory />

                    <section className="text-center space-y-4 sm:w-4/5 sm:mx-auto px-[5%] mx-4 lg:w-3/5">
                        <h2 className="secondary-header">
                            Imagine being stranded without access to your hard-earned cash — talk about a financial nightmare!
                        </h2>

                        <p className="w-[90%] mx-auto">
                            We’ve been there, and that’s why Inemoni is here to save the day! We don’t just prioritize our customers – we superheroize them!
                        </p>
                    </section>

                    <OurAim />

                    <OurTeam />
                </div>
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
