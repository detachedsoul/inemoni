import "./globals.css";
import "@assets/uicons-regular-rounded/css/uicons-regular-rounded.min.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import localFont from "@next/font/local";
import { Inter } from '@next/font/google';

const inter = Inter({
	variable: '--font-inter',
});

const Layout = ({ children }) => {
    return (
		<html lang="en">
			<head />
			<body
				className={`antialiased tracking-wide leading-[35px] scroll-smooth overscroll-contain bg-white text-brand-black text-[16px] selection:bg-brand-purple selection:text-white ${inter.variable} font-inter break-words [word-break:break-word] [word-wrap:break-word]`}
			>
				<Header />
					{children}
				<Footer />
			</body>
		</html>
	);
};

export default Layout;
