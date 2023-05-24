import Link from "next/link";
import FooterBanner from "@components/FooterBanner";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const LegalLayout = ({ children }) => {
	const links = [
		{ id: 1, name: "Privacy Policy", route: "/legal/privacy-policy" },
		{ id: 2, name: "Terms of Use", route: "/legal/terms-of-use" },
		{ id: 3, name: "Cookie Policy", route: "/legal/cookie-policy" },
		{ id: 4, name: "Faqs", route: "/legal/faqs" },
	];

	const [isActive, setIsActive] = useState(false);
	const router = useRouter();

	const handleClick = () => {
		setIsActive(() => !isActive);
	};

	useEffect(() => {
		setIsActive(() => false);
	}, [router.pathname]);

    return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>

			<main className="grid gap-8 items-start sm:grid-cols-12 p-[5%] xl:p-[7%] sm:gap-12">
				<div
					className={`fixed z-[1024] transiton-transform ease-in-out left-0 px-[5%] top-[10%] duration-500 sm:sticky sm:z-auto sm:w-auto sm:p-0 w-full sm:top-[15%] sm:col-span-4 md:col-span-3 py-4 ${
						isActive
							? "translate-x-0"
							: "-translate-x-[calc(100%+6%)]"
					} sm:translate-x-0`}
				>
					<ul className="flex flex-col gap-4">
						{ links.map((link) => (
							<li key={link.id}>
								<Link
									className={`inline-block ${router.pathname === link.route && 'text-brand-purple font-semibold'} hover:text-brand-purple`}
									href={link.route}
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="sm:col-span-8 md:col-span-9">{children}</div>
			</main>

			<button
				className="fixed right-[5%] bottom-[15%] rounded-md px-2.5 pt-1 pb-0.5 bg-gray-100 z-[1024] sm:hidden"
				type="button"
				aria-label="Toggle legal policies links"
				onClick={handleClick}
			>
				<i
					className={`${
						isActive ? "fi-rr-cross" : "fi-rr-menu-burger "
					} top-0`}
				></i>
			</button>

			<FooterBanner />
		</>
	);
};

export default LegalLayout;
