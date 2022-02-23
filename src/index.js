import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles.css";
import { Helmet } from "react-helmet"

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>Nwitter</title>
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
