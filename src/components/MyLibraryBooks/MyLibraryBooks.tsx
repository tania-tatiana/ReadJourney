import LibrarySelect from '../LibrarySelect/LibrarySelect.js';
import css from './MyLibraryBooks.module.css';

export default function MyLibraryBooks() {
  return (
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
          <span className={css.text}>To start training, add</span> some of your
          books <span className={css.text}>or from the recommended ones</span>
        </p>
      </div>
    </div>
  );
}
