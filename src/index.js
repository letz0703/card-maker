import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./App";
import AuthService from "./service/auth_service";
import UserInfo, { UserContext } from "./common/user_store";
import ImageUploader from "./service/image_uploader";

const authService = new AuthService();
const root = ReactDOM.createRoot(document.getElementById("root"));
const imageUploader = new ImageUploader();

root.render(
  <React.StrictMode>
    <App authService={authService} />,
  </React.StrictMode>,
);
