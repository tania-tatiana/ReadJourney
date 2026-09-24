import type { LibraryBook } from '../../services/api.js';
import css from './LibraryBookCard.module.css';

type LibraryBookType = {
  title: string;
  author: string;
  imageUrl: string;
  onClick: () => void;
};

export default function LibraryBookCard({
  title,
  author,
  imageUrl,
  onClick,
}: LibraryBookType) {
  return (
    <div>
      <img src={imageUrl} alt={title} onClick={onClick} />
      <div>
        <div className={css.text}>
          <p className={css.title}>{title}</p>
          <p className={css.author}>{author}</p>
        </div>
        <button></button>
      </div>
    </div>
  );
}
