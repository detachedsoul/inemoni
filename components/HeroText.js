import heroImage from "@assets/img/hero-image.svg";
import Image from "next/image";
import Link from "next/link";

const HeroText = () => {
	return (
		<div className="grid grid-cols-1 items-center gap-8 px-[5%] pt-12 sm:grid-cols-2 sm:gap-16 sm:pt-8 xl:px-[7%]">
			<div className="flex flex-col gap-5">
				<h1 className="main-header">
					Bringing{" "}
					<span className="text-brand-purple">
						Financial Services
					</span>{" "}
					To Your Doorsteps.
				</h1>

				<p>
					Easy access to financial services is our watchword while
					creating an avenue for our agents to make money using our
					amazing services.
				</p>

				<div className="flex flex-wrap items-center gap-4">
					<Link
						className="btn block bg-brand-purple text-white transition-colors duration-300 ease-in hover:bg-brand-navlink"
						href="https://play.google.com/store/apps/details?id=com.inemoni.com"
					>
						Download App
					</Link>

					<Link
						className="btn block transition-colors duration-300 ease-in hover:bg-brand-gray"
						href="/sign-in"
					>
						Sign In
						<span className="sr-only">
							Read more about who we are and what we do
						</span>
					</Link>
				</div>
			</div>

			<Image
				className="rounded-xl"
				src={heroImage}
				alt="Inemoni app overview"
				quality={100}
				priority={true}
			/>
		</div>
	);
};

export default HeroText;
