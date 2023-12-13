import { createContext, useContext } from "react";
import { IAppContext, IAppState } from "./types";

export const defaultState = () => {
  return {
    error: "",
    loading: false,
    userId: "",
    loggedIn: false,
    plants: [],
    images: [],
  } as IAppState;
};

const defaultContext = () => {
  return { state: defaultState(), updateState: () => {} } as IAppContext;
};

export const AppContext = createContext(defaultContext());

const useAppContext = () => {
  const context = useContext(AppContext);

  return context;
};

export default useAppContext;
