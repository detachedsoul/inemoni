import UpdatePinForm from "@components/update-pin/UpdatePinForm";
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

			<main className="space-y-[20%] py-12 sm:space-y-[10%]">
				<UpdatePinForm />
			</main>
		</>
	);
};

export default UpdatePin;

UpdatePin.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
