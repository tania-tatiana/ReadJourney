import { Link, useNavigate } from 'react-router-dom';
import css from './Header.module.css';
import UserBar from '../UserBar/UserBar.js';
import UserNav from '../UserNav/UserNav.js';
import { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu.js';
import { toast } from 'react-hot-toast';
import { signOut } from '../../services/api.js';

export default function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

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
    <header className={css.wrapper}>
      <div className={css.logoAndNav}>
        <Link to="/recommended" className={css.logo}>
          <img src="/logo.svg" alt="logo" className={css.pictureLogo} />
          <span className={css.textLogo}>read journey</span>
        </Link>
        <UserNav className={css.styleNav} />
      </div>
      <div className={css.userBar}>
        <UserBar />
        <button className={css.button} onClick={onClick}>
          Log out
        </button>
        <button
          className={css.burgerButton}
          onClick={() => setIsBurgerOpen(true)}
        >
          <img src="/burger.svg" alt="Burger" className={css.burger} />
        </button>
      </div>
      {isBurgerOpen && <BurgerMenu onClose={() => setIsBurgerOpen(false)} />}
    </header>
  );
}
