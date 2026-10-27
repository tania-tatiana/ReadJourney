import { useEffect, useRef, useState } from 'react';
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
import AddBookModal from '../AddBookModal/AddBookModal.js';
import { toast } from 'react-hot-toast';

type RecommendedBooksProps = {
  filters: GetBooksFilters;
};

function getBooksPerPage() {
  if (window.innerWidth >= 1440) {
    return 10;
  }
  if (window.innerWidth >= 768) {
    return 8;
  }
  return 2;
}

export default function RecommendedBooks({ filters }: RecommendedBooksProps) {
  const [booksPerPage, setBooksPerPage] = useState(getBooksPerPage);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [totalPages, setTotalPages] = useState<number>(1);

  const [selectedBook, setSelectedBook] = useState<GetBook | null>(null);

  const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false);

  const [books, setBooks] = useState<GetBook[]>([]);

  const previousFilters = useRef(filters);

  useEffect(() => {
    const filtersChenged =
      previousFilters.current.title !== filters.title ||
      previousFilters.current.author !== filters.author;

    previousFilters.current = filters;

    if (filtersChenged && currentPage !== 1) {
      setCurrentPage(1);
      return;
    }

    let isCancelled = false;

    async function getRecommendedBooks() {
      try {
        const params = {
          title: filters.title.trim(),
          author: filters.author.trim(),
          page: currentPage,
          limit: booksPerPage,
        };

        const result = await getBooks(params);

        if (result.results.length === 0) {
          toast('No books found for your search.');
        }
        if (isCancelled) return;

        setBooks(result.results);
        setTotalPages(result.totalPages ?? 1);
      } catch (error) {
        if (!isCancelled) {
          toast.error('Failed to load books. Please try again.');
        }
      }
    }

    void getRecommendedBooks();

    return () => {
      isCancelled = true;
    };
  }, [filters.title, filters.author, currentPage, booksPerPage]);

  // useEffect(() => {
  //   async function getRecommendedBooks() {
  //     const params = { ...filters, page: currentPage, limit: booksPerPage };
  //     const result = await getBooks(params);
  //     setBooks(result.results);
  //     setTotalPages(result.totalPages);
  //   }
  //   getRecommendedBooks();
  // }, [filters, currentPage, booksPerPage]);

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
        <button
          className={css.arrow}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          <IoIosArrowBack />
        </button>
        <button
          className={css.arrow}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          <IoIosArrowForward />
        </button>
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
        onBookAdded={() => setIsAddBookModalOpen(true)}
        id={selectedBook?._id ?? ''}
        title={selectedBook?.title ?? ''}
        author={selectedBook?.author ?? ''}
        image={selectedBook?.imageUrl ?? ''}
        totalPages={selectedBook?.totalPages ?? 0}
      />
      <AddBookModal
        isOpen={isAddBookModalOpen}
        onClose={() => setIsAddBookModalOpen(false)}
      />
    </div>
  );
}
