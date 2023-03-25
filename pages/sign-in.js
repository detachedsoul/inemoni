import SignInForm from "@components/sign-in/SignInForm";
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

	if (typeof window !== "undefined" && !isLoading === true && getCookie("is_logged_in").isValid === true) {
		// window.location.replace("https://www.inemoni.org/mobile");

		console.log(getCookie("is_logged_in").sanitizedValue);

		return;
	}

    return (!isLoading &&
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

				<div className="flex flex-col place-content-center md:bg-[#fafafa] py-12 md:p-[10%] xl:px-[14%]">
					<SignInForm />
				</div>
			</main>
		</>
	);
};

export default SignIn;

// if (typeof window !== "undefined" && !isLoading === true && getCookie("is_logged_in").isValid === true) {
// 	SignIn.getLayout = (page) => {
// 		return <Layout>{ page }</Layout>;
// 	};
// }

// SignIn.getLayout = (page) => {
// 	if (
// 		typeof window !== "undefined" &&
// 		getCookie("is_logged_in").isValid === true
// 	) {
// 		return null;
// 	}

// 	return <Layout>{ page }</Layout>;
// };

	SignIn.getLayout = (page) => {
		return typeof window !== "undefined" === true && getCookie("is_logged_in").isValid === false ? <Layout>{ page }</Layout> : <>{page}</>;
	};
