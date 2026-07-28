import css from './BookCard.module.css';

type BookCardType = {
  title: string;
  author: string;
  image: string;
  onClick: () => void;
};

export default function BookCard({
  title,
  author,
  image,
  onClick,
}: BookCardType) {
  return (
    <div className={css.bookCard} onClick={onClick}>
      <img src={image} alt={title} className={css.image} />
      <div className={css.textBlock}>
        <h3 className={css.title}>{title}</h3>
        <p className={css.author}>{author}</p>
      </div>
    </div>
  );
}
