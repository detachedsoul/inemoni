import ImageOne from "@assets/img/about-img-1.png";
import ImageTwo from "@assets/img/about-img-2.png";
import Image from "next/image";

const AboutSection = () => {
	return (
		<section className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-end px-[5%] lg:gap-12 xl:px-[10%]">
			<Image
				className="rounded-xl w-full order-last sm:order-first"
				src={ImageOne}
				alt="Happy customer using our mobile app"
				priority={true}
				quality={100}
			/>

			<div className="space-y-6 order-first sm:order-last">
				<Image
					className="rounded-xl w-full"
					src={ImageTwo}
					alt="Happy customer using our mobile app"
					priority={true}
					quality={100}
				/>

				<p>
					The most part of commerce and our personal lives revolve
					around moving money to different places for different
					reasons. Inemoni make that possible that bring financial
					activities to your doorstep with our users and agents’
					network solely to make such transactions fast, secure and
					convenient.
				</p>
			</div>
		</section>
	);
};

export default AboutSection;
