import Image from "next/image";
import DanielEmenike from "@assets/img/daniel-emenike.png";
import WisdomOjimah from "@assets/img/wisdom-ojimah.jpg";
import MichaelArawole from "@assets/img/michael-arawole.jpg";
import OluwaseunOke from "@assets/img/oluwaseun-oke.jpg";
import InemesitAkpan from "@assets/img/inemesit-akpan.webp";
import KosisochukwuChukwuka from "@assets/img/kosisochukwu-chukwuka.jpg";

const OurTeam = () => {
    return (
        <section className="px-[5%] pt-[5%] sm:px-[calc(5%+1rem)] xl:px-[calc(5%+3rem)] mx-4 xl:mx-8 space-y-8">
            <div className="flex flex-col gap-2">
                <h3 className="text-brand-purple text-xl header">
                    MEET THE TEAM
                </h3>

                <h2 className="secondary-header">
                    Expert Team, Infinite Possibilities.
                </h2>

                <p>
                    We are a dedicated group of finance and technology experts with a singular mission: to empower individuals like you to live the most financially-free life imaginable.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 place-content-center gap-4 sm:gap-y-6">
                <div className="relative bg-team-bg bg-center object-contain bg-cover bg-no-repeat h-[350px] rounded-xl">
                    <Image className="w-full h-full aspect-video rounded-xl hidden" src={ InemesitAkpan } alt="Inemesit Akpan - CEO, Founder" />

                    <div className="rounded-xl p-3.5 bg-white opacity-80 absolute bottom-4 w-[calc(100%-2rem)] text-center left-4">
                        <h3 className="header text-xl">
                            Inemesit Akpan
                        </h3>

                        <p>
                            CEO, Founder
                        </p>
                    </div>
                </div>

                <div className="relative bg-team-bg bg-center object-contain bg-cover bg-no-repeat h-[350px] rounded-xl">
                    <Image className="w-full h-full aspect-video rounded-xl hidden" src={ OluwaseunOke } alt="Oluwaseun Oke - CTO, Lead Engineer" />

                    <div className="rounded-xl p-3.5 bg-white opacity-80 absolute bottom-4 w-[calc(100%-2rem)] text-center left-4">
                        <h3 className="header text-xl">
                            Oluwaseun Oke
                        </h3>

                        <p>
                            Android Engineer, CTO
                        </p>
                    </div>
                </div>

                <div className="relative bg-team-bg bg-center object-contain bg-cover bg-no-repeat h-[350px] rounded-xl">
                    <Image className="w-full h-full aspect-video rounded-xl hidden" src={ MichaelArawole } alt="Michael Arawole - Senior Backend Engineer" />

                    <div className="rounded-xl p-3.5 bg-white opacity-80 absolute bottom-4 w-[calc(100%-2rem)] text-center left-4">
                        <h3 className="header text-xl">
                            Michael Arawole
                        </h3>

                        <p>
                            Senior Backend Engineer, Lead Engineer
                        </p>
                    </div>
                </div>

                <div className="relative bg-team-bg bg-center object-contain bg-cover bg-no-repeat h-[350px] rounded-xl">
                    <Image className="w-full h-full aspect-video rounded-xl" src={ DanielEmenike } alt="Daniel Emenike - Product Designer" />

                    <div className="rounded-xl p-3.5 bg-white opacity-80 absolute bottom-4 w-[calc(100%-2rem)] text-center left-4">
                        <h3 className="header text-xl">
                            Daniel Emenike
                        </h3>

                        <p>
                            Product Designer
                        </p>
                    </div>
                </div>

                <div className="relative bg-team-bg bg-center object-contain bg-cover bg-no-repeat h-[350px] rounded-xl">
                    <Image className="w-full h-full aspect-video rounded-xl hidden" src={ WisdomOjimah } alt="Wisdom Ojimah - Frontend Developer" />

                    <div className="rounded-xl p-3.5 bg-white opacity-80 absolute bottom-4 w-[calc(100%-2rem)] text-center left-4">
                        <h3 className="header text-xl">
                            Wisdom Ojimah
                        </h3>

                        <p>
                            Frontend Developer
                        </p>
                    </div>
                </div>

                <div className="relative bg-team-bg bg-center object-contain bg-cover bg-no-repeat h-[350px] rounded-xl">
                    <Image className="w-full h-full aspect-video rounded-xl hidden" src={ KosisochukwuChukwuka } alt="Kosisochukwu Chukwuka - Legal Advocate" />

                    <div className="rounded-xl p-3.5 bg-white opacity-80 absolute bottom-4 w-[calc(100%-2rem)] text-center left-4">
                        <h3 className="header text-xl">
                            Kosisochukwu Chukwuka
                        </h3>

                        <p>
                            Legal Advocate
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
