import React from "react";
import styles from "./app.module.css";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserStore from "./common/user_store";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <UserStore>
        {/* <Login authService={authService} /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login authService={authService} />} />
            <Route path="/maker" element={<Maker />} />
          </Routes>
        </BrowserRouter>
      </UserStore>
    </div>
  );
}

export default App;
