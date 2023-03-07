import PersonalDetailsForm from "@components/create-account/PersonalDetailsForm";
import Layout from "@pages/_layout";
import Head from "next/head";

const PersonalDetails = () => {
	return (
		<>
			<Head>
				<title>Inemoni | Personal Details</title>
				<meta
					name="description"
					content="Enter your personal details"
				/>
			</Head>

			<main className="space-y-[20%] py-12 sm:space-y-[10%]">
				<PersonalDetailsForm />
			</main>
		</>
	);
};

export default PersonalDetails;

PersonalDetails.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
