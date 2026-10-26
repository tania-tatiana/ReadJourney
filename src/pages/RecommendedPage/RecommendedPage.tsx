import { useCallback, useState } from 'react';
import Dashboard from '../../components/Dashboard/Dashboard.js';
import Filters from '../../components/Filters/Filters.js';
import Quote from '../../components/Quote/Quote.js';
import RecommendedBooks from '../../components/RecommendedBooks/RecommendedBooks.js';
import Workout from '../../components/Workout/Workout.js';
import css from './RecommendedPage.module.css';
import type { GetBooksFilters } from '../../services/api.js';

export default function RecommendedPage() {
  const [filters, setFilters] = useState({ title: '', author: '' });

  // const handleSearch = (data: { title: string; author: string }) => {
  //   setFilters(data);
  // };

  const handleSearch = useCallback((data: GetBooksFilters) => {
    setFilters(data);
  }, []);
  return (
    <div className={css.wrapper}>
      <Dashboard>
        <Filters onSearch={handleSearch} />
        <Workout />
        <Quote />
      </Dashboard>
      <RecommendedBooks filters={filters} />
    </div>
  );
}
