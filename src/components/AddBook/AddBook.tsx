import { useState } from 'react';
import AddBookModal from '../AddBookModal/AddBookModal.js';
import css from './AddBook.module.css';
import { addLibraryBook } from '../../services/api.js';

export default function AddBook() {
  const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get('title') as string;
    const author = formData.get('author') as string;
    const totalPages = Number(formData.get('totalPages'));
    const data = { title, author, totalPages };
    await addLibraryBook(data);
  }
  return (
    <div className={css.wrapper}>
      <p className={css.title}>Create your library:</p>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.inputs}>
          <label className={css.field}>
            <span className={css.label}>Book title:</span>
            <input type="text" className={css.input} name="title" />
          </label>
          <label className={css.field}>
            <span className={css.label}>The author:</span>
            <input type="text" className={css.input} name="author" />
          </label>
          <label className={css.field}>
            <span className={css.label}>Number of pages:</span>
            <input type="text" className={css.input} name="totalPages" />
          </label>
        </div>

        <button type="submit" className={css.button}>
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
