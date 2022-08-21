import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import styles from "./maker.module.css";
import Headers from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Card 1",
      company: "letz",
      theme: "red",
      title: "ceo",
      email: "rainskiss.com",
      message: "go for it",
      fileName: "",
      fileUrl: "ellie.jpg",
    },
    {
      id: 2,
      name: "Card 1",
      company: "letz",
      theme: "red",
      title: "ceo",
      email: "rainskiss.com",
      message: "go for it",
      fileName: "",
      fileUrl: "ellie.jpg",
    },
    {
      id: 3,
      name: "Card 1",
      company: "letz",
      theme: "red",
      title: "ceo",
      email: "rainskiss.com",
      message: "go for it",
      fileName: "",
      fileUrl: "ellie.jpg",
    },
  ]);
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

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <>
      <section className={styles.maker}>
        <Headers className="styles.container" onLogout={onLogout} />
        <div className={styles.container}>
          <Editor cards={cards} addCard={addCard} />
          <Preview cards={cards} />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Maker;
