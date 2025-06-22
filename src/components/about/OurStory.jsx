import React from 'react';
import SectionLayout from '../../layouts/SectionLayout';

const OurStory = () => {
  return (
    <SectionLayout className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1" data-aos="fade-right">
          <h2 className="text-3xl font-bold text-neutral-800 mb-6">Our Story</h2>
          <p className="text-neutral-600 mb-4">
            Insocia Consultancy was founded with a vision to bridge the gap between research, policy, and implementation in the social development sector.
          </p>
          <p className="text-neutral-600 mb-4">
            What began as a small group of passionate researchers and policy experts has grown into a respected consultancy working with governments, NGOs, and international development agencies across multiple focus areas.
          </p>
          <p className="text-neutral-600 mb-4">
            Our journey has been defined by a commitment to evidence-based approaches, innovative methodologies, and a deep understanding of local contexts. We believe that sustainable development requires both rigorous analysis and practical implementation strategies.
          </p>
          <p className="text-neutral-600">
                          Today, Insocia stands as a leader in development consulting, known for our integrity, expertise, and ability to deliver measurable impact in diverse contexts.
          </p>
        </div>
        <div className="order-1 lg:order-2" data-aos="fade-left">
          <div className="relative">
            <div className="absolute -top-6 -right-6 h-64 w-64 bg-primary-100 rounded-lg -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
              alt="Team collaborating on development project" 
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default OurStory; 