import ReactDOM from "react-dom/client";
import AuthProvider from "./components/Auth0/AuthProvider";
import App from "./App";
import ContextProvider from "./components/Context/ContextProvider";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
  </AuthProvider>
);
