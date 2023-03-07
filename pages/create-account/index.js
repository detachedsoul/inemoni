import BVNForm from "@components/create-account/BVNForm";
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

			<main className="space-y-[20%] py-12 sm:space-y-[10%]">
				<BVNForm />
			</main>
		</>
	);
};

export default CreateAccount;

CreateAccount.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
