import HeroText from "@components/about/HeroText";
import AboutSection from "@components/about/AboutSection";
import NationalReach from "@components/about/NationalReach";
import Image from "next/image";
import partners from "@assets/data/partners";

const About = () => {
    return (
        <main className="space-y-[10%]">
            <HeroText />
            <AboutSection />

            <section className="px-[10%] space-y-8">
                <h3 className="font-bold text-xl">
                    We are trusted by verified businesses
                </h3>

                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                    {partners.map((partner, id) => (
                        <Image
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