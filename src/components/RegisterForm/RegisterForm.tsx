import { Link, useNavigate } from 'react-router-dom';
import css from './RegisterForm.module.css';
import signUp, { type SignUpData } from '../../services/api.js';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

export default function RegisterForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

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
    watch,
    formState: { errors, touchedFields },
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

  const passwordValue = watch('password');
  const passwordStatus =
    !touchedFields.password || !passwordValue
      ? null
      : errors.password
        ? 'error'
        : 'success';
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
          <label
            className={`${css.field} ${
              passwordStatus === 'error'
                ? css.fieldError
                : passwordStatus === 'success'
                  ? css.fieldSuccess
                  : ''
            }`}
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
