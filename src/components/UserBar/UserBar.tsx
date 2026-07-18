import css from './UserBar.module.css';

export default function UserBar() {
  const username = 'Ilona Ratushniak';
  return (
    <div className={css.userBar}>
      <div className={css.avatar}>{username.charAt(0).toUpperCase()}</div>
      <p className={css.user}>{username}</p>
    </div>
  );
}
