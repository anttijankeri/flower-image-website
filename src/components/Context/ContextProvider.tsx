import { PropsWithChildren, FC } from "react";

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};

export default ContextProvider;
