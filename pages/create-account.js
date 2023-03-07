import CreateAccountForm from "@components/create-account/CreateAccountForm";
import Layout from "./_layout";
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
				<CreateAccountForm />
			</main>
		</>
	);
};

export default CreateAccount;

CreateAccount.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
