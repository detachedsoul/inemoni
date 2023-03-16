import CreatePinForm from "@components/create-account/CreatePinForm";
import Sidebar from "@components/create-account/Sidebar";
import Layout from "@pages/_layout";
import Head from "next/head";

const CreatePin = () => {
	return (
		<>
			<Head>
				<title>Inemoni | Create Pin</title>
				<meta
					name="description"
					content="Create a secure pin for your account"
				/>
			</Head>

			<main className="grid md:grid-cols-2">
				<Sidebar />

				<div className="flex flex-col place-content-center py-12 md:bg-[#fafafa] md:p-[10%] xl:px-[14%]">
					<CreatePinForm />
				</div>
			</main>
		</>
	);
};

export default CreatePin;

CreatePin.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
