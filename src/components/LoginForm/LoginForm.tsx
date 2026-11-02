import { Link, useNavigate } from 'react-router-dom';
import css from './LoginForm.module.css';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { signIn, type SignInData } from '../../services/api.js';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

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
    watch,
    formState: { errors, touchedFields },
  } = useForm<SignInData>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const passwordValue = watch('password');
  const passwordStatus =
    !touchedFields.password || !passwordValue
      ? null
      : errors.password
        ? 'error'
        : 'success';

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
            {errors.email && (
              <p className={css.error}>{errors.email.message}</p>
            )}
          </label>
          <label
            className={`${css.field} ${passwordStatus === 'error' ? css.fieldError : passwordStatus === 'success' ? css.fieldSuccess : ''}`}
          >
            <span className={css.label}>Password:</span>
            <input
              type={showPassword ? 'text' : 'password'}
              className={css.input}
              {...register('password')}
            />
            {passwordStatus && (
              <svg width={20} height={20} className={css.statusIcon}>
                <use
                  href={
                    passwordStatus === 'error'
                      ? '/public/icons.svg#pajamas-error'
                      : '/public/icons.svg#gg-check-o'
                  }
                />
              </svg>
            )}
            <button
              type="button"
              className={css.passwordToggle}
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              <svg width={20} height={20}>
                <use
                  href={
                    showPassword
                      ? '/public/icons.svg#eye-off'
                      : '/public/icons.svg#eye'
                  }
                />
              </svg>
            </button>
            {passwordStatus === 'error' && (
              <p className={css.error}>Enter a valid Password*</p>
            )}
            {passwordStatus === 'success' && (
              <p className={css.success}>Password is secure</p>
            )}
            {/* {errors.password && (
              <p className={css.error}>{errors.password.message}</p>
            )} */}
          </label>
        </div>

        <div className={css.buttons}>
          <button type="submit" className={css.button}>
            Log In
          </button>
          <Link to="/register" className={css.link}>
            Don’t have an account?
          </Link>
        </div>
      </form>
    </>
  );
}
