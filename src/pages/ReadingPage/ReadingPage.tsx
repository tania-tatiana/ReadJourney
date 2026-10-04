import { useState } from 'react';
import AddReading from '../../components/AddReading/AddReading.js';
import Dashboard from '../../components/Dashboard/Dashboard.js';
import Details from '../../components/Details/Details.js';
import MyBook from '../../components/MyBook/MyBook.js';
import css from './ReadingPage.module.css';
import FinishBookModal from '../../components/FinishBookModal/FinishBookModal.js';
import { useLocation } from 'react-router-dom';

export default function ReadingPage() {
  const [isReading, setIsReading] = useState(false);
  const [isBookFinished, setIsBookFinished] = useState(false);
  const location = useLocation();

  function handleReadingStarted() {
    setIsReading(true);
  }

  function handleReadingFinished() {
    setIsReading(false);
  }

  return (
    <div className={css.wrapper}>
      <Dashboard className={css.readingDashboard}>
        <AddReading
          totalPages={location?.state?.book.totalPages}
          bookId={location?.state?.book._id}
          onReadingStarted={handleReadingStarted}
          onReadingFinished={handleReadingFinished}
          isReading={isReading}
        />
        <Details isReading={isReading} />
      </Dashboard>
      <MyBook
        isReading={isReading}
        setIsReading={setIsReading}
        book={location.state?.book}
      />

      {!isBookFinished && (
        <FinishBookModal onClose={() => setIsBookFinished(true)} />
      )}
    </div>
  );
}
