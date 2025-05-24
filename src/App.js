import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import SmoothScroll from './components/common/SmoothScroll';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import FocusAreasPage from './pages/FocusAreasPage';
import ProjectsPage from './pages/ProjectsPage';
import PartnershipsPage from './pages/PartnershipsPage';
import ResourcesPage from './pages/ResourcesPage';
import NewsPage from './pages/NewsPage';
import CareersPage from './pages/CareersPage';
import ComingSoonPage from './pages/ComingSoonPage';
import NotFoundPage from './pages/NotFoundPage';

// Component to check if we should show the main site or coming soon
const AppContent = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  
  // Check if preview mode is enabled
  const isPreviewMode = urlParams.get('preview') === 'insocia2024' || 
                       location.pathname.startsWith('/preview');

  // If not in preview mode, show coming soon page
  if (!isPreviewMode) {
    return <ComingSoonPage />;
  }

  // In preview mode, show the full website
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/focus-areas" element={<FocusAreasPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/partnerships" element={<PartnershipsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        
        {/* Preview routes */}
        <Route path="/preview" element={<HomePage />} />
        <Route path="/preview/about" element={<AboutPage />} />
        <Route path="/preview/contact" element={<ContactPage />} />
        <Route path="/preview/services" element={<ServicesPage />} />
        <Route path="/preview/focus-areas" element={<FocusAreasPage />} />
        <Route path="/preview/projects" element={<ProjectsPage />} />
        <Route path="/preview/partnerships" element={<PartnershipsPage />} />
        <Route path="/preview/resources" element={<ResourcesPage />} />
        <Route path="/preview/news" element={<NewsPage />} />
        <Route path="/preview/careers" element={<CareersPage />} />
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
};

function App() {
  return (
    <Router>
      <SmoothScroll>
        <AppContent />
      </SmoothScroll>
    </Router>
  );
}

export default React.memo(App); 