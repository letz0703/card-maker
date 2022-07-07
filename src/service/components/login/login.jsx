import Footer from "../footer/footer";
import React, { useState, useEffect } from "react";
import Header from "../header/header";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";

const Login = ({ authService }) => {
  const history = useHistory();
  const [registerEmail, setRegisterEmail] = useState();
  const [registerPassword, setRegisterPassword] = useState();
  const [user, setUser] = useState({});

  const [loginEmail, setloginEmail] = useState();
  const [loginPassword, setloginPassword] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log);
  };

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword,
      );
      //     console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    signOut(auth);
  };

  return (
    <section>
      <Header />
      <section id="register">
        <h3>register</h3>
        <input
          type="text"
          placeholder="email"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <button onClick={register}>register</button>
      </section>
      <section id="loggedin">
        <h3>current logged in user</h3>
        <p>{user?.email}</p>
        <button onClick={logout}>log out</button>
      </section>
      <section id="loginEP">
        <h3>login</h3>
        <input
          type="text"
          placeholder="email"
          onChange={(event) => {
            setloginEmail(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(event) => {
            setloginPassword(event.target.value);
          }}
        />
        <button onClick={login}>login</button>
      </section>
      <section id="login">
        <h1>Login</h1>
        <ul>
          <li>
            <button onClick={onLogin}>google</button>
          </li>
          <li>
            <button onClick={onLogin}>github</button>
          </li>
        </ul>{" "}
        history = useHistory
      </section>
      <Footer />
    </section>
  );
};
export default Login;
