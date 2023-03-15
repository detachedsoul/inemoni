import PersonalDetailsForm from "@components/create-account/PersonalDetailsForm";
import Sidebar from "@components/create-account/Sidebar";
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

			<main className="grid md:grid-cols-2">
				<Sidebar />

				<div className="flex flex-col place-content-center md:bg-[#fafafa] py-12 md:p-[10%] xl:px-[14%]">
					<PersonalDetailsForm />
				</div>
			</main>
		</>
	);
};

export default PersonalDetails;

PersonalDetails.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
