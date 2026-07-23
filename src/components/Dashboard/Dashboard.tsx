import { Link } from 'react-router-dom';
import Filters from '../Filters/Filters.js';
import { FaArrowRight } from 'react-icons/fa';

import css from './Dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={css.wrapper}>
      <Filters />
      <div className={css.wrapperDescr}>
        <h3 className={css.title}>Start your workout</h3>
        <p className={css.text}>
          <span className={css.marker}>Create a personal library: </span>
          add the books you intend to read to it.
        </p>
        <p className={css.text}>
          <span className={css.marker}>Create your first workout: </span>
          define a goal, choose a period, start training.
        </p>
        <div className={css.linkBlock}>
          <Link to="/library" className={css.link}>
            My library
          </Link>
          <FaArrowRight />
        </div>
      </div>
      <div className={css.wrapperQuotes}>
        <img src="/public/books.png" alt="BooksQuotes" />
        <p className={css.textQuotes}>
          "Books are <span className={css.markerQuotes}>windows</span> to the
          world, and reading is a journey into the unknown."
        </p>
      </div>
    </div>
  );
}
