import css from './LibraryBookCard.module.css';

export default function LibraryBookCard({ title, author, imageUrl, onClick }) {
  return (
    <div onClick={onClick}>
      <img src={imageUrl} alt={title} />
      <div>
        <div className={css.text}>
          <p className={css.title}>{title}</p>
          <p className={css.author}>{author}</p>
        </div>
        <button></button>
      </div>
    </div>
  );
}
