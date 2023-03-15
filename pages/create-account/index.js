import BVNForm from "@components/create-account/BVNForm";
import Sidebar from "@components/create-account/Sidebar";
import Layout from "@pages/_layout";
import Head from "next/head";

const CreateAccount = () => {
	return (
		<>
			<Head>
				<title>Inemoni | Create Account</title>
				<meta
					name="description"
					content="Create an account with us and enjoy your life!"
				/>
			</Head>

			<main className="grid md:grid-cols-2">
				<Sidebar />

				<div className="flex flex-col place-content-center md:bg-[#fafafa] py-12 md:p-[5%] xl:px-[8%]">
					<BVNForm />
				</div>
			</main>
		</>
	);
};

export default CreateAccount;

CreateAccount.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
