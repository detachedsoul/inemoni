import Image from "next/image";
import Link from "next/link";
import GTBank from "@assets/img/gtbank.svg";
import IneMoni from "@assets/img/inemoni.svg";
import Spotify from "@assets/img/spotify.svg";

const PushNotifications = () => {
    return (
		<section className="grid grid-cols-2 gap-8 items-center px-[5%] lg:gap-12">
			<div className="space-y-4">
				<div className="bg-white shadow-xl rounded-2xl p-3 grid grid-cols-12 items-center gap-2 justify-between">
					<div className="flex items-center gap-3 col-span-9">
						<Image src={GTBank} alt="GTBank" />

						<div className="space-y-1">
							<h3 className="font-medium">Money Transfer</h3>

							<p>₦300,000 has been transfered to Dominic</p>
						</div>
					</div>

					<p className="rounded-3xl bg-notification-red/5 text-notification-red font-medium text-xs py-3 px-4 col-span-3 ml-auto text-right">
						-300,000.00
					</p>
				</div>

				<div className="bg-white shadow-xl rounded-2xl p-3 grid grid-cols-12 items-center gap-2 justify-between">
					<div className="flex items-center gap-3 col-span-9">
						<Image src={IneMoni} alt="Inemoni" />

						<div className="space-y-1">
							<h3 className="font-medium">Notification</h3>

							<p>₦90,000 has been added to your account</p>
						</div>
					</div>

					<p className="rounded-3xl bg-notification-green  text-white font-medium text-xs py-3 px-4 col-span-3 ml-auto text-right">
						+90,000.00
					</p>
				</div>

				<div className="bg-white shadow-xl rounded-2xl p-3 grid grid-cols-12 items-center gap-2 justify-between">
					<div className="flex items-center gap-3 col-span-9">
						<Image src={Spotify} alt="Spotify" />

						<div className="space-y-1">
							<h3 className="font-medium">Spotify</h3>

							<p>Premium user subscription</p>
						</div>
					</div>

					<p className="rounded-3xl bg-notification-red/5 text-notification-red font-medium text-xs py-3 px-4 col-span-3 ml-auto text-right">
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