import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import css from './Workout.module.css';

export default function Workout() {
  const steps = [
    {
      id: 1,
      title: 'Create a personal library: ',
      text: 'add the books you intend to read to it.',
    },
    {
      id: 2,
      title: 'Create your first workout: ',
      text: 'define a goal, choose a period, start training.',
    },
  ];
  return (
    <div className={css.wrapperDescr}>
      <div className={css.top}>
        <h3 className={css.title}>Start your workout</h3>
        <div className={css.steps}>
          {steps.map(({ id, title, text }) => (
            <div key={id} className={css.step}>
              <div className={css.number}>{id}</div>
              <p className={css.text}>
                <span className={css.marker}>{title}</span>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={css.linkBlock}>
        <Link to="/library" className={css.link}>
          My library
        </Link>
        <FaArrowRight />
      </div>
    </div>
  );
}
