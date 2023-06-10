import NextofKinForm from "@components/create-account/NextofKinForm";
import Sidebar from "@components/create-account/Sidebar";
import Logo from "@assets/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const NextofKin = () => {
	return (
		<>
			<Head>
				<title>Inemoni | Next of Kin Information</title>
				<meta
					name="description"
					content="Confirm your next of kin details"
				/>
			</Head>

			<main className="grid md:grid-cols-2 md:pr-4 lg:pr-0">
				<div className="flex flex-col place-content-center py-12 md:py-[10%] md:pl-[10%] md:pr-[5%] xl:px-[14%]">
					<NextofKinForm />
				</div>

                <Sidebar />
			</main>
		</>
	);
};

export default NextofKin;

NextofKin.getLayout = (page) => {
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
