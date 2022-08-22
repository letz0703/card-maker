import React from "react";
import CardEdit from "../card_edit/card_edit";
import styles from "./editor.module.css";
import Card from "../card/card";
import CardAddForm from "../card_add_form/card_add_form";

const Editor = ({ cards, addCard, updateCard, deleteCard }) => {
  //from maker.jsx
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {Object.keys(cards).map((key) => (
        <>
          <CardEdit
            key={key}
            card={cards[key]}
            updateCard={updateCard}
            deleteCard={deleteCard}
          />
          <CardAddForm onAdd={addCard} />
        </>
      ))}
    </section>
  );
};

export default Editor;
