import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="UTF-8" />
				<link
					rel="shortcut icon"
					type="image/x-icon"
					href="/favicon.png"
				/>
				<meta property="og:image" content="https://inemoni.org/_next/static/media/logo.846c8179.svg" />
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
