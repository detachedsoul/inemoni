import Image from "next/image";
import getCookie from "@helpers/getCookie";
import useFetch from "@helpers/useFetch";
import { usePrimaryDetails, useRechargeCardPrinting } from "@store/useServices";

const fetcher = async (url) => {
	const res = await fetch(url);

	const {data} = await res.json();

	return data;
};

const RechargeCardPrinting = () => {
    // Get list of mobile network operators, error if any, and set the loading state
    const { data: networks, isLoading: networkIsLoading, error: networkError } = useFetch(`https://www.inemoni.org/api/card-printing-networks`, fetcher);

    // States
    const accountName = usePrimaryDetails((state) => state.accountName);
    const setAccountName = usePrimaryDetails((state) => state.setAccountName);

    const network = usePrimaryDetails((state) => state.network);
    const setNetwork = usePrimaryDetails((state) => state.setNetwork);

    const networkImage = usePrimaryDetails((state) => state.networkImage);
    const setNetworkImage = usePrimaryDetails((state) => state.setNetworkImage);

    const amount = usePrimaryDetails((state) => state.amount);
    const setAmount = usePrimaryDetails((state) => state.setAmount);

    const cardAmount = useRechargeCardPrinting((state) => state.cardAmount);
    const setCardAmount = useRechargeCardPrinting((state) => state.setCardAmount);

    const quantity = useRechargeCardPrinting((state) => state.quantity);
    const setQuantity = useRechargeCardPrinting((state) => state.setQuantity);

    const availableQuantity = useRechargeCardPrinting((state) => state.availableQuantity);
    const setAvailableQuantity = useRechargeCardPrinting((state) => state.setAvailableQuantity);

    const setParameters = usePrimaryDetails((state) => state.setParameters);
    const setHeader = usePrimaryDetails((state) => state.setHeader);
    const setEndpoint = usePrimaryDetails((state) => state.setEndpoint);
    const setButtonText = usePrimaryDetails((state) => state.setButtonText);
    const setIsFailed = usePrimaryDetails((state) => state.setIsFailed);
    const setIsLoading = usePrimaryDetails((state) => state.setIsLoading);
    const setPinPopup = usePrimaryDetails((state) => state.setPinPopup);
    const setPreview = usePrimaryDetails((state) => state.setPreview);

    const handleNetworkChange = async (e) => {
        const { value } = e.target;

        if (value === "Select Network") {
            setNetwork("");
            setNetworkImage("");
        } else {
            setNetwork(value);
            setNetworkImage(`https://www.inemoni.org/uploads/networks-logo/${value}.png`);

            setPreview(false);
            setIsLoading(true);

            const data = {
                network: value,
            };

            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
                redirect: "follow",
            };

            try {
                const request = await fetch(
                    `${getURLOrigin}/api/card-printing-amounts`,
                    requestOptions,
                );

                const response = await request.json();

                if (response.error === false) {
                    setCardAmount(response.data);

                    setPreview(true);
                    setIsLoading(false);
                } else {
                    setIsLoading(false);

                    setIsFailed(true);

                    setErrorMessage(response.message);
                }
            } catch(error) {
                setIsLoading(false);

                setIsFailed(true);

                setErrorMessage(error.message);
            }
        }
    };

    const handleAvailableAmountChange = async (e) => {
        const { value } = e.target;

        if (value === "Select Quantity") {
            setAmount("");
        } else {
            setAmount(value);

            setPreview(false);
            setIsLoading(true);

            const data = {
                network: network,
                amount: value
            };

            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
                redirect: "follow",
            };

            try {
                const request = await fetch(
                    `${getURLOrigin}/api/card-printing-quantity`,
                    requestOptions,
                );

                const response = await request.json();

                if (response.error === false) {
                    setAvailableQuantity(response.data);

                    setPreview(true);
                    setIsLoading(false);
                } else {
                    setIsLoading(false);

                    setIsFailed(true);

                    setErrorMessage(response.message);
                }
            } catch(error) {
                setIsLoading(false);

                setIsFailed(true);

                setErrorMessage(error.message);
            }
        }
    };

    return (
        <div className="py-4 px-8 space-y-6">
            <h2 className="font-medium text-xl text-[#262626]">
                Recharge Card Printing
            </h2>

            <div className="grid gap-6">
                <label className="space-y-1" htmlFor="amount">
                    {networkIsLoading ? (
                        <p className="font-bold animate-pulse">
                            Fetching networks...
                        </p>
                    ) : (
                        <span className="font-medium">
                            Select Network
                        </span>
                    )}

                    {typeof networkError === "undefined" && typeof networks === "undefined" && networkIsLoading === false && (
                        <p>
                            An error occured. Please try again later.
                        </p>
                    )}

                    { networks && (
                        <div className="flex items-center gap-3 border border-[#cccccc] rounded-lg pl-3">
                            {networkImage && (
                                <Image className="h-8 w-8 rounded-full" src={ networkImage } alt={ network } width={ 32 } height={ 32 } />
                            )}

                            <select
                                className="dashboard-select border-none pl-0"
                                id="select-network"
                                onChange={ handleNetworkChange }
                            >

                                <option disabled={ network }>
                                    Select Network
                                </option>

                                {network && (
                                    networks?.filter(networkProvider => networkProvider === network).map((network, index) => (
                                        <option value={ network } key={ index }>
                                            { network }
                                        </option>
                                    ))
                                )}

                                {networks?.filter(networkProvider => networkProvider !== network).map((network, index) => (
                                    <option value={ network } key={ index }>
                                        { network }
                                    </option>
                                ))}
                            </select>
                        </div>
                    ) }
                </label>

                {cardAmount && (
                    <label className="space-y-1" htmlFor="amount">
                        <span className="font-medium">
                            Amount
                        </span>

                        {cardAmount && (
                            <select
                                className="dashboard-select"
                                id="select-network"
                                onChange={ handleAvailableAmountChange }
                            >

                                <option disabled={ amount }>
                                    Select Amount
                                </option>

                                {cardAmount && (
                                    cardAmount?.filter(availableAmount => availableAmount === amount).map((availableAmount, index) => (
                                        <option value={ availableAmount } key={ index }>
                                            { availableAmount }
                                        </option>
                                    ))
                                )}

                                {cardAmount && (
                                    cardAmount?.filter(availableAmount => availableAmount !== amount).map((availableAmount, index) => (
                                        <option value={ availableAmount } key={ index }>
                                            { availableAmount }
                                        </option>
                                    ))
                                )}
                            </select>
                        ) }
                    </label>
                )}

                {availableQuantity && (
                    <>
                        <label className="grid gap-1" htmlFor="quantity">
                            <span className="font-medium">
                                Quantity
                            </span>

                            <span className="text-[#262626] font-bold">

                            </span>

                            <input
                                className="dashboard-input no-number-increment"
                                placeholder="Select Quantity"
                                type="number"
                                inputMode="numeric"
                                max={ availableQuantity }
                                value={ quantity }
                                onChange={ (e) => setQuantity(e.target.value) }
                                required
                                id="quantity"
                            />
                        </label>

                        <label className="grid gap-1" htmlFor="account-name">
                            <span className="font-medium">
                                Name on Recharge Card
                            </span>

                            <input
                                className="dashboard-input no-number-increment"
                                type="text"
                                placeholder="Enter Name"
                                id="account-name"
                                value={ accountName }
                                required
                                onChange={ (e) => setAccountName(e.target.value) }
                            />
                        </label>

                        <button
                            className={ `btn w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink ${!(amount !== "" && amount > 0 && network !== "" && quantity !== 0 && quantity > 0 && accountName !== "") ? 'bg-brand-purple/30 pointer-events-none select-none' : 'bg-brand-purple'} disabled:bg-brand-purple/30 disabled:pointer-events-none disabled:select-none` }
                            disabled={ !(amount !== "" && amount > 0 && network !== "" && quantity !== 0 && quantity > 0 && accountName !== "") }
                            type="button"
                            onClick={ () => {
                                setPinPopup(true);
                                setPreview(false);
                                setHeader("Recharge Card Generation Failed");
                                setButtonText("Generate Recharge Card");
                                setEndpoint("purchase-recharge-cards");

                                setParameters({
                                    amount: amount,
                                    network: network,
                                    number: quantity,
                                    username: accountName,
                                    user_token: getCookie("user_token").sanitizedValue,
                                });
                            } }
                        >
                            Continue
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default RechargeCardPrinting;
