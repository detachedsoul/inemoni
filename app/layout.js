import "./globals.css";
import "@assets/uicons-regular-rounded/css/uicons-regular-rounded.min.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import localFont from "@next/font/local";
import { Inter } from '@next/font/google';

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

const inter = Inter({
	variable: '--font-inter',
});

const Layout = ({ children }) => {
    return (
		<html lang="en">
			<head />
			<body
				className={`antialiased tracking-wide leading-[2.188rem] scroll-smooth overscroll-contain bg-white text-brand-black text-lg selection:bg-brand-purple selection:text-white ${inter.variable} font-inter break-words [word-break:break-word] [word-wrap:break-word] lg:text-base`}
			>
				<Header />
					{children}
				<Footer />
			</body>
		</html>
	);
};

export default Layout;