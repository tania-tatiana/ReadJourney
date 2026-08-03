import css from './AddReading.module.css';

export default function AddReading() {
  return (
    <div className={css.wrapper}>
      <p className={css.title}>Start page:</p>
      <form className={css.form}>
        <label className={css.field}>
          <span className={css.label}>Page number:</span>
          <input type="text" className={css.input} />
        </label>

        <button type="submit" className={css.button}>
          To start
        </button>
      </form>
    </div>
  );
}
