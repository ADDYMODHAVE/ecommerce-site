import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./Component/Context/Auth-Context/Auth-Context";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
);
