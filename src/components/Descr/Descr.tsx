import css from './Descr.module.css';

export default function Descr() {
  return (
    <div className={css.wrapper}>
      <div className={css.wrapperOfTitleAndText}>
        <h3 className={css.title}>Progress</h3>
        <p className={css.text}>
          Here you will see when and how much you read. To record, click on the
          red button above.
        </p>
      </div>
      <div className={css.wrapperOfStar}>
        <img src="/star.png" alt="Star" />
      </div>
    </div>
  );
}
