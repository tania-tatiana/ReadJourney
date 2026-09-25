import css from './LibraryBookCard.module.css';

type LibraryBookType = {
  title: string;
  author: string;
  imageUrl: string;
  onClick: () => void;
};

export default function LibraryBookCard({
  title,
  author,
  imageUrl,
  onClick,
}: LibraryBookType) {
  return (
    <div className={css.wrapper}>
      <img src={imageUrl} alt={title} onClick={onClick} className={css.image} />
      <div className={css.secondLine}>
        <div className={css.text}>
          <p className={css.title}>{title}</p>
          <p className={css.author}>{author}</p>
        </div>
        <button type="button" className={css.deleteButton}>
          <img src="../../../public/deleteButton.svg" alt="Delete button" />
        </button>
      </div>
    </div>
  );
}
