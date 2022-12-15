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

            <section className="px-[10%] space-y-8 text-center md:text-left">
                <h3 className="font-bold text-xl">
                    We are trusted by verified businesses
                </h3>

                <div className="flex flex-wrap items-center place-content-center gap-x-8 gap-y-4 md:place-content-start">
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