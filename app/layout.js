import "@assets/uicons-regular-rounded/css/uicons-regular-rounded.min.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
// import { DM_Serif_Display } from "@next/font/google";
import localFont from "@next/font/local";
import "./globals.css";

const millik = localFont({
	src: "../public/fonts/Millik.otf",
	variable: "--font-millik",
	display: "swap",
	preload: true
});

const moderat = localFont({
	src: "../public/fonts/Moderat.ttf",
	variable: "--font-moderat",
	display: "swap",
	preload: true
});

const DMSerifDisplay = localFont({
	src: "../public/fonts/DMSerifDisplay.ttf",
	variable: "--font-dm-serif-display",
	display: "swap",
	preload: true,
	weight: "400",
});

// const heldane = localFont({
// 	src: "../public/fonts/Heldane.otf",
// 	variable: "--font-heldane",
// 	display: "swap",
// 	preload: true
// });

const Layout = ({ children }) => {
    return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<title>Inemoni | Home</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" type="image/x-icon" href="/logo.svg" />
				<meta
					name="description"
					content="Inemoni - Bringing financial services to your doorsteps"
				/>
			</head>
			<body
				className={`antialiased tracking-wide scroll-smooth overscroll-contain bg-white text-brand-black text-normal selection:bg-brand-purple selection:text-white ${moderat.variable} ${millik.variable} ${DMSerifDisplay.variable} font-moderat break-words [word-break:break-word] [word-wrap:break-word] overflow-y-auto`}
			>
				<Header />
					{children}
				<Footer />
			</body>
		</html>
	);
};

export default Layout;