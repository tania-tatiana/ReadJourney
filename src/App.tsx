import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout/MainLayout.js';
import AuthLayout from './layouts/AuthLayout/AuthLayout.js';
import RegisterPage from './pages/RegisterPage/RegisterPage.js';
import LoginPage from './pages/LoginPage/LoginPage.js';
import ReadingPage from './pages/ReadingPage/ReadingPage.js';
import MyLibraryPage from './pages/MyLibraryPage/MyLibraryPage.js';
import RecommendedPage from './pages/RecommendedPage/RecommendedPage.js';
import WelcomePage from './pages/Welcome page/WelcomePage.js';

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
