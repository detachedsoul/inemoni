import StatusIndicator from "@components/status/StatusIndicator";
import FooterBanner from "@components/FooterBanner";
import Head from "next/head";
import Layout from "./_layout";

const Status = () => {
    return (
		<>
			<Head>
				<title>Inemoni | Inemoni Services Status</title>
				<meta
					name="description"
					content="Get to know about the status of Inemoni services."
				/>
			</Head>

			<main className="px-[5%] pt-[10%] pb-[15%] xl:px-[7%]">
				<StatusIndicator />
			</main>

			<FooterBanner />
		</>
	);
};

export default Status;

Status.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
