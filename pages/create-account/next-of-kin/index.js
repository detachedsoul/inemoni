import NextofKinForm from "@components/create-account/NextofKinForm";
import Layout from "@pages/_layout";
import Head from "next/head";

const NextofKin = () => {
	return (
		<>
			<Head>
				<title>Inemoni | Next of Kin Information</title>
				<meta
					name="description"
					content="Enter your next of kin information"
				/>
			</Head>

			<main className="space-y-[20%] py-12 sm:space-y-[10%]">
				<NextofKinForm />
			</main>
		</>
	);
};

export default NextofKin;

NextofKin.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
