import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/home/Hero';
import MissionStatement from '../components/home/MissionStatement';
import FocusAreas from '../components/home/FocusAreas';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Testimonials from '../components/home/Testimonials';
import PartnerLogos from '../components/home/PartnerLogos';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Insocia Consultancy | Driving Social Change Through Evidence-Based Solutions</title>
        <meta name="description" content="Insocia partners with corporations, governments, NGOs, and philanthropic organizations to unlock greater social impact through rigorous research, independent evaluation, and strategic advocacy." />
        <meta name="keywords" content="policy research, CSR evaluation, ESG rating, social impact research, advocacy, evidence-based solutions, social change" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Insocia Consultancy",
              "alternateName": "Institute for Social Impact and Advocacy",
              "url": "https://insocia.in",
              "logo": "https://insocia.in/logo.png",
              "description": "Driving social change through evidence-based solutions, rigorous research, independent evaluation, and strategic advocacy.",
              "email": "connect@insocia.in",
              "address": [
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Bengaluru",
                  "addressRegion": "Karnataka",
                  "postalCode": "560094",
                  "addressCountry": "India",
                  "streetAddress": "AECS Layout, Sanjayanagara"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Kozhikode",
                  "addressRegion": "Kerala",
                  "postalCode": "673573",
                  "addressCountry": "India"
                }
              ]
            }
          `}
        </script>
      </Helmet>
      
      <Hero />
      <MissionStatement />
      <FocusAreas />
      <FeaturedProjects />
      <Testimonials />
      <PartnerLogos />
    </>
   );
};

export default HomePage; 