import Descr from '../Descr/Descr.js';
import Diary from '../Diary/Diary.js';
type DetailsType = {
  isReading: boolean;
};

export default function Details({ isReading }: DetailsType) {
  return !isReading ? <Descr /> : <Diary />;
}
