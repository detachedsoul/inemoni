import Image from "next/image";
import Link from "next/link";
import GTBank from "@assets/img/gtbank.svg";
import IneMoni from "@assets/img/inemoni.svg";
import Spotify from "@assets/img/spotify.svg";

const PushNotifications = () => {
    return (
		<section className="grid grid-cols-2 gap-8 items-center">
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

			<div className="space-y-4">
                <div className="bg-white shadow-2xl rounded-2xl p-3 flex items-center gap-2 justify-between">
                    <div className="flex items-center gap-3">
                        <Image src={GTBank} alt="GTBank" />

                        <div className="space-y-1">
                            <h4 className="font-medium">
                                Money Transfer
                            </h4>

                            <p>
                                ₦300,000 has been transfered to Dominic
                            </p>
                        </div>
                    </div>

                    <p className="rounded-3xl bg-notification-red/5 text-notification-red font-medium text-xs py-2 px-4 inline-block">
                        -300,000.00
                    </p>
                </div>

                <div className="bg-white shadow-2xl rounded-2xl p-3 flex items-center gap-2 justify-between">
                    <div className="flex items-center gap-3">
                        <Image src={IneMoni} alt="Inemoni" />

                        <div className="space-y-1">
                            <h4 className="font-medium">
                                Notification
                            </h4>

                            <p>
                                ₦90,000 has been added to your account
                            </p>
                        </div>
                    </div>

                    <p className="rounded-3xl bg-notification-red/5 text-notification-green text-wite font-medium text-xs py-2 px-4 inline-block">
                        +90,000.00
                    </p>
                </div>

                <div className="bg-white shadow-2xl rounded-2xl p-3 flex items-center gap-2 justify-between">
                    <div className="flex items-center gap-3">
                        <Image src={Spotify} alt="Spotify" />

                        <div className="space-y-1">
                            <h4 className="font-medium">
                                Spotify
                            </h4>

                            <p>
                                Premium user subscription
                            </p>
                        </div>
                    </div>

                    <p className="rounded-3xl bg-notification-red/5 text-notification-red font-medium text-xs py-2 px-4 inline-block">
                        -1,200.00
                    </p>
                </div>
            </div>
		</section>
	);
};

export default PushNotifications;