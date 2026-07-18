import { Link } from 'react-router-dom';
import css from './Header.module.css';
import UserBar from '../UserBar/UserBar.js';
import UserNav from '../UserNav/UserNav.js';

export default function Header() {
  return (
    <header className={css.wrapper}>
      <Link to="/recommended" className={css.logo}>
        <img src="../../../public/logo.svg" alt="logo" />
        read journey
      </Link>
      <UserNav />
      <div className={css.userBar}>
        <UserBar />
        <button className={css.button}>Log out</button>
      </div>
    </header>
  );
}
