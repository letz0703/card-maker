import React, { useEffect, useState, useContext } from "react";
import UserStore, { UserContext } from "../../common/user_store";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import Maker from "../maker/maker";

const Login = ({ authService }) => {
  const UserContext = React.createContext({
    userId: "",
  });
  const [uid, setUid] = useState("");

  const navigate = useNavigate();

  const onLogin = (event) => {
    const gotoMaker = (userId) => {
      navigate("/maker", { userId });
    };

    authService //
      .login(event.currentTarget.textContent)
      .then((response) => {
        const userId = response.user.uid;
        gotoMaker(userId);
      });
  };

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
