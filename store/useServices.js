import validateNumberField from "@helpers/validateNumberField";
import { create } from "zustand";

const usePrimaryDetails = create((set) => ({
    phoneNumber: 0,
    setPhoneNumber: (phoneNumber) => {
        if (!validateNumberField(phoneNumber.replace(/[^\d]/g, ''), 11)) {
            return;
        } else {
            set({
                phoneNumber: phoneNumber
            })
        }

    }
}));

export default usePrimaryDetails;

// const useAirtimePurchase = () => {};

// const useElectricityPurchase = () => {};
