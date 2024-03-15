import React from "react";
import ReactDOM from "react-dom";
import "grapesjs/dist/css/grapes.min.css";
import "bootstrap";
import App from "./App";
import "./App.scss";
import reportWebVitals from "./reportWebVitals";
import DataProvider from "./redux/store";
import { AuthContextProvider } from "./Context/AuthContext";
import AuthProvider from "./redux/authStore";


ReactDOM.render(
  <React.StrictMode>
    {/* <AuthContextProvider> */}
    <AuthProvider>
    <DataProvider>
      <App />
    </DataProvider>
    </AuthProvider>
    {/* </AuthContextProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
