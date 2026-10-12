import { useEffect, useState } from 'react';
import AddReading from '../../components/AddReading/AddReading.js';
import Dashboard from '../../components/Dashboard/Dashboard.js';
import Details from '../../components/Details/Details.js';
import MyBook from '../../components/MyBook/MyBook.js';
import css from './ReadingPage.module.css';
import FinishBookModal from '../../components/FinishBookModal/FinishBookModal.js';
import { useLocation } from 'react-router-dom';
import {
  finishReading,
  getLibraryBooks,
  startReading,
  type LibraryBook,
} from '../../services/api.js';
import { toast } from 'react-hot-toast';

export default function ReadingPage() {
  const [isReading, setIsReading] = useState(false);
  const [currentPage, setCurrentPage] = useState('');
  const [isBookFinished, setIsBookFinished] = useState(false);
  const location = useLocation();
  const book = location.state?.book as LibraryBook | undefined;

  useEffect(() => {
    if (!book) return;

    const hasActiveProgress = book.progress.some(
      (item) => item.status === 'active',
    );

    setIsReading(hasActiveProgress);
  }, [location.state]);

  async function handleStartReading(pageNumber: number): Promise<void> {
    if (!book) return;

    try {
      const updatedBook = await startReading(book._id, pageNumber);

      setIsReading(
        updatedBook.progress.some((item) => item.status === 'active'),
      );
      toast.success('Reading started!');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  }

  async function handleStopReading(pageNumber: number): Promise<void> {
    if (!book) return;

    try {
      const updatedBook = await finishReading(book._id, pageNumber);
      setIsReading(
        updatedBook.progress.some((item) => item.status === 'active'),
      );
      // handleReadingFinished(pageNumber === book.totalPages);
      toast.success('Reading stopped!');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  }

  async function handleQuickStart() {
    if (!book) return;

    if (isReading) {
      const pageNumber = Number(currentPage);

      if (!Number.isInteger(pageNumber) || pageNumber < 1) {
        toast.error('Enter a valid page number');
        return;
      }

      if (pageNumber > book.totalPages) {
        toast.error(`The book has only ${book.totalPages} pages`);
        return;
      }
      await handleStopReading(pageNumber);
      return;
    }

    const libraryBooks = await getLibraryBooks();

    const currentBook = libraryBooks.find((item) => item._id === book._id);

    if (!currentBook) {
      toast.error('Book not found in your library');
      return;
    }

    const lastProgress = currentBook.progress
      .filter((item) => item.status !== 'active' && item.finishPage > 0)
      .at(-1);
    const startPage = lastProgress ? lastProgress.finishPage : 1;

    await handleStartReading(startPage);
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
          onStartReading={handleStartReading}
          onStopReading={handleStopReading}
          isReading={isReading}
          onPageChange={setCurrentPage}
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
