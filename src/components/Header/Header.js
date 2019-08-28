import React, { useContext } from "react";
import { UserContext, AuthProvider } from "../../hoc/AuthProvider";

function Header({ noteUser }) {
  const authState = useContext(UserContext);
  return (
    <AuthProvider>
      <nav
        className="navbar myNav"
        role="navigation"
        aria-label="main navigation"
      >
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <h1 className="navbar-item" style={{ fontSize: "40px" }}>
              <strong>Digital Journal</strong>
            </h1>
            <h1
              className="navbar-item"
              style={{ fontSize: "40px", opacity: "0.4" }}
            >
              |
            </h1>
            <h1
              className="navbar-item"
              style={{ fontSize: "40px", opacity: "0.4" }}
            >
              Create A Note
            </h1>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <span>{noteUser.name}</span>
            </div>
            <div className="navbar-item">
              <figure class="image is-128x128px">
                <img class="is-rounded" src={noteUser.image} />
              </figure>
            </div>
            <div className="navbar-item">
              <div className="buttons">
                <a
                  className="button is-primary"
                  onClick={() => {
                    console.log("yes", authState.authenticated);
                    authState.updateAuth(false);
                  }}
                >
                  <strong>Sign Out</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </AuthProvider>
  );
}

export default Header;
