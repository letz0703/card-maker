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

  // const navigate = useNavigate();

  const onLogin = (event) => {
    const gotoMaker = (userId) => {
      return (
        <UserContext.Provider value={userId}>
          {/* "Hi" // setUserId(userId); // console.log(userId); navigate("/maker") */}
        </UserContext.Provider>
      );
      // navigate("/maker");
      // const setId = (userId) => {
      //   const [userId, setUserId] = useState(userId);
      // };
    };

    authService //
      .login(event.currentTarget.textContent)
      .then((response) => {
        // console.log(response.user.uid);
        // setId(userId);
        const userId = response.user.uid;
        gotoMaker(userId);
      });
    // .then((data) => gotoMaker(data.user.userId));
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
