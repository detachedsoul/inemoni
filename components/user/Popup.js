import { useRouter } from "next/router";
import { ArrowLeft, X } from "lucide-react";
import { useEffect } from "react";

const Popup = ({
	isActive,
	setIsActive,
    goBack = false,
    width = "lg:w-[40%]",
    children
}) => {
    const router = useRouter();

    useEffect(() => {
        isActive ? document.querySelector("body").style.overflow = "hidden" : document.querySelector("body").style.overflow = "auto";
    }, [isActive]);

	return (
		<div
			className={`fixed top-0 left-0 z-[1024] grid h-full w-full place-items-center bg-black/50 backdrop-blur-[2px] transition-transform duration-500 ease-linear overflow-y-auto ${
				isActive ? "translate-y-0" : "translate-y-full"
			}`}
		>
			<div
				className={`h-auto z-[1024] my-8 w-[calc(100%-10%)] grid gap-2 rounded-[12px] bg-[#F2F2F2] text-[#666666] px-6 py-6 min-[500px]:w-3/5 min-[600px]:w-1/2 ${width}`}
			>
                <div className={`flex items-center ${goBack ? 'justify-between' : 'justify-end'} bg-[#F2F2F2] text-[#666666]`}>
                    {goBack && (
                        <button className="flex items-center gap-2" type="button" onClick={() => router.back()}>
                            <ArrowLeft size={20} />
                            Back
                        </button>
                    )}

                    <button className="flex items-center justify-between gap-2" type="button" onClick={() => setIsActive(() => false)} aria-label="Close modal">
                        <X size={20} />
                    </button>

                </div>

                { children }
			</div>
		</div>
	);
};

export default Popup;
