import AddBook from '../AddBook/AddBook.js';
import css from './BookModal.module.css';

type BookModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  author: string;
  image: string;
  totalPages: number;
};

export default function BookModal({
  isOpen,
  onClose,
  title,
  author,
  image,
  totalPages,
}: BookModalProps) {
  if (!isOpen) return null;
  return (
    <>
      <div className={css.backdrop} onClick={onClose}>
        <div className={css.modal} onClick={(event) => event.stopPropagation()}>
          <button className={css.closeButton} onClick={onClose}>
            ✕
          </button>
          <img src={image} alt={title} className={css.cover} />
          <div className={css.titleAndAuthor}>
            <h2 className={css.title}>{title}</h2>
            <p className={css.author}>{author}</p>
          </div>
          <p className={css.totalPages}>{totalPages} pages</p>
          <AddBook />
        </div>
      </div>
    </>
  );
}
