import React from "react";
import CardEdit from "../card_edit/card_edit";
import styles from "./editor.module.css";
import Card from "../card/card";

const Editor = ({ cards }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map((card) => (
        <CardEdit card={card} />
      ))}
    </section>
  );
};

export default Editor;
