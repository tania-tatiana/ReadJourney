import css from './Dashboard.module.css';

type DashboardType = { children: React.ReactNode };

export default function Dashboard({ children }: DashboardType) {
  return <div className={css.wrapper}>{children}</div>;
}
