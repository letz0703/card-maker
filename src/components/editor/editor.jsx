import React from "react";
import CardEdit from "../card_edit/card_edit";
import styles from "./editor.module.css";
import Card from "../card/card";
import CardAddForm from "../card_add_form/card_add_form";

const Editor = ({ cards, addCard }) => {
  //from maker.jsx
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map((card) => (
        <>
          <CardEdit key={card.id} card={card} />
          <CardAddForm onAdd={addCard} />
        </>
      ))}
    </section>
  );
};

export default Editor;
