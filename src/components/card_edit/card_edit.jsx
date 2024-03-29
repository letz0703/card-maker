import React, { useRef } from "react";
import styles from "./card_edit.module.css";
import Button from "../button/button";

const CardEdit = ({ FileInput, card, updateCard, deleteCard }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (eve) => {
    if (eve.currentTarget == null) {
      const onChange = (eve) => {
        return;
      };
    }

    eve.preventDefault();

    updateCard({
      ...card,
      [eve.currentTarget.name]: eve.currentTarget.value,
    });
  };

  const onSubmit = () => {
    deleteCard(card);
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        ref={nameRef}
        value={name}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        ref={companyRef}
        value={company}
      />
      <select
        className={styles.select}
        name="theme"
        ref={themeRef}
        value={theme}
      >
        <option value="light">light</option>
        <option value="dark">dard</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        ref={titleRef}
        value={title}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        ref={emailRef}
        value={email}
      />
      <textarea
        className={styles.textarea}
        name="message"
        ref={messageRef}
        value={message}
      />
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEdit;
