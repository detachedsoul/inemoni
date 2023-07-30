import Logo from "@assets/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { MenuIcon, X } from "lucide-react";
import { motion } from "framer-motion"

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
					"-translate-y-[200%]",
				);
			}
		});

		if (dropdown.current.classList.contains("-translate-y-[200%]")) {
			dropdown.current.classList.replace(
				"-translate-y-[200%]",
				"-translate-y-0",
			);
		} else {
			dropdown.current.classList.replace(
				"-translate-y-0",
				"-translate-y-[200%]",
			);
		}
	};

	useEffect(() => {
		const dropdowns = [paymentRef.current, companyRef.current];

		dropdowns.forEach((dropdownElement) => {
			dropdownElement.classList.replace(
				"-translate-y-0",
				"-translate-y-[200%]",
			);
		});

		setNavIsOpen(() => false);

		window.addEventListener("click", (e) => {
			let dropdownToggleBtns = document.querySelectorAll(".dropdown-toggle");

			dropdownToggleBtns.forEach((dropdownToggleBtn) => {
				if (e.target !== dropdownToggleBtn && dropdownToggleBtn.nextElementSibling.classList.contains("-translate-y-0")) {
					dropdownToggleBtn.nextElementSibling.classList.replace(
						"-translate-y-0",
						"-translate-y-[200%]",
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
						<span className="sr-only">
							Read more about who we are and what we do
						</span>
					</Link>
				</p>
			</div>
            <motion.header
                initial={{
                    y: "-100%",
                    opacity: 0
                }}
                animate={ {
                    y: 0,
                    opacity: 1,
                }}
                transition={{duration: 1}}
				className={`sticky top-0 z-50 flex items-center justify-between gap-4 bg-[#F2F2F2] p-[5%] sm:py-[4%] md:py-[1.5%] xl:px-[7%]`}
			>
				<Link href="/">
					<Image
						src={Logo}
						alt="Inemoni"
						quality={100}
						priority
					/>
				</Link>

				<nav
					className={`absolute top-full left-0 z-[1024] h-full min-h-screen w-full border-r border-brand-gray bg-[#F2F2F2] transition-transform duration-500 ease-in-out min-[400px]:w-4/5 min-[500px]:w-3/5 sm:w-1/2 md:static md:top-0 md:min-h-0 md:w-auto md:translate-x-0 md:border-none md:bg-transparent
						${navIsOpen ? "translate-x-0" : "-translate-x-full"}`}
					ref={navRef}
				>
                    <ul className="flex min-h-full flex-col gap-4 overflow-y-auto bg-[#F2F2F2] p-4 md:min-h-0 md:flex-row md:items-center md:justify-between md:gap-4 md:bg-transparent md:p-0 lg:gap-12">
						<li className="relative">
							<button
								className="btn dropdown-toggle block w-full text-left font-bold text-brand-navlink hover:bg-dropdown-hover hover:text-brand-purple md:font-medium lg:hover:bg-transparent"
								type="button"
								onClick={() => handleDropdownClick(paymentRef)}
							>
								Payments
							</button>

							<div
								className="no-scrollbar absolute top-[calc(100%+.5rem)] z-50 w-full -translate-y-[200%] rounded-xl bg-[#F2F2F2] p-4 shadow-[0px_5px_20px_10px_rgba(0,0,10,0.05)] transition-transform duration-700 ease-in-out md:fixed md:-left-[35%] md:-right-[40%] md:max-h-[calc((100vh-100%)-100%)] md:w-auto md:overflow-y-auto lg:py-8 lg:px-12"
								ref={paymentRef}
							>
								<div className="grid grid-cols-1 gap-4 md:grid-cols-12 lg:gap-8">
									<Link
										className={`btn space-y-2 text-brand-black hover:bg-dropdown-hover md:col-span-6 ${
											router.pathname ===
												"/cash-withdrawal" &&
											"bg-dropdown-hover"
										}`}
										href="/cash-withdrawal"
									>
										<span className="block font-bold text-[#262626] text-xl">
											Cash Withdrawal
										</span>

										<span className="inline-block text-[#666666] font-normal">
											Withdraw cash at our agents outlet
											closest to you.
										</span>
									</Link>

									<Link
										className={`btn space-y-2 text-brand-black hover:bg-dropdown-hover md:col-span-6 ${
											router.pathname === "/savings" &&
											"bg-dropdown-hover"
										}`}
										href="/savings"
									>
										<span className="block font-bold text-[#262626] text-xl">
											Savings
										</span>

										<span className="inline-block text-[#666666] font-normal">
											Everyone can save without
											restriction, with fast withdrawal.
										</span>
									</Link>

									<Link
										className={`btn space-y-2 text-brand-black hover:bg-dropdown-hover md:col-span-6 ${
											router.pathname ===
												"/money-transfer" &&
											"bg-dropdown-hover"
										}`}
										href="/money-transfer"
									>
										<span className="block font-bold text-[#262626] text-xl">
											Money Transfer
										</span>

										<span className="inline-block text-[#666666] font-normal">
											Your transfer goes through
											seamlessly with Inemoni.
										</span>
									</Link>

									<Link
										className={`btn space-y-2 text-brand-black hover:bg-dropdown-hover md:col-span-6 ${
											router.pathname === "/pay-bills" &&
											"bg-dropdown-hover"
										}`}
										href="/pay-bills"
									>
										<span className="block font-bold text-[#262626] text-xl">
											Pay Bills
										</span>

										<span className="inline-block text-[#666666] font-normal">
											Payment of bills is easily
											accessible to everyone.
										</span>
									</Link>
								</div>
							</div>
						</li>

                        <li>
							<Link
								className="btn block w-full text-left font-bold text-brand-navlink hover:bg-dropdown-hover hover:text-brand-purple md:font-medium lg:hover:bg-transparent"
								href="/blog"
							>
								Blog
							</Link>
						</li>

						<li className="relative">
							<button
								className="btn dropdown-toggle block w-full text-left font-bold text-brand-navlink hover:bg-dropdown-hover hover:text-brand-purple md:font-medium lg:hover:bg-transparent"
								onClick={() => handleDropdownClick(companyRef)}
							>
								Company
							</button>

							<div
								className="no-scrollbar absolute top-[calc(100%+.5rem)] z-50 w-full -translate-y-[200%] rounded-xl bg-[#F2F2F2] p-4 shadow-[0px_5px_20px_10px_rgba(0,0,10,0.05)] transition-transform duration-700 ease-in-out md:fixed md:-left-[35%] md:-right-[40%] md:max-h-[calc((100vh-100%)-100%)] md:w-auto md:overflow-y-auto lg:py-8 lg:px-12"
								ref={companyRef}
							>
								<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
									<Link
										className={`btn space-y-2 text-brand-black hover:bg-dropdown-hover ${
											router.pathname === "/about" &&
											"bg-dropdown-hover"
										}`}
										href="/about"
									>
                                        <span className="block font-bold text-xl text-[#262626]">
											About Us
										</span>

                                        <span className="inline-block text-[#666666] font-normal">
											Learn more about who we are and what
											we do at Inemoni
										</span>
									</Link>

									<Link
										className={`btn space-y-2 text-brand-black hover:bg-dropdown-hover ${
											router.pathname ===
												"/legal/terms-of-use" &&
											"bg-dropdown-hover"
										}`}
										href="/legal/terms-of-use"
									>
										<span className="block font-bold text-[#262626] text-xl">
											Terms of Use
										</span>

                                        <span className="inline-block text-[#666666] font-normal">
											Describing your rights on how & when
											we handle your account.
										</span>
									</Link>

									<Link
										className={`btn space-y-2 text-brand-black hover:bg-dropdown-hover ${
											router.pathname === "/contact-us" &&
											"bg-dropdown-hover"
										}`}
										href="/contact-us"
									>
										<span className="block font-bold text-[#262626] text-xl">
											Contact Us
										</span>

										<span className="inline-block text-[#666666] font-normal">
											Have questions? Send us a message{" "}
											<span className="text-brand-purple">
												support@inemoni.com
											</span>
										</span>
									</Link>

                                    <Link
										className={`btn space-y-2 text-brand-black hover:bg-dropdown-hover ${
											router.pathname === "/contact-us" &&
											"bg-dropdown-hover"
										}`}
										href="/contact-us"
									>
										<span className="block font-bold text-[#262626] text-xl">
											Careers
										</span>

										<span className="inline-block text-[#666666] font-normal">
                                            Ready to join our team? Explore our careers page for openings.
										</span>
									</Link>
								</div>
							</div>
						</li>

						<li className="md:hidden lg:not-sr-only">
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
						className="btn hidden border-[0.5px] border-[#666666] transition-colors duration-300 ease-in hover:bg-brand-navlink hover:text-white md:block"
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
                        {navIsOpen ? (
                            <X size={30} strokeWidth={1} />
                        ) : (
                            <MenuIcon size={30} strokeWidth={1} />
                        )}
					</button>
				</div>
			</motion.header>
		</>
	);
};

export default Header;
