import Header from "@components/Header";
import Footer from "@components/Footer";
import Head from "next/head";

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>

			<Header />
				{children}
			<Footer />
		</>
	);
};

export default Layout;
