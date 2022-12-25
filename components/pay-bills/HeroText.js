import heroImage from "@assets/img/hero-image.png";
import Image from "next/image";
import Link from "next/link";

const HeroText = () => {
	return (
		<div className="grid gap-8 pt-12 grid-cols-1 sm:grid-cols-2 items-center px-[5%] sm:gap-24 xl:px-[7%]">
			<div className="space-y-4">
				<h1 className="header -mb-2 sm:-mb-0.5">
					Stay on top of <span className="text-brand-orange">your bills</span> &
					avoid late fees.
				</h1>

				<p>
					Our bills payment solution is the convenient and hassle-free
					way to pay your bills on time, every time. With our
					solution, you can easily and securely pay all of your bills
					from a single account, saving you time and money.
				</p>

				<div className="flex items-center gap-4 flex-wrap">
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
