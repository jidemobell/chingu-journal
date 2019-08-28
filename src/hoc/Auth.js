import React, { useEffect, useContext } from "react";
import { UserContext } from "./AuthProvider";

import { routerHistory } from "../containers/App";

export default ComposedComponent => {
  return () => {
    const authState = useContext(UserContext);
    useEffect(() => {
      if (!authState.authenticated) {
        console.log(authState.authenticated, 'at auth')
        // routerHistory.push("/login");
      }
    }, []);
    return <ComposedComponent />;
  };
};

