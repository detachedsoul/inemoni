import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="UTF-8" />
				<link
					rel="icon"
					type="image/x-icon"
					href="/favicon.png"
				/>

				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<body
				className={`overscroll-contain scroll-smooth break-words bg-white font-inter text-[16px] leading-[35px] tracking-wide text-brand-black antialiased [word-break:break-word] [word-wrap:break-word] selection:bg-brand-purple selection:text-white`}
			>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
