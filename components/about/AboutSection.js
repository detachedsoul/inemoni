import Image from "next/image";
import ImageOne from "@assets/img/about-img-1.png";
import ImageTwo from "@assets/img/about-img-2.png";

const AboutSection = () => {
    return (
		<section className="grid grid-cols-2 gap-8 items-end px-[5%] lg:gap-12">
			<Image className="rounded-xl" src={ImageOne} alt="Happy customer using our mobile app" priority={true} quality={100} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPMFFolCQADUQFAIHICsAAAAABJRU5ErkJggg==" />

			<div className="space-y-6">
				<Image className="rounded-xl" src={ImageTwo} alt="Happy customer using our mobile app" priority={true} quality={100} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPMFFolCQADUQFAIHICsAAAAABJRU5ErkJggg==" />

				<p>
					The most part of commerce and our personal lives revolve around moving money to different places for different reasons. Inemoni make that possible that bring financial activities to your doorstep with our users and agents’ network solely to make such transactions fast, secure and convenient.
				</p>
			</div>
		</section>
	);
};

export default AboutSection;