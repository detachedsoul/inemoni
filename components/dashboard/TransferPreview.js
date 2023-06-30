const TransferPreview = ({ name, bank, amount, narration, setPopup, setPinPopup, setPreview }) => {
    return (
        <div className="py-4 px-8 space-y-4">
            <h2 className="font-medium text-lg leading-snug text-[#262626]">
                You are about to send money to { name }, { bank }.
            </h2>

            <div className="grid gap-6">
                <div className="grid gap-2">
                    <p className="flex flex-wrap items-center justify-between gap-2">
                        <span>
                            Amount:
                        </span>

                        <span className="text-[#262626] font-medium">
                            ₦ { amount }
                        </span>
                    </p>

                    <p className="flex flex-wrap items-center justify-between gap-2">
                        <span>
                            Transfer Fee:
                        </span>

                        <span className="text-[#262626] font-medium">
                            ₦ 20
                        </span>
                    </p>

                    <p className="flex flex-wrap items-center justify-between gap-2">
                        <span>
                            Total Amount:
                        </span>

                        <span className="text-[#262626] font-medium">
                            ₦ { amount + 0 }
                        </span>
                    </p>

                    <p className="flex flex-wrap items-center justify-between gap-2">
                        <span>
                            Narration:
                        </span>

                        <span className="text-[#262626] font-medium">
                            { narration }
                        </span>
                    </p>
                </div>

                <div className="grid gap-2">
                    <button
                        className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                        type="button"
                        onClick={() => {
                            setPreview(() => false);

                            setPinPopup(() => true);
                        }}
                    >
                        Confirm
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

export default TransferPreview;
