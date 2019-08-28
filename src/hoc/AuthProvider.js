import React, { createContext, useState } from "react";

export const UserContext = createContext({
  authenticated: false,
  updateAuth: () => {}
});

export function AuthProvider(props) {
  const [userState, setUserState] = useState({
    authenticated: false,
    updateAuth: updateAuth
  });

  function updateAuth(update) {
    setUserState((userState) => ({...userState, ...update}));
  }

  return (
    <UserContext.Provider value={userState}>
      {props.children}
    </UserContext.Provider>
  );
}


