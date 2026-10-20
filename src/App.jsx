import { useEffect, useSyncExternalStore } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import AllCertifications from './pages/AllCertifications';
import { trackPageView } from './analytics';

const THEME_CHANGE_EVENT = 'portfolio-theme-change';

function subscribeToTheme(callback) {
  window.addEventListener('storage', callback);
  window.addEventListener(THEME_CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(THEME_CHANGE_EVENT, callback);
  };
}

function getThemeSnapshot() {
  return localStorage.getItem('theme') !== 'light';
}

function getServerThemeSnapshot() {
  return true;
}

export default function App() {
  const { pathname } = useLocation();
  const darkMode = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  const toggleDarkMode = () => {
    localStorage.setItem('theme', darkMode ? 'light' : 'dark');
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  return (
    <Routes>
      <Route path="/" element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      <Route path="/projects" element={<AllProjects darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      <Route path="/certifications" element={<AllCertifications darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
    </Routes>
  );
}
