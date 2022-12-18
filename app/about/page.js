import HeroText from "@components/about/HeroText";
import AboutSection from "@components/about/AboutSection";
import NationalReach from "@components/about/NationalReach";
import Image from "next/image";
import partners from "@assets/data/partners";

const About = () => {
    return (
		<main className="space-y-[10%] lg:pb-[2%]">
			<HeroText />
			<AboutSection />

			<section className="px-[10%] space-y-4 text-center sm:space-y-6 sm:text-left">
				<h3 className="font-bold text-xl sm:text-2xl">
					We are trusted by verified businesses
				</h3>

				<div className="grid grid-cols-3 sm:grid-cols-6 items-center gap-8">
					{partners.map((partner, id) => (
						<Image
							className="h-12 md:h-full"
							src={partner.logo}
							alt={partner.name}
							key={id}
							quality={100}
						/>
					))}
				</div>
			</section>

			<NationalReach />
		</main>
	);
};

export default About;