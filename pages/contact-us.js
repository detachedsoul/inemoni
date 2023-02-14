import HeroText from "@components/contact/HeroText";
import ContactForm from "@components/contact/ContactForm";
import Tawk from "@components/Tawk";
import Head from "next/head";
import Layout from "./_layout";

const ContactUs = () => {
    return (
		<>
			<Head>
				<title>Inemoni | Contact Us</title>
				<meta
					name="description"
					content="Get in touch with us; we would be happy to help you."
				/>
			</Head>

			<main className="space-y-[20%] pb-12 sm:space-y-[10%]">
				<HeroText />
				<ContactForm />
			</main>

			<Tawk />
		</>
	);
};

export default ContactUs;

ContactUs.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
