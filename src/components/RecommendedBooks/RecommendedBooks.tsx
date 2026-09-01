import { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard.js';
import css from './RecommendedBooks.module.css';
import BookModal from '../BookModal/BookModal.js';
import { getBook, type GetBook } from '../../services/api.js';

export default function RecommendedBooks() {
  const [booksPerPage, setBooksPerPage] = useState(2);

  const [selectedBook, setSelectedBook] = useState<GetBook | null>(null);

  useEffect(() => {
    const updateBooksCount = () => {
      if (window.innerWidth >= 1440) {
        setBooksPerPage(10);
      } else if (window.innerWidth >= 768) {
        setBooksPerPage(8);
      } else {
        setBooksPerPage(2);
      }
    };

    updateBooksCount();
    window.addEventListener('resize', updateBooksCount);

    return () => window.removeEventListener('resize', updateBooksCount);
  }, []);

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Recommended</h2>
      <div className={css.books}>
        {books.slice(0, booksPerPage).map((book) => (
          <BookCard
            key={book.id}
            {...book}
            onClick={() => setSelectedBook(book)}
          />
        ))}
      </div>
      <BookModal
        isOpen={!!selectedBook}
        onClose={() => setSelectedBook(null)}
        title={selectedBook?.title ?? ''}
        author={selectedBook?.author ?? ''}
        image={selectedBook?.image ?? ''}
        totalPages={selectedBook?.totalPages ?? 0}
      />
    </div>
  );
}
