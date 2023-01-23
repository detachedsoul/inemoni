import Link from "next/link";
import Image from "next/image";
import fastTransfer from "@assets/img/index-fast-transfer.png";
import virtualCard from "@assets/img/index-virtual-card.png";

const GetStarted = () => {
	return (
		<div className="px-[5%] xl:px-[7%] flex flex-col gap-12">
			<section className="bg-[#121212] px-[10%] pt-[8%] rounded-3xl items-center justify-between sm:px-[6%] sm:rounded-[2.5rem] text-white grid gap-12 grid-cols-1 sm:grid-cols-2 shadow-[0px_5px_10px_rgba(10,14,39,0.05)]">
				<div className="space-y-6 md:space-y-8 sm:pb-[18%]">
					<p>Send money to anyone</p>

					<h2 className="header text-2xl sm:text-5xl leading-10 sm:text-[3.125rem] sm:leading-[4.063rem]">
						<span className="text-brand-orange">Fast</span>{" "}
						Transfers.{" "}
						<span className="text-brand-orange">Safe</span> Cards.
						Cash Backs.
					</h2>

					<div className="flex flex-wrap items-center gap-4">
						<Link
							className="bg-white text-brand-black btn inline-block"
							href="/"
						>
							Download App
						</Link>

						<Link
							className="text-white btn inline-block"
							href="/"
						>
							Sign In
						</Link>
					</div>
				</div>

				<Image
					className="ml-auto"
					src={fastTransfer}
					alt="Fast Transfers. Safe Cards. Cash Backs."
					quality={100}
				/>
			</section>

			<section className="bg-[#fae7de] px-[10%] pt-[8%] rounded-3xl items-center sm:px-[6%] sm:rounded-[2.5rem] text-brand-black grid gap-12 grid-cols-1 sm:grid-cols-2 shadow-[0px_5px_10px_rgba(10,14,39,0.05)]">
				<div className="space-y-6 md:space-y-8 sm:pb-[18%]">
					<p>Cards that work globally</p>

					<h2 className="header text-2xl sm:text-5xl leading-10 sm:text-[3.125rem] sm:leading-[4.063rem]">
						Physical & Virtual Cards{" "}
						<span className="text-brand-orange">That works.</span>
					</h2>

					<div className="flex flex-wrap items-center gap-4">
						<Link
							className="bg-brand-black text-white btn block"
							href="/"
						>
							Download App
						</Link>

						<Link
							className="btn block"
							href="/"
						>
							Sign In
						</Link>
					</div>
				</div>

				<Image
					className="ml-auto"
					src={virtualCard}
					alt="physical & virtual cards That works."
					quality={100}
				/>
			</section>
		</div>
	);
};

export default GetStarted;
