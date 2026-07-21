import { Link } from 'react-router-dom';
import css from './LoginForm.module.css';

export default function LoginForm() {
  return (
    <form className={css.form}>
      <div className={css.inputs}>
        <label className={css.field}>
          <span className={css.label}>Mail:</span>
          <input type="email" className={css.input} />
        </label>
        <label className={css.field}>
          <span className={css.label}>Password:</span>
          <input type="password" className={css.input} />
        </label>
      </div>

      <div className={css.buttons}>
        <button type="submit" className={css.button}>
          Log in
        </button>
        <Link to="/register" className={css.link}>
          Don’t have an account?
        </Link>
      </div>
    </form>
  );
}
