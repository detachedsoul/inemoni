import Link from "next/link";
import Image from "next/image";
import Popup from "@components/user/Popup";
import PinPopup from "@components/user/PinPopup";
import SuccessfulPopup from "@components/user/SuccessfulPopup";
import FailedPopup from "@components/user/FailedPopup";
import LoadingIndicator from "@components/user/LoadingIndicator";
import useFetch from "@helpers/useFetch";
import Airtime from "@components/user/services/airtime/Airtime";
import Electricity from "@components/user/services/electricity/Electricity";
import Betting from "@components/user/services/betting/Betting";
import RechargeCardPrinting from "@components/user/services/recharge-card-printing/RechargeCardPrinting";
import Data from "@components/user/services/data/Data";
import CableTv from "@components/user/services/cable/CableTv";
import Education from "@components/user/services/education/Education";
import { usePrimaryDetails, useElectricity, useBetting } from "@store/useServices";
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

    // States
    const pinPopup = usePrimaryDetails((state) => state.pinPopup);
    const setPinPopup = usePrimaryDetails((state) => state.setPinPopup);

    const preview = usePrimaryDetails((state) => state.preview);
    const setPreview = usePrimaryDetails((state) => state.setPreview);

    const isFailed = usePrimaryDetails((state) => state.isFailed);
    const setIsFailed = usePrimaryDetails((state) => state.setIsFailed);

    const header = usePrimaryDetails((state) => state.header);
    const message = usePrimaryDetails((state) => state.message);
    const endpoint = usePrimaryDetails((state) => state.endpoint);
    const errorMessage = usePrimaryDetails((state) => state.errorMessage);
    const buttonText = usePrimaryDetails((state) => state.buttonText);
    const isSuccessful = usePrimaryDetails((state) => state.isSuccessful);
    const isLoading = usePrimaryDetails((state) => state.isLoading);

    // Reset all shared states (usePrimaryDetails)
    const resetAllStates = usePrimaryDetails((state) => state.resetAllStates);

    // Get the list of services
    const { data: servicesList, isLoading: servicesLoading, error: servicesError } = useFetch(`https://www.inemoni.org/api/services`, fetcher);

    // Show or hide the popup
    const [popup, setPopup] = useState(false);

    // Set the component to be displayed based on the selected service
    const [selectedService, setSelectedService] = useState("Airtime");

    // List of all services. If new services are added you'd have to manually add it here. Please note that the component must be called the same thing as the name of the services (without whitespaces ofcourse). Whitespaces would be removed before  rendering
    const componentMap = {
        Airtime,
        Electricity,
        Betting,
        RechargeCardPrinting,
        Data,
        CableTv,
        Education
    };

    // Set the component to be rendered
    const RenderComponent = componentMap[selectedService];

    // Open a specific services based on the service name of the option
    const handleSelection = (service) => {
        setSelectedService(() => {
            resetAllStates();

            return service;
        });
        setPopup((popup) => !popup);
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

    return (
        <>
            <div className="grid lg:grid-cols-3 gap-4">
                {servicesList?.filter(service => service.enabled === true).map(service => (
                    <button
                        className={`bg-[#F2F2F2] text-[#666666] rounded-[12px] w-full p-3 flex justify-between items-center gap-2.5 ${service.hoverColor} transition-colors duration-300 ease-in group`}
                        type="button"
                        onClick={ () => {
                            const rawWords = service.name.toLowerCase().split(" ");

                            const capitalizeFirstWord = rawWords.map((word) => {
                                const formatWord = word.charAt(0).toUpperCase() + word.slice(1);

                                return formatWord;
                            }).join("");

                            handleSelection(capitalizeFirstWord);
                        } }
                        key={ service.id }
                    >
                        <div className="flex items-center gap-4">
                            <Image className="h-10 w-10" src={service.image} alt={service.name} width={40} height={40} />

                            <p className="text-black text-left font-medium leading-none group-hover:text-inherit">
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
                    <RenderComponent />
                )}

                {isSuccessful && !preview && (
                    <SuccessfulPopup header="Successful" message={ message }>
                        <div className="grid gap-2">
                            <Link
                                className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                                href="/user"
                            >
                                Back to Dashboard
                            </Link>

                            <Link
                                className="btn block rounded-md hover:text-white transition-colors duration-300 ease-in hover:bg-[#666666]"
                                href="/user/transactions"
                            >
                                View Reciept
                            </Link>
                        </div>
                    </SuccessfulPopup>
                )}

                {isFailed && !preview && (
                    <FailedPopup header={ header } text={ errorMessage }>
                        {errorMessage === "Invalid user pin" ? (
                            <button
                                className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-dark-purple bg-brand-purple"
                                type="button"
                                onClick={() => {
                                    setIsFailed(false);

                                    setPinPopup(true);
                                }}
                            >
                                Try Again
                            </button>
                        ) : (
                            <button
                                className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-dark-purple bg-brand-purple"
                                type="button"
                                onClick={() => {
                                    setIsFailed(false);

                                    setPreview(true);

                                    setPinPopup(false);
                                }}
                            >
                                Try Again
                            </button>
                        )}
                    </FailedPopup>
                )}

                {!preview && !isFailed && !isSuccessful && !isLoading && pinPopup && (
                    <PinPopup endpoint={ endpoint } buttonText={ buttonText } />
                )}

                {isLoading && (
                    <LoadingIndicator />
                )}
            </Popup>
        </>
    );
};

export default ServicesOverview;
