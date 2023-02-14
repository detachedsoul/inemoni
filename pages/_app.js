import "@styles/globals.css";
import "@assets/uicons-regular-rounded/css/uicons-regular-rounded.min.css";

const MyApp = ({ Component, pageProps }) => {
	const getLayout = Component.getLayout || ((page) => page);

	return getLayout(<Component { ...pageProps } />);
};

export default MyApp;
