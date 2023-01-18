import Image from "next/image";
import StarRating from "@assets/img/star-rating.svg";

const Testimonials = () => {
    return (
		<section className="grid gap-12 grid-cols-1 sm:grid-cols-2 items-center bg-[#6912aa]/[2%] pt-[10%] pb-[5%] px-[5%] sm:py-[5%] lg:gap-12 xl:px-[10%]">
			<div className="grid gap-3 sm:gap-0">
				<div className="bg-white rounded-xl p-4 space-y-3 -rotate-[5deg] sm:rotate-[5deg] shadow">
					<p>
						I highly recommend this app, nice customer service and a
						great product also.
					</p>

					<h3 className="font-semibold">Dominic Praise</h3>
				</div>

				<div className="bg-white rounded-xl p-4 space-y-3 rotate-[5deg] sm:-rotate-[5deg] shadow">
					<p className="flex items-center gap-2">
						<Image
							src={StarRating}
							alt=""
							quality={100}
						/>

						<Image
							src={StarRating}
							alt=""
							quality={100}
						/>

						<Image
							src={StarRating}
							alt=""
							quality={100}
						/>

						<Image
							src={StarRating}
							alt=""
							quality={100}
						/>

						<Image
							src={StarRating}
							alt=""
							quality={100}
						/>
					</p>

					<p className="font-semibold">1,000+ 5 Star Reviews</p>

					<p>On the Apple App and Google Play Stores</p>
				</div>
			</div>

			<div className="grid gap-3 sm:gap-0">
				<div className="bg-white rounded-xl p-4 space-y-3 -rotate-[5deg] sm:rotate-[5deg] shadow">
					<p>
						The mobile banking app is easy to use and makes
						transactions quick and safe. It’s also great for funding
						my betting app.
					</p>

					<h3 className="font-semibold">Benjamin Afokoghene</h3>
				</div>

				<div className="bg-white rounded-xl p-4 space-y-3 rotate-[5deg] sm:-rotate-[5deg] shadow">
					<p>
						Inemoni is a reliable and effective banking app with
						many features, including 15% annual profit. Highly
						recommended.
					</p>

					<h3 className="font-semibold">Omogbeme Yetunde</h3>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
