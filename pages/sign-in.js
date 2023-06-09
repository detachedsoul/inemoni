import SignInForm from "@components/sign-in/SignInForm";
import LockScreenForm from "@components/lockscreen/LockScreenForm";
import Sidebar from "@components/create-account/Sidebar";
import Layout from "./_layout";
import Head from "next/head";
import getCookie from "@helpers/getCookie";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@assets/img/logo.svg";
import Image from "next/image";

const SignIn = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(() => false);
	}, []);

	return (
		<>
			{!isLoading && getCookie("is_logged_in").isValid === true ? (
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
				<div className="flex flex-col place-content-center py-12 md:p-[10%] xl:px-[14%]">
					{!isLoading && getCookie("is_logged_in").isValid === true ? (
						<LockScreenForm />
					) : (
						<SignInForm />
					)}
				</div>

                <Sidebar />
			</main>
		</>
	);
};

export default SignIn;

SignIn.getLayout = (page) => {
	return (
        <>
            <div className="my-4">
                <Link className="ml-4 md:ml-[5%] xl:ml-[7%] block" href="/">
                    <Image src={Logo} alt="Inemoni - Bringing Financial Services To Your Doorsteps." />
                </Link>

                { page }
            </div>
        </>
    );
};
