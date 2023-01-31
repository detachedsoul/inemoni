"use client";

import Link from "next/link";
import { useState,useEffect } from "react";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
	const [isActive, setIsActive] = useState(false);
	const pathname = usePathname();

	const handleClick = () => {
		setIsActive(() => !isActive);
	};

	useEffect(() => {
		setIsActive(() => false);
	 }, [pathname]);

    return (
		<>
			<div className="grid gap-8 items-start lg:grid-cols-12 p-[5%] xl:p-[7%] lg:gap-12">
				<div
					className={`fixed z-[1024] transiton-transform ease-in-out left-0 px-[5%] top-[10%] duration-500 lg:sticky lg:z-auto lg:w-auto lg:p-0 w-full lg:top-[15%] lg:col-span-3 bg-white py-4 ${
						isActive
							? "translate-x-0"
							: "-translate-x-[calc(100%+6%)]"
					} lg:translate-x-0`}
				>
					<ul className="flex flex-col gap-4">
						<li>
							<Link
								className="inline-block hover:text-brand-purple"
								href="/legal/privacy-policy"
							>
								Privacy Policy
							</Link>
						</li>

						<li>
							<Link
								className="inline-block hover:text-brand-purple"
								href="/legal/terms-of-use"
							>
								Terms of Use
							</Link>
						</li>

						<li>
							<Link
								className="inline-block hover:text-brand-purple"
								href="/legal/cookie-policy"
							>
								Cookie Policy
							</Link>
						</li>

						<li>
							<Link
								className="inline-block hover:text-brand-purple"
								href="/legal/faqs"
							>
								Faqs
							</Link>
						</li>
					</ul>
				</div>

				<div className="lg:col-span-9">{children}</div>
			</div>

			<button
				className="fixed right-[5%] bottom-[10%] rounded-md px-2.5 pt-1 pb-0.5 bg-gray-100 z-[1024] lg:hidden"
				type="button"
				aria-label="Toggle legal policies links"
				onClick={handleClick}
			>
				<i
					className={`fr ${
						isActive ? "fi-rr-cross" : "fi-rr-menu-burger "
					} top-0`}
				></i>
			</button>
		</>
	);
};

export default Layout;
