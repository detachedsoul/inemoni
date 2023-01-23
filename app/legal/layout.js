"use client";

import Link from "next/link";
import {useState} from "react";

const Layout = ({ children }) => {
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive(() => !isActive);
	};

    return (
		<>
			<div className="grid relative gap-8 items-start lg:grid-cols-12 p-[5%] xl:p-[7%] lg:gap-12">
				<div className={`fixed z-[1025] w-[90%] left-0 right-0 transiton-transform ease-in-out duration-500 lg:sticky top-[20%] flex flex-col gap-4 lg:col-span-3 bg-rose-500 lg:w-auto lg:z-auto ${isActive ? 'translate-x-0' : '-translate-x-[calc(100%+5%)]'} lg:translate-x-0 lg:static`}>
					<Link
						className="inline-block"
						href="/legal/privacy-policy"
					>
						Privacy Policy
					</Link>

					<Link
						className="inline-block"
						href="/legal/terms-of-use"
					>
						Terms of Use
					</Link>

					<Link
						className="inline-block"
						href="/legal/cookie-policy"
					>
						Cookie Policy
					</Link>
				</div>

				<div className="lg:col-span-9">{children}</div>
			</div>

			<button className="fixed right-4 bottom-4 rounded-md px-2.5 pt-1 pb-0.5 bg-gray-100 z-[1024]" type="button" aria-label="Toggle legal policies links" onClick={handleClick}>
				<i className="fr fi-rr-menu-burger top-0"></i>
			</button>
		</>
	);
};

export default Layout;
