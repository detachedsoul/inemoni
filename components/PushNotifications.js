import GTBank from "@assets/img/gtbank.svg";
import IneMoni from "@assets/img/inemoni.svg";
import Spotify from "@assets/img/spotify.svg";
import Image from "next/image";
import Link from "next/link";

const PushNotifications = () => {
	return (
		<section className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center px-[5%] lg:gap-12 xl:px-[7%]">
			<div className="space-y-4">
				<div className="bg-white shadow-[0px_4px_30px_rgba(10,14,39,0.04)] rounded-2xl p-3 flex justify-between items-center gap-4 overflow-y-hidden no-scrollbar">
					<div className="flex items-center gap-3 shrink-0">
						<Image src={GTBank} alt="GTBank" />

						<div className="space-y-1 flex flex-col shrink-0">
							<h3 className="font-medium">Money Transfer</h3>

							<p>₦300,000 has been transfered to Dominic</p>
						</div>
					</div>

					<p className="rounded-3xl bg-notification-red/5 text-notification-red font-medium text-xs py-3 px-4 ml-auto text-right grid shrink-0">
						-300,000.00
					</p>
				</div>

				<div className="bg-white shadow-[0px_4px_30px_rgba(10,14,39,0.04)] rounded-2xl p-3 flex justify-between items-center gap-4 overflow-y-hidden no-scrollbar">
					<div className="flex items-center gap-3 shrink-0">
						<Image src={IneMoni} alt="Inemoni" />

						<div className="space-y-1">
							<h3 className="font-medium">Notification</h3>

							<p>₦90,000 has been added to your account</p>
						</div>
					</div>

					<p className="rounded-3xl bg-notification-green  text-white font-medium text-xs py-3 px-4 col-span-3 ml-auto text-right grid shrink-0 mr-4">
						+90,000.00
					</p>
				</div>

				<div className="bg-white shadow-[0px_4px_30px_rgba(10,14,39,0.04)] rounded-2xl p-3 flex justify-between items-center gap-4 overflow-y-hidden no-scrollbar">
					<div className="flex items-center gap-3 shrink-0">
						<Image src={Spotify} alt="Spotify" />

						<div className="space-y-1">
							<h3 className="font-medium">Spotify</h3>

							<p>Premium user subscription</p>
						</div>
					</div>

					<p className="rounded-3xl bg-notification-red/5 text-notification-red font-medium text-xs py-3 px-4 col-span-3 ml-auto text-right grid shrink-0">
						-1,200.00
					</p>
				</div>
			</div>

			<div className="space-y-4">
				<h2 className="header-secondary font-seminold text-brand-dark-purple">
					Stay in control with our push notifications.
				</h2>

				<p>
					With Inemoni’s push notications, you’re always in-the-know
					with daily balance notifications and transaction alerts.
				</p>

				<Link
					className="bg-brand-black hover:bg-brand-dark-purple text-white btn inline-block transition-colors duration-300 ease-in"
					href="/"
				>
					Learn More
				</Link>
			</div>
		</section>
	);
};

export default PushNotifications;
