import Link from "next/link";
import Image from "next/image";
import heroImage from "@assets/img/hero-image.svg";

const HeroText = () => {
    return (
		<div className="grid gap-8 grid-cols-2 items-center px-[5%] lg:gap-12">
			<div className="space-y-4">
				<h1 className="header">
					<span className="text-brand-purple">
						Financial Services
					</span>{" "}
					at your{" "}
					<span className="text-brand-orange">Doorsteps.</span>
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
				src={heroImage}
				alt="Happy Inemoni User"
				quality={100}
				priority={true}
			/>
		</div>
	);
};

export default HeroText;