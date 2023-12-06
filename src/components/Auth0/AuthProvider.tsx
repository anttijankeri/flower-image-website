import { Auth0Provider } from "@auth0/auth0-react";
import { FC, PropsWithChildren } from "react";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_REACT_APP_AUTH0_APP as string}
      clientId={import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID as string}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: import.meta.env.VITE_REACT_APP_AUTH0_APP + "/api/v2/",
        scope: "read:current_user",
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
