import React, { useContext, useState, useEffect } from "react";
import UserStore, { UserContext } from "../../common/user_store";

const Maker = () => {
  return (
    <UserStore.Consumer>{(userId) => <h1>{userId}</h1>}</UserStore.Consumer>
  );
};

export default Maker;
