import SignInForm from "@components/sign-in/SignInForm";
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

			<main className="space-y-[20%] py-12 sm:space-y-[10%]">
				<SignInForm />
			</main>
		</>
	);
};

export default SignIn;

SignIn.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
