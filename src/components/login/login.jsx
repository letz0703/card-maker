import React, { useEffect } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";
import { useNavigate, useLocation } from "react-router-dom";

const Login = ({ authService }) => {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);

  const navigate = useNavigate();

  const onLogin = (event) => {
    const gotoMaker = (userId) => {
      // return <Navigate to="/maker" />;
      navigate("/maker", { state: { id: userId } });
    };
    authService //
      .login(event.currentTarget.textContent)
      .then(gotoMaker);
    // .then(console.log);
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
