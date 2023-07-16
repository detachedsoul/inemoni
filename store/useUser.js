import { create } from "zustand";

const useUser = create((set) => ({
    userDetails: {},
    userToken: "",
    userBalance: "",

    setUserDetails: (userDetails) => set({ userDetails }),
    setUserToken: (userToken) => set({ userToken }),
    setUserBalance: (userBalance) => set({ userBalance }),
}));

export default useUser;
