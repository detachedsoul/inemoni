import VerifyAccountForm from "@components/verify-account/VerifyAccountForm";
import Sidebar from "@components/create-account/Sidebar";
import Link from "next/link";
import Logo from "@assets/img/logo.svg";
import Image from "next/image";
import Head from "next/head";

const VerifyAccount = () => {
	return (
		<>
            <Head>
                <title>Inemoni | Verify Account</title>
                <meta
                    name="description"
                    content="Enter verification code to gain access to fiancial freedom"
                />
            </Head>

			<main className="grid md:grid-cols-2 md:pr-4 lg:pr-0">
				<div className="flex flex-col place-content-center py-12 md:py-[10%] md:pl-[10%] md:pr-[5%] xl:px-[14%]">
					<VerifyAccountForm />
				</div>

                <Sidebar />
			</main>
		</>
	);
};

export default VerifyAccount;

VerifyAccount.getLayout = (page) => {
	return (
        <>
            <div className="my-4">
                <Link className="ml-4 md:ml-[5%] xl:ml-[7%] inline-block" href="/">
                    <Image src={Logo} alt="Inemoni - Bringing Financial Services To Your Doorsteps." priority />
                </Link>

                { page }
            </div>
        </>
    );
};
