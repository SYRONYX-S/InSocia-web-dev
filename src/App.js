import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainLayout from './layouts/MainLayout';
import SmoothScroll from './components/common/SmoothScroll';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import FocusAreasPage from './pages/FocusAreasPage';
import ProjectsPage from './pages/ProjectsPage';
import PartnershipsPage from './pages/PartnershipsPage';
import ResourcesPage from './pages/ResourcesPage';
import NewsPage from './pages/NewsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease-out-cubic', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <SmoothScroll>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/focus-areas" element={<FocusAreasPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/partnerships" element={<PartnershipsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MainLayout>
      </SmoothScroll>
    </Router>
  );
}

export default App; 