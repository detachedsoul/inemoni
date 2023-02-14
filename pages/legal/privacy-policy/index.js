import PrivacyPolicy from "@components/privacy-policy/PrivacyPolicy";
import Head from "next/head";
import Layout from "pages/_layout";
import LegalLayout from "pages/legal/LegalLayout";

const PrivacyPolicies = () => {
    return (
		<>
			<Head>
				<title>Inemoni | Privacy Policy</title>
				<meta
					name="description"
					content="Privacy Policy for Inemoni"
				/>
			</Head>

			<PrivacyPolicy />
		</>
	);
};

export default PrivacyPolicies;

PrivacyPolicies.getLayout = (page) => {
	return (
		<Layout>
			<LegalLayout>{page}</LegalLayout>
		</Layout>
	);
};
