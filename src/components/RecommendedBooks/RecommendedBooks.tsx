import { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard.js';
import css from './RecommendedBooks.module.css';
import BookModal from '../BookModal/BookModal.js';
import {
  getBooks,
  type GetBook,
  type GetBooksParams,
} from '../../services/api.js';

type RecommendedBooksProps = {
  filters: GetBooksParams;
};

export default function RecommendedBooks({ filters }: RecommendedBooksProps) {
  const [booksPerPage, setBooksPerPage] = useState(2);

  const [currentPage, setCurrentPage] = useState<Number>(1);

  const [selectedBook, setSelectedBook] = useState<GetBook | null>(null);

  const [books, setBooks] = useState<GetBook[]>([]);

  useEffect(() => {
    async function getRecommendedBooks() {
      const result = await getBooks(filters);
      setBooks(result.results);
    }
    getRecommendedBooks();
  }, [filters]);

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
            key={book._id}
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
        image={selectedBook?.imageUrl ?? ''}
        totalPages={selectedBook?.totalPages ?? 0}
      />
    </div>
  );
}
