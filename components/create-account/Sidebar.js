import heroImage from "@assets/img/hero-image.svg";
import Image from "next/image";

const Sidebar = () => {
    return (
        <div className="hidden md:place-content-center w-[90%] md:ml-auto md:mr-[5%] bg-sidebar bg-cover md:text-center md:grid">
			<div className="px-[10%] text-center">
				<Image
                    className="object-contain w-4/5 mx-auto"
					src={heroImage}
					alt="Easy Access to Financial Services"
					priority={100}
				/>
			</div>
		</div>
	);
};

export default Sidebar;
