import Dashboard from '../../components/Dashboard/Dashboard.js';
import RecommendedBooks from '../../components/RecommendedBooks/RecommendedBooks.js';
import css from './RecommendedPage.module.css';

export default function RecommendedPage() {
  return (
    <div className={css.wrapper}>
      <Dashboard />
      <RecommendedBooks />
    </div>
  );
}
