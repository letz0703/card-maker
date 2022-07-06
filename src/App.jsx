import "./App.css";
import Login from "./service/components/login/login";

function App({ authService }) {
  return <Login authService={authService} />;
}

export default App;
