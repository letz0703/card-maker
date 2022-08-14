import React from "react";
import styles from "./button.module.css";

const Button = ({ name, onClick }) => {
  const myStyle = {
    backgroundColor: "blue",
  };
  return (
    <button className={styles.button} style={myStyle} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
