import CablePurchasePreview from "@components/user/CablePurchasePreview";
import Image from "next/image";
import formatCurrency from "@helpers/formatCurrency";
import getCookie from "@helpers/getCookie";
import useFetch from "@helpers/useFetch";
import { useExamPin, usePrimaryDetails } from "@store/useServices";

const fetcher = async (url) => {
    const res = await fetch(url);

    const { data } = await res.json();

    return data;
};

const EducationPin = ({ setPopup }) => {
    // States
    const accountName = usePrimaryDetails((state) => state.accountName);
    const setAccountName = usePrimaryDetails((state) => state.setAccountName);

    const accountNumber = usePrimaryDetails((state) => state.accountNumber);
    const setAccountNumber = usePrimaryDetails((state) => state.setAccountNumber);

    const customerInfo = usePrimaryDetails((state) => state.customerInfo);
    const setCustomerInfo = usePrimaryDetails((state) => state.setCustomerInfo);

    const phoneNumber = usePrimaryDetails((state) => state.phoneNumber);
    const setPhoneNumber = usePrimaryDetails((state) => state.setPhoneNumber);

    const network = usePrimaryDetails((state) => state.network);
    const setNetwork = usePrimaryDetails((state) => state.setNetwork);

    const networkImage = usePrimaryDetails((state) => state.networkImage);
    const setNetworkImage = usePrimaryDetails((state) => state.setNetworkImage);

    const packageName = usePrimaryDetails((state) => state.packageName);
    const setPackageName = usePrimaryDetails((state) => state.setPackageName);

    const amount = usePrimaryDetails((state) => state.amount);
    const setAmount = usePrimaryDetails((state) => state.setAmount);

    const exam = useExamPin((state) => state.exam);
    const setExam = useExamPin((state) => state.setExam);

    const paymentItem = useExamPin((state) => state.paymentItem);
    const setPaymentItem = useExamPin((state) => state.setPaymentItem);

    const setParameters = usePrimaryDetails((state) => state.setParameters);
    const setErrorMessage = usePrimaryDetails((state) => state.setErrorMessage);
    const setIsFailed = usePrimaryDetails((state) => state.setIsFailed);
    const isLoading = usePrimaryDetails((state) => state.isLoading);
    const setIsLoading = usePrimaryDetails((state) => state.setIsLoading);
    const setPinPopup = usePrimaryDetails((state) => state.setPinPopup);
    const setPreview = usePrimaryDetails((state) => state.setPreview);

    // Get list of mobile exam bodies, error if any, and set the loading state
    const { data: examBodies, isLoading: examBodiesIsLoading, error: examBodiesError } = useFetch(`https://www.inemoni.org/api/education-exams`, fetcher);

    const handleExamBodyChange = async (e) => {
        const { value } = e.target;

        if (value === "Select Network") {
            setNetwork("");
            setNetworkImage("");
        } else {
            setIsLoading(true);
            setPreview(false);

            setPaymentItem("");
            setAmount("");
            setPackageName("");

            const getExamBodyInfo = value.split(",");
            const examBody = getExamBodyInfo[0];
            const examBodyID = getExamBodyInfo[1];
            const examBodyLogo = getExamBodyInfo[2];

            setExam(examBody);
            setNetwork(examBodyID);
            setNetworkImage(examBodyLogo);

            // Get Pin packages of the selected exam body
            const getURLOrigin = window.location.origin;

            const data = {
                exam_id: examBodyID
            };

            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
                redirect: "follow",
            };

            try {
                const request = await fetch(
                    `${getURLOrigin}/api/pin-packages`,
                    requestOptions,
                );

                const response = await request.json();

                if (response.error === false) {
                    setIsLoading(false);
                    setPreview(true);
                    setPaymentItem(response.data);
                } else {
                    setIsLoading(false);
                    setIsFailed(true);
                    setErrorMessage(response.message);
                }
            } catch (error) {
                setIsLoading(false);
                setIsFailed(true);
                setErrorMessage(error.message);
            }
        }
    };

    const handlePackagesChange = async (e) => {
        const { value } = e.target;

        if (value === "Select Package") {
            setAmount("");
        } else {
            const getPackageInfo = value.split(",");
            const packageID = getPackageInfo[0];
            const packageAmount = getPackageInfo[1];

            setPackageName(packageID);
            setAmount(packageAmount);
        }
    };

    return (
        <div className="py-4 px-8 space-y-6">
            <h2 className="font-medium text-xl text-[#262626]">
                Education
            </h2>

            <div className="grid gap-6">
                <label className="space-y-1" htmlFor="select-provider">
                    { examBodiesIsLoading ? (
                        <p className="font-bold animate-pulse">
                            Fetching exam bodies...
                        </p>
                    ) : (
                        <span className="font-medium">
                            Exam
                        </span>
                    ) }

                    { typeof examBodiesError === "undefined" && typeof examBodies === "undefined" && examBodiesIsLoading === false && (
                        <p>
                            An error occured. Please try again later.
                        </p>
                    ) }

                    { examBodies && (
                        <div className="flex items-center gap-3 border border-[#cccccc] rounded-lg pl-3">
                            { networkImage && (
                                <Image className="h-8 w-8 rounded-full" src={ networkImage } alt={ network } width={ 32 } height={ 32 } />
                            ) }

                            <select
                                className="dashboard-select border-none pl-0"
                                id="select-network"
                                onChange={ handleExamBodyChange }
                            >

                                <option disabled={ network }>
                                    Choose Exam
                                </option>

                                {examBodies && (
                                    examBodies?.filter(networkProvider => networkProvider.shortName === network).map(network => (
                                        <option value={[network.name, network.id, network.image]} key={ network.id }>
                                            { network.name }
                                        </option>
                                    ))
                                )}

                                { examBodies?.filter(networkProvider => networkProvider.shortName !== network).map((network) => (
                                    <option value={[network.name, network.id, network.image]} key={ network.id }>
                                        { network.name }
                                    </option>
                                )) }
                            </select>
                        </div>
                    ) }
                </label>

                { paymentItem && (
                    <label className="space-y-1" htmlFor="package">
                        <span className="font-medium">
                            Payment Item
                        </span>

                        { paymentItem && (
                            <select
                                className="dashboard-select"
                                id="package"
                                onChange={ handlePackagesChange }
                            >

                                <option disabled={ packageName }>
                                    Select Payment Item
                                </option>

                                { paymentItem && (
                                    paymentItem?.filter(selectedPackage => selectedPackage.package_id === packageName).map(selectedPackage => (
                                        <option value={[selectedPackage.package_id, selectedPackage.package_amount]} key={ selectedPackage.package_id }>
                                            { selectedPackage.package_name }
                                        </option>
                                    ))
                                ) }

                                { paymentItem && (
                                    paymentItem?.filter(selectedPackage => selectedPackage.package_id !== packageName).map(selectedPackage => (
                                        <option value={[selectedPackage.package_id, selectedPackage.package_amount]} key={ selectedPackage.package_id }>
                                            { selectedPackage.package_name }
                                        </option>
                                    ))
                                ) }
                            </select>
                        ) }
                    </label>
                ) }

                { amount && (
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
                                onChange={ (e) => setPhoneNumber(e.target.value.replace(/[^\d]/g, '')) }
                            />
                        </label>

                        <button
                            className={ `btn w-full rounded-md text-white transition-colors duration-300 ease-in hover:bg-brand-navlink ${!(phoneNumber !== "" && phoneNumber.toString().length === 11) ? 'bg-brand-purple/30 pointer-events-none select-none' : 'bg-brand-purple'} disabled:bg-brand-purple/30 disabled:pointer-events-none disabled:select-none` }
                            disabled={ !(phoneNumber !== "" && phoneNumber.toString().length === 11) }
                            type="button"
                            onClick={ () => {
                                setPinPopup(true);
                                setPreview(false);

                                setParameters({
                                    amount: amount,
                                    exam: network,
                                    phone: phoneNumber,
                                    exam_type: packageName,
                                    user_token: getCookie("user_token").sanitizedValue,
                                });
                            } }
                        >
                            Continue
                        </button>
                    </>
                ) }
            </div>
        </div>
    );
};

export default EducationPin;
