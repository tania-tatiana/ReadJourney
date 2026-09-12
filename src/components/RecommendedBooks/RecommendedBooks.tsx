import { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard.js';
import css from './RecommendedBooks.module.css';
import BookModal from '../BookModal/BookModal.js';
import {
  getBooks,
  type GetBook,
  type GetBooksFilters,
} from '../../services/api.js';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

type RecommendedBooksProps = {
  filters: GetBooksFilters;
};

export default function RecommendedBooks({ filters }: RecommendedBooksProps) {
  const [booksPerPage, setBooksPerPage] = useState(2);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [selectedBook, setSelectedBook] = useState<GetBook | null>(null);

  const [books, setBooks] = useState<GetBook[]>([]);

  useEffect(() => {
    async function getRecommendedBooks() {
      const params = { ...filters, page: currentPage, limit: booksPerPage };
      const result = await getBooks(params);
      setBooks(result.results);
    }
    getRecommendedBooks();
  }, [filters, currentPage, booksPerPage]);

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
      <div className={css.arrows}>
        <div className={css.arrow}>
          <IoIosArrowBack />
        </div>
        <div className={css.arrow}>
          <IoIosArrowForward />
        </div>
      </div>
      <div className={css.books}>
        {books.map((book) => (
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
