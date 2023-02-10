import HeroText from "@components/api-docs/HeroText";
import FooterBanner from "@components/FooterBanner";

const Index = () => {
    return (
        <>
            <main className="space-y-[20%] sm:space-y-[10%]">
                <HeroText />
            </main>

            <FooterBanner />
        </>
    );
};

export default Index;
