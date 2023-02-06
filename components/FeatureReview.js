import Link from "next/link";
import Image from "next/image";
import previewImage from "@assets/img/feature-preview.svg";

const FeatureReview = () => {
    return (
		<section className="grid grid-cols-1 items-center justify-between gap-12 px-[5%] sm:grid-cols-3 xl:px-[10%]">
			<div className="space-y-5">
				<h2 className="header text-xl">Bills Payment</h2>

				<p>
					Say goodbye to the hassle of bill payments! At Inemoni, we
					believe life may have its challenges, but paying for your
					essential services shouldn’t be one of them. Power up your
					home, stay connected with high-speed internet, and enjoy
					endless entertainment with our simple and convenient bill
					payment solutions. Accessible to everyone through our
					network of agents & mobile app, paying bills has never been
					easier!
				</p>

				<Link
					className="btn inline-block bg-brand-dark-purple text-white  transition-colors duration-300 ease-in hover:bg-brand-dark-purple/90"
					href="/"
				>
					Download App
				</Link>
			</div>

			<Image
				className="mx-auto block"
				src={previewImage}
				alt=""
				quality={100}
			/>

			<div className="flex flex-col gap-12">
				<div className="space-y-5">
					<h2 className="header text-xl">Accept Payments</h2>

					<p>
						Get ready to experience a whole new level of financial
						freedom. Imagine being able to effortlessly receive
						funds from anyone, anywhere, at any time - no matter
						where you are in the world. With just a few clicks, your
						money is right at your fingertips. Welcome to a world of
						limitless financial possibilities.
					</p>

					<Link
						className="inline-block font-medium text-brand-purple"
						href="/cash-withdrawal"
					>
						Learn More
						<i className="fr fi-rr-arrow-right ml-2"></i>
					</Link>
				</div>

				<div className="space-y-5">
					<h2 className="header text-xl">Money Transfer</h2>

					<p>
						With Inemoni, send money easily without standing in long
						lines or dealing with complicated bank transfers. You
						can transfer to one person or many, all from the same
						place. No more stress, your transfers will be quick and
						easy. Start enjoying seamless banking with Inemoni
						today.
					</p>

					<Link
						className="inline-block font-medium text-brand-purple"
						href="/money-transfer"
					>
						Learn More
						<i className="fr fi-rr-arrow-right ml-2"></i>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default FeatureReview;
