import React from "react";
import ReactDOM from "react-dom";
import "grapesjs/dist/css/grapes.min.css";
import "bootstrap";
import App from "./App";
import "./App.scss";
import reportWebVitals from "./reportWebVitals";
import DataProvider from "./redux/store";
import { AuthContextProvider } from "./Context/AuthContext";


ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <DataProvider>
      <App />
    </DataProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
