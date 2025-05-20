import React from 'react';
import SectionLayout from '../../layouts/SectionLayout';
import { FaLightbulb, FaChartLine } from 'react-icons/fa';

const VisionMission = () => {
  return (
    <SectionLayout backgroundColor="bg-neutral-50" className="py-16">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-neutral-800">Our Vision & Mission</h2>
        <p className="mt-4 text-neutral-600 max-w-3xl mx-auto">
          Guided by our core beliefs, we work towards creating meaningful change in communities worldwide.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision Card */}
        <div 
          className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary-500 h-full"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div className="bg-primary-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
            <FaLightbulb className="text-primary-600 text-2xl" />
          </div>
          <h3 className="text-2xl font-semibold text-neutral-800 mb-4">Our Vision</h3>
          <p className="text-neutral-600 mb-3">
            A world where social development is driven by evidence, innovation, and inclusivity.
          </p>
          <p className="text-neutral-600 mb-3">
            We envision societies where all individuals have equal access to opportunities, resources, and the ability to lead fulfilling lives.
          </p>
          <p className="text-neutral-600">
            We strive for a future where policy decisions are informed by rigorous research and a deep understanding of local contexts.
          </p>
        </div>
        
        {/* Mission Card */}
        <div 
          className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-secondary-500 h-full"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="bg-secondary-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
            <FaChartLine className="text-secondary-600 text-2xl" />
          </div>
          <h3 className="text-2xl font-semibold text-neutral-800 mb-4">Our Mission</h3>
          <p className="text-neutral-600 mb-3">
            To bridge the gap between research, policy design, and implementation through innovative approaches and collaborative partnerships.
          </p>
          <p className="text-neutral-600 mb-3">
            We are committed to developing evidence-based solutions that address complex social challenges and foster sustainable development.
          </p>
          <p className="text-neutral-600">
            Our mission is to empower communities, organizations, and governments with the knowledge, tools, and strategies needed to create lasting positive change.
          </p>
        </div>
      </div>
    </SectionLayout>
  );
};

export default VisionMission; 