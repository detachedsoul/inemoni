import { Head, Html, Main, NextScript } from "next/document";

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
				<meta
					property="og:image"
					content="https://www.inemoni.org/img/og-image.jpg"
				/>
			</Head>

			<body
                className={`overscroll-contain scroll-smooth break-words bg-[#F2F2F2] font-normal text-base leading-relaxed tracking-wide text-[#262626] antialiased [word-break:break-word] [word-wrap:break-word] selection:bg-brand-purple selection:text-white`}
			>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
