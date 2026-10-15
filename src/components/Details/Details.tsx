import { useState } from 'react';
import Descr from '../Descr/Descr.js';
import Diary from '../Diary/Diary.js';
import Statistics from '../Statistics/Statistics.js';
import type { LibraryBook } from '../../services/api.js';

type DetailsType = {
  isReading: boolean;
  book: LibraryBook;
  onDeleteReading: (readingId: string) => Promise<void>;
};

export default function Details({
  isReading,
  book,
  onDeleteReading,
}: DetailsType) {
  const [activeButton, setActiveButton] = useState<'diary' | 'statistics'>(
    'diary',
  );
  if (!isReading && book.progress.length === 0) {
    return <Descr />;
  }
  return activeButton === 'diary' ? (
    <Diary
      setActiveButton={setActiveButton}
      progress={book.progress}
      totalPages={book.totalPages}
      bookId={book._id}
      onDeleteReading={onDeleteReading}
    />
  ) : (
    <Statistics setActiveButton={setActiveButton} book={book} />
  );
}
