import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import styles from "./maker.module.css";
import Headers from "../header/header";
import Footer from "../footer/footer";
const Maker = ({ authService }) => {
  const { state } = useLocation();
  // alert(state);
  const navigate = useNavigate();
  const onLogout = () => {
    authService.onLogout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      !user && navigate("/");
    });
  });

  return (
    <>
      <section className={styles.maker}>
        <Headers className="styles.container" onLogout={onLogout} />
        <Footer />
      </section>
    </>
  );
};

export default Maker;
