import ContactInformationForm from "@components/create-account/ContactInformationForm";
import Layout from "@pages/_layout";
import Head from "next/head";

const ContactInformation = () => {
	return (
		<>
			<Head>
				<title>Inemoni | Contact Information</title>
				<meta
					name="description"
					content="Enter your contact information"
				/>
			</Head>

			<main className="space-y-[20%] py-12 sm:space-y-[10%]">
				<ContactInformationForm />
			</main>
		</>
	);
};

export default ContactInformation;

ContactInformation.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
