import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router";
import styles from "./maker.module.css";
import Headers from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ FileInput, authService, cardRepository }) => {
  const store = useContext(AppContext);
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "mani",
      company: "icanmart",
      theme: "dark",
      title: "ceo",
      email: "icanmart@gmail.com",
      message: "one for all, all for one",
      fileName: "",
      fileURL: "",
    },
  });
  const userInitialId = store.uid;
  const [userId, setUserId] = useState(`${userInitialId}`);
  const navigate = useNavigate();
  const onLogout = () => {
    authService.onLogout();
  };
  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCard(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId, cardRepository]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      user ? setUserId(user.uid) : navigate("/");
      // if(!user) {history.push('/';)}
    });
  }, [authService, userId]);

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });

    cardRepository.removeCard(userId, card);
  };

  return (
    <>
      <section className={styles.maker}>
        <Headers className="styles.container" onLogout={onLogout} />
        <div className={styles.container}>
          <Editor
            FileInput={FileInput}
            cards={cards}
            addCard={createOrUpdateCard}
            updateCard={createOrUpdateCard}
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
