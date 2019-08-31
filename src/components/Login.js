import React, { useContext } from "react";

import {
  googleProvider,
  facebookProvider,
  githubProvider
} from "../firebase/firebase";

import { FireObject } from "../firebase/helper/storeHelper";
import { AuthContext } from "../hoc/AuthProvider";


import google from "../images/google-logo.png";
import facebook from "../images/facebook-logo.png";
import github from "../images/github-logo.png";

import "bulma/css/bulma.css";

function Login() {
  const { updateAuth } = useContext(AuthContext);

  return (
    <div className="login">
      <section className="head">
        <h3
          style={{
            fontSize: "40px",
            opacity: "0.6",
            color: "white",
            marginRight: "5px"
          }}
        >
          keep a{" "}
        </h3>
        <h1 style={{ fontSize: "40px", marginRight: "5px" }}>
          <strong style={{ color: "white" }}>Digital Jounal</strong>
        </h1>
        <h3 style={{ fontSize: "40px", opacity: "0.6", color: "white" }}>
          ...
        </h3>
      </section>
      <div className="login-box">
        <div className="login-form  is-5">
          <button
            onClick={() => {
              const newUser = new FireObject(
                googleProvider,
                ["profile", "email"],
                "users",
                updateAuth
              );
              newUser.loginWithPopup();
            }}
          >
            <img src={google} alt="google-brand" />
            <span className="content">Login with Google</span>
          </button>
          <button
            onClick={() => {
              const newUser = new FireObject(
                facebookProvider,
                ["user_birthday"],
                "users",
                updateAuth
              );
              newUser.loginWithPopup();
            }}
          >
            <img src={facebook} alt="google-brand" />
            <span className="content">Login with Facebook</span>
          </button>
          <button
            onClick={() => {
              const newUser = new FireObject(
                githubProvider,
                ["repo"],
                "users",
                updateAuth
              );
              newUser.loginWithPopup();
            }}
          >
            <img src={github} alt="google-brand" />
            <span className="content">Login with Github</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
