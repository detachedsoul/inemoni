import ContactInformationForm from "@components/create-account/ContactInformationForm";
import Sidebar from "@components/create-account/Sidebar";
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

			<main className="grid md:grid-cols-2">
				<Sidebar />

				<div className="flex flex-col place-content-center md:bg-[#fafafa] py-12 md:p-[5%] xl:px-[8%]">
					<ContactInformationForm />
				</div>
			</main>
		</>
	);
};

export default ContactInformation;

ContactInformation.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
