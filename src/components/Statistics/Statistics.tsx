import css from './Statistics.module.css';
import type { ReadingBook } from '../../services/api.js';

type StatisticsType = {
  setActiveButton: (value: 'diary' | 'statistics') => void;
  book: ReadingBook;
};

export default function Statistics({ setActiveButton, book }: StatisticsType) {
  // const pagesRead = book.progress.reduce((total, item) => {
  //   if (item.status === 'active') {
  //     return total;
  //   }

  //   return total + Math.max(0, item.finishPage - item.startPage + 1);
  // }, 0);

  const lastReadPage = Math.max(
    0,
    ...book.progress.map((item) => item.finishPage ?? 0),
  );

  const progress =
    book.totalPages > 0
      ? Math.min((lastReadPage / book.totalPages) * 100, 100)
      : 0;
  const radius = 49;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress / 100);

  return (
    <div className={css.wrapper}>
      <div className={css.firstLine}>
        <h3 className={css.title}>Statistics</h3>
        <div className={css.buttons}>
          <button
            className={css.buttonSVG}
            onClick={() => setActiveButton('diary')}
          >
            <svg className={css.timeIcon} width={20} height={20}>
              <use href="/public/icons.svg#time" />
            </svg>
          </button>
          <button
            className={css.buttonSVG}
            onClick={() => setActiveButton('statistics')}
          >
            <svg className={css.sectorIcon} width={20} height={20}>
              <use href="/public/icons.svg#sector" />
            </svg>
          </button>
        </div>
      </div>
      <p className={css.description}>
        Each page, each chapter is a new round of knowledge, a new step towards
        understanding. By rewriting statistics, we create our own reading
        history.
      </p>
      <div className={css.content}>
        <div className={css.progressCircle}>
          {/* <svg className={css.progressSvg}>
            <use />
          </svg> */}
          <svg className={css.progressSvg} viewBox="0 0 116 116">
            <circle
              className={css.progressBackground}
              cx="58"
              cy="58"
              r={radius}
            />

            <circle
              className={css.progressValue}
              cx="58"
              cy="58"
              r={radius}
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: offset,
              }}
            />
          </svg>
          <div className={css.percents}>{progress.toFixed(1)}%</div>
        </div>
        <div className={css.wrapperSecondLine}>
          <div className={css.point}></div>
          <div className={css.textWrapper}>
            <p className={css.percent}>{progress.toFixed(1)}%</p>

            <p className={css.readBook}>{lastReadPage} pages read</p>
          </div>
        </div>
      </div>
    </div>
  );
}
