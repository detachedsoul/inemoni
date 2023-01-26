"use client";

import aboutHeroImage from "@assets/img/about-hero-image.svg";
import Image from "next/image";
import Link from "next/link";

const HeroText = () => {
	const handleClick = () => {
		document.querySelector("#contact-form").scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className="grid gap-8 pt-12 grid-cols-1 sm:grid-cols-2 items-center px-[5%] sm:pt-8 sm:gap-16 xl:px-[7%]">
			<div className="flex flex-col gap-5">
				<h1 className="main-header">
					Looking to Send us a Message at Inemoni?
				</h1>

				<p>
					Our user-friendly interface and intuitive features make
					managing your finances a breeze, so you can focus on the
					things that matter most.
				</p>

				<div className="flex items-center gap-4 flex-wrap">
					<button
						className="bg-brand-purple text-white btn block hover:bg-brand-navlink transition-colors duration-300 ease-in"
						type="button"
						onClick={handleClick}
					>
						Send Message
					</button>

					<Link
						className="hover:bg-brand-gray btn block transition-colors duration-300 ease-in"
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
