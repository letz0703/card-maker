import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./App";
import AuthService from "./service/auth_service";
import UserInfo, { UserContext } from "./common/user_store";

const authService = new AuthService();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App authService={authService} />,
  </React.StrictMode>,
);
