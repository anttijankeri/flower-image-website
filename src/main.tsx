import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import AuthProvider from "./components/Auth0/AuthProvider";
import ContextProvider from "./components/Context/ContextProvider";

import App from "./App";
// import Testing from "./Testing";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <ContextProvider>
      <BrowserRouter>
        <App />
        {/* <Testing /> */}
      </BrowserRouter>
    </ContextProvider>
  </AuthProvider>
);
