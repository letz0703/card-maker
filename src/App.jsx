import React, { useState, createContext } from "react";
import styles from "./app.module.css";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const AppContext = createContext();
function App({ authService, FileInput, cardRepository }) {
  const [userId, setUserId] = useState("");
  const store = { userId, setUserId };
  return (
    <AppContext.Provider value={store}>
      <div id="app" className={styles.app}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login authService={authService} />} />
            <Route
              path="/maker"
              element={
                <Maker
                  authService={authService}
                  FileInput={FileInput}
                  cardRepository={cardRepository}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;
