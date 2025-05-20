import React from 'react';
import SectionLayout from '../../layouts/SectionLayout';

const PartnerLogos = () => {
  // Placeholder logos - replace with actual partner logos
  const partners = [
    {
      id: 'partner1',
      name: 'Impact',
      logo: 'https://via.placeholder.com/150x80?text=Impact'
    },
    {
      id: 'partner2',
      name: 'ID Log',
      logo: 'https://via.placeholder.com/150x80?text=ID+Log'
    },
    {
      id: 'partner3',
      name: 'CIGI',
      logo: 'https://via.placeholder.com/150x80?text=CIGI'
    },
    {
      id: 'partner4',
      name: 'People\'s Foundation',
      logo: 'https://via.placeholder.com/150x80?text=People\'s+Foundation'
    }
  ];
  
  return (
    <SectionLayout className="py-12 md:py-16">
      <div className="text-center mb-8">
        <h3 
          className="text-xl font-semibold text-neutral-700"
          data-aos="fade-up"
        >
          Our Trusted Partners
        </h3>
      </div>
      
      <div 
        className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {partners.map((partner ) => (
          <div 
            key={partner.id}
            className="grayscale hover:grayscale-0 transition-all duration-300"
          >
            <img 
              src={partner.logo} 
              alt={partner.name} 
              className="h-12 md:h-16"
            />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default PartnerLogos; 