import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../common/user_store";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";
import { useNavigate, useLocation } from "react-router-dom";

const Login = ({ authService }) => {
  // const UserInfo = useContext();
  const [userId, setUserId] = useState("");
  const UserContext = React.createContext({
    UserId: "",
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location);
  }, [location]);

  const onLogin = (event) => {
    const gotoMaker = (userId) => {
      return <UserContext.Provider value={userId}></UserContext.Provider>;
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
