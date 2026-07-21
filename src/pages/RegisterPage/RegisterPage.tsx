import RegisterForm from '../../components/RegisterForm/RegisterForm.js';
import css from './RegisterPage.module.css';

export default function RegisterPage() {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <img src="/logo.svg" className={css.logo} />
        <div className={css.titleForm}>
          <h2 className={css.title}>
            Expand your mind, reading <span className={css.span}>a book</span>
          </h2>
          <RegisterForm />
        </div>
      </div>
      <div className={css.imageBlock}>
        <img src="/iPhone 15 Black 1.png" className={css.mobile} />
      </div>
    </div>
  );
}
