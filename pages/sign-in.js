import SignInForm from "@components/sign-in/SignInForm";
import LockScreenForm from "@components/lockscreen/LockScreenForm";
import Sidebar from "@components/create-account/Sidebar";
import Layout from "./_layout";
import Head from "next/head";
import getCookie from "@helpers/getCookie";
import { useState, useEffect } from "react";

const SignIn = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(() => false);
	}, []);

	return (
		<>
			{!isLoading && getCookie("user_auth_token").isValid === true ? (
				<Head>
					<title>Inemoni | Lock Screen</title>
					<meta
						name="description"
						content="Enter your password to continue"
					/>
				</Head>
			) : (
				<Head>
					<title>Inemoni | Sign In</title>
					<meta
						name="description"
						content="Sign in to your account"
					/>
				</Head>
			)}

			<main className="grid md:grid-cols-2">
				<Sidebar />

				<div className="flex flex-col place-content-center py-12 md:bg-[#fafafa] md:p-[10%] xl:px-[14%]">
					{!isLoading && getCookie("user_auth_token").isValid === true ? (
						<LockScreenForm />
					) : (
						<SignInForm />
					)}
				</div>
			</main>
		</>
	);
};

export default SignIn;

SignIn.getLayout = (page) => {
	return <Layout>{ page }</Layout>;
};
