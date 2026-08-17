import { DiVim } from 'react-icons/di';
import css from './FinishBookModal.module.css';

type FinishBookModalProps = {
  onClose: () => void;
};

export default function FinishBookModal({ onClose }: FinishBookModalProps) {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button
          type="button"
          className={css.closeButton}
          onClick={onClose}
          aria-label="Close"
        >
          X
        </button>

        <img src="/books.png" alt="Books" className={css.image} />

        <h2 className={css.title}>The book is read</h2>

        <p className={css.text}>
          It was an <span className={css.textMarker}>exciting journey</span>,
          where each page revealed new horizons, and the characters became
          inseparable friends.
        </p>
      </div>
    </div>
  );
}
