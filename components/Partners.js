import Image from "next/image";
import StarRating from "@assets/img/star-rating.svg";
import partners from "@assets/data/partners";

const Partners = () => {
    return (
		<section className="grid gap-8 grid-cols-1 sm:grid-cols-2 items-center bg-[#6912aa]/[2%] pt-[10%] pb-[5%] px-[5%] sm:py-[5%] lg:gap-12 xl:px-[10%]">
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
						<Image src={StarRating} alt="" quality={100} />

						<Image src={StarRating} alt="" quality={100} />

						<Image src={StarRating} alt="" quality={100} />

						<Image src={StarRating} alt="" quality={100} />

						<Image src={StarRating} alt="" quality={100} />
					</p>

					<p className="font-semibold">1,000+ 5 Star Reviews</p>

					<p>On the Apple App and Google Play Stores</p>
				</div>
			</div>

			<div className="grid grid-cols-3 items-center gap-8">
				{partners.map((partner, id) => (
					<Image
						src={partner.logo}
						alt={partner.name}
						key={id}
						quality={100}
					/>
				))}
			</div>
		</section>
	);
};

export default Partners;