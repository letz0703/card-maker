import React from "react";
import { useRef } from "react";
import styles from "./image_file_input.module.css";

// const ImageFileInput = (props) => {
const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onClick = (eve) => {
    eve.preventDefault();
    inputRef.current.click();
  };
  const onChange = async (eve) => {
    console.log(eve.target.files[0]);
    const uploaded = await imageUploader.upload(eve.target.files[0]);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        type="file"
        name="file"
        accept="image/*"
        className={styles.input}
        onChange={onChange}
      />
      <button className={styles.button} onClick={onClick}>
        {name || "파일선택"}
      </button>
    </div>
  );
};

export default ImageFileInput;
