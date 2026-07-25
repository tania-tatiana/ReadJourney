import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header.js';

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
