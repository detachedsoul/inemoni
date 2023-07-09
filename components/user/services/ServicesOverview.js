import Link from "next/link";
import Image from "next/image";
import Popup from "@components/user/Popup";
import PinPopup from "@components/user/PinPopup";
import SuccessfulPopup from "@components/user/SuccessfulPopup";
import FailedPopup from "@components/user/FailedPopup";
import LoadingIndicator from "@components/user/LoadingIndicator";
import validateNumberField from "@helpers/validateNumberField";
import useFetch from "@helpers/useFetch";
import AirtimePurchase from "@components/user/services/airtime/AirtimePurchase";
import ElectricityPurchase from "@components/user/services/electricity/ElectricityPurchase";
import usePrimaryDetails from "@store/useServices";
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
    // const [phoneNumber, setPhoneNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [network, setNetwork] = useState("");

    // Error, successful, parameters to complete a transaction, and other states to complete a transaction
    const [preview, setPreview] = useState(true);
    const [pinPopup, setPinPopup] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isFailed, setIsFailed] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [parameters, setParameters] = useState("");

    // Set the network provider logo
    const [networkImage, setNetworkImage] = useState("");

    // Disable proceed button until all required fields are filled
    const [isReady, setIsReady] = useState(false);

    // Get the list of services
    const { data: servicesList, isLoading: servicesLoading, error: servicesError } = useFetch(`https://www.inemoni.org/api/services`, fetcher);

    // const handlePhoneNumberChange = (e) => {
    //     const cleanedValue = e.target.value.replace(/[^\d]/g, '');

    //     // Allow only numbers with maximum lenght of 11
	// 	if (!validateNumberField(cleanedValue, 11)) {
    //         return;
	// 	} else {
    //         setPhoneNumber(cleanedValue);
    //     }
    // };

    const handleAmountChange = (e) => {
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
    };

    // Show or hide the popup
    const [popup, setPopup] = useState(false);

    const [selectedService, setSelectedService] = useState("");

    // Open a specific services based on the service name of the option


    const handleSelection = (service) => {
        // setSelectedService((service) => service);
        setPopup((popup) => !popup);
        // setPinPopup(() => true);
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

    console.log(isLoading, preview)

    return (
        <>
            <div className="grid lg:grid-cols-3 gap-4">
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
                    // <AirtimePurchase handleAmountChange={ handleAmountChange } amount={ amount } phoneNumber={ phoneNumber } handlePhoneNumberChange={ handlePhoneNumberChange } network={ network } handleNetworkChange={ handleNetworkChange } networkImage={ networkImage } setParameters={ setParameters } />

                    <ElectricityPurchase handleAmountChange={ handleAmountChange } amount={ amount } network={ network } setNetworkImage={ setNetworkImage } setNetwork={ setNetwork } networkImage={ networkImage } setParameters={ setParameters } setIsLoading={ setIsLoading } setPreview={ setPreview } setPinPopup={ setPinPopup } />
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
                    <FailedPopup header="Electricity Purchase Failed" text={ errorMessage }>
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
                    <FailedPopup header="Electricity Purchase Failed" text={ errorMessage }>
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

                {!preview && !isFailed && !isSuccessful && !isLoading && pinPopup && (
                    // <PinPopup parameters={ parameters } setErrorMessage={ setErrorMessage } setIsFailed={ setIsFailed } setIsSuccessful={ setIsSuccessful } setPinPopup={ setPinPopup } endpoint="purchase-airtime" buttonText="Purchase Airtime" />

                    <PinPopup parameters={ parameters } setErrorMessage={ setErrorMessage } setIsFailed={ setIsFailed } setIsSuccessful={ setIsSuccessful } setPinPopup={ setPinPopup } endpoint="purchase-electricity" buttonText="Purchase Electricity" />
                )}

                {isLoading && (
                    <LoadingIndicator />
                )}
            </Popup>
        </>
    );
};

export default ServicesOverview;
