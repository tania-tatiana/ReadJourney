import { Link } from 'react-router-dom';
import css from './Header.module.css';
import UserBar from '../UserBar/UserBar.js';
import UserNav from '../UserNav/UserNav.js';

export default function Header() {
  return (
    <header className={css.wrapper}>
      <div className={css.logoAndNav}>
        <Link to="/recommended" className={css.logo}>
          <img
            src="../../../public/logo.svg"
            alt="logo"
            className={css.pictureLogo}
          />
          <p className={css.textLogo}>read journey</p>
        </Link>
        <UserNav />
      </div>
      <div className={css.userBar}>
        <UserBar />
        <button className={css.button}>Log out</button>
        <img
          src="../../../public/burger.svg"
          alt="Burger"
          className={css.burger}
        />
      </div>
    </header>
  );
}
