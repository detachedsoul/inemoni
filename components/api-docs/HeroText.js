import apiDocs from "@assets/img/api-docs.png";
import Image from "next/image";
import Link from "next/link";

const HeroText = () => {
	return (
		<div className="grid grid-cols-1 items-center gap-8 px-[5%] pt-12 sm:grid-cols-2 sm:gap-16 sm:pt-8 xl:px-[7%]">
			<div className="flex flex-col gap-5">
				<h1 className="main-header">
					Your Business with Inemoni’s Customisable Payment API’s
				</h1>

				<p>
					Unleash the Full Potential of Your Business with
					Customisable and Reliable Payment Solutions through Inemoni
					API’s
				</p>

				<div className="flex flex-wrap items-center gap-4">
					<Link
						className="btn block bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink"
						href="/"
					>
						Join Waitlist
					</Link>

					<Link
						className="btn block transition-colors duration-300 ease-in hover:bg-brand-gray"
						href="/about"
					>
						Learn More
					</Link>
				</div>
			</div>

			<Image
				className="aspect-video rounded-xl object-cover"
				src={apiDocs}
				alt="API documentation"
				quality={100}
				priority={true}
			/>
		</div>
	);
};

export default HeroText;
