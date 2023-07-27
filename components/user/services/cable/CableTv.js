import CablePurchasePreview from "@components/user/CablePurchasePreview";
import formatCurrency from "@helpers/formatCurrency";
import getCookie from "@helpers/getCookie";
import useFetch from "@helpers/useFetch";
import { useCableTV, usePrimaryDetails } from "@store/useServices";
import { useState } from "react";

const fetcher = async (url) => {
	const res = await fetch(url);

	const {data} = await res.json();

	return data;
};

const CableTV = ({ setPopup }) => {
    const [isPreview, setIsPreview] = useState(false);

    const getURLOrigin = window.location.origin;

    // States
    const accountName = usePrimaryDetails((state) => state.accountName);
    const setAccountName = usePrimaryDetails((state) => state.setAccountName);

    const accountNumber = usePrimaryDetails((state) => state.accountNumber);
    const setAccountNumber = usePrimaryDetails((state) => state.setAccountNumber);

    const customerInfo = usePrimaryDetails((state) => state.customerInfo);
    const setCustomerInfo = usePrimaryDetails((state) => state.setCustomerInfo);

    const network = usePrimaryDetails((state) => state.network);
    const setNetwork = usePrimaryDetails((state) => state.setNetwork);

    const amount = usePrimaryDetails((state) => state.amount);
    const setAmount = usePrimaryDetails((state) => state.setAmount);

    const packageName = usePrimaryDetails((state) => state.packageName);
    const setPackageName = usePrimaryDetails((state) => state.setPackageName);

    const cablePackage = useCableTV((state) => state.cablePackage);
    const setCablePackage = useCableTV((state) => state.setCablePackage);

    const packageOptions = useCableTV((state) => state.packageOptions);
    const setPackageOptions = useCableTV((state) => state.setPackageOptions);

    const monthsNumber = useCableTV((state) => state.monthsNumber);
    const setMonthsNumber = useCableTV((state) => state.setMonthsNumber);

    const cableProvider = useCableTV((state) => state.cableProvider);
    const setCableProvider = useCableTV((state) => state.setCableProvider);

    const setParameters = usePrimaryDetails((state) => state.setParameters);
    const setErrorMessage = usePrimaryDetails((state) => state.setErrorMessage);
    const setMessage = usePrimaryDetails((state) => state.setMessage);
    const setHeader = usePrimaryDetails((state) => state.setHeader);
    const setEndpoint = usePrimaryDetails((state) => state.setEndpoint);
    const setButtonText = usePrimaryDetails((state) => state.setButtonText);
    const setIsFailed = usePrimaryDetails((state) => state.setIsFailed);
    const setIsLoading = usePrimaryDetails((state) => state.setIsLoading);
    const setPreview = usePrimaryDetails((state) => state.setPreview);

    // Get list of mobile network operators, error if any, and set the loading state
    const { data: cableProviders, isLoading: networkIsLoading, error: networkError } = useFetch(`https://www.inemoni.org/api/cable-providers`, fetcher);

    // Get list of cable packages for the specified network operator, error if any, and set the loading state only when a cable provider has been selected
    const { data: packages, isLoading: packagesIsLoading, error: packagesError } = useFetch(network ? `${getURLOrigin}/api/cable-packages/${network}` : null, fetcher);

    const handleNetworkChange = async (e) => {
        const { value } = e.target;

        if (value === "Choose a Provider") {
            setNetwork("");
        } else {
            const getProviderInfo = value.split(",");
            const providerShortName = getProviderInfo[0];
            const provider = getProviderInfo[1];

            setNetwork(providerShortName);
            setCableProvider(provider);
            setAmount("");
            setPackageName("");
            setCablePackage("");
            setPackageOptions("");
            setMonthsNumber("");
        }
    };

    const handlePackagesChange = async (e) => {
        const { value } = e.target;

        if (value === "Select Package") {
            setAmount("");
        } else {
            const getPackageInfo = value.split(",");
            const cablePackageName = getPackageInfo[0];
            const cablePackageID = getPackageInfo[1];
            const packageAmount = getPackageInfo[2];

            // Get the packages options from the array passed to the onChange function
            const regex = /\[(.*?)\]/g;
            const matches = value.match(regex);
            if (matches) {
                const parsedPackages = matches.map(match => match.substring(1, match.length - 1));
                const getPackageOptions = JSON.parse(parsedPackages);

               setPackageOptions([getPackageOptions]);
            }

            setPackageName(cablePackageName);
            setCablePackage(cablePackageID);
            setAmount(packageAmount);
        }
    };

    const validateCableNumber = async () => {
        setIsLoading(true);
        setPreview(false);

        if (accountNumber !== "") {
            const getURLOrigin = window.location.origin;

            const data = {
                cable: network,
                card_number: accountNumber,
                package: cablePackage,
                months_number: monthsNumber
            };

            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
                redirect: "follow",
            };

            try {
                const request = await fetch(
                    `${getURLOrigin}/api/verify-cable`,
                    requestOptions,
                );

                const response = await request.json();

                if (response.error === false) {
                    setIsLoading(false);
                    setPreview(true);
                    setAccountName(response.data.customerName);
                    setCustomerInfo(response.data.customerNumber);
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
    }

    return (
        <>
            {!isPreview && (
                <div className="p-4 lg:px-8 space-y-6">
                    <h2 className="font-medium text-xl text-[#262626]">
                        Pay for TV
                    </h2>

                    <div className="grid gap-6">
                        <label className="space-y-1" htmlFor="select-provider">
                            {networkIsLoading ? (
                                <p className="font-bold animate-pulse">
                                    Fetching cableProviders...
                                </p>
                            ) : (
                                <span className="font-medium">
                                    Service Provider
                                </span>
                            )}

                            {typeof networkError === "undefined" && typeof cableProviders === "undefined" && networkIsLoading === false && (
                                <p>
                                    An error occured. Please try again later.
                                </p>
                            )}

                            {cableProviders && (
                                <select
                                    className="dashboard-select"
                                    id="select-provider"
                                    onChange={ handleNetworkChange }
                                >

                                    <option disabled={ network }>
                                        Choose a Provider
                                    </option>

                                    {network && (
                                        cableProviders?.filter(networkProvider => networkProvider.shortName === network).map((network, index) => (
                                            <option value={[network.shortName, network.name]} key={ network.name }>
                                                { network.name }
                                            </option>
                                        ))
                                    )}

                                    {cableProviders?.filter(networkProvider => networkProvider.shortName !== network).map((network, index) => (
                                        <option value={[network.shortName, network.name]} key={ network.name }>
                                            { network.name }
                                        </option>
                                    ))}
                                </select>
                            ) }
                        </label>

                        {packagesIsLoading && (
                            <p className="font-bold animate-pulse">
                                Fetching packages...
                            </p>
                        )}

                        {packagesError && typeof packages === "undefined" && packagesIsLoading === false && (
                            <p>
                                An error occured. Please try again later.
                            </p>
                        )}

                        {packages && (
                            <label className="space-y-1" htmlFor="package">
                                <span className="font-medium">
                                    Package
                                </span>

                                {packages && (
                                    <select
                                        className="dashboard-select"
                                        id="package"
                                        onChange={ handlePackagesChange }
                                    >

                                        <option disabled={ packageName }>
                                            Select Package
                                        </option>

                                        {packages && (
                                            packages?.filter(selectedPackage => selectedPackage.package_name === packageName).map(selectedPackage => (
                                                <option value={[selectedPackage.package_name, selectedPackage.package_id, selectedPackage.package_amount, JSON.stringify(selectedPackage.package_options)]} key={ selectedPackage.package_id }>
                                                    { selectedPackage.package_name }
                                                </option>
                                            ))
                                        )}

                                        {packages && (
                                            packages?.filter(selectedPackage => selectedPackage.package_name !== packageName).map(selectedPackage => (
                                                <option value={[selectedPackage.package_name, selectedPackage.package_id, selectedPackage.package_amount, JSON.stringify(selectedPackage.package_options)]} key={ selectedPackage.package_id }>
                                                    { selectedPackage.package_name }
                                                </option>
                                            ))
                                        )}
                                    </select>
                                ) }
                            </label>
                        )}

                        {packageOptions && (
                            <label className="space-y-1" htmlFor="package">
                                <span className="font-medium">
                                    Package Options
                                </span>

                                {packageOptions && (
                                    <select
                                        className="dashboard-select"
                                        id="package"
                                        onChange={ (e) => setMonthsNumber(e.target.value) }
                                    >

                                        <option disabled={ monthsNumber }>
                                            Select Package Options
                                        </option>

                                        {packageOptions && (
                                            packageOptions?.filter(selectedPackage => selectedPackage.id === monthsNumber).map(selectedPackage => (
                                                <option value={ selectedPackage.id } key={ selectedPackage.id }>
                                                    { selectedPackage.text }
                                                </option>
                                            ))
                                        )}

                                        {packageOptions && (
                                            packageOptions?.filter(selectedPackage => selectedPackage.id !== monthsNumber).map(selectedPackage => (
                                                <option value={selectedPackage.id} key={ selectedPackage.id }>
                                                    { selectedPackage.text }
                                                </option>
                                            ))
                                        )}
                                    </select>
                                ) }
                            </label>
                        )}

                        {amount && (
                            <>
                                <label className="grid gap-1" htmlFor="amount">
                                    <span className="font-medium">
                                        Amount
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

                                <label className="grid gap-1" htmlFor="card-number">
                                    <span className="font-medium">
                                        Smart Card Number
                                    </span>

                                    <input
                                        className="dashboard-input no-number-increment"
                                        type="text"
                                        inputMode="numeric"
                                        placeholder="Enter Smart Card Number"
                                        id="card-number"
                                        value={ accountNumber }
                                        onChange={ (e) => {
                                            if (e.target.value === "") {
                                                setAccountName("");
                                                setAccountNumber("");
                                            } else {
                                                setAccountNumber(e.target.value)
                                            }
                                        } }
                                    />
                                </label>

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

                                        <button
                                            className="btn w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                                            type="button"
                                            onClick={ () => {
                                                setIsPreview(() => true);
                                                setHeader("Cable Subscription Failed");
                                                setMessage(`You have successfully subscribed your cable for ${accountName}`);
                                                setEndpoint("purchase-cable");
                                                setButtonText("Subscribe Cable")

                                                setParameters({
                                                    cable: network,
                                                    card_number: accountNumber,
                                                    package: cablePackage,
                                                    card_name: accountName,
                                                    package_option: monthsNumber,
                                                    user_token: getCookie("user_token").sanitizedValue
                                                });
                                            }}
                                        >
                                            Continue
                                        </button>
                                    </>
                                )}

                                {!accountName && (
                                    <button
                                        className={ `btn w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink ${!(accountNumber !== "") ? 'bg-brand-purple/30 pointer-events-none select-none' : 'bg-brand-purple'} disabled:bg-brand-purple/30 disabled:pointer-events-none disabled:select-none` }
                                        disabled={ !(accountNumber !== "") }
                                        type="button"
                                        onClick={ validateCableNumber }
                                    >
                                        Verify Details
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </div>
            )}

            {isPreview && <CablePurchasePreview setPopup={ setPopup } />}
        </>
    );
};

export default CableTV;
