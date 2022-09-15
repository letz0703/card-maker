// import firebase from "firebase/compat";
// import firebaseApp from "./firebase";
import { firebaseAuth } from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebaseAuth[`${providerName}AuthProvider`]();
    return firebaseAuth.signInWithPopup(authProvider);
  }

  onLogout(onLogout) {
    firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged((user) => onUserChanged(user));
  }
}

export default AuthService;
//16금-2209
