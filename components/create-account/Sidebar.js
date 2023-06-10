import heroImage from "@assets/img/sign-in-sidebar-img.png";
import Image from "next/image";

const Sidebar = () => {
    return (
        <Image
            className="hidden md:block rounded-[20px] md:mr-[5%] md:ml-auto md:w-[90%] h-full"
            src={heroImage}
            alt="Easy Access to Financial Services"
            priority={100}
        />
	);
};

export default Sidebar;
