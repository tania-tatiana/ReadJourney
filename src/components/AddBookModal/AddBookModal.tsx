import css from './AddBookModal.module.css';

type AddBookModalType = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AddBookModal({ isOpen, onClose }: AddBookModalType) {
  if (!isOpen) return null;
  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={(event) => event.stopPropagation()}>
        <button className={css.closeButton} onClick={onClose}>
          ✕
        </button>
        <img src="/GoodJob.png" alt="Good job" className={css.picture} />
        <div className={css.titleAndText}>
          <h3 className={css.title}>Good job</h3>
          <p className={css.text}>
            Your book is now in <span className={css.marker}>the library!</span>{' '}
            The joy knows no bounds and now you can start your training
          </p>
        </div>
      </div>
    </div>
  );
}
