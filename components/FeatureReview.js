import Image from "next/image";
import Link from "next/link";
import SamsungGalaxy from "@assets/img/samsung-galaxy.svg";

const FeatureReview = () => {
    return (
		<section className="grid grid-cols-3 gap-8 items-center px-[5%]">
			<div className="space-y-3">
				<h2 className="font-bold text-xl">Bills Payment</h2>

				<p>
					Life could be hard but making payments shouldn’t. Pay for
					Power supply, Internet bundles or Cable TV subscriptions at
					your comfort zone. With Inemoni, we make payment of bills
					easily accessible to everyone through our agents.
				</p>

				<Link
					className="bg-brand-dark-purple hover:bg-brand-dark-purple/90 text-white btn inline-block transition-colors duration-300 ease-in"
					href="/"
				>
					Download App
				</Link>
			</div>

			<Image
				className="block mx-auto"
				src={SamsungGalaxy}
				alt=""
				priority={true}
			/>

			<div className="space-y-8">
				<div className="space-y-3">
					<h2 className="font-bold text-xl">Accept Payments</h2>

					<p>
						Easily receive money from anyone, anytime and anywhere
						in the world.
					</p>

					<Link
						className="text-brand-purple font-medium inline-block"
						href="/"
					>
						Learn More
						<i className="fr fi-rr-arrow-right ml-2"></i>
					</Link>
				</div>

				<div className="space-y-3">
					<h2 className="font-bold text-xl">Money Transfer</h2>

					<p>
						Make single or bulk transfers to bank accounts from your
						Inemoni dashboard. Your transfer goes through seamlessly
						with Inemoni.
					</p>

					<Link
						className="text-brand-purple font-medium inline-block"
						href="/"
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