import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import AllCertifications from './pages/AllCertifications';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Default: dark mode. Only override if user explicitly saved light.
    const saved = localStorage.getItem('theme');
    if (saved === 'light') return false;
    return true; // dark by default
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((v) => !v);

  return (
    <Routes>
      <Route path="/" element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      <Route path="/projects" element={<AllProjects darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      <Route path="/certifications" element={<AllCertifications darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
    </Routes>
  );
}
