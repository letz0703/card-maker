// import firebase from "firebase/compat";
// import firebaseApp from "./firebase";
import { firebaseAuth } from "./firebase";

class AuthService {
  login(providerName) {
    // const authProvider = new firebaseAuth[`${providerName}AuthProvider`]();
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  onLogout(onLogout) {
    firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged((user) => onUserChanged(user));
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "Github":
        return girhubProvider;
      default:
        throw new Error(`not supported provider ${providerName}`);
    }
  }
}

export default AuthService;
//16금-2209
