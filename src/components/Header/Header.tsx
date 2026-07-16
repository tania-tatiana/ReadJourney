import { Link } from 'react-router-dom';
import UserNav from '../UserNav/UserNav';
import UserBar from '../UserBar/UserBar';
import css from './Header.module.css';

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
        <button>Log out</button>
      </div>
    </header>
  );
}
