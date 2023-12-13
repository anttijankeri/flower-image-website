import { useState, PropsWithChildren, FC } from "react";
import { AppContext, defaultState } from "../../appContext";
import { IAppState } from "../../types";

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState(defaultState());

  const context = {
    state,
    updateState: (newState: Partial<IAppState>) => {
      setState({ ...state, ...newState });
    },
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default ContextProvider;
