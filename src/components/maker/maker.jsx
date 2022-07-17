import React, { useContext, useState, useEffect } from "react";
import UserStore, { UserContext } from "../../common/user_store";
import { useLocation } from "react-router";

const Maker = () => {
  const { state } = useLocation();
  alert(state);
  return <h1>Maker</h1>;
};

export default Maker;
