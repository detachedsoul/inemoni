import HeroText from "@components/contact/HeroText";
import ContactForm from "@components/contact/ContactForm";
import Tawk from "@components/Tawk";

const Index = () => {
    return (
        <>
            <main className="space-y-[20%] pb-12 sm:space-y-[10%]">
                <HeroText />
                <ContactForm />
            </main>

            <Tawk />
        </>
    );
};

export default Index;
