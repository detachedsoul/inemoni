import heroImage from "@assets/img/hero-image.png";
import Image from "next/image";
import Link from "next/link";

const HeroText = () => {
	return (
		<div className="grid gap-8 pt-12 grid-cols-1 sm:grid-cols-2 items-center px-[5%] sm:gap-24 xl:px-[7%]">
			<div className="space-y-4">
				<h1 className="header text-4xl leading-[3rem] sm:text-[3.125rem] sm:leading-[4.063rem]">
					Withdraw At{ " " }
					<span className="text-brand-orange">Our Agents</span> Close
					to You
				</h1>

				<p>
					Our cash withdrawal solution is the perfect way to access
					the funds in your account whenever you need them. Whether
					you’re at home or on the go, you can easily and securely
					withdraw cash from your account using our convenient
					service.
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
				src={ heroImage }
				alt="Happy Inemoni User"
				quality={ 100 }
				priority={ true }
			/>
		</div>
	);
};

export default HeroText;
