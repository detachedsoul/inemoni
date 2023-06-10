import heroImage from "@assets/img/sign-in-sidebar-img.png";
import Image from "next/image";

const Sidebar = () => {
    return (
        <Image
            className="hidden md:block rounded-[20px] lg:mr-[5%] lg:ml-auto lg:w-[90%] h-full aspect-auto max-[1023px]:object-contain"
            src={heroImage}
            alt="Easy Access to Financial Services"
            priority={100}
        />
	);
};

export default Sidebar;
