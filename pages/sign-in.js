import SignInForm from "@components/sign-in/SignInForm";
import Sidebar from "@components/create-account/Sidebar";
import Layout from "./_layout";
import Head from "next/head";

const SignIn = () => {
    return (
		<>
			<Head>
				<title>Inemoni | Sign In</title>
				<meta
					name="description"
					content="Sign in to your account"
				/>
			</Head>

			<main className="grid md:grid-cols-2">
				<Sidebar />

				<div className="flex flex-col place-content-center md:bg-[#fafafa] py-12 md:p-[10%] xl:px-[8%]">
					<SignInForm />
				</div>
			</main>
		</>
	);
};

export default SignIn;

SignIn.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
