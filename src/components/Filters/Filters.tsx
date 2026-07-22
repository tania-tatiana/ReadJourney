import css from './Filters.module.css';

export default function () {
  return (
    <div>
      <p className={css.title}>Filters:</p>
      <form>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>

        <button type="submit" className={css.button}></button>
      </form>
    </div>
  );
}
