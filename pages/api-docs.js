import HeroText from "@components/api-docs/HeroText";
import FooterBanner from "@components/FooterBanner";
import Head from "next/head";
import Layout from "./_layout";

const ApiDocs = () => {
    return (
		<>
			<Head>
				<title>Inemoni | API Documentation</title>
				<meta
					name="description"
					content="Robust API integration for building and processing fully customizable payment solutions. Integrate Inemoni once and let your customers pay you however they want."
				/>
			</Head>

			<main className="space-y-[20%] sm:space-y-[10%]">
				<HeroText />
			</main>

			<FooterBanner />
		</>
	);
};

export default ApiDocs;

ApiDocs.getLayout = (page) => {
	return <Layout>{page}</Layout>;
};
