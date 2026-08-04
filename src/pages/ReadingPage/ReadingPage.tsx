import AddReading from '../../components/AddReading/AddReading.js';
import Dashboard from '../../components/Dashboard/Dashboard.js';
import Details from '../../components/Details/Details.js';
import MyBook from '../../components/MyBook/MyBook.js';
import css from './ReadingPage.module.css';

export default function ReadingPage() {
  return (
    <div className={css.wrapper}>
      <Dashboard className={css.readingDashboard}>
        <AddReading />
        <Details />
      </Dashboard>
      <MyBook />
    </div>
  );
}
