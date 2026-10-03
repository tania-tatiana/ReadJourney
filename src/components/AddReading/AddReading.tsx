import { useState } from 'react';
import css from './AddReading.module.css';
import { toast } from 'react-hot-toast';
import { startReading } from '../../services/api.js';

type AddReadingProps = {
  totalPages: number | undefined;
  bookId: string | undefined;
};

export default function AddReading({ totalPages, bookId }: AddReadingProps) {
  const [page, setPage] = useState('');
  async function handleSubmit(event: React.FormEvent<HTMLElement>) {
    event.preventDefault();
    const pageNumber = Number(page);
    if (!Number.isInteger(pageNumber) || pageNumber < 1) {
      toast.error('Enter a valid page number');
      return;
    }

    if (totalPages !== undefined && pageNumber > totalPages) {
      toast.error(`The book has only ${totalPages} pages`);
      return;
    }

    if (!bookId) {
      toast.error('Book not found');
      return;
    }

    try {
      await startReading(bookId, pageNumber);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
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
