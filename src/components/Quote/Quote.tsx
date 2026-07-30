import css from './Quote.module.css';

export default function Quote() {
  return (
    <div className={css.wrapperQuotes}>
      <img src="/public/books.png" alt="BooksQuotes" className={css.books} />
      <p className={css.textQuotes}>
        "Books are <span className={css.markerQuotes}>windows</span> to the
        world, and reading is a journey into the unknown."
      </p>
    </div>
  );
}
