import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../common/user_store";
//import styles from './maker.module.css'

const Maker = ({ state }) => {
  const context = useContext(UserContext);
  console.log(state);
  return (
    <>
      <h1>Maker</h1>
      <div></div>
    </>
  );
};

export default Maker;
