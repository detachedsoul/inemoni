import fastTransfer from "@assets/img/index-fast-transfer.png";
import virtualCard from "@assets/img/index-virtual-card.png";
import Image from "next/image";
import Link from "next/link";

const GetStarted = () => {
	return (
		<section className="flex flex-col gap-8 mx-4 xl:mx-8">
			<div className="grid grid-cols-1 items-stretch justify-between gap-8 bg-[#262626] px-[5%] pt-[8%] text-[#E6E6E6] sm:grid-cols-2 lg:gap-12 rounded-[30px] text-center sm:text-left">
				<div className="space-y-6 sm:pb-[18%] md:space-y-8">
					<p className="rounded-full py-1 px-4 border-[0.5px] border-[#E6E6E6] inline-block">Send money to anyone</p>

					<h2 className="secondary-header text-[#E6E6E6]">
						Fast Transfers. <br/>
						Safe Cards. <br/>
						Cash Backs.
					</h2>

                    <div className="flex flex-col place-items-center gap-4 sm:flex-wrap sm:flex-row">
						<Link
							className="btn inline-block bg-brand-purple hover:bg-brand-dark-purple transition-colors duration-300 ease-in text-white hover:text-white"
							href="https://play.google.com/store/apps/details?id=com.inemoni.com"
						>
							Download App
						</Link>

						<Link
							className="btn inline-block text-[#E6E6E6] hover:bg-[#E6E6E6] transition-colors ease-in duration-300 hover:text-brand-black"
							href="/sign-in"
						>
							Login to Web App
						</Link>
					</div>
				</div>

				<Image
					className="mx-auto sm:ml-auto sm:-mr-[6%] object-center"
					src={fastTransfer}
					alt="Fast Transfers. Safe Cards. Cash Backs."
					width={350}
				/>
			</div>

			<div className="grid grid-cols-1 gap-8 bg-[#E6E6E6] px-[5%] pt-8 text-brand-black rounded-[30px]">
                <div className="mx-auto text-center">
                    <p className="rounded-full py-1 px-4 border-[0.5px] border-[#262626] inline-block">
                        Cards that work globally
                    </p>
                </div>

				<Image
					className="mx-auto"
					src={virtualCard}
					alt="Physical & virtual cards That works."
					width={350}
				/>
			</div>

            <div className="text-center grid place-items-center gap-5 sm:w-1/2 sm:mx-auto">
                <h3 className="secondary-header font-bold">
                    Physical & Virtual <br/>
                    Cards That Works.
                </h3>

                <p className="w-4/5 sm:w-[70%] mx-auto">
                    Experience hassle-free transactions anywhere in the world with our globally accepted cards.
                </p>

                <div className="flex flex-col flex-wrap items-center gap-4">
                    <Link
                        className="btn inline-block bg-brand-purple hover:bg-brand-dark-purple transition-colors duration-300 ease-in text-white hover:text-white"
                        href="https://play.google.com/store/apps/details?id=com.inemoni.com"
                    >
                        Download App
                    </Link>

                    <Link
                        className="btn inline-block text-text-brand-black hover:bg-brand-dark-purple transition-colors ease-in duration-300 hover:text-[#E6E6E6]"
                        href="/sign-in"
                    >
                        Login to Web App
                    </Link>
                </div>
            </div>
		</section>
	);
};

export default GetStarted;
