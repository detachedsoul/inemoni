import "@styles/globals.css";
import "@assets/uicons-regular-rounded/css/uicons-regular-rounded.min.css";
import { Inter } from "@next/font/google";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap"
});

const MyApp = ({ Component, pageProps }) => {
	const getLayout = Component.getLayout || ((page) => page);

	return getLayout(
		<>
			<style
				jsx
				global
			>{`
				:root {
					--font-inter: ${inter.variable};
				}
			`}</style>
			<Component {...pageProps} />
		</>,
	);
};

export default MyApp;
