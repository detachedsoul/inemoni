import CreatePinForm from "@components/create-account/CreatePinForm";
import Sidebar from "@components/create-account/Sidebar";
import Head from "next/head";
import Link from "next/link";
import Logo from "@assets/img/logo.svg";
import Image from "next/image";

const CreatePin = () => {
	return (
		<>
			<Head>
				<title>Inemoni | Create Pin</title>
				<meta
					name="description"
					content="Create a secure pin for your account"
				/>
			</Head>

            <main className="grid md:grid-cols-2 md:max-h-screen md:h-screen md:overflow-y-hidden">
                <div className="bg-[#F2F2F2]">
                    <div className="pt-8 sticky top-0 md:pt-4 bg-[#F2F2F2]">
                        <Link className="ml-4 md:ml-[5%] xl:ml-[7%] inline-block" href="/">
                            <Image src={Logo} alt="Inemoni - Bringing Financial Services To Your Doorsteps." priority />
                        </Link>
                    </div>

                    <div className="flex flex-col place-content-center md:block py-12 md:py-4 md:pl-[10%] md:pr-[5%] xl:px-[14%] md:h-[calc(100vh-3.5rem)] md:overflow-y-auto md:no-scrollbar sm:w-3/4 sm:mx-auto md:w-full">
                        <CreatePinForm />
                    </div>
                </div>

                <Sidebar />
			</main>
		</>
	);
};

export default CreatePin;

CreatePin.getLayout = (page) => {
	return (
        <>
            { page }
        </>
    );
};
