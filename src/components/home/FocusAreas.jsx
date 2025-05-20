import React from 'react';
import { Link } from 'react-router-dom';
import SectionLayout from '../../layouts/SectionLayout';
import SectionHeading from '../common/SectionHeading';

const FocusAreas = () => {
  const areas = [
    {
      id: 'health',
      title: 'Health & Wellbeing',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
       ),
      description: 'Strengthening health systems and improving health outcomes for vulnerable populations.',
      link: '/focus-areas/health-wellbeing'
    },
    {
      id: 'education',
      title: 'Education & Skills Development',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
       ),
      description: 'Improving educational access, quality, and outcomes through evidence-based approaches.',
      link: '/focus-areas/education-skills'
    },
    {
      id: 'livelihoods',
      title: 'Sustainable Livelihoods',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
       ),
      description: 'Promoting economic opportunities that are inclusive and sustainable for communities.',
      link: '/focus-areas/sustainable-livelihoods'
    },
    {
      id: 'gender',
      title: 'Gender Equality & Inclusion',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
       ),
      description: 'Advancing gender-responsive policies and programs for equitable development.',
      link: '/focus-areas/gender-equality'
    },
    {
      id: 'environment',
      title: 'Environmental Sustainability',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
       ),
      description: 'Integrating environmental considerations into social policy for sustainable development.',
      link: '/focus-areas/environmental-sustainability'
    },
    {
      id: 'rural',
      title: 'Rural Development & Agriculture',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
       ),
      description: 'Strengthening rural communities and agricultural systems for sustainable growth.',
      link: '/focus-areas/rural-development'
    }
  ];
  
  return (
    <SectionLayout>
      <SectionHeading 
        title="Key Focus Areas" 
        subtitle="Our work spans across these interconnected domains to create holistic social impact"
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {areas.map((area, index) => (
          <div 
            key={area.id}
            className="bg-white rounded-lg shadow-md p-6 transition-transform hover:shadow-lg hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="text-primary-600 mb-4">
              {area.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
            <p className="text-neutral-600 mb-4">{area.description}</p>
            <Link 
              to={area.link} 
              className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
            >
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
         ))}
      </div>
    </SectionLayout>
  );
};

export default FocusAreas; 