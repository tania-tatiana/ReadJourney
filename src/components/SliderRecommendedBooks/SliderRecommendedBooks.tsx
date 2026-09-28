import { Link } from 'react-router-dom';
import css from './SliderRecommendedBooks.module.css';
import { FaArrowRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import BookModal from '../BookModal/BookModal.js';
import { type GetBook, getBooks } from '../../services/api.js';
import AddBookModal from '../AddBookModal/AddBookModal.js';

export default function SliderRecommendedBooks() {
  const [books, setBooks] = useState<GetBook[]>([]);

  const [selectedBook, setSelectedBook] = useState<GetBook | null>(null);

  const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false);

  useEffect(() => {
    async function fetchBooks() {
      const result = await getBooks({
        author: '',
        title: '',
        page: 1,
        limit: 3,
      });
      setBooks(result.results);
    }
    fetchBooks();
  }, []);

  return (
    <div className={css.wrapperDescr}>
      <div className={css.top}>
        <h3 className={css.title}>Recommended books</h3>
        <div className={css.books}>
          {books.map((book) => (
            <div key={book._id} className={css.bookCard}>
              <img
                src={book.imageUrl}
                alt={book.title}
                className={css.image}
                onClick={() => setSelectedBook(book)}
              />
              <div className={css.textBlock}>
                <h3 className={css.titleOfBook}>{book.title}</h3>
                <p className={css.author}>{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={css.linkBlock}>
        <Link to="/recommended" className={css.link}>
          Home
        </Link>
        <Link to="/recommended" className={css.link}>
          <FaArrowRight />
        </Link>
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
