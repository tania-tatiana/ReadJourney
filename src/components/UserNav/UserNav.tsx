import { NavLink } from 'react-router-dom';
import css from './UserNav.module.css';
import clsx from 'clsx';

export default function UserNav() {
  return (
    <nav className={css.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => clsx(isActive && css.active, css.navLink)}
      >
        Home
      </NavLink>
      <NavLink
        to="/library"
        className={({ isActive }) => clsx(isActive && css.active, css.navLink)}
      >
        My library
      </NavLink>
    </nav>
  );
}
