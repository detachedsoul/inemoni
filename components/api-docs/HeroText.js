import apiDocs from "@assets/img/api-docs.png";
import Image from "next/image";
import Link from "next/link";

const HeroText = () => {
	return (
		<div className="grid gap-8 pt-12 grid-cols-1 sm:grid-cols-2 items-center px-[5%] sm:pt-8 sm:gap-16 xl:px-[7%]">
			<div className="flex flex-col gap-5">
				<h1 className="main-header">
					Build Payment{" "}
					<span className="text-brand-purple">
						Solutions with Inemoni
					</span>{" "}
					API’s
				</h1>

				<p>
					Robust API integration for building and processing fully
					customizable payment solutions. Integrate Inemoni once and
					let your customers pay you however they want.
				</p>

				<div className="flex items-center gap-4 flex-wrap">
					<Link
						className="bg-brand-purple text-white btn block hover:bg-brand-navlink transition-colors duration-300 ease-in"
						href="/"
					>
						Join Waitlist
					</Link>

					<Link
						className="hover:bg-brand-gray btn block transition-colors duration-300 ease-in"
						href="/about"
					>
						Learn More
					</Link>
				</div>
			</div>

			<Image
				className="rounded-xl object-cover aspect-video"
				src={apiDocs}
				alt="API documentation"
				quality={100}
				priority={true}
			/>
		</div>
	);
};

export default HeroText;
