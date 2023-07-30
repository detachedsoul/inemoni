import validateNumberField from "@helpers/validateNumberField";
import { create } from "zustand";

const usePrimaryDetails = create((set) => ({
    phoneNumber: "",
    amount: "",
    errorMessage: "",
    message: "",
    header: "",
    endpoint: "",
    buttonText: "",
    network: "",
    networkImage: "",
    header: "",
    accountName: "",
    customerID: "",
    customerInfo: "",
    accountNumber: "",
    packageName: "",
    pinPopup: false,
    preview: true,
    isSuccessful: false,
    isLoading: false,
    isFailed: false,
    parameters: {},

    setPhoneNumber: (phoneNumber) => set((state) => ({
        phoneNumber: validateNumberField(phoneNumber, 11) ? phoneNumber : state.phoneNumber
    })),

    setPinPopup: (pinPopup) => set(() => ({ pinPopup })),

    setPreview: (preview) => set(() => ({ preview })),

    setNetwork: (network) => set(() => ({
        network: network ? network : ""
    })),

    setNetworkImage: (networkImage) => set(() => ({
        networkImage: networkImage ? networkImage : ""
    })),

    setIsFailed: (isFailed) => set((state) => ({ isFailed })),

    setIsSuccessful: (isSuccessful) => set(() => ({ isSuccessful })),

    setIsLoading: (isLoading) => set(() => ({ isLoading })),

    setMessage: (message) => set(() => ({ message })),

    setErrorMessage: (errorMessage) => set(() => ({ errorMessage })),

    setHeader: (header) => set(() => ({ header })),

    setEndpoint: (endpoint) => set(() => ({ endpoint })),

    setButtonText: (buttonText) => set(() => ({ buttonText })),

    setHeader: (header) => set(() => ({ header })),

    setCustomerID: (customerID) => set(() => ({ customerID })),

    setCustomerInfo: (customerInfo) => set(() => ({ customerInfo })),

    setAccountName: (accountName) => set(() => ({ accountName })),

    setAmount: (amount) => set(() => ({ amount })),

    setAccountNumber: (accountNumber) => set(() => ({ accountNumber })),

    setPackageName: (packageName) => set(() => ({ packageName })),

    setParameters: (parameters) => set({ parameters }),

    resetAllStates: () => {
        set(() => ({
            phoneNumber: "",
            amount: "",
            errorMessage: "",
            message: "",
            header: "",
            endpoint: "",
            buttonText: "",
            network: "",
            networkImage: "",
            header: "",
            accountName: "",
            customerID: "",
            customerInfo: "",
            accountNumber: "",
            packageName: "",
            pinPopup: false,
            preview: true,
            isSuccessful: false,
            isLoading: false,
            isFailed: false,
            parameters: {},
        }));
    },
}));

const useElectricity = create((set) => ({
    meterNumber: "",
    disco: "",

    setMeterNumber: (meterNumber) => set(() => ({ meterNumber })),

    setDisco: (disco) => set(() => ({ disco })),
}));

const useData = create((set) => ({
    dataBundle: "",

    setDataBundle: (dataBundle) => set(() => ({ dataBundle })),
}));

const useBetting = create((set) => ({
    bettingPlatform: "",

    setBettingPlatform: (bettingPlatform) => set(() => ({ bettingPlatform })),
}));

const useRechargeCardPrinting = create((set) => ({
    quantity: "",
    cardAmount: "",
    availableQuantity: "",

    setQuantity: (quantity) => set((state) => ({
        quantity: (quantity <= state.availableQuantity && quantity > 0) ? quantity : ""
    })),

    setCardAmount: (cardAmount) => set(() => ({ cardAmount })),
    setAvailableQuantity: (availableQuantity) => set(() => ({ availableQuantity })),
}));

const useCableTV = create((set) => ({
    cablePackage: "",
    cableProvider: "",
    packageOptions: "",
    monthsNumber: "",

    setCablePackage: (cablePackage) => set(() => ({ cablePackage })),
    setCableProvider: (cableProvider) => set(() => ({ cableProvider })),
    setPackageOptions: (packageOptions) => set(() => ({ packageOptions })),
    setMonthsNumber: (monthsNumber) => set(() => ({ monthsNumber })),
}));

const useEducation = create((set) => ({
    exam: "",
    paymentItem: "",

    setExam: (exam) => set((state) => ({ exam })),
    setPaymentItem: (paymentItem) => set((state) => ({ paymentItem })),
}));

export {
    usePrimaryDetails,
    useElectricity,
    useData,
    useBetting,
    useRechargeCardPrinting,
    useCableTV,
    useEducation
};
