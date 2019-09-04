import React, { useContext } from "react";
import { AuthContext } from "../../hoc/AuthProvider";
import { routerHistory } from "../../containers/App";

function Header({ noteUser }) {
  const { updateAuth } = useContext(AuthContext);
  return (
    <div>
      <nav
        className="navbar myNav"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item">
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

          <a
            role="button"
            className="navbar-burger burger is-active"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            href={'https://fakelink'}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu is-active">
          <div className="navbar-end">
            <div className="navbar-item">
              <span>{noteUser.name}</span>
            </div>
            <div className="navbar-item">
              <figure className="image is-128x128px">
                <img className="is-rounded" src={noteUser.image} alt="avatar" />
              </figure>
            </div>
            <div className="navbar-item">
              <div className="buttons">
                <button
                  className="button is-primary"
                  href="http://fakelink"
                  onClick={() => {
                    localStorage.clear();
                    updateAuth(false);
                    routerHistory.push("/login");
                  }}
                >
                  <strong>Sign Out</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
