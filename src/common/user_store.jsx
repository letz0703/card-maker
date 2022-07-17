import React, { createContext, useState, useEffect } from "react";
export const UserContext = createContext();

const UserStore = (props) => {
  const users = {
    userId: "",
  };

  return (
    <UserContext.Provider //
      value={users}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserStore;
