import Image from "next/image";
import formatCurrency from "@helpers/formatCurrency";
import getCookie from "@helpers/getCookie";
import { usePrimaryDetails, useBetting } from "@store/useServices";
import useFetch from "@helpers/useFetch";

const fetcher = async (url) => {
    const res = await fetch(url);

    const { data } = await res.json();

    return data;
};

const Betting = () => {
    // Get list of mobile network operators, error if any, and set the loading state
    const { data, isLoading, error } = useFetch(`https://www.inemoni.org/api/betting-sites`, fetcher);

    // States
    const accountName = usePrimaryDetails((state) => state.accountName);
    const setAccountName = usePrimaryDetails((state) => state.setAccountName);

    const customerID = usePrimaryDetails((state) => state.customerID);
    const setCustomerID = usePrimaryDetails((state) => state.setCustomerID);

    const customerInfo = usePrimaryDetails((state) => state.customerInfo);
    const setCustomerInfo = usePrimaryDetails((state) => state.setCustomerInfo);

    const bettingPlatform = useBetting((state) => state.bettingPlatform);
    const setBettingPlatform = useBetting((state) => state.setBettingPlatform);

    const network = usePrimaryDetails((state) => state.network);
    const setNetwork = usePrimaryDetails((state) => state.setNetwork);

    const networkImage = usePrimaryDetails((state) => state.networkImage);
    const setNetworkImage = usePrimaryDetails((state) => state.setNetworkImage);

    const amount = usePrimaryDetails((state) => state.amount);
    const setAmount = usePrimaryDetails((state) => state.setAmount);

    const setParameters = usePrimaryDetails((state) => state.setParameters);
    const setIsLoading = usePrimaryDetails((state) => state.setIsLoading);
    const setIsFailed = usePrimaryDetails((state) => state.setIsFailed);
    const setErrorMessage = usePrimaryDetails((state) => state.setErrorMessage);
    const setPinPopup = usePrimaryDetails((state) => state.setPinPopup);
    const setPreview = usePrimaryDetails((state) => state.setPreview);

    const handleCustomerIDChange = async (e) => {
        const cleanedValue = e.target.value.replace(/[^\d]/g, '');

        setCustomerID(cleanedValue);

        if (customerID !== "") {
            setAccountName("");
        }
    };

    const handleBettingPlatformChange = async (e) => {
        const { value } = e.target;

        if (value === "Choose a Provider") {
            setNetwork("");
            setNetworkImage("");
            setAccountName("");
        } else {
            const getValues = value.split(",");

            const platformID = getValues[0];
            const platformLogo = getValues[1];
            const platform = getValues[2];

            setNetwork(platformID);
            setNetworkImage(platformLogo);
            setBettingPlatform(platform);
        }

        if (network !== "") {
            setAccountName("");
        }
    };


    const validateBettingID = async () => {
        setIsLoading(true);
        setPreview(false);

        if (customerID !== "" && network !== "") {
            const getURLOrigin = window.location.origin;

            const data = {
                site: network,
                account_number: customerID
            };

            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
                redirect: "follow",
            };

            try {
                const request = await fetch(
                    // `${getURLOrigin}/api/verify-betting`,
                    `https://justcors.com/tl_da85250/https://www.inemoni.org/api/verify-betting`,
                    requestOptions,
                );

                const response = await request.json();

                if (response.error === false) {
                    setIsLoading(false);
                    setPreview(true);
                    setAccountName(response.data.customerName);
                    setCustomerInfo(response.data.otherCustomerInfo);
                } else {
                    setIsLoading(false);
                    setIsFailed(true);
                    setErrorMessage(response.message);
                    setCustomerID("");
                }
            } catch(error) {
                setIsLoading(false);
                setIsFailed(true);
                setErrorMessage(error.message);
                setCustomerID("");
            }
        }
    };

    return (
        <div className="py-4 px-8 space-y-6">
            <h2 className="font-medium text-xl text-[#262626]">
                Betting
            </h2>

            <div className="grid gap-6">
                <label className="space-y-1" htmlFor="select-bank">
                    {isLoading ? (
                        <p className="font-bold animate-pulse">
                            Fetching betting platforms...
                        </p>
                    ) : (
                        <span className="font-medium">
                            Betting Platform
                        </span>
                    )}

                    {typeof error === "undefined" && typeof data === "undefined" && isLoading === false && (
                        <p>
                            An error occured. Please try again later.
                        </p>
                    )}

                    {data && (
                        <div className="flex items-center gap-3 border border-[#cccccc] rounded-lg pl-3">
                            { networkImage && (
                                <Image className="h-8 w-8 rounded-full" src={ networkImage } alt={ network } width={ 32 } height={ 32 } />
                            ) }

                            <select
                                className="dashboard-select border-none pl-0"
                                id="select-network"
                                onChange={ handleBettingPlatformChange }
                            >

                                <option disabled={bettingPlatform}>
                                    Choose a Platform
                                </option>

                                {bettingPlatform && (
                                    <option value={[network, networkImage, bettingPlatform]}>
                                        {bettingPlatform}
                                    </option>
                                )}

                                { data.filter(service => service.name !== bettingPlatform).map((network) => (
                                    <option value={[network.id, network.image, network.name]} key={ network.id }>
                                        { network.name }
                                    </option>
                                )) }
                            </select>
                        </div>
                    ) }
                </label>

                <label className="grid gap-1" htmlFor="customerID">
                    <span className="font-medium">
                        Customer ID
                    </span>

                    <input
                        className="dashboard-input no-number-increment"
                        type="text"
                        inputMode="numeric"
                        placeholder="Enter Customer ID"
                        pattern="\d+"
                        id="customerID"
                        value={ customerID }
                        required
                        onChange={ handleCustomerIDChange }
                    />
                </label>

                {!accountName && (
                    <button
                        className={ `btn w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink ${!(customerID !== "" && network !== "") ? 'bg-brand-purple/30 pointer-events-none select-none' : 'bg-brand-purple'} disabled:bg-brand-purple/30 disabled:pointer-events-none disabled:select-none` }
                        disabled={ !(customerID !== "" && network !== "") }
                        type="button"
                        onClick={ validateBettingID }
                    >
                        Validate Details
                    </button>
                )}

                {accountName && (
                    <>
                        <label className="grid gap-1" htmlFor="account-name">
                            <span className="font-medium">
                                Account Name
                            </span>

                            <input
                                className="dashboard-input no-number-increment cursor-not-allowed"
                                type="text"
                                placeholder="Account Name"
                                id="account-name"
                                value={ accountName }
                                readOnly
                                required
                            />
                        </label>

                        <label className="grid gap-1" htmlFor="amount">
                            <span className="font-medium">
                                Amount
                            </span>

                            <span className="text-[#262626] font-bold">
                                { formatCurrency(amount) }
                            </span>

                            <input
                                className="dashboard-input no-number-increment"
                                type="text"
                                inputMode="numeric"
                                placeholder="Enter amount"
                                pattern="\d+"
                                id="amount"
                                value={ amount }
                                required
                                onChange={ (e) => setAmount(e.target.value.replace(/[^\d]/g, '')) }
                            />
                        </label>

                        <button
                            className={ `btn w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink ${!(amount !== "" && amount > 0 && network !== "" && accountName !== "" && customerID !== "") ? 'bg-brand-purple/30 pointer-events-none select-none' : 'bg-brand-purple'} disabled:bg-brand-purple/30 disabled:pointer-events-none disabled:select-none` }
                            disabled={ !(amount !== "" && amount > 0 && network !== "" && accountName !== "" && customerID !== "") }
                            type="button"
                            onClick={ () => {
                                setPinPopup(true);
                                setPreview(false);

                                setParameters({
                                    amount: amount,
                                    site: network,
                                    account_number: customerID,
                                    otherCustomerInfo: customerInfo,
                                    user_token: getCookie("user_token").sanitizedValue
                                });
                            }}
                        >
                            Continue
                        </button>
                    </>
                )}
             </div>
        </div>
    );
};

export default Betting;
