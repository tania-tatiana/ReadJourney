import { Link } from 'react-router-dom';
import css from './SliderRecommendedBooks.module.css';
import { FaArrowRight } from 'react-icons/fa';

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

  return (
    <div className={css.wrapperDescr}>
      <div className={css.top}>
        <h3 className={css.title}>Recommended books</h3>
        <div className={css.books}>
          {books.map((book) => (
            <div className={css.bookCard}>
              <img src={book.image} alt={book.title} className={css.image} />
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
    </div>
  );
}
