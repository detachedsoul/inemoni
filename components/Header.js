"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@assets/img/logo.svg";
import {useRef, useState} from "react";

const Header = () => {
	const navRef = useRef(null);
	const [navIsOpen, setNavIsOpen] = useState(false);

	const handleNavClick = () => {
		setNavIsOpen(() => !navIsOpen);
	};

    return (
		<header className="px-[5%] py-[4%] sticky top-0 bg-white z-50 flex items-center gap-4 justify-between lg:py-[1.5%] border-b border-brand-gray lg:border-none">
			<Link href="/">
				<Image src={Logo} alt="Inemoni" priority />
			</Link>

			<nav className={`top-full absolute lg:static left-0 p-4 bg-white w-4/5 lg:w-auto lg:p-0 border-r border-brand-gray min-h-screen lg:min-h-0 lg:border-none transition-transform duration-500 ease-in-out lg:translate-x-0 ${navIsOpen ? 'translate-x-0' : '-translate-x-full'}`} ref={navRef}>
				<ul className="flex lg:items-center flex-col gap-4 lg:gap-12 justify-between lg:flex-row">
					<li>
						<Link className="text-brand-navlink font-medium hover:bg-brand-purple/40 btn hover:text-brand-purple block lg:hover:bg-transparent" href="/">
							Payments
						</Link>
					</li>

					<li>
						<Link className="text-brand-navlink font-medium hover:bg-brand-purple/40 btn hover:text-brand-purple block lg:hover:bg-transparent" href="/">
							Company
						</Link>
					</li>

					<li>
						<Link className="text-brand-navlink font-medium hover:bg-brand-purple/40 btn hover:text-brand-purple block lg:hover:bg-transparent" href="/">
							Careers
						</Link>
					</li>

					<li className="lg:hidden lg:not-sr-only">
						<Link className="text-brand-navlink font-medium hover:bg-brand-purple/40 btn hover:text-brand-purple block lg:hover:bg-transparent" href="/">
							Get Started
						</Link>
					</li>
				</ul>
			</nav>

			<div className="flex items-center gap-4">
				<Link
					className="btn text-brand-navlink font-medium bg-brand-gray hover:bg-brand-navlink hover:text-white transition-colors duration-300 ease-in hidden lg:block"
					href="/get-started"
				>
					Get Started
				</Link>

				<button
					className="lg:hidden lg:not-sr-only"
					type="button"
					aria-label="Navbar toggle button"
					onClick={handleNavClick}
				>
					<i className={`fr ${navIsOpen ? 'fi-rr-cross' : 'fi-rr-menu-burger '} text-xl`}></i>
				</button>
			</div>
		</header>
	);
};

export default Header;