"use client";

import Logo from "@assets/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const Header = () => {
	const router = useRouter();

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

		window.addEventListener("click", (e) => {
			let dropdownToggleBtns = document.querySelectorAll(".dropdown-toggle");

			dropdownToggleBtns.forEach((dropdownToggleBtn) => {
				if (e.target !== dropdownToggleBtn && dropdownToggleBtn.nextElementSibling.classList.contains("-translate-y-0")) {
					dropdownToggleBtn.nextElementSibling.classList.replace(
						"-translate-y-0",
						"-translate-y-[150%]",
					);
				}
			});
		});
	}, [router.pathname]);

	return (
		<>
			<div className="bg-brand-black p-4 text-center text-white">
				<p>
					🎉 Inemoni has rebranded to serve you better.{" "}
					<Link
						className="underline underline-offset-4"
						href="/about"
					>
						Learn More
					</Link>
				</p>
			</div>
			<header
				className={`sticky top-0 z-50 flex items-center justify-between gap-4 bg-white p-[5%] sm:py-[1.5%] xl:px-[7%]`}
			>
				<Link href="/">
					<Image
						src={Logo}
						alt="Inemoni"
						quality={100}
						priority={true}
					/>
				</Link>

				<nav
					className={`absolute top-full left-0 z-[1024] h-full min-h-screen w-full border-r border-brand-gray bg-white transition-transform duration-500 ease-in-out min-[400px]:w-4/5 min-[500px]:w-3/5 sm:w-1/2 md:static md:top-0 md:min-h-0 md:w-auto md:translate-x-0 md:border-none md:bg-transparent
						${navIsOpen ? "translate-x-0" : "-translate-x-full"}`}
					ref={navRef}
				>
					<ul className="flex min-h-[calc((100vh-12%)-1rem)] flex-col gap-4 overflow-y-auto bg-white p-4 md:min-h-0 md:flex-row md:items-center md:justify-between md:gap-4 lg:gap-12 md:bg-transparent md:p-0">
						<li className="relative">
							<button
								className="btn block w-full text-left font-bold text-brand-navlink hover:bg-dropdown-hover hover:text-brand-purple md:font-medium lg:hover:bg-transparent dropdown-toggle"
								type="button"
								onClick={() => handleDropdownClick(paymentRef)}
							>
								Payments
							</button>

							<div
								className="absolute top-[calc(100%+.5rem)] rounded-xl z-50 w-full -translate-y-[150%] transition-transform duration-700 ease-in-out md:w-auto md:fixed md:-left-[35%] md:-right-[40%] md:overflow-y-auto md:max-h-[calc((100vh-100%)-100%)] lg:-left-[40%] lg:py-8 lg:px-12 p-4 bg-white shadow-[0px_5px_20px_10px_rgba(0,0,10,0.05)] no-scrollbar"
								ref={paymentRef}
							>
								<div className="grid grid-cols-1 gap-4 md:grid-cols-12 lg:gap-8">
									<Link
										className={`btn space-y-2 text-brand-black hover:bg-dropdown-hover md:col-span-6 ${
											router.pathname === "/cash-withdrawal" && 'bg-dropdown-hover'
										}`}
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
										className={`btn space-y-2 text-brand-black hover:bg-dropdown-hover md:col-span-6 ${
											router.pathname === "/savings" && 'bg-dropdown-hover'
										}`}
										href="/savings"
									>
										<span className="block font-bold">
											Savings
										</span>

										<span className="inline-block">
											Everyone can save without
											restriction, with fast withdrawal.
										</span>
									</Link>

									<Link
										className={`btn space-y-2 text-brand-black hover:bg-dropdown-hover md:col-span-6 ${
											router.pathname === "/money-transfer" && 'bg-dropdown-hover'
										}`}
										href="/money-transfer"
									>
										<span className="block font-bold">
											Money Transfer
										</span>

										<span className="inline-block">
											Your transfer goes through
											seamlessly with Inemoni.
										</span>
									</Link>

									<Link
										className={`btn space-y-2 text-brand-black hover:bg-dropdown-hover md:col-span-6 ${
											router.pathname === "/pay-bills" && 'bg-dropdown-hover'
										}`}
										href="/pay-bills"
									>
										<span className="block font-bold">
											Pay Bills
										</span>

										<span className="inline-block">
											Payment of bills is easily
											accessible to everyone.
										</span>
									</Link>

									<div className="space-y-3 md:col-span-12">
										<span className="block font-bold">
											Latest blog post
										</span>

										<div className="btn space-y-1.5 bg-dropdown-hover text-brand-black">
											<span className="block font-bold">
												We went live 🎊
											</span>

											<p>
												Here’s an overview of how we
												made magic happen
											</p>

											<Link
												className="inline-block text-brand-purple"
												href="/blog"
											>
												Read More
												<i className="fi-rr-arrow-right ml-2"></i>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</li>

						<li className="relative">
							<button
								className="btn block w-full text-left font-bold text-brand-navlink hover:bg-dropdown-hover hover:text-brand-purple md:font-medium lg:hover:bg-transparent dropdown-toggle"
								onClick={() => handleDropdownClick(companyRef)}
							>
								Company
							</button>

							<div
								className="absolute top-[calc(100%+.5rem)] rounded-xl z-50 w-full -translate-y-[150%] transition-transform duration-700 ease-in-out md:w-auto md:fixed md:-left-[35%] md:-right-[40%] md:overflow-y-auto md:max-h-[calc((100vh-100%)-100%)] lg:-left-[40%] lg:py-8 lg:px-12 p-4 bg-white shadow-[0px_5px_20px_10px_rgba(0,0,10,0.05)] no-scrollbar"
								ref={companyRef}
							>
								<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
									<Link
										className={`btn space-y-2 text-brand-black hover:bg-dropdown-hover ${
											router.pathname === "/about" && 'bg-dropdown-hover'
										}`}
										href="/about"
									>
										<span className="block font-bold">
											About Us
										</span>

										<span className="inline-block">
											Learn more about who we are and what
											we do at Inemoni
										</span>
									</Link>

									<Link
										className={`btn space-y-2 text-brand-black hover:bg-dropdown-hover ${
											router.pathname === "/legal/terms-of-use" && 'bg-dropdown-hover'
										}`}
										href="/legal/terms-of-use"
									>
										<span className="block font-bold">
											Terms of Use
										</span>

										<span className="inline-block">
											Describing your rights on how & when
											we handle your account.
										</span>
									</Link>

									<Link
										className={`btn space-y-2 text-brand-black hover:bg-dropdown-hover ${
											router.pathname === "/contact-us" && 'bg-dropdown-hover'
										}`}
										href="/contact-us"
									>
										<span className="block font-bold">
											Contact Us
										</span>

										<span className="inline-block">
											Have questions? Send us a message{" "}
											<span className="text-brand-purple">
												support@inemoni.com
											</span>
										</span>
									</Link>
								</div>
							</div>
						</li>

						<li>
							<Link
								className="btn block w-full text-left font-bold text-brand-navlink hover:bg-dropdown-hover hover:text-brand-purple md:font-medium lg:hover:bg-transparent"
								href="/"
							>
								Careers
							</Link>
						</li>

						<li className="lg:not-sr-only md:hidden">
							<Link
								className="btn block w-full text-left font-bold text-brand-navlink hover:bg-dropdown-hover hover:text-brand-purple lg:font-medium lg:hover:bg-transparent"
								href="https://play.google.com/store/apps/details?id=com.inemoni.com"
							>
								Download App
							</Link>
						</li>
					</ul>
				</nav>

				<div className="flex items-center gap-4">
					<Link
						className="btn hidden bg-brand-gray text-brand-navlink transition-colors duration-300 ease-in hover:bg-brand-navlink hover:text-white md:block"
						href="https://play.google.com/store/apps/details?id=com.inemoni.com"
					>
						Download App
					</Link>

					<button
						className="md:not-sr-only md:hidden"
						type="button"
						aria-label="Navbar toggle button"
						onClick={handleNavClick}
					>
						<i
							className={`${
								navIsOpen ? "fi-rr-cross" : "fi-rr-menu-burger "
							} text-xl`}
						></i>
					</button>
				</div>
			</header>
		</>
	);
};

export default Header;
