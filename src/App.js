import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import SmoothScroll from './components/common/SmoothScroll';
import MaintenanceOverlay from './components/common/MaintenanceOverlay';
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
import NotFoundPage from './pages/NotFoundPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import AccessibilityPage from './pages/AccessibilityPage';

// Secret route for testing - random path that only you and client know
const SECRET_ROUTE = '/dev-preview-k7x9m2p8';

function AppContent() {
  const location = useLocation();
  
  // Check if current path is the secret route
  const isSecretRoute = location.pathname === SECRET_ROUTE;
  
  // If accessing the secret route, redirect to home page with preview parameter
  if (isSecretRoute) {
    return <Navigate to="/?preview=true" replace />;
  }
  
  // Check if we're in preview mode via URL parameter
  const urlParams = new URLSearchParams(location.search);
  const isPreviewMode = urlParams.get('preview') === 'true';
  
  // If not in preview mode, show maintenance overlay
  if (!isPreviewMode) {
    return <MaintenanceOverlay />;
  }
  
  // If in preview mode, show normal website
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
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/terms-of-use" element={<TermsPage />} />
        <Route path="/accessibility" element={<AccessibilityPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
}

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