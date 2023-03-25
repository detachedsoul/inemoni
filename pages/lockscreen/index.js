import LockScreenForm from "@components/lockscreen/LockScreenForm";
import Sidebar from "@components/create-account/Sidebar";
import Layout from "@pages/_layout";
import Head from "next/head";

const LockScreen = () => {
	return (
		<>
			<Head>
				<title>Inemoni | Lock Screen</title>
				<meta
					name="description"
					content="Enter your password to continue"
				/>
			</Head>

			<main className="grid md:grid-cols-2">
				<Sidebar />

				<div className="flex flex-col place-content-center py-12 md:bg-[#fafafa] md:p-[10%] xl:px-[14%]">
					<LockScreenForm />
				</div>
			</main>
		</>
	);
};

export default LockScreen;

LockScreen.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
