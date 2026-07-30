import clsx from 'clsx';
import css from './Dashboard.module.css';

type DashboardProps = {
  children: React.ReactNode;
  classname?: string | undefined;
};

export default function Dashboard({ children, classname }: DashboardProps) {
  return <div className={clsx(css.wrapper, classname)}>{children}</div>;
}
