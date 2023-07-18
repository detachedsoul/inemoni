import { create } from "zustand";

const useUser = create((set) => ({
    userDetails: {},
    userToken: "",
    userBalance: "",
    currentPage: "",
    transactions: "",
    transactionLimit: 10,

    setUserDetails: (userDetails) => set({ userDetails }),
    setUserToken: (userToken) => set({ userToken }),
    setUserBalance: (userBalance) => set({ userBalance }),
    setTransactions: (transactions) => set({ transactions }),
    setTransactionLimit: (transactionLimit) => set({ transactionLimit }),
}));

export default useUser;
