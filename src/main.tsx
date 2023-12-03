import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain="dev-psenso4mglnfpj8o.eu.auth0.com"
    clientId="4mK1Y4KlKhrml8N1bCg77HpCKOBSPf20"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://dev-psenso4mglnfpj8o.eu.auth0.com/api/v2/",
      scope: "read:current_user",
    }}
  >
    <App />
  </Auth0Provider>
);
