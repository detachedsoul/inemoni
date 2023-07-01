import Lottie from "lottie-react";
import Loading from "@assets/data/lottie-files/loading";

const LoadingIndicator = () => {
    return (
        <div className="px-8 text-center">
            <Lottie animationData={Loading} />
        </div>
    );
};

export default LoadingIndicator;
