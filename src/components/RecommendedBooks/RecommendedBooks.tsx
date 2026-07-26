import BookCard from '../BookCard/BookCard.js';
import css from './RecommendedBooks.module.css';

export default function RecommendedBooks() {
  const books = [
    {
      id: 1,
      title: 'Lovers of Justice',
      author: 'Yuri Andrukhovych',
      image: '/recommended_book.jpg',
    },
    {
      id: 2,
      title: 'It doesn`t hurt',
      author: 'Kateryna Babkina',
      image: '/recommended_book2.jpg',
    },
    {
      id: 3,
      title: 'Galya without a head',
      author: 'Lyuko Dashvar',
      image: '/recommended_book3.jpg',
    },
    {
      id: 4,
      title: 'Where there is no God',
      author: 'Max Kidruk',
      image: '/recommended_book4.jpg',
    },
    {
      id: 5,
      title: 'Six doors',
      author: 'Irene Rozdobudko',
      image: '/recommended_book5.jpg',
    },
    {
      id: 6,
      title: 'The Orphanage',
      author: 'Serhiy Zhadan',
      image: '/recommended_book6.jpg',
    },
    {
      id: 7,
      title: 'Red',
      author: 'Andriy Kokotyukha',
      image: '/recommended_book7.jpg',
    },
    {
      id: 8,
      title: 'Troscha',
      author: 'Troscha',
      image: '/recommended_book8.jpg',
    },
    {
      id: 9,
      title: 'Melodіja kavi u tonal`nostі kardamonu',
      author: 'Natalia Gurnytska',
      image: '/recommended_book9.jpg',
    },
    {
      id: 10,
      title: 'Just don`t tell anyone about it',
      author: 'Irena Karpa',
      image: '/recommended_book10.jpg',
    },
  ];
  return (
    <div className={css.wrapper}>
      <h2>Recommended</h2>
      {books.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  );
}
