import Lottie from "lottie-react";
import NotAvailable from "@assets/data/lottie-files/not-available";

const FailedPopup = ({ header, text, retryBtn=null, children }) => {
    return (
        <div className="p-4 lg:px-8 space-y-2 text-center">
            <Lottie className="h-24" animationData={NotAvailable} />

            <div className="space-y-6">
                <div className="space-y-4 w-4/5 mx-auto">
                    <h2 className="font-medium text-2xl text-[#262626]">
                        { header }
                    </h2>

                    <p className="leading-snug">
                        { text }
                    </p>
                </div>

                <div className="grid gap-2">
                    {children ? children : (
                        <button
                            className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-dark-purple bg-brand-purple"
                            type="button"
                            onClick={() => retryBtn(() => false)}
                        >
                            Try Again
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FailedPopup;
