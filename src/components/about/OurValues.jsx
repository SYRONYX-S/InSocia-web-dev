import React from 'react';
import SectionLayout from '../../layouts/SectionLayout';
import { FaHandshake, FaSearch, FaLightbulb, FaBalanceScale, FaGlobeAmericas } from 'react-icons/fa';

const OurValues = () => {
  const values = [
    {
      icon: <FaHandshake />,
      title: 'Collaboration',
      description: 'We believe in the power of partnerships and collaborative approaches to solve complex social challenges.'
    },
    {
      icon: <FaSearch />,
      title: 'Rigor',
      description: 'We commit to methodological excellence and evidence-based approaches in all our work.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'We continuously seek new and creative solutions to address persistent development challenges.'
    },
    {
      icon: <FaBalanceScale />,
      title: 'Integrity',
      description: 'We uphold the highest standards of ethics, transparency, and accountability in all our operations.'
    },
    {
      icon: <FaGlobeAmericas />,
      title: 'Inclusivity',
      description: 'We ensure diverse perspectives are valued and that our work benefits all segments of society.'
    }
  ];

  return (
    <SectionLayout className="py-16">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-neutral-800">Our Core Values</h2>
        <p className="mt-4 text-neutral-600 max-w-3xl mx-auto">
          These principles guide our work and define our organizational culture.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-500 hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex items-center mb-4">
              <div className="bg-primary-100 p-3 rounded-full mr-4 text-primary-600 text-xl">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-800">{value.title}</h3>
            </div>
            <p className="text-neutral-600">{value.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-primary-50 rounded-lg border border-primary-100" data-aos="fade-up">
        <h3 className="text-xl font-semibold text-neutral-800 mb-3">Our Commitment</h3>
        <p className="text-neutral-600">
          At InSocia, we are committed to creating positive, sustainable change through partnerships that empower communities and strengthen institutions. Our values aren't just words on a page—they are reflected in every project we undertake and every recommendation we make.
        </p>
      </div>
    </SectionLayout>
  );
};

export default OurValues; 