import { Link } from 'react-router-dom';
import css from './RegisterForm.module.css';

export default function RegisterForm() {
  return (
    <form className={css.form}>
      <div className={css.inputs}>
        <label className={css.field}>
          <span className={css.label}>Name:</span>
          <input type="text" className={css.input} />
        </label>
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
          Registration
        </button>
        <Link to="/login" className={css.link}>
          Already have an account?
        </Link>
      </div>
    </form>
  );
}
