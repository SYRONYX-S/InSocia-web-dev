import React from 'react';
import SectionLayout from '../../layouts/SectionLayout';

const ServiceProcess = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We begin with an in-depth consultation to understand your specific needs, challenges, and objectives.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Assessment & Analysis',
      description: 'Our team conducts a thorough assessment of the context, stakeholders, and existing systems to identify opportunities and constraints.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Strategy Development',
      description: 'Based on our analysis, we develop a customized approach and detailed implementation plan aligned with your goals.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Implementation Support',
      description: 'We provide comprehensive support during implementation, ensuring effective execution of strategies and activities.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      number: '05',
      title: 'Monitoring & Evaluation',
      description: 'Throughout the process, we monitor progress, evaluate outcomes, and make necessary adjustments to optimize results.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      number: '06',
      title: 'Knowledge Transfer',
      description: 'We ensure sustainability by transferring knowledge, skills, and tools to your team for continued success.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <SectionLayout backgroundColor="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-neutral-800" data-aos="fade-up">
            Our Consulting Process
          </h2>
          <p className="text-lg text-neutral-700" data-aos="fade-up" data-aos-delay="100">
            A systematic approach to delivering effective solutions that create lasting impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-lg h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-primary-100 text-primary-600 rounded-lg mr-4">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-bold text-primary-600 font-heading tracking-wide">{step.number}</span>
                </div>
                
                <h3 className="text-2xl font-heading font-bold mb-4 text-neutral-800">
                  {step.title}
                </h3>
                
                <p className="text-neutral-700 leading-relaxed flex-grow">
                  {step.description}
                </p>
                
                {/* Decorative line */}
                <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mt-6 mb-2"></div>
              </div>
            </div>
          ))}
        </div>
      
        <div className="mt-16 relative overflow-hidden rounded-2xl" data-aos="fade-up">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-800/90 to-secondary-800/90"></div>
            
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-radial from-white/10 to-transparent blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gradient-radial from-white/10 to-transparent blur-3xl"></div>
          </div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-white">Our Collaborative Approach</h3>
                <p className="text-white/90 mb-4 text-lg">
                  At InSocia, we believe in working closely with our clients and stakeholders throughout every stage of the process. 
                  Our collaborative approach ensures that solutions are not only technically sound but also contextually appropriate 
                  and sustainable.
                </p>
                <p className="text-white/80 text-lg">
                  We adapt our process to meet the specific needs of each project while maintaining our commitment to rigor, 
                  inclusivity, and practical impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ServiceProcess; 