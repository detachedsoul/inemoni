import heroImage from "@assets/img/hero-image.svg";
import iOS from "@assets/img/download-ios.svg";
import Android from "@assets/img/download-android.svg";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
    return (
		<div className="hidden place-content-center bg-brand-purple text-center md:grid py-12 px-[5%] xl:px-[8%] rounded-[20px] md:mr-[10%] xl:mr-[14%]">
            <Image
                src={heroImage}
                alt="Easy Access to Financial Services"
                priority={100}
            />
		</div>
	);
};

export default Sidebar;
