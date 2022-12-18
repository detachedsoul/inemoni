import heroImage from "@assets/img/hero-image.png";
import Image from "next/image";
import Link from "next/link";

const HeroText = () => {
	return (
		<div className="grid gap-8 pt-12 grid-cols-1 sm:grid-cols-2 items-center px-[5%] sm:gap-24 xl:px-[7%]">
			<div className="space-y-4">
				<h1 className="header -mb-2 sm:-mb-0.5">
					Withdraw At <span className="text-brand-purple">Our Agents</span> Close to You
				</h1>

				<p>
					Inemoni gives you free and easy access to financial
					services. Our watchword while creating an avenue for our
					agents to make money using our amazing services.
				</p>

				<div className="flex items-center gap-4">
					<Link
						className="bg-brand-purple text-white btn block hover:bg-brand-navlink transition-colors duration-300 ease-in"
						href="/"
					>
						Download App
					</Link>

					<Link
						className="bg-brand-gray btn px-8 block hover:bg-brand-navlink hover:text-white transition-colors duration-300 ease-in"
						href="/"
					>
						Sign In
					</Link>
				</div>
			</div>

			<Image
				className="rounded-xl"
				src={heroImage}
				alt="Happy Inemoni User"
				quality={100}
				priority={true}
			/>
		</div>
	);
};

export default HeroText;
