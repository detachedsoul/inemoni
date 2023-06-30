import Lottie from "lottie-react";
import Loading from "@assets/data/lottie-files/loading";

const LoadingIndicator = () => {
    return (
        <div className="py-12 px-8 text-center">
            <Lottie className="h-36" animationData={Loading} />
        </div>
    );
};

export default LoadingIndicator;
