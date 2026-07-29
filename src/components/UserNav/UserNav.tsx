import { NavLink } from 'react-router-dom';
import css from './UserNav.module.css';
import clsx from 'clsx';

type UserNavProps = {
  className?: string | undefined;
  onClick?: () => void;
};

export default function UserNav({ className, onClick }: UserNavProps) {
  return (
    <nav className={clsx(css.nav, className)}>
      <NavLink
        to="/"
        className={({ isActive }) => clsx(isActive && css.active, css.navLink)}
        onClick={onClick}
      >
        Home
      </NavLink>
      <NavLink
        to="/library"
        className={({ isActive }) => clsx(isActive && css.active, css.navLink)}
        onClick={onClick}
      >
        My library
      </NavLink>
    </nav>
  );
}
