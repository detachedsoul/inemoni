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
		</main>
	);
};

export default About;