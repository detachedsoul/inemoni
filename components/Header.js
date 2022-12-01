"use client";

import Logo from "@assets/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const Header = () => {
	const navRef = useRef(null);
	const paymentRef = useRef(null);
	const companyRef = useRef(null);

	const [navIsOpen, setNavIsOpen] = useState(false);

	const handleNavClick = () => {
		setNavIsOpen(() => !navIsOpen);
	};

	const handleDropdownClick = (dropdown) => {
		const dropdownClasses = ["animate-slideUp"];

		// Close all dropdowns that is not the one currently clicked
		const dropdowns = [
			paymentRef.current,
			companyRef.current
		];

		dropdowns.forEach(dropdownElement => {
			if (dropdownElement !== dropdown.current) {
				dropdownElement.classList.replace("animate-slideUp", "animate-slideDown");
			}
		});

		if (dropdown.current.classList.contains("animate-slideDown")) {
			dropdown.current.classList.replace("animate-slideDown", "animate-slideUp");
		} else {
			dropdown.current.classList.replace("animate-slideUp", "animate-slideDown");
		}
	};

    return (
		<header
			className={`px-[5%] py-[4%] sticky top-0 z-50 flex items-center gap-4 justify-between lg:py-[1.5%] border-b border-brand-gray lg:bg-white/95 lg:backdrop-blur ${
				navIsOpen ? "bg-white" : "bg-white/95 backdrop-blur"
			}`}
		>
			<Link href="/">
				<Image src={Logo} alt="Inemoni" priority />
			</Link>

			<nav
				className={`lg:top-0 absolute top-[calc(100%+1px)] lg:static left-0 bg-[#f5f5f5] w-full lg:w-auto border-r border-brand-gray lg:border-none transition-transform duration-500 ease-in-out lg:bg-transparent lg:translate-x-0 ${
					navIsOpen ? "translate-x-0" : "-translate-x-full"
				} min-h-screen lg:min-h-0`}
				ref={navRef}
			>
				<ul className="flex lg:items-center flex-col gap-4 lg:gap-12 lg:justify-between lg:flex-row overflow-y-auto min-h-[calc(100vh-4.5rem)] lg:min-h-0 p-4 lg:p-0 overscroll-contain">
					<li className="relative">
						<button
							className="text-brand-navlink font-medium hover:bg-dropdown-hover btn hover:text-brand-black block w-full lg:hover:bg-transparent text-left"
							type="button"
							onClick={() => handleDropdownClick(paymentRef)}
						>
							Payments
						</button>

						<div
							className="bg-white grid grid-cols-1 lg:grid-cols-12 gap-4 rounded-xl p-4 absolute lg:fixed lg:-left-[40%] lg:-right-[40%] w-auto lg:py-8 lg:px-12 lg:gap-8 lg:shadow-2xl transition-transform ease-linear duration-500 z-50 animate-slideDown origin-[0_0]"
							ref={paymentRef}
						>
							<Link
								className="hover:bg-dropdown-hover text-brand-black btn space-y-2 lg:col-span-6"
								href="/"
							>
								<span className="block font-bold">
									Cash Withdrawal
								</span>

								<span className="inline-block">
									Withdraw cash at our agents outlet closest
									to you.
								</span>
							</Link>

							<Link
								className="hover:bg-dropdown-hover text-brand-black btn space-y-2 lg:col-span-6"
								href="/"
							>
								<span className="block font-bold">Savings</span>

								<span className="inline-block">
									Everyone can save without restriction, with
									fast withdrawal.
								</span>
							</Link>

							<Link
								className="hover:bg-dropdown-hover text-brand-black btn space-y-2 lg:col-span-6"
								href="/"
							>
								<span className="block font-bold">
									Money Transfer
								</span>

								<span className="inline-block">
									Your transfer goes through seamlessly with
									Inemoni.
								</span>
							</Link>

							<Link
								className="hover:bg-dropdown-hover text-brand-black btn space-y-2 lg:col-span-6"
								href="/"
							>
								<span className="block font-bold">
									Pay Bills
								</span>

								<span className="inline-block">
									Payment of bills is easily accessible to
									everyone.
								</span>
							</Link>

							<div className="space-y-3 lg:col-span-12">
								<span className="block font-bold">
									Latest blog post
								</span>

								<div className="bg-dropdown-hover text-brand-black btn space-y-1.5">
									<span className="block font-bold">
										We went live 🎊
									</span>

									<p>
										Here’s an overview of how we made magic
										happen
									</p>

									<Link
										className="text-brand-purple inline-block"
										href="/"
									>
										Read More
										<i className="fr fi-rr-arrow-right ml-2"></i>
									</Link>
								</div>
							</div>
						</div>
					</li>

					<li className="relative">
						<button
							className="text-brand-navlink font-medium hover:bg-dropdown-hover btn hover:text-brand-black block w-full lg:hover:bg-transparent text-left"
							onClick={() => handleDropdownClick(companyRef)}
						>
							Company
						</button>

						<div
							className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-xl p-4 absolute lg:fixed lg:-left-[40%] lg:-right-[40%] w-auto lg:py-8 lg:px-12 lg:gap-8 lg:shadow-2xl transition-transform ease-linear duration-500 z-50 animate-slideDown origin-[0_0]"
							ref={companyRef}
						>
							<Link
								className="hover:bg-dropdown-hover text-brand-black btn space-y-2"
								href="/"
							>
								<span className="block font-bold">
									About Us
								</span>

								<span className="inline-block">
									Learn more about who we are and what we do
									at NestlyPay
								</span>
							</Link>

							<Link
								className="hover:bg-dropdown-hover text-brand-black btn space-y-2"
								href="/"
							>
								<span className="block font-bold">
									Terms of Use
								</span>

								<span className="inline-block">
									Describing your rights on how & when we
									handle your account.
								</span>
							</Link>

							<Link
								className="hover:bg-dropdown-hover text-brand-black btn space-y-2"
								href="/"
							>
								<span className="block font-bold">
									Contact Us
								</span>

								<span className="inline-block">
									Have questions? Send us a message{" "}
									<span className="text-brand-purple">
										hello@inemoni.com
									</span>
								</span>
							</Link>
						</div>
					</li>

					<li>
						<Link
							className="text-brand-navlink font-medium hover:bg-dropdown-hover btn hover:text-brand-black block w-full lg:hover:bg-transparent text-left"
							href="/"
						>
							Careers
						</Link>
					</li>

					<li className="lg:hidden lg:not-sr-only">
						<Link
							className="text-brand-navlink font-medium hover:bg-dropdown-hover btn hover:text-brand-black block w-full lg:hover:bg-transparent text-left"
							href="/"
						>
							Get Started
						</Link>
					</li>
				</ul>
			</nav>

			<div className="flex items-center gap-4">
				<Link
					className="btn text-brand-navlink font-medium bg-brand-gray hover:bg-brand-navlink hover:text-white transition-colors duration-300 ease-in hidden lg:block"
					href="/"
				>
					Get Started
				</Link>

				<button
					className="lg:hidden lg:not-sr-only"
					type="button"
					aria-label="Navbar toggle button"
					onClick={handleNavClick}
				>
					<i
						className={`fr ${
							navIsOpen ? "fi-rr-cross" : "fi-rr-menu-burger "
						} text-xl`}
					></i>
				</button>
			</div>
		</header>
	);
};

export default Header;