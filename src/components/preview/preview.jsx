import React from "react";
import styles from "./preview.module.css";
import Card from "../card/card";

const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Card Preview</h1>
    {Object.keys(cards).map((key) => (
      <Card card={key} />
    ))}
  </section>
);

export default Preview;
