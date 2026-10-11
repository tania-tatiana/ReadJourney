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
    if (!book) {
      return;
    }
    try {
      await startReading(book._id, pageNumber);
      setIsReading(true);
      toast.success('Reading started!');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  }

  async function handleQuickStart() {
    if (!book) return;

    const libraryBooks = await getLibraryBooks();

    const currentBook = libraryBooks.find((item) => item._id === book._id);

    if (!currentBook) {
      toast.error('Book not found in your library');
      return;
    }

    console.log('Актуальна книга:', currentBook);
    console.log('Історія читання:', currentBook.progress);

    const hasActiveProgress = book.progress.some(
      (item) => item.status === 'active',
    );

    console.log('isReading:', isReading);
    console.log('active progress:', hasActiveProgress);

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
      try {
        await finishReading(book._id, pageNumber);
        // const result = await finishReading(book._id, pageNumber);
        // console.log('Finished reading response:', result);

        handleReadingFinished(pageNumber === book.totalPages);
        toast.success('Reading stopped!');
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      }
      return;
    }

    const lastProgress = currentBook.progress
      .filter((item) => item.status !== 'active' && item.finishPage > 0)
      .at(-1);
    const startPage = lastProgress ? lastProgress.finishPage : 1;

    console.log('Останній запис:', lastProgress);
    console.log('Сторінка для старту:', startPage);

    console.log('Quick start:', book.progress);

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
          onReadingFinished={handleReadingFinished}
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
