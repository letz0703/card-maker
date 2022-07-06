import Footer from "../footer/footer";
import Header from "../header/header";

export default function Login({ authService }) {
  const onLogin = (event) => {
    authService.login(event.currentTarget.textContent);
  };
  return (
    <section>
      <Header />
      <section>
        <h1>Login</h1>
        <ul>
          <li>
            <button type="submit" onClick={onLogin}>
              google
            </button>
          </li>
          <li>
            <button type="submit" onClick={onLogin}>
              github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
}
