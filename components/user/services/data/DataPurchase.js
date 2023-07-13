import Image from "next/image";
import formatCurrency from "@helpers/formatCurrency";
import getCookie from "@helpers/getCookie";
import useFetch from "@helpers/useFetch";
import { usePrimaryDetails, useDataPurchase } from "@store/useServices";

const fetcher = async (url) => {
	const res = await fetch(url);

	const {data} = await res.json();

	return data;
};

const DataPurchase = () => {
    // Get list of mobile network operators, error if any, and set the loading state
    const { data: networks, isLoading: networkIsLoading, error: networkError } = useFetch(`https://www.inemoni.org/api/all-networks/data`, fetcher);

    // States
    const accountName = usePrimaryDetails((state) => state.accountName);
    const setAccountName = usePrimaryDetails((state) => state.setAccountName);

    const network = usePrimaryDetails((state) => state.network);
    const setNetwork = usePrimaryDetails((state) => state.setNetwork);

    const pinPopup = usePrimaryDetails((state) => state.pinPopup);
    const setPinPopup = usePrimaryDetails((state) => state.setPinPopup);

    const preview = usePrimaryDetails((state) => state.preview);
    const setPreview = usePrimaryDetails((state) => state.setPreview);

    const isLoading = usePrimaryDetails((state) => state.isLoading);
    const setIsLoading = usePrimaryDetails((state) => state.setIsLoading);

    const networkImage = usePrimaryDetails((state) => state.networkImage);
    const setNetworkImage = usePrimaryDetails((state) => state.setNetworkImage);

    const phoneNumber = usePrimaryDetails((state) => state.phoneNumber);
    const setPhoneNumber = usePrimaryDetails((state) => state.setPhoneNumber);

    const amount = usePrimaryDetails((state) => state.amount);
    const setAmount = usePrimaryDetails((state) => state.setAmount);

    const dataBundle = useDataPurchase((state) => state.dataBundle);
    const setDataBundle = useDataPurchase((state) => state.setDataBundle);

    const customerInfo = usePrimaryDetails((state) => state.customerInfo);
    const setCustomerInfo = usePrimaryDetails((state) => state.setCustomerInfo);

    const setParameters = usePrimaryDetails((state) => state.setParameters);
    const setErrorMessage = usePrimaryDetails((state) => state.setErrorMessage);
    const setIsFailed = usePrimaryDetails((state) => state.setIsFailed);

    // Get list of data bundles for the specified network operator, error if any, and set the loading state only when a network has been selected
    const { data: dataPlans, isLoading: dataBundleIsLoading, error: dataBundleError } = useFetch(network ? `https://www.inemoni.org/api/data-plans/${network}` : null, fetcher);

    const handleNetworkChange = async (e) => {
        const { value } = e.target;

        if (value === "Select Network") {
            setNetwork("");
            setNetworkImage("");
        } else {
            setNetwork(value);
            setNetworkImage(`https://www.inemoni.org/uploads/networks-logo/${value}.png`);
        }
    };

    const handleDataPlanChange = (e) => {
        const { value } = e.target;

        if (value === "Choose a Data Plan") {
            setDataBundle("");
        } else {
            const getValues = value.split(",");

            const bundleID = getValues[0];
            const bundleAmount = getValues[1];

            setDataBundle(bundleID);
            setAmount(bundleAmount);
        }
    };

    const handlePhoneNumberChange = async (e) => {
        setPhoneNumber(e.target.value.replace(/[^\d]/g, ''));
    };

    return (
        <div className="py-4 px-8 space-y-6">
            <h2 className="font-medium text-xl text-[#262626]">
                Buy Data
            </h2>

            <div className="grid gap-6">
                <label className="space-y-1" htmlFor="select-bank">
                    {networkIsLoading ? (
                        <p>
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
                            { networkImage && (
                                <Image className="h-8 w-8 rounded-full" src={ networkImage } alt={ network } width={ 32 } height={ 32 } />
                            ) }

                            <select
                                className="dashboard-select border-none pl-0"
                                id="select-network"
                                onChange={ handleNetworkChange }
                            >

                                <option disabled={ network }>
                                    Select Network
                                </option>

                                {network && (
                                    networks?.filter(networkProvider => networkProvider.shortName === network).map(network => (
                                        <option value={ network.shortName } key={ network.id }>
                                            { network.name }
                                        </option>
                                    ))
                                )}

                                { networks?.filter(networkProvider => networkProvider.shortName !== network).map((network) => (
                                    <option value={ network.shortName } key={ network.id }>
                                        { network.name }
                                    </option>
                                )) }
                            </select>
                        </div>
                    ) }
                </label>

                {network && (
                    <>
                        <label className="space-y-1" htmlFor="select-bank">
                            {dataBundleIsLoading ? (
                                <p>
                                    Fetching data bundles...
                                </p>
                            ) : (
                                <span className="font-medium">
                                    Data Plan
                                </span>
                            )}

                            {typeof dataBundleError === "undefined" && typeof dataPlans === "undefined" && dataBundleIsLoading === false && (
                                <p>
                                    An error occured. Please try again later.
                                </p>
                            )}

                            {dataPlans && (
                                <select
                                    className="dashboard-select"
                                    id="select-network"
                                    onChange={ handleDataPlanChange }
                                >

                                    <option disabled={ dataPlans }>
                                        Choose a Data Plan
                                    </option>

                                    {dataPlans && (
                                        dataPlans?.filter(plan => plan.plan_id === dataBundle).map(dataPlan => (
                                            <option value={[dataPlan.plan_id, dataPlan.plan_amount]} key={ dataPlan.plan_id }>
                                                { dataPlan.plan_name }
                                            </option>
                                        ))
                                    )}

                                    {dataPlans && (
                                        dataPlans?.filter(plan => plan.plan_id !== dataBundle).map(dataPlan => (
                                            <option value={[dataPlan.plan_id, dataPlan.plan_amount]} key={ dataPlan.plan_id }>
                                                { dataPlan.plan_name }
                                            </option>
                                        ))
                                    )}
                                </select>
                            ) }
                        </label>

                        <label className="grid gap-1" htmlFor="amount">
                            <span className="font-medium">
                                Amount
                            </span>

                            <span className="text-[#262626] font-bold">

                            </span>

                            <input
                                className="dashboard-input no-number-increment cursor-not-allowed"
                                type="text"
                                inputMode="numeric"
                                placeholder="Enter amount"
                                id="amount"
                                value={ formatCurrency(amount) }
                                required
                                readOnly
                            />
                        </label>

                        <label className="grid gap-1" htmlFor="phone-number">
                            <span className="font-medium">
                                Phone Number
                            </span>

                            <input
                                className="dashboard-input no-number-increment"
                                type="text"
                                inputMode="numeric"
                                placeholder="Enter Phone Number"
                                pattern="\d+"
                                minLength={ 11 }
                                maxLength={ 11 }
                                id="phone-number"
                                value={ phoneNumber }
                                required
                                onChange={ handlePhoneNumberChange }
                            />
                        </label>

                        <button
                            className={ `btn w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink ${!(amount !== "" && amount > 0 && network !== "" && phoneNumber !== "" && phoneNumber.toString().length === 11) ? 'bg-brand-purple/30 pointer-events-none select-none' : 'bg-brand-purple'} disabled:bg-brand-purple/30 disabled:pointer-events-none disabled:select-none` }
                            disabled={ !(amount !== "" && amount > 0 && network !== "" && phoneNumber !== "" && phoneNumber.toString().length === 11) }
                            type="button"
                            onClick={ () => {
                                setPinPopup(true);
                                setPreview(false);

                                setParameters({
                                    amount: amount,
                                    network: network,
                                    plan_id: dataBundle,
                                    phone: phoneNumber,
                                    // account_name: accountName,
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

export default DataPurchase;
