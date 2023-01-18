import Link from "next/link";
import Image from "next/image";
import previewImage from "@assets/img/feature-preview.svg";

const FeatureReview = () => {
    return (
		<section className="grid grid-cols-1 sm:grid-cols-3 justify-between gap-12 items-center px-[5%] xl:px-[10%]">
			<div className="space-y-5">
				<h2 className="header text-xl">Bills Payment</h2>
   
				<p>
					Life could be hard but making payments shouldn’t. Pay for
					Power supply, Internet bundles or Cable TV subscriptions at
					your comfort zone. With Inemoni, we make payment of bills
					easily accessible to everyone through our agents.
				</p>

				<Link
				className="bg-brand-dark-purple hover:bg-brand-dark-purple/90 text-white btn  transition-colors duration-300 ease-in inline-block"
					href="/"
				>
					Download App
				</Link>
			</div>

			<Image
				className="block mx-auto"
				src={ previewImage }
				alt=""
				quality={100}
			/>

			<div className="flex flex-col gap-12">
				<div className="space-y-5">
					<h2 className="header text-xl">Accept Payments</h2>

					<p>
						Easily receive money from anyone, anytime and anywhere
						in the world.
					</p>

					<Link
						className="text-brand-purple font-medium inline-block"
						href="/cash-withdrawal"
					>
						Learn More
						<i className="fr fi-rr-arrow-right ml-2"></i>
					</Link>
				</div>

				<div className="space-y-5">
					<h2 className="header text-xl">Money Transfer</h2>

					<p>
						Make single or bulk transfers to bank accounts from your
						Inemoni dashboard. Your transfer goes through seamlessly
						with Inemoni.
					</p>

					<Link
						className="text-brand-purple font-medium inline-block"
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
