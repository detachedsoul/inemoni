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
import BettingFunding from "@components/user/services/betting/BettingFunding";
import DataPurchase from "@components/user/services/data/DataPurchase";
import { usePrimaryDetails, useElectricityPurchase, useBettingFunding } from "@store/useServices";
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
    const network = usePrimaryDetails((state) => state.network);
    const setNetwork = usePrimaryDetails((state) => state.setNetwork);

    const networkImage = usePrimaryDetails((state) => state.networkImage);
    const setNetworkImage = usePrimaryDetails((state) => state.setNetworkImage);

    const pinPopup = usePrimaryDetails((state) => state.pinPopup);
    const setPinPopup = usePrimaryDetails((state) => state.setPinPopup);

    const preview = usePrimaryDetails((state) => state.preview);
    const setPreview = usePrimaryDetails((state) => state.setPreview);

    const isFailed = usePrimaryDetails((state) => state.isFailed);
    const setIsFailed = usePrimaryDetails((state) => state.setIsFailed);

    const accountName = usePrimaryDetails((state) => state.accountName);
    const bettingPlatform = useBettingFunding((state) => state.bettingPlatform);
    const disco = useElectricityPurchase((state) => state.disco);
    const phoneNumber = usePrimaryDetails((state) => state.phoneNumber);
    const errorMessage = usePrimaryDetails((state) => state.errorMessage);
    const isSuccessful = usePrimaryDetails((state) => state.isSuccessful);
    const isLoading = usePrimaryDetails((state) => state.isLoading);

    // Disable proceed button until all required fields are filled
    const [isReady, setIsReady] = useState(false);

    // Get the list of services
    const { data: servicesList, isLoading: servicesLoading, error: servicesError } = useFetch(`https://www.inemoni.org/api/services`, fetcher);

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

    return (
        <>
            <div className="grid lg:grid-cols-3 gap-4">
                {servicesList?.filter(service => service.enabled === true).map(service => (
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
                    <BettingFunding />
                )}

                {isSuccessful && !preview && (
                    // <SuccessfulPopup header="Successful" message={`You’ve successfully bought airtime for ${phoneNumber}`}>
                    //     <div className="grid gap-2">
                    //         <Link
                    //             className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                    //             href="/user"
                    //         >
                    //             Back to Dashboard
                    //         </Link>

                    //         <Link
                    //             className="btn block rounded-md hover:text-white transition-colors duration-300 ease-in hover:bg-[#666666]"
                    //             href="/user"
                    //         >
                    //             View Reciept
                    //         </Link>
                    //     </div>
                    // </SuccessfulPopup>

                    // <SuccessfulPopup header="Successful" message={`You’ve successfully bought data for ${phoneNumber}`}>
                    //     <div className="grid gap-2">
                    //         <Link
                    //             className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                    //             href="/user"
                    //         >
                    //             Back to Dashboard
                    //         </Link>

                    //         <Link
                    //             className="btn block rounded-md hover:text-white transition-colors duration-300 ease-in hover:bg-[#666666]"
                    //             href="/user"
                    //         >
                    //             View Reciept
                    //         </Link>
                    //     </div>
                    // </SuccessfulPopup>

                    <SuccessfulPopup header="Successful" message={`You’ve successfully funded your ${bettingPlatform} account for ${accountName}`}>
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

                    // <SuccessfulPopup header="Successful" message={`You’ve successfully bought electricity for ${accountName} from ${disco}`}>
                    //     <div className="grid gap-2">
                    //         <Link
                    //             className="btn block rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink bg-brand-purple"
                    //             href="/user"
                    //         >
                    //             Back to Dashboard
                    //         </Link>

                    //         <Link
                    //             className="btn block rounded-md hover:text-white transition-colors duration-300 ease-in hover:bg-[#666666]"
                    //             href="/user"
                    //         >
                    //             View Reciept
                    //         </Link>
                    //     </div>
                    // </SuccessfulPopup>
                )}

                {isFailed && !preview && (
                    <FailedPopup header="Betting Account Funding Failed" text={ errorMessage }>
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
                    <PinPopup endpoint="purchase-betting" buttonText="Fund Account" />

                    // <PinPopup endpoint="purchase-electricity" buttonText="Purchase Electricity" />
                )}

                {isLoading && (
                    <LoadingIndicator />
                )}
            </Popup>
        </>
    );
};

export default ServicesOverview;
