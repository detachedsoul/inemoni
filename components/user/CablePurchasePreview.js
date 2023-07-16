import formatCurrency from "@helpers/formatCurrency";
import { useCablePurchase, usePrimaryDetails } from "@store/useServices";

const CablePurchasePreview = ({ setPopup }) => {
    const packageName = useCablePurchase((state) => state.packageName);
    const accountName = usePrimaryDetails((state) => state.accountName);
    const amount = usePrimaryDetails((state) => state.amount);
    const cableProvider = useCablePurchase((state) => state.cableProvider);
    const setPinPopup = usePrimaryDetails((state) => state.setPinPopup);
    const setPreview = usePrimaryDetails((state) => state.setPreview);

    return (
        <div className="py-4 px-8 space-y-4">
            <h2 className="font-medium text-lg leading-snug text-[#262626]">
                You are about to pay { formatCurrency(amount) } for { cableProvider } with Account Name: { accountName }
            </h2>

            <div className="grid gap-6">
                <div className="grid gap-2">
                    <p className="flex flex-wrap items-center justify-between gap-2">
                        <span>
                            Service Provider:
                        </span>

                        <span className="text-[#262626] font-medium">
                            { cableProvider }
                        </span>
                    </p>

                    <p className="flex flex-wrap items-center justify-between gap-2">
                        <span>
                            Package:
                        </span>

                        <span className="text-[#262626] font-medium">
                            { packageName }
                        </span>
                    </p>

                    <p className="flex flex-wrap items-center justify-between gap-2">
                        <span>
                            Amount:
                        </span>

                        <span className="text-[#262626] font-medium">
                            { formatCurrency(amount) }
                        </span>
                    </p>

                    <p className="flex flex-wrap items-center justify-between gap-2">
                        <span>
                            Account Name:
                        </span>

                        <span className="text-[#262626] font-medium">
                            { accountName }
                        </span>
                    </p>
                </div>

                <div className="grid gap-2">
                    <button
                        className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                        type="button"
                        onClick={() => {
                            setPreview(false);

                            setPinPopup(true);
                        }}
                    >
                        Recharge Cable
                    </button>

                    <button
                        className="btn block rounded-md hover:text-white transition-colors duration-300 ease-in hover:bg-[#666666]"
                        type="button"
                        onClick={() => setPopup(() => false)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CablePurchasePreview;
