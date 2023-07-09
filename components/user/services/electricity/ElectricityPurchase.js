import Image from "next/image";
import formatCurrency from "@helpers/formatCurrency";
import getCookie from "@helpers/getCookie";
import usePrimaryDetails from "@store/useServices";
import useFetch from "@helpers/useFetch";
import { useState } from "react";

const fetcher = async (url) => {
    const res = await fetch(url);

    const { data } = await res.json();

    return data;
};

const ElectricityPurchase = ({ handleAmountChange, amount, network, setNetworkImage, setNetwork, networkImage, setParameters, setIsLoading, setPinPopup, setPreview }) => {
    // Get list of mobile network operators, error if any, and set the loading state
    const { data, isLoading, error } = useFetch(`https://www.inemoni.org/api/electricity-discos`, fetcher);

    // Store the account name, meter number in a state
    const [accountName, setAccountName] = useState("");
    const [meterNumber, setMeterNumber] = useState("");
    const [customerInfo, setCustomerInfo] = useState("");

    const handleMeterNumberChange = async (e) => {
        const cleanedValue = e.target.value.replace(/[^\d]/g, '');

        setMeterNumber(cleanedValue);

        // if (meterNumber !== "" || network !== "") {
        //     setAccountName(() => "");
        // }
    };

    const handleElectricityProviderChange = async (e) => {
        const { value } = e.target;

        if (value === "Choose a Provider") {
            setNetwork(() => "");
            setNetworkImage(() => "");
        } else {
            const getValues = value.split(",");

            const discoProvider = getValues[0];
            const discoImage = getValues[1];

            setNetwork(() => discoProvider);
            setNetworkImage(() => discoImage);
        }

        // if (meterNumber !== "" || network !== "") {
        //     setAccountName(() => "");
        // }
    };


    const validateMeterDetails = async () => {
        setIsLoading(() => true);
        // setPreview(() => false);

        if (meterNumber !== "" && network !== "") {
            const getURLOrigin = window.location.origin;

            const data = {
                disco: network,
                account_number: meterNumber
            };

            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
                redirect: "follow",
            };

            try {
                const request = await fetch(
                    // `${getURLOrigin}/api/${endpoint}`,
                    `https://justcors.com/tl_436460f/https://www.inemoni.org/api/verify-electricity`,
                    requestOptions,
                );

                const response = await request.json();

                setIsLoading(() => true);
                // setPreview(() => false);

                if (response.error === false) {
                    setIsLoading(() => false);
                    // setPreview(() => true);

                    setAccountName(() => response.data.customerName);
                    setCustomerInfo(() => response.data.otherCustomerInfo);

                } else {
                    console.log(response);

                    setIsLoading(() => false);
                    // setPreview(() => true);
                }
            } catch(error) {
                // setIsProcessing(() => false);

                // setIsFailed(() => true);

                // setErrorMessage(() => "An error occured. Please try again later.");

                // setPinPopup(() => false);

                console.log(error);

                setIsLoading(() => false);
                setPreview(() => true);
            }
        }
    };

    // const phoneNumber = usePrimaryDetails((state) => state.phoneNumber);
    // const setPhoneNumber = usePrimaryDetails((state) => state.setPhoneNumber(state.phoneNumber))

    // console.log(network, meterNumber, accountName)

    // console.log(phoneNumber)

    return (
        <div className="py-4 px-8 space-y-6">
            <h2 className="font-medium text-xl text-[#262626]">
                Buy Electricity
            </h2>

            <div className="grid gap-6">
                <label className="space-y-1" htmlFor="select-bank">
                    <span className="font-medium">
                        Choose a Provider
                    </span>

                    { isLoading && (
                        <p>
                            Fetching service providers...
                        </p>
                    ) }

                    { typeof error === "undefined" && typeof data === "undefined" && isLoading === false && (
                        <p>
                            An error occured. Please try again later.
                        </p>
                    ) }

                    { data && (
                        <div className="flex items-center gap-3 border border-[#cccccc] rounded-lg pl-3">
                            { networkImage && (
                                <Image className="h-8 w-8 rounded-full" src={ networkImage } alt={ network } width={ 32 } height={ 32 } />
                            ) }

                            <select
                                className="dashboard-select border-none pl-0"
                                id="select-network"
                                onChange={ handleElectricityProviderChange }
                            >
                                <option>
                                    Choose a Provider
                                </option>

                                { data.map((network) => (
                                    <option value={[network.id, network.image]} key={ network.id }>
                                        { network.name }
                                    </option>
                                )) }
                            </select>
                        </div>
                    ) }
                </label>

                <label className="grid gap-1" htmlFor="meterNumber">
                    <span className="font-medium">
                        Meter Number
                    </span>

                    <input
                        className="dashboard-input no-number-increment"
                        type="text"
                        inputMode="numeric"
                        placeholder="Enter Meter Number"
                        pattern="\d+"
                        id="meterNumber"
                        value={ meterNumber }
                        required
                        onChange={ handleMeterNumberChange }
                    />
                </label>

                {!accountName && (
                    <button
                        className={ `btn w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink ${!(meterNumber !== "" && network !== "") ? 'bg-brand-purple/30 pointer-events-none select-none' : 'bg-brand-purple'} disabled:bg-brand-purple/30 disabled:pointer-events-none disabled:select-none` }
                        disabled={ !(meterNumber !== "" && network !== "") }
                        type="button"
                        onClick={ validateMeterDetails }
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
                                onChange={ handleAmountChange }
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
                                // onChange={ (e) => setPhoneNumber(e.target.value) }
                            />
                        </label>

                        <button
                            className={ `btn w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink ${!(amount !== "" && amount > 0 && network !== "" && phoneNumber !== "" && phoneNumber.toString().length === 11) ? 'bg-brand-purple/30 pointer-events-none select-none' : 'bg-brand-purple'} disabled:bg-brand-purple/30 disabled:pointer-events-none disabled:select-none` }
                            disabled={ !(amount !== "" && amount > 0 && network !== "" && phoneNumber !== "" && phoneNumber.toString().length === 11) }
                            type="button"
                            onClick={ () => setParameters(() => {
                                setPinPopup(() => true);
                                setPreview(() => false);

                                return {
                                    amount: amount,
                                    disco: network,
                                    account_number: meterNumber,
                                    account_name: accountName,
                                    otherCustomerInfo: customerInfo,
                                    phone: phoneNumber,
                                    // user_token: getCookie("user_token").sanitizedValue,
                                    user_token: "11a688eddf02d3522340dbb7",
                                };
                            }) }
                        >
                            Continue
                        </button>
                    </>
                )}
             </div>
        </div>
    );
};

export default ElectricityPurchase;
