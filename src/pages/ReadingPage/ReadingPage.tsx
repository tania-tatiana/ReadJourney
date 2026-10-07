import { useEffect, useState } from 'react';
import AddReading from '../../components/AddReading/AddReading.js';
import Dashboard from '../../components/Dashboard/Dashboard.js';
import Details from '../../components/Details/Details.js';
import MyBook from '../../components/MyBook/MyBook.js';
import css from './ReadingPage.module.css';
import FinishBookModal from '../../components/FinishBookModal/FinishBookModal.js';
import { useLocation } from 'react-router-dom';
import { startReading } from '../../services/api.js';

export default function ReadingPage() {
  const [isReading, setIsReading] = useState(false);
  const [isBookFinished, setIsBookFinished] = useState(false);
  const location = useLocation();

  function handleReadingStarted() {
    setIsReading(true);
  }

  async function handleQuickStart() {
    const book = location.state?.book;
    if (!book) return;

    // const activeProgress = book.progress.find(
    //   (item) => item.status === 'active',
    // );

    // if (activeProgress) {
    //   return;
    // }

    const lastProgress = book.progress.at(-1);
    const startPage = lastProgress ? lastProgress.finishPage : 1;

    console.log('Quick start:', book.progress);

    await startReading(book._id, startPage);
    handleReadingStarted();
  }

  function handleReadingFinished(isFinished: boolean) {
    setIsReading(false);

    if (isFinished) {
      setIsBookFinished(true);
    }
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
        <Details isReading={isReading} book={location.state?.book} />
      </Dashboard>
      <MyBook
        isReading={isReading}
        onQuickStart={handleQuickStart}
        book={location.state?.book}
      />

      {isBookFinished && (
        <FinishBookModal
          onClose={() => {
            setIsBookFinished(false);
          }}
        />
      )}
    </div>
  );
}
