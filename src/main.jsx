import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { initializeAnalytics } from './analytics';
import './index.css';
import App from './App.jsx';

initializeAnalytics();

const rootElement = document.getElementById('root');
const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
const staticPath = rootElement.dataset.staticRoute;
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

if (rootElement.hasChildNodes() && staticPath === currentPath) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
