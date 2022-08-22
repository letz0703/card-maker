import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import styles from "./maker.module.css";
import Headers from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      name: "Card 1",
      company: "letz",
      theme: "red",
      title: "ceo",
      email: "rainskiss.com",
      message: "go for it",
      fileName: "",
      fileUrl: "ellie.jpg",
    },
    2: {
      name: "Card 1",
      company: "letz",
      theme: "red",
      title: "ceo",
      email: "rainskiss.com",
      message: "go for it",
      fileName: "",
      fileUrl: "ellie.jpg",
    },
    3: {
      name: "Card 1",
      company: "letz",
      theme: "red",
      title: "ceo",
      email: "rainskiss.com",
      message: "go for it",
      fileName: "",
      fileUrl: "ellie.jpg",
    },
  });
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

  const updateCard = (card) => {
    // const updated = cards.map((item) => {
    //   if (card.id === item.id) {
    //     return m;
    //   }
    //   return item;
    // });
  };
  const deleteCard = () => {};

  return (
    <>
      <section className={styles.maker}>
        <Headers className="styles.container" onLogout={onLogout} />
        <div className={styles.container}>
          <Editor
            cards={cards}
            addCard={addCard}
            updateCard={updateCard}
            deleteCard={deleteCard}
          />
          <Preview cards={cards} />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Maker;
