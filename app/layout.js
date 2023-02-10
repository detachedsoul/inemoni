import "./globals.css";
import "@assets/uicons-regular-rounded/css/uicons-regular-rounded.min.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Inter } from '@next/font/google';

const inter = Inter({
	variable: '--font-inter',
});

const Layout = ({ children }) => {
    return (
		<html lang="en">
			<head />
			<body
				className={`overscroll-contain scroll-smooth bg-white text-[16px] leading-[35px] tracking-wide text-brand-black antialiased selection:bg-brand-purple selection:text-white ${inter.variable} break-words font-inter [word-break:break-word] [word-wrap:break-word]`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
};

export default Layout;
