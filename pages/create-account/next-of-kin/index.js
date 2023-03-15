import NextofKinForm from "@components/create-account/NextofKinForm";
import Sidebar from "@components/create-account/Sidebar";
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

			<main className="grid md:grid-cols-2">
				<Sidebar />

				<div className="flex flex-col place-content-center py-12 md:bg-[#fafafa] md:p-[10%] xl:px-[14%]">
					<NextofKinForm />
				</div>
			</main>
		</>
	);
};

export default NextofKin;

NextofKin.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
