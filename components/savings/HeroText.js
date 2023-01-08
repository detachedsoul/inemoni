import heroImage from "@assets/img/hero-image.svg";
import Image from "next/image";
import Link from "next/link";

const HeroText = () => {
	return (
		<div className="grid gap-8 pt-12 grid-cols-1 sm:grid-cols-2 items-center px-[5%] sm:gap-24 xl:px-[7%]">
			<div className="space-y-4">
				<h1 className="header text-4xl leading-[3rem] sm:text-[3.125rem] sm:leading-[4.063rem]">
					<span className="text-brand-purple">Savings</span> solution with a <span className="text-brand-purple">competitive interest
					</span> rate.
				</h1>

				<p>
					Our savings solution is designed to help you reach your
					financial goals faster and easier. With our solution, you
					can easily set aside money each month and watch your savings
					grow over time.
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
				src={ heroImage }
				alt="Happy Inemoni User"
				quality={ 100 }
				priority={ true }
			/>
		</div>
	);
};

export default HeroText;
