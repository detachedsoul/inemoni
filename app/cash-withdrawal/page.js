"use client";

import InemoniCard from "@assets/img/inemoni-card.png";
import HeroText from "@components/cash-withdrawal/HeroText";
import FooterCard from "@components/FooterCard";
import Image from "next/image";

const Index = () => {
    return (
        <>
            <main className="space-y-[20%] sm:space-y-[10%]">
                <HeroText />

                <section className="px-[5%] xl:px-[7%]">
                    <article className="grid grid-cols-1 items-center justify-between gap-12 lg:grid-cols-12">
                        <div className="space-y-5 lg:col-span-7">
                            <h2 className="header text-2xl leading-10 sm:text-5xl sm:text-[3.125rem] sm:leading-[4.063rem]">
                                Need to Pay with Cash? Use your Card Anywhere.
                            </h2>

                            <p>
                                Our cards are accepted on Spotify, Netflix, Prime
                                Video, Showmax! and even POS stalls.
                            </p>
                        </div>

                        <div className="relative h-[400px] lg:h-[500px] lg:col-span-5 text-right">
                            <Image
                                className="h-full w-full"
                                src={InemoniCard}
                                alt="Inemonoi card for cash withdrawal"
                                quality={100}
                                fill
                            />
                        </div>
                    </article>
                </section>
            </main>

            <FooterCard />
        </>
	);
};

export default Index;
