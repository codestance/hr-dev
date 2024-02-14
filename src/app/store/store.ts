import { createContext, useContext } from "react";
import { userStore } from "./user-store";

const globalStore = {
  userStore: userStore(),
};

export const globalStoreContext = createContext(globalStore);
export const useGlobalStore = () => {
  return useContext<typeof globalStore>(globalStoreContext);
};
export default globalStore;
