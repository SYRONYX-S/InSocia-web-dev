import React from 'react';
import { Helmet } from 'react-helmet';
import AboutHero from '../components/about/AboutHero';
import OurValues from '../components/about/OurValues';
import TeamSection from '../components/about/TeamSection';
// AOS for animations will be initialized in App.js globally

const AboutPage = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "InSocia Development Consultancy",
    "url": "https://insocia.org", // Replace with actual domain
    "logo": "https://insocia.org/images/logo.png", // Replace with actual logo URL
    "description": "InSocia Development Consultancy is dedicated to advancing equitable social policies through rigorous research, innovative solutions, and impactful action. Learn about our story, mission, vision, and the team driving social change.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Innovation Drive", // Replace with actual address
      "addressLocality": "Kozhikode",
      "addressRegion": "KL",
      "postalCode": "673001", // Replace
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-701-234-5678", // Replace
      "contactType": "customer service" // Or "general inquiries"
    }
    // "sameAs": [ // Add social media links if available
    //   "https://www.facebook.com/insocia",
    //   "https://www.twitter.com/insocia",
    //   "https://www.linkedin.com/company/insocia"
    // ]
  };

  return (
    <>
      <Helmet>
        <title>About Us | InSocia Development Consultancy</title>
        <meta 
          name="description" 
          content="Discover InSocia's commitment to creating equitable societies. Explore our story, mission, vision, core values, and the dedicated team behind our impactful social development work." 
        />
        <meta 
          name="keywords" 
          content="about InSocia, social development consultancy, our mission, our vision, our values, InSocia team, policy research, social impact" 
        />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <AboutHero />
      <OurValues />
      <TeamSection />

      {/* Consider adding a CTA section if it fits the flow */}
      {/* 
      <SectionLayout className="py-16 md:py-24 bg-neutral-800/50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Work With Us</h2>
          <p className="text-neutral-300 mb-8 max-w-xl mx-auto">
            Interested in collaborating or learning more about our projects? We'd love to hear from you.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </SectionLayout> 
      */}
    </>
  );
};

export default AboutPage; 