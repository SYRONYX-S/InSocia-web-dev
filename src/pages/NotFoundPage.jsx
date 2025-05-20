import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Button from '../components/common/Button';

const NotFoundPage = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Page Not Found | InSocia Development Consultancy</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="flex items-center justify-center min-h-[70vh] px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button to="/" size="lg">
            Return to Homepage
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFoundPage; 