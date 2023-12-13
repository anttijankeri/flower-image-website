import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import AuthProvider from "./components/Auth0/AuthProvider";
import Query from "./components/Data/Query";
import ContextProvider from "./components/Data/ContextProvider";

import App from "./App";
// import Testing from "./Testing";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <Query>
      <ContextProvider>
        <BrowserRouter>
          <App />
          {/* <Testing /> */}
        </BrowserRouter>
      </ContextProvider>
    </Query>
  </AuthProvider>
);
