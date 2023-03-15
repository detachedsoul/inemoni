import UpdatePinForm from "@components/update-pin/UpdatePinForm";
import Sidebar from "@components/create-account/Sidebar";
import Layout from "./_layout";
import Head from "next/head";

const UpdatePin = () => {
	return (
		<>
			<Head>
				<title>Inemoni | Update Pin</title>
				<meta
					name="description"
					content="Update your pin to continue"
				/>
			</Head>

			<main className="grid md:grid-cols-2">
				<Sidebar />

				<div className="flex flex-col place-content-center py-12 md:bg-[#fafafa] md:p-[10%] xl:px-[14%]">
					<UpdatePinForm />
				</div>
			</main>
		</>
	);
};

export default UpdatePin;

UpdatePin.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
