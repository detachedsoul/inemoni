import Lottie from "lottie-react";
import TransactionSuccessful from "@assets/data/lottie-files/transfer-successful";

const SuccessfulPopup = ({ header, message, children }) => {
    return (
        <div className="p-4 lg:px-8 space-y-2 text-center">
            <Lottie className="h-24" animationData={TransactionSuccessful} />

            <div className="space-y-6">
                <div className="space-y-1 w-4/5 mx-auto">
                    <h2 className="font-medium text-xl text-[#262626]">
                        { header }
                    </h2>

                    <p className="leading-snug">
                        { message }
                    </p>
                </div>

                { children }
            </div>
        </div>
    );
};

export default SuccessfulPopup;
