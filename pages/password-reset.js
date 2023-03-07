import PasswordResetForm from "@components/password-reset/PasswordResetForm";
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

			<main className="space-y-[20%] py-12 sm:space-y-[10%]">
				<PasswordResetForm />
			</main>
		</>
	);
};

export default PasswordReset;

PasswordReset.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
