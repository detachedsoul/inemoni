import Image from "next/image";
import Link from "next/link";
import GTBank from "@assets/img/gtbank.svg";
import IneMoni from "@assets/img/inemoni.svg";
import Spotify from "@assets/img/spotify.svg";
import Globe from "@assets/img/globe.png";

const NationalReach = () => {
    return (
		<section className="px-[5%] space-y-12 relative pb-[10%]">
			<h2 className="header text-5xl">
				Our <span className="text-brand-purple">national</span> reach
			</h2>

			<div className="space-y-8 border-l border-dashed border-brand-black w-1/2">
				<div className="pl-8 space-y-2 relative group hover:pl-4 transition-all ease-linear duration-300">
					<h3 className="group-hover:text-brand-purple  group-hover:after:bg-brand-purple font-bold after:w-0.5 after:h-7 after:absolute after:bg-brand-black after:-left-[0.11rem] after:top-0">
						Cash Withdrawal
					</h3>

					<p>Withdraw cash at our agents outlet closest to you.</p>
				</div>

				<div className="pl-8 space-y-2 relative group hover:pl-4 transition-all ease-linear duration-300">
					<h3 className="group-hover:text-brand-purple  group-hover:after:bg-brand-purple font-bold after:w-0.5 after:h-7 after:absolute after:bg-brand-black after:-left-[0.11rem] after:top-0">
						Bills Payment
					</h3>

					<p>
						Bill payments per day, peaking at 231 requests per
						second.
					</p>
				</div>

				<div className="pl-8 space-y-2 relative group hover:pl-4 transition-all ease-linear duration-300">
					<h3 className="group-hover:text-brand-purple  group-hover:after:bg-brand-purple font-bold after:w-0.5 after:h-7 after:absolute after:bg-brand-black after:-left-[0.11rem] after:top-0">
						500k+ Payments Daily
					</h3>

					<p>Average number of payments processed daily.</p>
				</div>

				<div className="pl-8 space-y-2 relative group hover:pl-4 transition-all ease-linear duration-300">
					<h3 className="group-hover:text-brand-purple  group-hover:after:bg-brand-purple font-bold after:w-0.5 after:h-7 after:absolute after:bg-brand-black after:-left-[0.11rem] after:top-0">
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

            <div className="absolute -top-24 right-0 w-3/5">
                <Image className="h-full w-full" src={Globe} alt="" priority={true} quality={100} />
            </div>
		</section>
	);
};

export default NationalReach;