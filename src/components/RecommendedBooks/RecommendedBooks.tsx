import { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard.js';
import css from './RecommendedBooks.module.css';
import BookModal from '../BookModal/BookModal.js';

type Book = {
  id: number;
  title: string;
  author: string;
  image: string;
  totalPages: number;
};

export default function RecommendedBooks() {
  const books = [
    {
      id: 1,
      title: 'Lovers of Justice',
      author: 'Yuri Andrukhovych',
      image: '/recommended_book.jpg',
      totalPages: 456,
    },
    {
      id: 2,
      title: 'It doesn`t hurt',
      author: 'Kateryna Babkina',
      image: '/recommended_book2.jpg',
      totalPages: 123,
    },
    {
      id: 3,
      title: 'Galya without a head',
      author: 'Lyuko Dashvar',
      image: '/recommended_book3.jpg',
      totalPages: 234,
    },
    {
      id: 4,
      title: 'Where there is no God',
      author: 'Max Kidruk',
      image: '/recommended_book4.jpg',
      totalPages: 543,
    },
    {
      id: 5,
      title: 'Six doors',
      author: 'Irene Rozdobudko',
      image: '/recommended_book5.jpg',
      totalPages: 765,
    },
    {
      id: 6,
      title: 'The Orphanage',
      author: 'Serhiy Zhadan',
      image: '/recommended_book6.jpg',
      totalPages: 947,
    },
    {
      id: 7,
      title: 'Red',
      author: 'Andriy Kokotyukha',
      image: '/recommended_book7.jpg',
      totalPages: 678,
    },
    {
      id: 8,
      title: 'Troscha',
      author: 'Troscha',
      image: '/recommended_book8.jpg',
      totalPages: 321,
    },
    {
      id: 9,
      title: 'Melodіja kavi u tonal`nostі kardamonu',
      author: 'Natalia Gurnytska',
      image: '/recommended_book9.jpg',
      totalPages: 386,
    },
    {
      id: 10,
      title: 'Just don`t tell anyone about it',
      author: 'Irena Karpa',
      image: '/recommended_book10.jpg',
      totalPages: 999,
    },
  ];

  const [booksPerPage, setBooksPerPage] = useState(2);

  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

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
