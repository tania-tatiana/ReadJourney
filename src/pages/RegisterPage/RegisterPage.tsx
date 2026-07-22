import { Link } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm.js';
import css from './RegisterPage.module.css';

export default function RegisterPage() {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <div className={css.logo}>
          <img src="/logo.svg" className={css.logoImage} />
          <span className={css.textLogo}>read journey</span>
        </div>

        <div className={css.titleForm}>
          <h2 className={css.title}>
            Expand your mind, reading <span className={css.span}>a book</span>
          </h2>
          <RegisterForm />
        </div>
      </div>
      <div className={css.imageBlock}>
        <picture>
          <source media="(min-width: 1280px)" srcSet="/iPhone-desktop.png" />
          <img
            src="/iPhone-mobile.png"
            alt="Mobile application"
            className={css.mobile}
          />
        </picture>
      </div>
    </div>
  );
}
