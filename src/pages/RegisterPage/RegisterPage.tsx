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
          <source
            media="(min-width: 1440px)"
            srcSet="/iPhone-desktop.webp 1x, /iPhone-desktop@2x.webp 2x"
          />
          <img
            src="/iPhone-mobile.webp"
            srcSet="/iPhone-mobile.webp 1x, /iPhone-mobile@2x.webp 2x"
            alt="Mobile application"
            className={css.mobile}
          />
        </picture>
      </div>
    </div>
  );
}
