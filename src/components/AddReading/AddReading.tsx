import { useState } from 'react';
import css from './AddReading.module.css';
import { toast } from 'react-hot-toast';

export default function AddReading() {
  const [page, setPage] = useState('');
  function handleSubmit(event: React.FormEvent<HTMLElement>) {
    event.preventDefault();
    const pageNumber = Number(page);
    if (!Number.isInteger(pageNumber) || pageNumber < 1) {
      toast.error('Enter a valid page number');
      return;
    }
  }
  return (
    <div className={css.wrapper}>
      <p className={css.title}>Start page:</p>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.field}>
          <span className={css.label}>Page number:</span>
          <input
            type="text"
            className={css.input}
            value={page}
            onChange={(event) => setPage(event.target.value)}
          />
        </label>

        <button type="submit" className={css.button}>
          To start
        </button>
      </form>
    </div>
  );
}
