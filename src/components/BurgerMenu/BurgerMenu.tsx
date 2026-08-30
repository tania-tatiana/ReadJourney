import { useNavigate } from 'react-router-dom';
import UserNav from '../UserNav/UserNav.js';
import css from './BurgerMenu.module.css';
import { signOut } from '../../services/api.js';
import { toast } from 'react-hot-toast';

type BurgerMenuProps = {
  onClose: () => void;
};

export default function BurgerMenu({ onClose }: BurgerMenuProps) {
  const navigate = useNavigate();

  const onClick = async () => {
    try {
      await signOut();

      navigate('/');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
    }
  };
  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={(event) => event.stopPropagation()}>
        <button className={css.closeButton} onClick={onClose}>
          ✕
        </button>
        <div className={css.contentOfBurger}>
          <UserNav className={css.mobileNav} onClick={onClose} />
          <button className={css.button} onClick={onClick}>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}
