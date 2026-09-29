import { useEffect, useState } from 'react';
import css from './BookModal.module.css';
import { addBook, getLibraryBooks } from '../../services/api.js';
import { toast } from 'react-hot-toast';

type BookModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onBookAdded: () => void;
  id: string;
  title: string;
  author: string;
  image: string;
  totalPages: number;
};

export default function BookModal({
  isOpen,
  onClose,
  onBookAdded,
  id,
  title,
  author,
  image,
  totalPages,
}: BookModalProps) {
  const [isAdding, setIsAdding] = useState(false);

  async function handleAddBook() {
    if (isAdding) {
      return;
    }

    if (!id) {
      return null;
    }

    setIsAdding(true);

    try {
      const books = await getLibraryBooks();
      const alreadyExists = books.some(
        (book) => book.title === title && book.author === author,
      );
      if (alreadyExists) {
        toast.error('Such book already exists');
        return;
      }
      await addBook(id);
      onClose();
      onBookAdded();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setIsAdding(false);
    }
  }

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
            onClick={handleAddBook}
            disabled={isAdding}
          >
            Add to library
          </button>
        </div>
      </div>
    </>
  );
}
