import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "./AuthProvider";

function ProtectedRoute({render, ...props}) {
 // const Component = props.render;
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
