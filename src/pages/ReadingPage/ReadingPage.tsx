import { useState } from 'react';
import AddReading from '../../components/AddReading/AddReading.js';
import Dashboard from '../../components/Dashboard/Dashboard.js';
import Details from '../../components/Details/Details.js';
import MyBook from '../../components/MyBook/MyBook.js';
import css from './ReadingPage.module.css';
import FinishBookModal from '../../components/FinishBookModal/FinishBookModal.js';

export default function ReadingPage() {
  const [isReading, setIsReading] = useState(false);
  const [isBookFinished, setIsBookFinished] = useState(false);

  return (
    <div className={css.wrapper}>
      <Dashboard className={css.readingDashboard}>
        <AddReading />
        <Details isReading={isReading} />
      </Dashboard>
      <MyBook isReading={isReading} setIsReading={setIsReading} />

      {!isBookFinished && (
        <FinishBookModal onClose={() => setIsBookFinished(false)} />
      )}
    </div>
  );
}
