import validateNumberField from "@helpers/validateNumberField";
import { create } from "zustand";

const usePrimaryDetails = create((set) => ({
    phoneNumber: "",
    amount: "",
    errorMessage: "",
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

    setPinPopup: (pinPopup) => set((state) => ({
        pinPopup: pinPopup ? pinPopup : !state.pinPopup
    })),

    setPreview: (preview) => set((state) => ({
        preview: preview ? preview : !state.preview
    })),

    setNetwork: (network) => set(() => ({
        network: network ? network : ""
    })),

    setNetworkImage: (networkImage) => set(() => ({
        networkImage: networkImage ? networkImage : ""
    })),

    setIsFailed: (isFailed) => set((state) => ({
        isFailed: isFailed ? isFailed : !state.isFailed
    })),

    setIsSuccessful: (isSuccessful) => set((state) => ({
        isSuccessful: isSuccessful ? isSuccessful : !state.isSuccessful
    })),

    setIsLoading: (isLoading) => set((state) => ({
        isLoading: isLoading ? isLoading : !state.isLoading
    })),

    setErrorMessage: (errorMessage) => set((state) => ({
        errorMessage: errorMessage ? errorMessage : !state.errorMessage
    })),

    setHeader: (header) => set(() => ({ header })),

    setCustomerID: (customerID) => set(() => ({ customerID })),

    setCustomerInfo: (customerInfo) => set(() => ({ customerInfo })),

    setAccountName: (accountName) => set(() => ({ accountName })),

    setAmount: (amount) => set(() => ({ amount })),

    setAccountNumber: (accountNumber) => set(() => ({ accountNumber })),

    setPackageName: (packageName) => set(() => ({ packageName })),

    setParameters: (parameters) => set({ parameters }),
}));

const useElectricityPurchase = create((set) => ({
    meterNumber: "",
    disco: "",

    setMeterNumber: (meterNumber) => set(() => ({ meterNumber })),

    setDisco: (disco) => set(() => ({ disco })),
}));

const useDataPurchase = create((set) => ({
    dataBundle: "",

    setDataBundle: (dataBundle) => set(() => ({ dataBundle })),
}));

const useBettingFunding = create((set) => ({
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

const useCablePurchase = create((set) => ({
    cablePackage: "",
    cableProvider: "",
    packageOptions: "",
    monthsNumber: "",

    setCablePackage: (cablePackage) => set(() => ({ cablePackage })),
    setCableProvider: (cableProvider) => set(() => ({ cableProvider })),
    setPackageOptions: (packageOptions) => set(() => ({ packageOptions })),
    setMonthsNumber: (monthsNumber) => set(() => ({ monthsNumber })),
}));

const useExamPin = create((set) => ({
    exam: "",
    paymentItem: "",

    setExam: (exam) => set((state) => ({ exam })),
    setPaymentItem: (paymentItem) => set((state) => ({ paymentItem })),
}));

export {
    usePrimaryDetails,
    useElectricityPurchase,
    useDataPurchase,
    useBettingFunding,
    useRechargeCardPrinting,
    useCablePurchase,
    useExamPin
};
