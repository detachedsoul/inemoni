"use client";

import NigeriaFlag from "@assets/img/nigeria-flag.svg";
import iOS from "@assets/img/download-ios.svg";
import Android from "@assets/img/download-android.svg";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Footer = () => {
	const footerLinks = [
		{
			linkGroup: "Company",
			isDesktopLink: true,
			links: [
				{
					linkName: "Cash Withdrawal",
					isLink: true,
					route: "/cash-withdrawal",
				},
				{
					linkName: "Money Transfer",
					isLink: true,
					route: "/money-transfer",
				},
				{
					linkName: "Pay Bills",
					isLink: true,
					route: "/pay-bills",
				},
				{
					linkName: "Savings",
					isLink: true,
					route: "/savings",
				},
				{
					linkName: "Careers",
					isLink: true,
					route: "/careers",
				},
			],
		},
		{
			linkGroup: "Developers",
			isDesktopLink: true,
			links: [
				{
					linkName: "API Documentation",
					isLink: true,
					route: "/api-docs",
				},
				{
					linkName: "Inemoni Status",
					isLink: true,
					route: "/status",
				},
			],
		},
		{
			linkGroup: "Support",
			isDesktopLink: true,
			links: [
				{
					linkName: "Give Us Feedback",
					isLink: true,
					route: "/contact-us",
				},
				{
					linkName: "Help Center",
					isLink: true,
					route: "/",
				},
				{
					linkName: "Live Chat",
					isLink: true,
					route: "/",
				},
			],
		},
		{
			linkGroup: "Resources",
			isDesktopLink: true,
			links: [
				{
					linkName: "FAQ",
					isLink: true,
					route: "/legal/faqs",
				},
				{
					linkName: "Blog",
					isLink: true,
					route: "/blog",
				},
			],
		},
		{
			linkGroup: "Contact",
			isDesktopLink: true,
			links: [
				{
					linkName: "support@inemoni.com",
					isLink: true,
					route: "mailto:support@inemoni.com",
				},
				{
					linkName: "No. 67 Bakori Road, FHA, Kubwa, Abuja",
					isLink: true,
					route: "https://www.google.com/maps/place/IneMoni/@9.1434533,7.3461676,17z/data=!3m1!4b1!4m5!3m4!1s0x104dd95894592a27:0xda8cb3efddd08cda!8m2!3d9.143448!4d7.3483563?shorturl=1",
				},
			],
		},
		{
			linkGroup: "Legal",
			isDesktopLink: false,
			links: [
				{
					linkName: "Privacy Policy",
					isLink: true,
					route: "/legal/privacy-policy",
				},
				{
					linkName: "Terms of Use",
					isLink: true,
					route: "/legal/terms-of-use",
				},
				{
					linkName: "Cookie Policy",
					isLink: true,
					route: "/legal/cookie-policy",
				},
			],
		},
		{
			linkGroup: "Contact",
			isDesktopLink: false,
			links: [
				{
					linkName: "support@inemoni.com",
					isLink: true,
					route: "mailto:support@inemoni.com",
				},
				{
					linkName: "No. 67 Bakori Road, FHA, Kubwa, Abuja",
					isLink: false,
					route: null,
				},
			],
		},
		{
			linkGroup: "Social",
			isDesktopLink: false,
			links: [
				{
					linkName: "Twitter",
					isLink: true,
					route: "/",
				},
				{
					linkName: "Instagram",
					isLink: true,
					route: "/",
				},
				{
					linkName: "Facebook",
					isLink: true,
					route: "/",
				},
				{
					linkName: "LinkedIn",
					isLink: true,
					route: "/",
				},
			],
		},
	];

	const parentElement = useRef(null);

	const toggleMobileFooter = (e) => {
		const elementsToTraverse = parentElement.current.childNodes;

		elementsToTraverse.forEach((elements) => {
			if (elements.firstElementChild !== e.currentTarget) {
				if (
					elements.firstElementChild.nextElementSibling.classList.contains(
						"max-h-full",
					)
				) {
					elements.firstElementChild.nextElementSibling.classList.replace(
						"max-h-full",
						"max-h-0",
					);

					elements.firstElementChild.lastElementChild.classList.replace(
						"fi-rr-angle-small-up",
						"fi-rr-angle-small-down",
					);
				}
			}
		});

		if (
			e.currentTarget.nextElementSibling.classList.contains("max-h-full")
		) {
			e.currentTarget.nextElementSibling.classList.replace(
				"max-h-full",
				"max-h-0",
			);

			e.currentTarget.lastElementChild.classList.replace(
				"fi-rr-angle-small-up",
				"fi-rr-angle-small-down",
			);
		} else {
			e.currentTarget.nextElementSibling.classList.replace(
				"max-h-0",
				"max-h-full",
			);

			e.currentTarget.lastElementChild.classList.replace(
				"fi-rr-angle-small-down",
				"fi-rr-angle-small-up",
			);
		}
	};

	return (
		<>
			<footer className="px-[5%] pb-[5%] pt-[10%] xl:px-[7%] sm:pt-[5%]">
				<div
					className="lg:hidden lg:not-sr-only grid-cols-1 gap-6  pb-12 grid sm:grid-cols-2 sm:gap-x-8 sm:items-start sm:self-start"
					ref={parentElement}
				>
					{footerLinks.map((footerLink, id) => (
						<div
							className="space-y-6 border-b border-footer-border pb-1.5 sm:last:border-footer-border"
							key={id}
						>
							<button
								className="flex items-center justify-between gap-4 w-full py-1"
								type="button"
								onClick={(e) => toggleMobileFooter(e)}
							>
								<span className="font-semibold text-lg">
									{footerLink.linkGroup}
								</span>

								<i className="fr fi-rr-angle-small-down"></i>
							</button>

							<ul className="space-y-6 w-full z-20 transition-all ease-linear max-h-0 duration-100 overflow-y-hidden">
								{footerLink.links.map((link, id) =>
									link.isLink ? (
										<li key={id}>
											<Link
												className="hover:text-brand-purple"
												href={link.route}
											>
												{link.linkName}
											</Link>
										</li>
									) : (
										<li key={id}>{link.linkName}</li>
									),
								)}
							</ul>
						</div>
					))}
				</div>

				<div className="lg:grid grid-cols-5 gap-4 border-b border-footer-border pb-10 hidden not-sr-only">
					{footerLinks.map((footerLink, id) =>
						footerLink.isDesktopLink ? (
							<div className="space-y-5" key={id}>
								<h3 className="font-semibold">
									{footerLink.linkGroup}
								</h3>

								<ul className="space-y-4">
									{footerLink.links.map((link, id) =>
										link.isLink ? (
											<li key={id}>
												<Link
													className="hover:text-brand-purple"
													href={link.route}
												>
													{link.linkName}
												</Link>
											</li>
										) : (
											<li key={id}>{link.linkName}</li>
										),
									)}
								</ul>
							</div>
						) : (
							null
						)
					)}
				</div>

				<div className="flex items-center justify-between gap-4 py-6">
					<span className="flex items-center gap-4">
						<Image
							className="rounded-full"
							src={NigeriaFlag}
							alt="Nigeria's flag"
						/>
						Nigeria
					</span>

					<ul className="lg:flex items-center gap-8 hidden not-sr-only">
						<li>
							<Link className="hover:text-brand-purple" href="/">
								Twitter
							</Link>
						</li>

						<li>
							<Link className="hover:text-brand-purple" href="/">
								Instagram
							</Link>
						</li>

						<li>
							<Link className="hover:text-brand-purple" href="/">
								Facebook
							</Link>
						</li>

						<li>
							<Link className="hover:text-brand-purple" href="/">
								LinkedIn
							</Link>
						</li>
					</ul>
				</div>

				<div className="flex items-center justify-between gap-4  border-t border-footer-border pt-8">
					<span className="flex items-center gap-4">
						&copy; 2022 Inemoni. All right reserved.
					</span>

					<ul className="lg:flex items-center gap-8 hidden not-sr-only">
						<li>
							<Link className="hover:text-brand-purple" href="/legal/privacy-policy">
								Privacy Policy
							</Link>
						</li>

						<li>
							<Link className="hover:text-brand-purple" href="/legal/terms-of-use">
								Terms of Use
							</Link>
						</li>

						<li>
							<Link className="hover:text-brand-purple" href="/legal/cookie-policy">
								Cookie Policy
							</Link>
						</li>
					</ul>
				</div>

				<div className="flex flex-wrap gap-3 pt-8">
					<Link className="inline-block" href="/">
						<Image
							src={iOS}
							alt="Download on Apple's App Store"
						/>
					</Link>

					<Link className="inline-block" href="https://play.google.com/store/apps/details?id=com.inemoni.com" target="_blank" rel="noopener noreferrer">
						<Image
							src={Android}
							alt="Download on Google's PlayStore"
						/>
					</Link>
				</div>
			</footer>
		</>
	);
};

export default Footer;
