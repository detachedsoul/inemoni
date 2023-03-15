import PasswordResetForm from "@components/password-reset/PasswordResetForm";
import Sidebar from "@components/create-account/Sidebar";
import Layout from "./_layout";
import Head from "next/head";

const PasswordReset = () => {
	return (
		<>
			<Head>
				<title>Inemoni | Password Reset</title>
				<meta
					name="description"
					content="Reset your password"
				/>
			</Head>

			<main className="grid md:grid-cols-2">
				<Sidebar />

				<div className="flex flex-col place-content-center py-12 md:bg-[#fafafa] md:p-[10%] xl:px-[14%]">
					<PasswordResetForm />
				</div>
			</main>
		</>
	);
};

export default PasswordReset;

PasswordReset.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
