import { useEffect, useState } from 'react';
import css from './MyLibraryBooks.module.css';
import { getLibraryBooks, type LibraryBooks } from '../../services/api.js';
import LibrarySelect from '../LibrarySelect/LibrarySelect.js';
import LibraryBookCard from '../LibraryBookCard/LibraryBookCard.js';

export default function MyLibraryBooks() {
  const [status, setStatus] = useState('All books');
  const [books, setBooks] = useState<LibraryBooks>([]);

  useEffect(() => {
    async function fetchBooks() {
      const result = await getLibraryBooks(status);
      setBooks(result);
    }
    fetchBooks();
  }, [status]);

  return (
    <>
      {books.length > 0 ? (
        books.map((book) => (
          <LibraryBookCard
            key={book._id}
            {...book}
            onClick={() => setSelectedBook(book)}
          />
        ))
      ) : (
        <div className={css.wrapper}>
          <div className={css.titleAndFilters}>
            <h2 className={css.title}>My library</h2>
            <LibrarySelect />
          </div>
          <div className={css.pictureAndText}>
            <div className={css.circle}>
              <img src="./bigBooks.png" alt="Books" className={css.image} />
            </div>
            <p className={css.marker}>
              <span className={css.text}>To start training, add</span> some of
              your books{' '}
              <span className={css.text}>or from the recommended ones</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
