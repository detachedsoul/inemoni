import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const IndexBalance = () => {
    const [isBalanceVisible, setBalanceIsVisible] = useState(false);

    return (
        <section className="space-y-1">
            <p className="flex items-center gap-2">
                <span className="text-brand-purple">Total Balance</span>

                <button type="button" aria-label={isBalanceVisible ? "Toggle balance off" : "Toggle balance on"} onClick={() => setBalanceIsVisible(() => !isBalanceVisible)}>
                    {isBalanceVisible ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
            </p>

            <p className="font-bold text-2xl">
                {isBalanceVisible ? "₦ 130,096.97" : "****"}
            </p>
        </section>
    );
};

export default IndexBalance;
