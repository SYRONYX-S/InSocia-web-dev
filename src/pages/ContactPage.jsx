import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SectionLayout from '../layouts/SectionLayout';
import SectionHeading from '../components/common/SectionHeading';
import SEO from '../utils/seo';

const ContactPage = () => {
  return (
    <MainLayout>
      <SEO 
        title="Contact Us"
        description="Get in touch with InSocia Development Consultancy. Contact information and inquiry form."
        keywords={[
          'contact us',
          'get in touch',
          'inquiries',
          'office location',
          'email',
          'phone'
        ]}
      />
      
      <SectionLayout backgroundColor="bg-primary-50" className="pt-28 pb-16">
        <SectionHeading
          subtitle="Contact Us"
          title="Get In Touch"
          description="Have questions or interested in working with us? Reach out through the contact information or form below."
          align="center"
        />
      </SectionLayout>

      {/* More sections will be added here as needed */}
      
    </MainLayout>
  );
};

export default ContactPage; 