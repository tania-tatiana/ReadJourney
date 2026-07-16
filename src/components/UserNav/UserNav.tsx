import { NavLink } from 'react-router-dom';
import css from './UserNav.module.css';

export default function UserNav() {
  return (
    <nav className={css.nav}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/library">My library</NavLink>
    </nav>
  );
}
