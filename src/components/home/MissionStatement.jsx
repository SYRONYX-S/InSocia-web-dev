import React from 'react';
import SectionLayout from '../../layouts/SectionLayout';
import SectionHeading from '../common/SectionHeading';

const MissionStatement = () => {
  return (
    <SectionLayout bgColor="bg-neutral-50">
      <SectionHeading 
        title="Mission Statement" 
        centered
      />
      <div className="max-w-4xl mx-auto text-center">
        <p 
          className="text-lg md:text-xl text-neutral-700 mb-8"
          data-aos="fade-up"
        >
          At InSocia Development Consultancy, we believe in creating equitable societies through innovative policy approaches and rigorous research. Our institute serves as a collaborative platform where data-driven insights meet practical implementation to address complex social challenges.
        </p>
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Research</h3>
            <p className="text-neutral-600 text-center">Conducting rigorous, evidence-based research to inform policy decisions</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Innovation</h3>
            <p className="text-neutral-600 text-center">Developing creative solutions to complex social challenges</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Action</h3>
            <p className="text-neutral-600 text-center">Implementing practical solutions that create lasting impact</p>
          </div>
        </div>
      </div>
    </SectionLayout>
   );
};

export default MissionStatement; 