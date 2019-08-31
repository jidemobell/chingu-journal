import React, { useEffect, useState } from "react";
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const prevAuth = localStorage.getItem("authenticated") || false;
  const [authenticated, setAuthenticated] = useState(prevAuth);

  function updateAuth(update) {
     setAuthenticated(update);
     return authenticated
  }

  useEffect(() => {
    localStorage.setItem("authenticated", authenticated);
  }, [authenticated]);

  const defaultContext = {
    authenticated,
    updateAuth
  };

  return (
    <AuthContext.Provider value={defaultContext}>
      {children}
    </AuthContext.Provider>
  );
};
