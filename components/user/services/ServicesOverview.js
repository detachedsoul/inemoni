import Link from "next/link";
import Image from "next/image";
import Popup from "@components/user/Popup";
import PinPopup from "@components/user/PinPopup";
import SuccessfulPopup from "@components/user/SuccessfulPopup";
import FailedPopup from "@components/user/FailedPopup";
import validateNumberField from "@helpers/validateNumberField";
import useFetch from "@helpers/useFetch";
import formatCurrency from "@helpers/formatCurrency";
import getCookie from "@helpers/getCookie";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const fetcher = async (url) => {
	const res = await fetch(url);

	const {data} = await res.json();

	return data;
};

const ServicesOverview = () => {
    const services = [
        {
            service: "Airtime",
            icon: "/img/airtime.svg",
            hoverColor: "hover:bg-[#1C052E]/90 hover:text-white",
            serviceName: "airtime"
        },
        {
            service: "Data",
            icon: "/img/data.svg",
            hoverColor: "hover:bg-[#003314]/90 hover:text-white",
            serviceName: "data"
        },
        {
            service: "Electricity",
            icon: "/img/electricity.svg",
            hoverColor: "hover:bg-[#22111F]/90 hover:text-white",
            serviceName: "electricity"
        },
        {
            service: "Cable TV",
            icon: "/img/cable-tv.svg",
            hoverColor: "hover:bg-[#2A2E05]/90 hover:text-white",
            serviceName: "cable-tv"
        },
        {
            service: "Education",
            icon: "/img/education.svg",
            hoverColor: "hover:bg-[#04032E]/90 hover:text-white",
            serviceName: "education"
        },
        {
            service: "Betting",
            icon: "/img/betting.svg",
            hoverColor: "hover:bg-[#2E0726]/90 hover:text-white",
            serviceName: "betting"
        },
        {
            service: "Recharge Card Printing",
            icon: "/img/recharge-card-printing.svg",
            hoverColor: "hover:bg-[#032E2C]/90 hover:text-white",
            serviceName: "recharge-card-printing"
        },
    ];

    // Store the amount, phone number, and network in a state
    const [phoneNumber, setPhoneNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [network, setNetwork] = useState("");

    //
    const [preview, setPreview] = useState(true);
    const [pinPopup, setPinPopup] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [isFailed, setIsFailed] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [parameters, setParameters] = useState("");

    // Set the network provider logo
    const [networkImage, setNetworkImage] = useState("");

    // Disable proceed button until all required fields are filled
    const [isReady, setIsReady] = useState(false);

    // Get the list of services
    const { data: servicesList, isLoading: servicesLoading, error: servicesError } = useFetch(`https://www.inemoni.org/api/services`, fetcher);

    // Get list of mobile network operators, error if any, and set the loading state
    const { data, isLoading, error } = useFetch(`https://www.inemoni.org/api/all-networks/airtime`, fetcher);

    const handlePhoneNumberChange = async (e) => {
        const cleanedValue = e.target.value.replace(/[^\d]/g, '');

        // Allow only numbers with maximum lenght of 11
		if (!validateNumberField(cleanedValue, 11)) {
            return;
		} else {
            setPhoneNumber(cleanedValue);
        }

        if (amount !== "" && amount > 0 && network !== "" && phoneNumber !== "") {
            setIsReady(() => true);
        } else {
            setIsReady(() => false);
        }
    };

    const handleAmountChange = async (e) => {
        if (e.target.innerText !== "") {
            const cleanedValue = e.target.innerText.replace(/[^\d]/g, '');

            setAmount(cleanedValue);
        } else {
            const cleanedValue = e.target.value.replace(/[^\d]/g, '');

            setAmount(cleanedValue);
        }
    };

    const handleNetworkChange = (e) => {
        const { value } = e.target;

    if (value === "Select Network") {
            setNetwork(() => "");
            setNetworkImage(() => "");
        } else {
            setNetwork(() => value);

            // Set the logo of the network provider
            setNetworkImage(() => `https://www.inemoni.org/uploads/networks-logo/${value}.png`);
        }

        if (amount !== "" && amount > 0 && network !== "" && phoneNumber !== "") {
            setIsReady(() => true);
        } else {
            setIsReady(() => false);
        }
    };

    // Show or hide the popup
    const [popup, setPopup] = useState(false);

    const [selectedService, setSelectedService] = useState("");

    // Open a specific services based on the service name of the option


    const handleSelection = (service) => {
        // setSelectedService((service) => service);
        setPopup((popup) => !popup);
        setPinPopup(() => true);
    };

    if (servicesLoading) {
        return (
            <p>
                Fetching services, please hold on...
            </p>
        );
    }

    if (typeof servicesError === "undefined" && typeof servicesList === "undefined" && servicesLoading === false) {
        return (
            <p>
                An error occured. Please try again later.
            </p>
        )
    }

    console.log(parameters, pinPopup)

    return (
        <>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {servicesList.filter(service => service.enabled === true).map(service => (
                    <button
                        className={`bg-[#F2F2F2] text-[#666666] rounded-[12px] w-full p-3 flex justify-between items-center gap-2.5 ${service.hoverColor} transition-colors duration-300 ease-in group`}
                        type="button"
                        onClick={ handleSelection }
                        key={ service.id }
                    >
                        <div className="flex items-center gap-4">
                            <Image className="h-10 w-10" src={service.image} alt={service.name} width={40} height={40} />

                            <p className="text-black font-medium leading-none group-hover:text-inherit">
                                {
                                    service.name
                                }
                            </p>
                        </div>

                        <ChevronRight size={30} strokeWidth={1} />
                    </button>
                ))}
            </div>

            <Popup isActive={ popup } setIsActive={ setPopup }>
                {preview && (!pinPopup || pinPopup) && (
                    <div className="py-4 px-8 space-y-6">
                        <h2 className="font-medium text-xl text-[#262626]">
                            Buy Airtime
                        </h2>

                        <div className="grid grid-cols-2 lg:grid-cols-3 items-center gap-4 justify-between flex-wrap">
                            <button
                                className={`rounded-[10px] p-2 text-center border-[0.090rem] btn font-medium text-[#262626] text-[1.0625rem] ${false ? 'border-brand-purple' : 'border-[#cccccc] hover:border-brand-purple'}`}
                                type="button"
                                onClick={ (e) => handleAmountChange(e) }
                            >
                                ₦50
                            </button>

                            <button
                                className={`rounded-[10px] p-2 text-center border-[0.090rem] btn font-medium text-[#262626] text-[1.0625rem] ${false ? 'border-brand-purple' : 'border-[#cccccc] hover:border-brand-purple'}`}
                                type="button"
                                onClick={ (e) => handleAmountChange(e) }
                            >
                                ₦100
                            </button>

                            <button
                                className={`rounded-[10px] p-2 text-center border-[0.090rem] btn font-medium text-[#262626] text-[1.0625rem] ${false ? 'border-brand-purple' : 'border-[#cccccc] hover:border-brand-purple'}`}
                                type="button"
                                onClick={ (e) => handleAmountChange(e) }
                            >
                                ₦200
                            </button>

                            <button
                                className={`rounded-[10px] p-2 text-center border-[0.090rem] btn font-medium text-[#262626] text-[1.0625rem] ${false ? 'border-brand-purple' : 'border-[#cccccc] hover:border-brand-purple'}`}
                                type="button"
                                onClick={ (e) => handleAmountChange(e) }
                            >
                                ₦500
                            </button>

                            <button
                                className={`rounded-[10px] p-2 text-center border-[0.090rem] btn font-medium text-[#262626] text-[1.0625rem] ${false ? 'border-brand-purple' : 'border-[#cccccc] hover:border-brand-purple'}`}
                                type="button"
                                onClick={ (e) => handleAmountChange(e) }
                            >
                                ₦1000
                            </button>

                            <button
                                className={`rounded-[10px] p-2 text-center border-[0.090rem] btn font-medium text-[#262626] text-[1.0625rem] ${false ? 'border-brand-purple' : 'border-[#cccccc] hover:border-brand-purple'}`}
                                type="button"
                                onClick={ (e) => handleAmountChange(e) }
                            >
                                ₦2000
                            </button>
                        </div>

                        <div className="grid gap-6">
                            <label className="grid gap-1" htmlFor="amount">
                                <span className="font-medium">
                                    Amount
                                </span>

                                <span className="text-[#262626] font-bold">
                                    {formatCurrency(amount)}
                                </span>

                                <input
                                    className="dashboard-input no-number-increment"
                                    type="text"
                                    inputMode="numeric"
                                    placeholder="Enter amount"
                                    pattern="\d+"
                                    id="amount"
                                    value={amount}
                                    required
                                    onChange={handleAmountChange}
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
                                    id="phone-number"
                                    value={phoneNumber}
                                    required
                                    onChange={handlePhoneNumberChange}
                                />
                            </label>

                            <label className="space-y-1" htmlFor="select-bank">
                                <span className="font-medium">
                                    Select Network
                                </span>

                                {isLoading && (
                                    <p>
                                        Fetching networks...
                                    </p>
                                )}

                                {typeof error === "undefined" && typeof data === "undefined" && isLoading === false && (
                                    <p>
                                        An error occured. Please try again later.
                                    </p>
                                )}

                                {data && (
                                    <div className="flex items-center gap-3 border border-[#cccccc] rounded-lg pl-3">
                                        {networkImage && (
                                            <Image className="h-8 w-8 rounded-full" src={networkImage} alt={network} width={32} height={32} />
                                        )}

                                        <select
                                            className="dashboard-select border-none pl-0"
                                            id="select-network"
                                            onChange={ handleNetworkChange }
                                        >

                                            <option>
                                                Select Network
                                            </option>

                                            {data.map((network) => (
                                                <option value={network.shortName} key={network.id}>
                                                    {network.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                            </label>
                        </div>

                        <button
                            className={`btn w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink ${!(amount !== "" && amount > 0 && network !== "" && phoneNumber !== "" && phoneNumber.toString().length === 11) ? 'bg-brand-purple/30 pointer-events-none select-none' : 'bg-brand-purple'} disabled:bg-brand-purple/30 disabled:pointer-events-none disabled:select-none`}
                            disabled={!(amount !== "" && amount > 0 && network !== "" && phoneNumber !== "" && phoneNumber.toString().length === 11)}
                            type="button"
                            onClick={ () => setParameters(() => {
                                setPinPopup(() => true);
                                setPreview(() => false);

                                return {
                                    amount: amount,
                                    network: network,
                                    phone: phoneNumber,
                                    user_token: getCookie("user_token").sanitizedValue,
                                }
                            }) }
                        >
                            Continue
                        </button>
                    </div>
                )}

                {isSuccessful && !preview && (
                    <SuccessfulPopup header="Successful" message={`You’ve successfully bought airtime for ${phoneNumber}`}>
                        <div className="grid gap-2">
                            <Link
                                className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                                href="/user"
                            >
                                Back to Dashboard
                            </Link>

                            <Link
                                className="btn block rounded-md hover:text-white transition-colors duration-300 ease-in hover:bg-[#666666]"
                                href="/user"
                            >
                                View Reciept
                            </Link>
                        </div>
                    </SuccessfulPopup>
                )}

                {isFailed && !preview && errorMessage === "Invalid user pin" && (
                    <FailedPopup header="Airtime Purchase Failed" text={ errorMessage }>
                        <button
                            className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-dark-purple bg-brand-purple"
                            type="button"
                            onClick={() => {
                                setIsFailed(() => false);

                                setPinPopup(() => true);
                            }}
                        >
                            Try Again
                        </button>
                    </FailedPopup>
                )}

                {isFailed && !preview && errorMessage !== "Invalid user pin" && (
                    <FailedPopup header="Airtime Purchase Failed" text={ errorMessage }>
                        <button
                            className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-dark-purple bg-brand-purple"
                            type="button"
                            onClick={() => {
                                setIsFailed(() => false);

                                setPinPopup(() => false);

                                setPreview(() => true);

                                setNetworkImage(() => "");
                            }}
                        >
                            Try Again
                        </button>
                    </FailedPopup>
                )}

                {!preview && !isFailed && !isSuccessful && pinPopup && (
                    <PinPopup parameters={ parameters } setErrorMessage={ setErrorMessage } setIsFailed={ setIsFailed } setIsSuccessful={ setIsSuccessful } setPinPopup={ setPinPopup } endpoint="purchase-airtime" buttonText="Purchase Airtime" />
                )}
            </Popup>
        </>
    );
};

export default ServicesOverview;
