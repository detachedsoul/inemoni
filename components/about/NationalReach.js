import Globe from "@assets/img/globe.png";
import Image from "next/image";

const NationalReach = () => {
	return (
		<section className="relative px-[5%] pt-[5%] sm:space-y-12 lg:pb-[10%] sm:pt-0 xl:px-[7%]">
			<h2 className="main-header mb-4 sm:mb-0">
				Our <span className="text-brand-purple">national</span> reach
			</h2>

			<div className="space-y-8 border-l border-dashed border-brand-black sm:space-y-0 grid sm:grid-cols-2 sm:items-start sm:gap-8 lg:w-1/2 lg:space-y-8 lg:block">
				<div className="group relative space-y-2 pl-8 transition-all duration-300 ease-linear hover:pl-4">
					<h3 className="font-bold  after:absolute after:-left-[0.11rem] after:top-0 after:h-7 after:w-0.5 after:bg-brand-black group-hover:text-brand-purple group-hover:after:bg-brand-purple">
						Cash Withdrawal
					</h3>

					<p>Withdraw cash at our agents outlet closest to you.</p>
				</div>

				<div className="group relative space-y-2 pl-8 transition-all duration-300 ease-linear hover:pl-4">
					<h3 className="font-bold  after:absolute after:-left-[0.11rem] after:top-0 after:h-7 after:w-0.5 after:bg-brand-black group-hover:text-brand-purple group-hover:after:bg-brand-purple">
						Bills Payment
					</h3>

					<p>
						Simplify your bill payments with Inemoni - pay all your
						bills in one place with ease and security.
					</p>
				</div>

				<div className="group relative space-y-2 pl-8 transition-all duration-300 ease-linear hover:pl-4">
					<h3 className="font-bold  after:absolute after:-left-[0.11rem] after:top-0 after:h-7 after:w-0.5 after:bg-brand-black group-hover:text-brand-purple group-hover:after:bg-brand-purple">
						500k+ Payments Daily
					</h3>

					<p>Average number of payments processed daily.</p>
				</div>

				<div className="group relative space-y-2 pl-8 transition-all duration-300 ease-linear hover:pl-4">
					<h3 className="font-bold  after:absolute after:-left-[0.11rem] after:top-0 after:h-7 after:w-0.5 after:bg-brand-black group-hover:text-brand-purple group-hover:after:bg-brand-purple">
						Standard Payment Options
					</h3>

					<div className="grid grid-cols-2 gap-2">
						<p>Debit & Credit Cards</p>

						<p>Bank Account</p>

						<p>Mobile Money</p>

						<p>POS</p>

						<p>Mobile App</p>

						<p>VISA QR</p>

						<p>Bank Transfer</p>

						<p>USSD</p>
					</div>
				</div>
			</div>

			<div
				className={`-z-50 lg:absolute lg:-top-24 lg:-bottom-24 lg:right-0 lg:w-3/5`}
			>
				<Image
					className="aspect-square h-full w-full object-contain"
					src={Globe}
					alt=""
					priority={true}
					quality={100}
				/>
			</div>
		</section>
	);
};

export default NationalReach;
