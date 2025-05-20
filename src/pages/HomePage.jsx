import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/home/Hero';
import MissionStatement from '../components/home/MissionStatement';
import FocusAreas from '../components/home/FocusAreas';
import FeaturedProjects from '../components/home/FeaturedProjects';
import PartnerLogos from '../components/home/PartnerLogos';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>InSocia Development Consultancy | Research, Innovation, Action</title>
        <meta name="description" content="InSocia Development Consultancy partners with governments, NGOs, and international development agencies to design evidence-based solutions for sustainable social development." />
        <meta name="keywords" content="development consultancy, social policy, research, innovation, sustainable development" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "InSocia Development Consultancy",
              "url": "https://insocia.in",
              "logo": "https://insocia.in/logo.png",
              "description": "Creating equitable societies through innovative policy approaches and rigorous research.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kozhikode",
                "addressRegion": "Kerala",
                "addressCountry": "India"
              }
            }
          `}
        </script>
      </Helmet>
      
      <Hero />
      <MissionStatement />
      <FocusAreas />
      <FeaturedProjects />
      <PartnerLogos />
    </>
   );
};

export default HomePage; 