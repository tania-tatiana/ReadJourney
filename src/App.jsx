import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout/MainLayout';
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ReadingPage from './pages/ReadingPage/ReadingPage';
import MyLibraryPage from './pages/MyLibraryPage/MyLibraryPage';
import RecommendedPage from './pages/RecommendedPage/RecommendedPage';
import WelcomePage from './pages/Welcome page/WelcomePage';

function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/recommended" element={<RecommendedPage />} />
          <Route path="/library" element={<MyLibraryPage />} />
          <Route path="/reading" element={<ReadingPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
