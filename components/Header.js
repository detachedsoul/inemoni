/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Logo from "@assets/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Header = () => {
	const pathname = usePathname();

	const navRef = useRef(null);
	const paymentRef = useRef(null);
	const companyRef = useRef(null);

	const [navIsOpen, setNavIsOpen] = useState(false);
	const handleNavClick = () => {
		setNavIsOpen(() => !navIsOpen);
	};

	const handleDropdownClick = (dropdown) => {
		const dropdowns = [paymentRef.current, companyRef.current];

		dropdowns.forEach((dropdownElement) => {
			if (dropdownElement !== dropdown.current) {
				dropdownElement.classList.replace(
					"-translate-y-0",
					"-translate-y-[150%]",
				);
			}
		});

		if (dropdown.current.classList.contains("-translate-y-[150%]")) {
			dropdown.current.classList.replace(
				"-translate-y-[150%]",
				"-translate-y-0",
			);
		} else {
			dropdown.current.classList.replace(
				"-translate-y-0",
				"-translate-y-[150%]",
			);
		}
	};

	useEffect(() => {
		const dropdowns = [paymentRef.current, companyRef.current];

		dropdowns.forEach((dropdownElement) => {
			dropdownElement.classList.replace(
				"-translate-y-0",
				"-translate-y-[150%]",
			);
		});

		setNavIsOpen(() => false);
	}, [pathname]);

	return (
		<header
			className={`py-[6%] px-[5%] sm:py-[4%] sticky top-0 z-50 flex items-center gap-4 justify-between lg:py-[1.5%] lg:bg-white/95 lg:backdrop-blur xl:px-[7%] ${
				navIsOpen ? "bg-white" : "bg-white/95 backdrop-blur"
			}`}
		>
			<Link href="/">
				<Image src={Logo} alt="Inemoni" quality={100} priority={true} />
			</Link>

			<nav
				className={
					`lg:top-0 absolute top-full lg:static left-0 bg-white min-h-screen h-full z-50 w-full lg:w-auto border-r border-brand-gray lg:min-h-0 lg:border-none transition-transform duration-500 ease-in-out lg:bg-transparent lg:translate-x-0
					${
						navIsOpen ? "translate-x-0" : "-translate-x-full"
					}`
				}
				ref={navRef}
			>
				<ul className="flex lg:items-center flex-col gap-4 lg:gap-12 	lg:justify-between lg:flex-row lg:min-h-0 bg-white min-h-[calc((100vh-12%)-1rem)] p-4 overflow-y-auto lg:bg-transparent">
					<li className="relative">
						<button
							className="text-brand-navlink font-bold hover:bg-dropdown-hover btn hover:text-brand-purple block w-full lg:hover:bg-transparent text-left lg:font-medium"
							type="button"
							onClick={() => handleDropdownClick(paymentRef)}
						>
							Payments
						</button>

						<div
							className="-translate-y-[150%] z-50 transition-transform duration-700 ease-in-out absolute top-[calc(100%+.5rem)] lg:fixed lg:-left-[40%] lg:-right-[40%] w-auto"
							ref={paymentRef}
						>
							<div className="bg-white grid grid-cols-1 lg:grid-cols-12 gap-4 rounded-xl p-4 shadow-[0px_5px_20px_10px_rgba(0,0,10,0.05)] lg:py-8 lg:px-12 lg:gap-8">
								<Link
									className={`hover:bg-dropdown-hover text-brand-black btn space-y-2 lg:col-span-6 ${pathname === '/cash-withdrawal' ? 'bg-dropdown-hover' : ''}`}
									href="/cash-withdrawal"
								>
									<span className="block font-bold">
										Cash Withdrawal
									</span>

									<span className="inline-block">
										Withdraw cash at our agents outlet
										closest to you.
									</span>
								</Link>

								<Link
									className={`hover:bg-dropdown-hover text-brand-black btn space-y-2 lg:col-span-6 ${pathname === '/savings' ? 'bg-dropdown-hover' : ''}`}
									href="/savings"
								>
									<span className="block font-bold">
										Savings
									</span>

									<span className="inline-block">
										Everyone can save without restriction,
										with fast withdrawal.
									</span>
								</Link>

								<Link
									className={`hover:bg-dropdown-hover text-brand-black btn space-y-2 lg:col-span-6 ${pathname === '/money-transfer' ? 'bg-dropdown-hover' : ''}`}
									href="/money-transfer"
								>
									<span className="block font-bold">
										Money Transfer
									</span>

									<span className="inline-block">
										Your transfer goes through seamlessly
										with Inemoni.
									</span>
								</Link>

								<Link
									className={`hover:bg-dropdown-hover text-brand-black btn space-y-2 lg:col-span-6 ${pathname === '/pay-bills' ? 'bg-dropdown-hover' : ''}`}
									href="/pay-bills"
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
											Here’s an overview of how we made
											magic happen
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
						</div>
					</li>

					<li className="relative">
						<button
							className="text-brand-navlink font-bold hover:bg-dropdown-hover btn hover:text-brand-purple block w-full lg:hover:bg-transparent text-left lg:font-medium"
							onClick={() => handleDropdownClick(companyRef)}
						>
							Company
						</button>

						<div
							className="-translate-y-[150%] z-50 transition-transform duration-700 ease-in-out absolute top-[calc(100%+.5rem)] lg:fixed lg:-left-[40%] lg:-right-[40%] w-auto"
							ref={companyRef}
						>
							<div className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-xl p-4 shadow-[0px_5px_20px_10px_rgba(0,0,10,0.05)] lg:py-8 lg:px-12 lg:gap-8">
								<Link
									className={`hover:bg-dropdown-hover text-brand-black btn space-y-2 ${pathname === '/about' ? 'bg-dropdown-hover' : ''}`}
									href="/about"
								>
									<span className="block font-bold">
										About Us
									</span>

									<span className="inline-block">
										Learn more about who we are and what we
										do at Inemoni
									</span>
								</Link>

								<Link
									className={`hover:bg-dropdown-hover text-brand-black btn space-y-2 ${pathname === '/terms-of-use' ? 'bg-dropdown-hover' : ''}`}
									href="/terms-of-use"
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
									className={`hover:bg-dropdown-hover text-brand-black btn space-y-2 ${pathname === '/contact-us' ? 'bg-dropdown-hover' : ''}`}
									href="/contact-us"
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
						</div>
					</li>

					<li>
						<Link
							className="text-brand-navlink font-bold hover:bg-dropdown-hover btn hover:text-brand-purple block w-full lg:hover:bg-transparent text-left lg:font-medium"
							href="/"
						>
							Careers
						</Link>
					</li>

					<li className="lg:hidden lg:not-sr-only">
						<Link
							className="text-brand-navlink font-bold hover:bg-dropdown-hover btn hover:text-brand-purple block w-full lg:hover:bg-transparent text-left lg:font-medium"
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
