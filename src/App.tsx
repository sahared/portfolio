import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense, lazy } from 'react';
import ErrorBoundary from './components/ui/ErrorBoundary';

// Lazy load components for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Add a small delay to ensure the page has rendered
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };

    // Use requestAnimationFrame for better performance
    requestAnimationFrame(() => {
      setTimeout(scrollToTop, 100);
    });
  }, [pathname]);

  return null;
}

function AppRoutes({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    }>
      <Routes>
        <Route path="/" element={<HomePage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/about" element={<AboutPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/projects" element={<ProjectsPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/projects/:id" element={<ProjectDetailPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/contact" element={<ContactPage isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="*" element={<NotFoundPage isDark={isDark} toggleTheme={toggleTheme} />} />
      </Routes>
    </Suspense>
  );
}

function App() {
  // Check for saved theme preference or default to dark mode
  // If theme is 'light', use light mode. Otherwise (null or 'dark'), use dark mode.
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme !== 'light';
    }
    return true; // Default to dark for SSR/initial load
  });

  useEffect(() => {
    // Sync the class with the state
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newIsDark = !prev;
      localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
      return newIsDark;
    });
  };

  return (
    <ErrorBoundary>
      <Router>
        <div className={isDark ? 'dark' : ''}>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <ScrollToTop />
            <AppRoutes isDark={isDark} toggleTheme={toggleTheme} />
          </div>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
