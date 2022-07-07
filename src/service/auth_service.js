import firebase from "firebase";
import firebaseApp from "./firebase";
// import { getAuth, signInWithPopup, googleAuthPro } from "./firebase";

class AuthService {
  // constructor() {
  //   this.firebaseAuth = getAuth();
  //   this.googleProvider = new googleAuthProvider();
  //   this.githubProvider = new GithubAuthProvider();
  // }

  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
    // return firebaseApp(this.firebaseAuth, authProvider);
  }
}

export default AuthService;
