import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

const Login = (props) => {
  return (
    <section>
      <Header />
      <section>
        <h1>Login</h1>
        <ul>
          <li>
            <button>google</button>
          </li>
          <li>
            <button>github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
