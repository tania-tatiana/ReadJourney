import { Link } from 'react-router-dom';
import css from './WelcomePage.module.css';

export default function WelcomePage() {
  return (
    <section className={css.wrapper}>
      <h1 className={css.title}>Welcome to Read Journey</h1>
      <p className={css.text}>
        Keep track of your reading, organize your library and achieve your
        reading goals.
      </p>
      <div className={css.actions}>
        <Link to="/login" className={css.loginButton}>
          Log in
        </Link>
        <Link to="/register" className={css.registerButton}>
          Create an account
        </Link>
      </div>
    </section>
  );
}
