import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/home/Hero';
import FocusAreas from '../components/home/FocusAreas';
import FeaturedProjects from '../components/home/FeaturedProjects';
import PastCollaborations from '../components/home/PastCollaborations';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Insocia Consultancy | Driving Social Change Through Evidence-Based Solutions</title>
        <meta name="description" content="Insocia partners with corporations, governments, NGOs, and philanthropic organizations to unlock greater social impact through rigorous research, independent evaluation, and strategic advocacy." />
        <meta name="keywords" content="policy research, CSR evaluation, ESG rating, social impact research, advocacy, evidence-based solutions, social change" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Insocia Consultancy",
            "alternateName": "Institute for Social Impact and Advocacy",
            "url": "https://insocia.in",
            "logo": "https://insocia.in/images/logo.svg",
            "description": "Insocia Consultancy partners with corporations, governments, NGOs, and philanthropic organizations to unlock greater social impact through rigorous research, independent evaluation, and strategic advocacy.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "AECS Layout, Sanjayanagara",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "postalCode": "560094",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9876543210",
              "contactType": "customer service",
              "email": "connect@insocia.in"
            },
            "sameAs": [
              "https://www.linkedin.com/company/insocia-consultancy"
            ]
          })}
        </script>
      </Helmet>
      
      {/* Section 1: Hero - Value Proposition & Main CTA */}
      <Hero />
      
      {/* Section 2: Focus Areas - What We Do (Core Services) */}
      <FocusAreas />
      
      {/* Section 3: Featured Projects - What We've Achieved (Social Proof) */}
      <FeaturedProjects />
      
      {/* Section 4: Past Collaborations - Who Trusts Us (Credibility) */}
      <PastCollaborations />
    </>
  );
};

export default HomePage; 