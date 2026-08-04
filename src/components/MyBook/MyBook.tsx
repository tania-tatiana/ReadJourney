import { useState } from 'react';
import css from './MyBook.module.css';

export default function MyBook() {
  const [isReading, setIsReading] = useState(false);
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>My reading</h2>
      <div className={css.bookCard}>
        <img
          src="/recommended_book3.jpg"
          alt="Galya without a head"
          className={css.cover}
        />
        <div className={css.titleAndAuthor}>
          <h2 className={css.titleOfBook}>Galya without a head</h2>
          <p className={css.author}>Lyuko Dashvar</p>
        </div>
      </div>
      <button className={css.button} onClick={() => setIsReading(!isReading)}>
        {isReading ? (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="19" stroke="#F9F9F9" stroke-width="2" />
            <rect x="12" y="13" width="15" height="15" rx="3" fill="#E90516" />
          </svg>
        ) : (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="15" fill="#E90516" />
            <circle cx="20" cy="20" r="19" stroke="#F9F9F9" stroke-width="2" />
          </svg>
        )}
      </button>
    </div>
  );
}
