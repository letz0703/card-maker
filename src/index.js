import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./App";
import AuthService from "./service/auth_service";
import UserInfo, { UserContext } from "./common/user_store";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./components/image_file_input/image_file_input";

const authService = new AuthService();
const root = ReactDOM.createRoot(document.getElementById("root"));
const imageUploader = new ImageUploader();
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

root.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />,
  </React.StrictMode>,
);
