import AddReading from '../../components/AddReading/AddReading.js';
import Dashboard from '../../components/Dashboard/Dashboard.js';
import MyBook from '../../components/MyBook/MyBook.js';
import css from './ReadingPage.module.css';

export default function ReadingPage() {
  return (
    <div className={css.wrapper}>
      <Dashboard>
        <AddReading />
      </Dashboard>
      <MyBook />
    </div>
  );
}
