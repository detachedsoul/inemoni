import heroImage from "@assets/img/hero-image.png";
import Image from "next/image";
import Link from "next/link";

const HeroText = () => {
	return (
		<div className="grid gap-8 pt-12 grid-cols-1 sm:grid-cols-2 items-center px-[5%] sm:gap-24 xl:px-[7%]">
			<div className="space-y-4">
				<h1 className="header text-4xl leading-[3rem] sm:text-[3.125rem] sm:leading-[4.063rem]">
					Fast, convenient, and <span className="text-brand-purple">secure transfer</span> solution.
				</h1>

				<p>
					Our money transfer solution makes it easy for you to send
					and receive money from anywhere in the world. With just a
					few clicks, you can quickly and securely transfer funds to
					friends, family, or business associates without the hassle
					of writing checks or visiting a bank.
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
