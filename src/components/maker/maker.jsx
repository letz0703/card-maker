import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import styles from "./maker.module.css";
import Headers from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

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
        <div className={styles.container}>
          <Editor />
          <Preview />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Maker;
