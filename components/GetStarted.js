import Link from "next/link";
import Image from "next/image";
import fastTransfer from "@assets/img/index-fast-transfer.png";
import virtualCard from "@assets/img/index-virtual-card.png";

const GetStarted = () => {
	return (
		<section className="flex flex-col gap-12 px-[5%] xl:px-[7%]">
			<article className="grid grid-cols-1 items-end justify-between gap-8 rounded-3xl bg-[#121212] px-[10%] pt-[8%] text-white shadow-[0px_5px_10px_rgba(10,14,39,0.05)] md:grid-cols-2 sm:rounded-[2.5rem] sm:px-[6%] lg:gap-12">
				<div className="space-y-6 sm:pb-[18%] md:space-y-8">
					<p>Send money to anyone</p>

					<h2 className="secondary-header">
						<span className="text-brand-orange">Fast</span>{" "}
						Transfers.{" "}
						<span className="text-brand-orange">Safe</span> Cards.
						Cash Backs.
					</h2>

					<div className="flex flex-wrap items-center gap-4">
						<Link
							className="btn inline-block bg-white text-brand-black"
							href="https://play.google.com/store/apps/details?id=com.inemoni.com"
						>
							Download App
						</Link>

						<Link
							className="btn inline-block text-white"
							href="https://www.inemoni.org/mobile" target="_blank" rel="noopener noreferrer"
						>
							Sign In
						</Link>
					</div>
				</div>

				<Image
					className="mx-auto md:mr-0"
					src={fastTransfer}
					alt="Fast Transfers. Safe Cards. Cash Backs."
					quality={100}
					width={350}
				/>
			</article>

			<article className="grid grid-cols-1 items-end gap-8 rounded-3xl bg-[#fae7de] px-[10%] pt-[8%] text-brand-black shadow-[0px_5px_10px_rgba(10,14,39,0.05)] md:grid-cols-2 md:rounded-[2.5rem] sm:px-[6%] lg:gap-12">
				<div className="space-y-6 sm:pb-[18%] md:space-y-8">
					<p>Cards that work globally</p>

					<h2 className="secondary-header">
						Physical & Virtual Cards{" "}
						<span className="text-brand-orange">That works.</span>
					</h2>

					<div className="flex flex-wrap items-center gap-4">
						<Link
							className="btn block bg-brand-black text-white"
							href="https://play.google.com/store/apps/details?id=com.inemoni.com"
						>
							Download App
						</Link>

						<Link
							className="btn block"
							href="https://www.inemoni.org/mobile" target="_blank" rel="noopener noreferrer"
						>
							Sign In
						</Link>
					</div>
				</div>

				<Image
					className="mx-auto md:mr-0"
					src={virtualCard}
					alt="Physical & virtual cards That works."
					quality={100}
					width={350}
				/>
			</article>
		</section>
	);
};

export default GetStarted;
