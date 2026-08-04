import AddBook from '../../components/AddBook/AddBook.js';
import Dashboard from '../../components/Dashboard/Dashboard.js';
import MyLibraryBooks from '../../components/MyLibraryBooks/MyLibraryBooks.js';
import SliderRecommendedBooks from '../../components/SliderRecommendedBooks/SliderRecommendedBooks.js';
import css from './MyLibraryPage.module.css';

export default function MyLibraryPage() {
  return (
    <div className={css.wrapper}>
      <Dashboard className={css.dashboard}>
        <AddBook />
        <SliderRecommendedBooks />
      </Dashboard>
      <MyLibraryBooks />
    </div>
  );
}
