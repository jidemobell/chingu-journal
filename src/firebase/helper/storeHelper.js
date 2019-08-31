import { auth, db } from "../firebase";
import { routerHistory } from "../../containers/App";

// a FireObject class to encapsulate firbase login into a 
// class ownProperty 

export function FireObject(provider, scopes, collection, context) {
  this.provider = provider;
  this.db = db;
  this.scopes = scopes;
  this.collection = collection;
  this.authContext = context;

  this.loginWithPopup = function() {
    let authenticator = this.authContext;
    this.scopes.map(scope => this.provider.addScope(scope));
    auth()
      .signInWithPopup(this.provider)
      .then(result => {
        // This gives you a Google Access Token.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const data = result.user;
        db.collection(collection)
          .doc(`${data.email}`)
          .set({
            name: data.displayName,
            email: data.email,
            image: data.photoURL,
            accessToken: token,
            notes: []
          })
          .then(function() {
            localStorage.setItem("token", token);
            const presentAuth = authenticator(true);
            presentAuth && routerHistory.push("/dashboard");
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
      });
  };
}

