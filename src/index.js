import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Changes from "./Changes";
import Home from "./Home";
import App from "./App";
import Login from "./Login";
import AboutUs from "./AboutUs";
import Menu from "./Menu";
import MenuEdit from "./MenuEdit";
import InfoEdit from "./InfoEdit";
import SchedEdit from "./SchedEdit";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
