import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import css from './Filters.module.css';
import type { GetBooksParams } from '../../services/api.js';
import { useForm } from 'react-hook-form';

export default function Filters() {
  const schema = yup.object({
    title: yup
      .string()
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Incorrect email')
      .required('Email is a required field'),
    author: yup
      .string()
      .min(7, 'Password must be at least 7 characters')
      .required('Password is a required field'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GetBooksParams>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  return (
    <div className={css.wrapper}>
      <p className={css.title}>Filters:</p>
      <form className={css.form}>
        <div className={css.inputs}>
          <label className={css.field}>
            <span className={css.label}>Book title:</span>
            <input type="text" className={css.input} />
          </label>
          <label className={css.field}>
            <span className={css.label}>The author:</span>
            <input type="text" className={css.input} />
          </label>
        </div>

        <button type="submit" className={css.button}>
          To apply
        </button>
      </form>
    </div>
  );
}
