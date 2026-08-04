import clsx from 'clsx';
import css from './Dashboard.module.css';

type DashboardProps = {
  children: React.ReactNode;
  className?: string | undefined;
};

export default function Dashboard({ children, className }: DashboardProps) {
  return <div className={clsx(css.wrapper, className)}>{children}</div>;
}
