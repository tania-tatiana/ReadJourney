import css from './MyBook.module.css';

export default function MyBook() {
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
    </div>
  );
}
