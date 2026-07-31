import { useState } from 'react';
import AddBookModal from '../AddBookModal/AddBookModal.js';
import css from './AddBook.module.css';

export default function AddBook() {
  const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false);
  return (
    <div className={css.wrapper}>
      <p className={css.title}>Create your library:</p>
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
          <label className={css.field}>
            <span className={css.label}>Number of pages:</span>
            <input type="text" className={css.input} />
          </label>
        </div>

        <button
          type="submit"
          className={css.button}
          onClick={() => setIsAddBookModalOpen(true)}
        >
          Add book
        </button>
      </form>
      <AddBookModal
        isOpen={!!isAddBookModalOpen}
        onClose={() => setIsAddBookModalOpen(false)}
      />
    </div>
  );
}
