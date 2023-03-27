import VerifyAccountForm from "@components/verify-account/VerifyAccountForm";
import Sidebar from "@components/create-account/Sidebar";
import Layout from "./_layout";
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

			<main className="grid md:grid-cols-2">
				<Sidebar />

				<div className="flex flex-col place-content-center py-12 md:bg-[#fafafa] md:p-[10%] xl:px-[14%]">
					<VerifyAccountForm />
				</div>
			</main>
		</>
	);
};

export default VerifyAccount;

VerifyAccount.getLayout = (page) => {
	return <Layout>{ page }</Layout>;
};
