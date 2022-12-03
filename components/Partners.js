import VeryifyMe from "@assets/img/verify-me.svg";
import Paystack from "@assets/img/paystack.svg";
import Xpress from "@assets/img/xpress.svg";
import Itex from "@assets/img/itex.svg";
import ProvidusBank from "@assets/img/providus-bank.svg";
import Flutterwave from "@assets/img/flutterwave.svg";
import StarRating from "@assets/img/star-rating.svg";
import Image from "next/image";

const Partners = () => {
    const partners = [
        {
            name: "Verify Me",
            logo: VeryifyMe,
            alt: "Verify Me",
        },
        {
            name: "Paystack",
            logo: Paystack,
            alt: "Paystack",
        },
        {
            name: "Xpress",
            logo: Xpress,
            alt: "Xpress",
        },
        {
            name: "Itex",
            logo: Itex,
            alt: "Itex",
        },
        {
            name: "Providus Bank",
            logo: ProvidusBank,
            alt: "Providus Bank",
        },
        {
            name: "Flutterwave",
            logo: Flutterwave,
            alt: "Flutterwave",
        }
    ];
    return (
		<section className="grid gap-8 grid-cols-2 items-center bg-[#6912aa]/[2%] p-[5%] lg:gap-12">
			<div className="grid gap-8">
				<div className="bg-white rounded-xl p-4 space-y-3 rotate-[5deg]">
					<p>
						I highly recommend this app, nice customer service and a
						great product also.
					</p>

					<h3 className="font-semibold">Dominic Praise</h3>
				</div>

				<div className="bg-white rounded-xl p-4 space-y-3 -rotate-[5deg]">
					<p className="flex items-center gap-2">
						<Image
                            src={StarRating}
                            alt=""
                            quality={100}
                            priority={true}
                        />

                        <Image
                            src={StarRating}
                            alt=""
                            quality={100}
                            priority={true}
                        />

                        <Image
                            src={StarRating}
                            alt=""
                            quality={100}
                            priority={true}
                        />

                        <Image
                            src={StarRating}
                            alt=""
                            quality={100}
                            priority={true}
                        />

                        <Image
                            src={StarRating}
                            alt=""
                            quality={100}
                            priority={true}
                        />
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
						priority={true}
					/>
				))}
			</div>
		</section>
	);
};

export default Partners;