import { Link } from 'react-router-dom';
import css from './Header.module.css';
import UserBar from '../UserBar/UserBar.js';
import UserNav from '../UserNav/UserNav.js';
import { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu.js';

export default function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

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
        <button className={css.button}>Log out</button>
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
