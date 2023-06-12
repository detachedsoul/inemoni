import StarRating from "@assets/img/star-rating.svg";
import FooterBannerLogo from "@assets/img/footer-banner-logo.png";
import Image from "next/image";
import Link from "next/link";

const FooterBanner = () => {
    return (
        <div className="fixed bottom-0 left-0 flex w-full flex-wrap items-center justify-between bg-white px-[5%] py-2 z-50 shadow sm:hidden">
            <div className="flex items-center gap-3">
                <Image
                    className="object-cover"
                    src={FooterBannerLogo}
                    alt="Inemoni"
                    height={50}
                    quality={ 100 }
                    priority={true}
                />

                <div className="space-y-1.5">
                    <p className="font-bold leading-none text-brand-purple">
                        Inemoni.
                    </p>

                    <div className="flex items-center gap-1.5">
                        <Image
                            src={StarRating}
                            alt=""
                            quality={100}
                            height={12}
                            priority={true}
                        />

                        <Image
                            src={StarRating}
                            alt=""
                            quality={100}
                            height={12}
                            priority={true}
                        />

                        <Image
                            src={StarRating}
                            alt=""
                            quality={100}
                            height={12}
                            priority={true}
                        />

                        <Image
                            src={StarRating}
                            alt=""
                            quality={100}
                            height={12}
                            priority={true}
                        />

                        <Image
                            src={StarRating}
                            alt=""
                            quality={100}
                            height={12}
                            priority={true}
                        />
                    </div>
                </div>
            </div>

            <Link
                className="btn px-4 bg-brand-purple text-white transition-colors ease-in-out hover:bg-brand-dark-purple"
                href="https://play.google.com/store/apps/details?id=com.inemoni.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Get the App
            </Link>
        </div>
	);
};

export default FooterBanner;
