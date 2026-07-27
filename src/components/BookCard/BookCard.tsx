import css from './BookCard.module.css';

type BookCardType = {
  title: string;
  author: string;
  image: string;
};

export default function BookCard({ title, author, image }: BookCardType) {
  return (
    <div className={css.bookCard}>
      <img src={image} alt={title} className={css.image} />
      <div className={css.textBlock}>
        <h3 className={css.title}>{title}</h3>
        <p className={css.author}>{author}</p>
      </div>
    </div>
  );
}
