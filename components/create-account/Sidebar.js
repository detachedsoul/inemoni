import heroImage from "@assets/img/hero-image.svg";
import iOS from "@assets/img/download-ios.svg";
import Android from "@assets/img/download-android.svg";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
    return (
		<div className="hidden place-content-center bg-brand-purple text-center text-white md:grid">
			<div className="space-y-8 py-12 px-[10%] xl:px-[8%] text-center">
				<h2 className="header text-center text-[32px] font-medium leading-[50px] text-white">
					Easy Access to Financial Services
				</h2>

				<Image
					src={heroImage}
					alt="Easy Access to Financial Services"
					priority={100}
				/>

				<div className="flex flex-wrap place-content-center gap-3 text-center">
					<Link
						className="inline-block"
						href="/"
					>
						<Image
							src={iOS}
							alt="Download on Apple’s App Store"
							height={40}
						/>
					</Link>

					<Link
						className="inline-block"
						href="https://play.google.com/store/apps/details?id=com.inemoni.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src={Android}
							alt="Download on Google’s PlayStore"
							height={40}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
