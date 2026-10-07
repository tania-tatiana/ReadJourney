import { useState } from 'react';
import Descr from '../Descr/Descr.js';
import Diary from '../Diary/Diary.js';
import Statistics from '../Statistics/Statistics.js';
import type { LibraryBook } from '../../services/api.js';

type DetailsType = {
  isReading: boolean;
  book: LibraryBook;
};

export default function Details({ isReading, book }: DetailsType) {
  const [activeButton, setActiveButton] = useState<'diary' | 'statistics'>(
    'diary',
  );
  if (!isReading) {
    return <Descr />;
  }
  return activeButton === 'diary' ? (
    <Diary
      setActiveButton={setActiveButton}
      progress={book.progress}
      totalPages={book.totalPages}
    />
  ) : (
    <Statistics setActiveButton={setActiveButton} />
  );
}
