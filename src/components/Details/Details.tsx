import { useState } from 'react';
import Descr from '../Descr/Descr.js';
import Diary from '../Diary/Diary.js';
import Statistics from '../Statistics/Statistics.js';

type DetailsType = {
  isReading: boolean;
};

export default function Details({ isReading }: DetailsType) {
  const [activeButton, setActiveButton] = useState<'diary' | 'statistics'>(
    'diary',
  );
  if (!isReading) {
    return <Descr />;
  }
  return activeButton === 'diary' ? (
    <Diary setActiveButton={setActiveButton} />
  ) : (
    <Statistics setActiveButton={setActiveButton} />
  );
}
