import { Link, useNavigate } from 'react-router-dom';
import css from './RegisterForm.module.css';
import signUp, { type SignUpData } from '../../services/api.js';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-hot-toast';

export default function RegisterForm() {
  const navigate = useNavigate();

  const schema = yup.object({
    name: yup.string().required('Name is a required field'),
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
  } = useForm<SignUpData>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
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
            <span className={css.label}>Name:</span>
            <input type="text" className={css.input} {...register('name')} />
            {errors.name && <p className={css.error}>{errors.name.message}</p>}
          </label>
          <label className={css.field}>
            <span className={css.label}>Mail:</span>
            <input type="email" className={css.input} {...register('email')} />
            {errors.email && (
              <p className={css.error}>{errors.email.message}</p>
            )}
          </label>
          <label className={css.field}>
            <span className={css.label}>Password:</span>
            <input
              type="password"
              className={css.input}
              {...register('password')}
            />
            {errors.password && (
              <p className={css.error}>{errors.password.message}</p>
            )}
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
    </>
  );
}
