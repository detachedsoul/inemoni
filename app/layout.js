import "./globals.css";
import "@assets/uicons-regular-rounded/css/uicons-regular-rounded.min.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Inter } from '@next/font/google';
import Script from "next/script";

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

				<Script
					id="tawkTo"
					strategy="lazyOnload"
				>
					{`
						var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
						(function(){
						var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
						s1.async=true;
						s1.src='https://embed.tawk.to/63d82d6247425128791083d3/1go272j3j';
						s1.charset='UTF-8';
						s1.setAttribute('crossorigin','*');
						s0.parentNode.insertBefore(s1,s0);
						})();
					`}
				</Script>
			</body>
		</html>
	);
};

export default Layout;
