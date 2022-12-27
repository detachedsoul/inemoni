import heroImage from "@assets/img/hero-image.png";
import Image from "next/image";
import Link from "next/link";

const HeroText = () => {
	return (
		<div className="grid gap-8 pt-12 grid-cols-1 sm:grid-cols-2 items-center px-[5%] sm:pt-8 sm:gap-16 xl:px-[7%]">
			<div className="flex flex-col gap-5">
				<h1 className="header text-4xl leading-[3rem] sm:text-[3.125rem] sm:leading-[4.063rem]">
					Manage Your Money <br />
					<span className="text-brand-purple">& Achieve Your Goals</span>
				</h1>

				<p>
					Our user-friendly interface and intuitive features make managing your finances a breeze, so you can focus on the things that matter most.
				</p>

				<div className="flex items-center gap-4 flex-wrap">
					<Link
						className="bg-brand-purple text-white btn block hover:bg-brand-navlink transition-colors duration-300 ease-in"
						href="/"
					>
						Download App
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
