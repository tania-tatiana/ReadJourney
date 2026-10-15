import { use, useEffect, useState } from 'react';
import AddReading from '../../components/AddReading/AddReading.js';
import Dashboard from '../../components/Dashboard/Dashboard.js';
import Details from '../../components/Details/Details.js';
import MyBook from '../../components/MyBook/MyBook.js';
import css from './ReadingPage.module.css';
import FinishBookModal from '../../components/FinishBookModal/FinishBookModal.js';
import { useLocation, useParams } from 'react-router-dom';
import {
  deleteReading,
  finishReading,
  getLibraryBooks,
  startReading,
  type LibraryBook,
} from '../../services/api.js';
import { toast } from 'react-hot-toast';

export default function ReadingPage() {
  const location = useLocation();
  const { bookId } = useParams();

  const initialBook = location.state?.book as LibraryBook | undefined;

  const [book, setBook] = useState<LibraryBook | undefined>(initialBook);

  const [isReading, setIsReading] = useState(
    () =>
      initialBook?.progress.some((item) => item.status === 'active') ?? false,
  );
  const [currentPage, setCurrentPage] = useState('');
  const [isBookFinished, setIsBookFinished] = useState(false);

  useEffect(() => {
    if (!bookId) return;

    let isCancelled = false;

    async function loadBook() {
      try {
        const libraryBooks = await getLibraryBooks();
        const currentBook = libraryBooks.find((item) => item._id === bookId);

        if (!currentBook) {
          if (!isCancelled) {
            setBook(undefined);
            toast.error('Book not found in your library');
          }
          return;
        }

        if (isCancelled) return;

        setBook(currentBook);
        setIsReading(
          currentBook.progress.some((item) => item.status == 'active'),
        );
      } catch (error) {
        if (!isCancelled && error instanceof Error) {
          toast.error(error.message);
        }
      }
    }

    void loadBook();

    return () => {
      isCancelled = true;
    };
  }, [bookId]);

  async function handleStartReading(pageNumber: number): Promise<void> {
    if (!book) return;

    try {
      const updatedBook = await startReading(book._id, pageNumber);

      setBook(updatedBook);

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

      setBook(updatedBook);

      setIsReading(
        updatedBook.progress.some((item) => item.status === 'active'),
      );
      handleReadingFinished(pageNumber === book.totalPages);
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
    const startPage = lastProgress ? lastProgress.finishPage + 1 : 1;

    await handleStartReading(startPage);
  }

  function handleReadingFinished(isFinished: boolean) {
    setIsReading(false);

    if (isFinished) {
      setIsBookFinished(true);
    }
  }

  async function handleReadingDelete(readingId: string): Promise<void> {
    if (!book) return;
    try {
      await deleteReading(book?._id, readingId);
      setBook((currentBook) =>
        currentBook
          ? {
              ...currentBook,
              progress: currentBook.progress.filter(
                (item) => item._id !== readingId,
              ),
            }
          : currentBook,
      );
      toast.success('Reading record deleted!');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  }

  return (
    <div className={css.wrapper}>
      <Dashboard className={css.readingDashboard}>
        <AddReading
          totalPages={book?.totalPages}
          bookId={book?._id}
          onStartReading={handleStartReading}
          onStopReading={handleStopReading}
          isReading={isReading}
          onPageChange={setCurrentPage}
        />
        {book && (
          <Details
            isReading={isReading}
            book={book}
            onDeleteReading={handleReadingDelete}
          />
        )}
      </Dashboard>
      {book && (
        <MyBook
          isReading={isReading}
          onQuickStart={handleQuickStart}
          book={book}
        />
      )}

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
