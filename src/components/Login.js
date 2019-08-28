import React, { useState, useContext } from "react";

import {
  db,
  googleProvider,
  facebookProvider,
  githubProvider,
  auth
} from "../firebase/firebase";

import { AuthProvider,UserContext  } from "../hoc/AuthProvider";

import { routerHistory } from "../containers/App";

import google from "../images/google-logo.png";
import facebook from "../images/facebook-logo.png";
import github from "../images/github-logo.png";

import "bulma/css/bulma.css";

function addUser(data) {
  db.collection("users")
    .add({
      name: data.displayName,
      email: data.email,
      verified: data.emailVerified,
      image: data.photoURL
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
}

function Login() {
  const [user, setUser] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const authState = useContext(UserContext) 

  return (
    <AuthProvider>
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
                ["profile", "email"].map(scope =>
                  googleProvider.addScope(scope)
                );
                auth()
                  .signInWithPopup(googleProvider)
                  .then(result => {
                    // This gives you a Google Access Token.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var data = result.user;
                    setUser(data);
                    addUser(user);
                  });
              }}
            >
              <img src={google} alt="google-brand" />
              <span className="content">Login with Google</span>
            </button>
            <button
              onClick={() => {
                ["user_birthday"].map(scope =>
                  facebookProvider.addScope(scope)
                );
                auth()
                  .signInWithPopup(facebookProvider)
                  .then(result => {
                    // This gives you a Google Access Token.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var data = result.user;
                    setUser(data);
                    addUser(user);
                  });
              }}
            >
              <img src={facebook} alt="google-brand" />
              <span className="content">Login with Facebook</span>
            </button>
            <button
              onClick={() => {
                ["repo"].map(scope => githubProvider.addScope(scope));
                auth()
                  .signInWithPopup(githubProvider)
                  .then(result => {
                    // This gives you a Google Access Token.
                    const token = result.credential.accessToken;
                    // The signed-in user info.
                    const data = result.user;
                    //set user data to user in state
                    setUser(data);
                    setAuthenticated(true);
                    //check if user already exist in firestore

                    //add new user if not exist
                    db.collection("users")
                      .add({
                        name: data.displayName,
                        email: data.email,
                        verified: data.emailVerified,
                        image: data.photoURL,
                        accessToken: token
                      })
                      .then(function(docRef) {
                        console.log("Document written with ID: ", docRef.id);
                        localStorage.setItem("token", token);
                        authState.updateAuth(true);
                        routerHistory.push("/dashboard");
                      })
                      .catch(function(error) {
                        console.error("Error adding document: ", error);
                      });
                  });
              }}
            >
              <img src={github} alt="google-brand" />
              <span className="content">Login with Github</span>
            </button>
          </div>
        </div>
        {/* <p>{JSON.stringify(user)}</p> */}
      </div>
    </AuthProvider>
  );
}

export default Login;
