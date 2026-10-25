import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import css from './Filters.module.css';
import { useForm } from 'react-hook-form';
import type { GetBooksFilters } from '../../services/api.js';

type FiltersProps = {
  onSearch: (data: GetBooksFilters) => void;
};

export default function Filters({ onSearch }: FiltersProps) {
  const schema = yup.object({
    title: yup.string().defined(),
    author: yup.string().defined(),
  });

  const { register, handleSubmit } = useForm<GetBooksFilters>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: GetBooksFilters) => {
    onSearch(data);
  };

  return (
    <div className={css.wrapper}>
      <p className={css.title}>Filters:</p>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputs}>
          <label className={css.field}>
            <span className={css.label}>Book title:</span>
            <input type="text" className={css.input} {...register('title')} />
          </label>
          <label className={css.field}>
            <span className={css.label}>The author:</span>
            <input type="text" className={css.input} {...register('author')} />
          </label>
        </div>

        <button type="submit" className={css.button}>
          To apply
        </button>
      </form>
    </div>
  );
}
