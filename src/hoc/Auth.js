import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "./AuthProvider";

// an HOC for protected routes
function ProtectedRoute({render, ...props}) {
  const { authenticated } = useContext(AuthContext);
  return (
      <Route
        {...props}
        render={ () => authenticated ? render() : <Redirect to="/login" />
        }
      />
  );
}

export default ProtectedRoute;
