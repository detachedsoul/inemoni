import aboutHeroImage from "@assets/img/about-hero-image.png";
import Image from "next/image";

const HeroText = () => {
	return (
        <div className="mx-4 xl:mx-8 grid gap-4 sm:grid-cols-2 items-center px-[5%] pt-10 sm:pt-0">
            <div className="flex flex-col gap-5 text-center sm:text-left">
				<h1 className="main-header">
                    We believe that your money deserves to be set free!
				</h1>

				<p>
                    We’re here to break free from traditional banking and empower you with unrivaled convenience where your financial freedom is the real magic. Join Inemoni today and unlock a simpler, hassle-free financial journey.
				</p>
			</div>

            <Image
                className="rounded-xl h-full object-contain sm:order-first"
                src={ aboutHeroImage }
                alt="We believe that your money deserves to be set free!"
                quality={ 100 }
                priority={ true }
            />
		</div>
	);
};

export default HeroText;
