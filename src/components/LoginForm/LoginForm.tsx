import { Link, useNavigate } from 'react-router-dom';
import css from './LoginForm.module.css';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { signIn, type SignInData } from '../../services/api.js';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-hot-toast';

export default function LoginForm() {
  const navigate = useNavigate();

  const schema = yup.object({
    email: yup
      .string()
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Incorrect email')
      .required('Email is a required field'),
    password: yup
      .string()
      .min(7, 'Password must be at least 7 characters')
      .required('Password is a required field'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: SignInData) => {
    try {
      const result = await signIn(data);
      const token = result.token;
      const refreshToken = result.refreshToken;
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      navigate('/recommended');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputs}>
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
            Log in
          </button>
          <Link to="/register" className={css.link}>
            Don’t have an account?
          </Link>
        </div>
      </form>
    </>
  );
}
