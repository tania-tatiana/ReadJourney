import { Link } from 'react-router-dom';
import css from './RegisterForm.module.css';
import signUp, { type SignUpData } from '../../services/api.js';
import { useForm } from 'react-hook-form';

export default function RegisterForm() {
  const { register, handleSubmit } = useForm<SignUpData>();

  const onSubmit = (data: SignUpData) => {
    signUp(data);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.inputs}>
        <label className={css.field}>
          <span className={css.label}>Name:</span>
          <input type="text" className={css.input} {...register('name')} />
        </label>
        <label className={css.field}>
          <span className={css.label}>Mail:</span>
          <input type="email" className={css.input} {...register('email')} />
        </label>
        <label className={css.field}>
          <span className={css.label}>Password:</span>
          <input
            type="password"
            className={css.input}
            {...register('password')}
          />
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
