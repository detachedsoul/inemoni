"use client";

import aboutHeroImage from "@assets/img/about-hero-image.svg";
import Image from "next/image";
import Link from "next/link";

const HeroText = () => {
	const handleClick = () => {
		document.querySelector("#contact-form").scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="grid grid-cols-1 items-center gap-8 px-[5%] pt-12 sm:grid-cols-2 sm:gap-16 sm:pt-8 xl:px-[7%]">
			<div className="flex flex-col gap-5">
				<h1 className="main-header">
					Get in Touch with Inemoni - Connect with Us Today!
				</h1>

				<p>
					Connect with our team and get personalized support for all
					your financial needs.
				</p>

				<div className="flex flex-wrap items-center gap-4">
					<button
						className="btn block bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink"
						type="button"
						onClick={handleClick}
					>
						Send Message
					</button>

					<Link
						className="btn block transition-colors duration-300 ease-in hover:bg-brand-gray"
						href="mailto:support@inemoni.org"
					>
						Send an Email
					</Link>
				</div>
			</div>

			<Image
				className="rounded-xl"
				src={aboutHeroImage}
				alt="Inemoni app overview"
				quality={100}
				priority={true}
			/>
		</div>
	);
};

export default HeroText;
