import UserNav from '../UserNav/UserNav.js';
import css from './BurgerMenu.module.css';

type BurgerMenuProps = {
  onClose: () => void;
};

export default function BurgerMenu({ onClose }: BurgerMenuProps) {
  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={(event) => event.stopPropagation()}>
        <button className={css.closeButton} onClick={onClose}>
          ✕
        </button>
        <div className={css.contentOfBurger}>
          <UserNav className={css.mobileNav} onClick={onClose} />
          <button className={css.button}>Log out</button>
        </div>
      </div>
    </div>
  );
}
