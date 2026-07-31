import { useState } from 'react';
import css from './BookModal.module.css';
import AddBookModal from '../AddBookModal/AddBookModal.js';

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
  const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false);
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
          <button
            type="submit"
            className={css.button}
            onClick={() => setIsAddBookModalOpen(true)}
          >
            Add book
          </button>
        </div>
      </div>
      <AddBookModal
        isOpen={!!isAddBookModalOpen}
        onClose={() => setIsAddBookModalOpen(false)}
      />
    </>
  );
}
