import "@assets/uicons-regular-rounded/css/uicons-regular-rounded.min.css";
import localFont from "next/font/local";
import "@styles/globals.css";

const aeonik = localFont({
	subsets: ["latin"],
	variable: "--font-aeonik",
	display: "swap",
    src: [
        {
            path: "../public/fonts/Aeonik-Regular.otf",
            weight: "400",
            style: "normal"
        },
        {
            path: "../public/fonts/Aeonik-Bold.otf",
            weight: "700",
            style: "normal"
        },
        {
            path: "../public/fonts/Aeonik-Medium.otf",
            weight: "500",
            style: "normal"
        }
    ]
});

const MyApp = ({ Component, pageProps }) => {
	const getLayout = Component.getLayout || ((page) => page);

	return getLayout(
		<>
			<style
				jsx
				global
			>{`
				html  {
					font-family: ${aeonik.style.fontFamily};
				}
			`}</style>
			<Component {...pageProps} />
		</>,
	);
};

export default MyApp;
