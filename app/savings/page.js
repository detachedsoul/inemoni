import HeroText from "@components/savings/HeroText";
import FooterCard from "@components/FooterCard";
import Image from "next/image";
import SavingsDashboard from "@assets/img/savings-dashboard.png";
import SavingsBalance from "@assets/img/savings-balance.png";

const Index = () => {
    return (
		<>
            <main className="space-y-[20%] sm:space-y-[10%]">
                <HeroText />

                <section className="px-[5%] xl:px-[7%]">
                    <article className="grid grid-cols-1 items-center justify-between gap-12 lg:grid-cols-12 lg:gap-16">
                        <div className="space-y-5 lg:col-span-7">
                            <h2 className="header text-2xl leading-10 sm:text-5xl sm:text-[3.125rem] sm:leading-[4.063rem]">
                                Savings is Easier When You Use Inemoni.
                            </h2>

                            <p>
                                Start saving smartly with any of our savings
                                products and get up to 15% interest returns per
                                annum. Withdraw your money at your convenience.
                            </p>
                        </div>

                        <Image
                            className="h-full w-full lg:col-span-5"
                            src={SavingsDashboard}
                            alt="Savings is Easier When You Use Inemoni"
                            quality={100}
                        />
                    </article>
                </section>

                <section className="px-[5%] xl:px-[7%]">
                    <article className="grid grid-cols-1 items-center justify-between gap-12 lg:grid-cols-12 lg:gap-16">
                        <div className="space-y-5 lg:col-span-7">
                            <h2 className="header text-2xl leading-10 sm:text-5xl sm:text-[3.125rem] sm:leading-[4.063rem]">
                                Stash your money & watch it grow.
                            </h2>

                            <p>
                                Money grows wings fast. Use our Fixed Savings plan
                                to lock down lump sums and get up to 15% annual
                                interest.
                            </p>
                        </div>

                        <Image
                            className="h-full w-full lg:col-span-5"
                            src={SavingsBalance}
                            alt="Stash your money & watch it grow"
                            quality={100}
                        />
                    </article>
                </section>
            </main>

            <FooterCard />
        </>
	);
};

export default Index;
