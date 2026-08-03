import { Link } from 'react-router-dom';
import css from './SliderRecommendedBooks.module.css';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import BookModal from '../BookModal/BookModal.js';

type Book = {
  id: number;
  title: string;
  author: string;
  image: string;
  totalPages: number;
};

export default function SliderRecommendedBooks() {
  const books = [
    {
      id: 1,
      title: 'Six doors',
      author: 'Irene Rozdobudko',
      image: '/recommended_book5.jpg',
      totalPages: 765,
    },
    {
      id: 2,
      title: 'The Orphanage',
      author: 'Serhiy Zhadan',
      image: '/recommended_book6.jpg',
      totalPages: 947,
    },
    {
      id: 3,
      title: 'Red',
      author: 'Andriy Kokotyukha',
      image: '/recommended_book7.jpg',
      totalPages: 678,
    },
  ];

  const [booksPerPage, setBooksPerPage] = useState(2);

  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <div className={css.wrapperDescr}>
      <div className={css.top}>
        <h3 className={css.title}>Recommended books</h3>
        <div className={css.books}>
          {books.map((book) => (
            <div key={book.id} className={css.bookCard}>
              <img
                src={book.image}
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
        <Link to="/" className={css.link}>
          Home
        </Link>
        <FaArrowRight />
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
