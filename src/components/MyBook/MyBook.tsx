import type { ReadingBook } from '../../services/api.js';
import css from './MyBook.module.css';

type MyBookType = {
  isReading: boolean;
  onQuickStart: () => void;
  book: ReadingBook;
};

export default function MyBook({ isReading, onQuickStart, book }: MyBookType) {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>My reading</h2>
      <div className={css.bookCard}>
        <img
          src={book.imageUrl}
          alt={book.title}
          className={css.cover}
          loading="lazy"
        />
        <div className={css.titleAndAuthor}>
          <h2 className={css.titleOfBook}>{book.title}</h2>
          <p className={css.author}>{book.author}</p>
        </div>
      </div>
      <button className={css.button} onClick={onQuickStart}>
        <svg width="50" height="50" aria-hidden="true">
          <use
            href={
              isReading ? '/icons.svg#stop-reading' : '/icons.svg#start-reading'
            }
          />
        </svg>
      </button>
    </div>
  );
}
