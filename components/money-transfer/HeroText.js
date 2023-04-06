import heroImage from "@assets/img/money-transfer-hero-image.png";
import Image from "next/image";
import Link from "next/link";

const HeroText = () => {
	return (
		<div className="grid grid-cols-1 items-center gap-8 px-[5%] pt-12 sm:grid-cols-2 sm:gap-24 lg:grid-cols-12 lg:gap-12 xl:px-[7%]">
			<div className="space-y-4 lg:col-span-7">
				<h1 className="main-header">
					Seamless Money Transfer with Inemoni.
				</h1>

				<p>
					Unlock the power of your funds with Inemoni’s Money Transfer
					Solution - experience seamless access to your account,
					anytime, anywhere.
				</p>

				<div className="flex flex-wrap items-center gap-4">
					<Link
						className="btn block bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink"
						href="https://play.google.com/store/apps/details?id=com.inemoni.com"
					>
						Download App
					</Link>

					<Link
						className="btn block bg-brand-gray px-8 transition-colors duration-300 ease-in hover:bg-brand-navlink hover:text-white"
						href="/sign-in"
					>
						Sign In
					</Link>
				</div>
			</div>

			<Image
				className="rounded-xl lg:col-span-5"
				src={heroImage}
				alt="Seamless Money Transfer with Inemoni"
				quality={100}
				priority={true}
			/>
		</div>
	);
};

export default HeroText;
