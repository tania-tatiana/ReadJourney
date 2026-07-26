import css from './BookCard.module.css';

type BookCardType = {
  id: number;
  title: string;
  author: string;
  image: string;
};

export default function BookCard({ title, author, image }: BookCardType) {
  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
}
