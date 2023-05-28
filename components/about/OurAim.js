import Image from "next/image";
import TeamHeroImage from "@assets/img/our-team-hero-image.png";

const OurAim = () => {
    return (
        <div className="mx-4 xl:mx-8">
            <section className="bg-white rounded-[30px] px-[5%] pt-[5%] pb-[12%] sm:pb-[10%] grid gap-4 sm:grid-cols-12">
                <h2 className="text-brand-purple text-xl header sm:col-span-5">
                    OUR AIM
                </h2>

                <p className="font-medium text-[#666666] sm:col-span-7 leading-loose">
                    We’re all about bringing you convenience, freedom, and a dash of financial magic. With Inemoni, you’ll breeze through spending your money with ease. Say goodbye to money troubles and hello to a world of financial delight!
                </p>
            </section>

            <div className="w-full left-0 sm:w-[calc((100%-2rem)-10%)] sm:left-[calc(1rem+5%)] xl:left-[calc(2rem+5%)] xl:w-[calc((100%-4rem)-10%)] relative -translate-y-[15%] sm:-translate-y-[10%] sm:-mb-[10%] -mb-[15%]">
                <Image className={`w-full aspect-video h-[${TeamHeroImage.height}px]`} src={TeamHeroImage} alt="Expert Team, Infinite Possibilities." />
            </div>
        </div>
    );
};

export default OurAim;
