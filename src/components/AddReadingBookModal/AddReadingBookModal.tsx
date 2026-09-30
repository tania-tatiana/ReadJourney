import { useEffect, useState } from 'react';
import css from './BookModal.module.css';
import { toast } from 'react-hot-toast';

type AddReadingBookModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onStartReading: () => void;
  id: string;
  title: string;
  author: string;
  image: string;
  totalPages: number;
};

export default function AddReadingBookModal({
  isOpen,
  onClose,
  onStartReading,
  id,
  title,
  author,
  image,
  totalPages,
}: AddReadingBookModalProps) {
  const [isStarting, setIsStarting] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);
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
            onClick={onStartReading}
            disabled={isStarting}
          >
            Start reading
          </button>
        </div>
      </div>
    </>
  );
}
