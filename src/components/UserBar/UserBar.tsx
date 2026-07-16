import css from './UserBar.module.css';

export default function UserBar() {
  return (
    <div className={css.userBar}>
      <div className={css.avatar}>I</div>
      <p className={css.user}>Ilona Ratushniak</p>
    </div>
  );
}
