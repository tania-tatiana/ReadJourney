import { Link, useNavigate } from 'react-router-dom';
import css from './RegisterForm.module.css';
import signUp, { type SignUpData } from '../../services/api.js';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export default function RegisterForm() {
  const { register, handleSubmit } = useForm<SignUpData>();

  const navigate = useNavigate();

  const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email('/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/').required(),
    password: yup
      .string()
      .min(7, 'Password must be at least 6 characters')
      .required(),
  });

  const onSubmit = async (data: SignUpData) => {
    try {
      const result = await signUp(data);
      const token = result.token;
      const refreshToken = result.refreshToken;
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      navigate('/recommended');
    } catch (error) {
      console.log(error);
    }
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
