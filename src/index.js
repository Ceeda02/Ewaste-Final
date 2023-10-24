import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./assets/css/style.css";
import "./assets/css/footer.css";
import "./assets/css/navbar.css";
import "./assets/css/track.css";
import "./assets/css/home.css";
import "./assets/css/donate.css";
import "./assets/css/home-media-queries.css";
import "./assets/css/Login.css";
import "./assets/css/Register.css";
import "./assets/css/Admin.css";
import "./assets/css/AdminNav.css";
import "./assets/css/Table.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
