import "./App.css";
import Login from "./service/components/login/login";

function App({ authService }) {
  return (
    <div>
      <Login authService={authService} />;
    </div>
  );
}

export default App;
