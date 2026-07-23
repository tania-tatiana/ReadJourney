import css from './Filters.module.css';

export default function Filters() {
  return (
    <div className={css.wrapper}>
      <p className={css.title}>Filters:</p>
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
        </div>

        <button type="submit" className={css.button}>
          To apply
        </button>
      </form>
    </div>
  );
}
