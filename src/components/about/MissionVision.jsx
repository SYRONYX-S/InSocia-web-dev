import React from 'react';
import SectionLayout from '../../layouts/SectionLayout';
import { FiEye, FiTarget } from 'react-icons/fi';

const MissionVision = () => {
  return (
    <SectionLayout 
      bgColor="bg-transparent"
      className="py-12 md:py-16 text-white"
      id="mission-vision-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center relative" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            Mission & Vision
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500/50 via-primary-300 to-secondary-500/50"></div>
          </h2>
          <p className="text-neutral-300 mt-4 max-w-xl mx-auto">The guiding principles that shape our work and define our purpose</p>
        </div>

        <div 
          className="relative bg-neutral-900/30 backdrop-blur-md rounded-3xl p-2 border border-neutral-700/40 shadow-[0_0_40px_rgba(0,0,0,0.3)]"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="grid md:grid-cols-2 text-white relative overflow-hidden rounded-2xl">
            <div 
              className="mission-vision-panel relative z-10 group p-8 md:p-10 lg:p-12 overflow-hidden"
              data-aos="fade-right"
              data-aos-delay="200"
              id="our-vision"
            >
              <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-primary-900/40 transition-all duration-500"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-300 transform origin-left group-hover:scale-x-110 transition-transform duration-500"></div>
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary-400/10 rounded-full blur-3xl group-hover:bg-primary-400/20 group-hover:w-60 group-hover:h-60 transition-all duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center">
                  <div className="p-3 bg-primary-900/60 rounded-lg mr-4 flex items-center justify-center">
                    <FiEye className="text-2xl text-primary-300" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-300 group-hover:text-primary-200 transition-colors duration-300">Our Vision</h3>
                </div>
                
                <div className="mt-6 pl-16">
                  <p className="responsive-desc text-xl text-white/90 leading-relaxed">
                    A world where evidence-based social policies create equitable opportunities for all communities to thrive.
                  </p>
                  
                  <ul className="mt-8 space-y-3">
                    <li className="flex items-start text-sm md:text-base" data-aos="fade-up" data-aos-delay="300">
                      <span className="text-primary-400 mr-2 mt-1">&#10095;</span> 
                      <span className="text-neutral-200">Innovate in policy design for lasting impact</span>
                    </li>
                    <li className="flex items-start text-sm md:text-base" data-aos="fade-up" data-aos-delay="400">
                      <span className="text-primary-400 mr-2 mt-1">&#10095;</span> 
                      <span className="text-neutral-200">Foster collaboration between diverse stakeholders</span>
                    </li>
                    <li className="flex items-start text-sm md:text-base" data-aos="fade-up" data-aos-delay="500">
                      <span className="text-primary-400 mr-2 mt-1">&#10095;</span> 
                      <span className="text-neutral-200">Champion evidence-based solutions for social equity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div 
              className="mission-vision-panel relative z-10 group p-8 md:p-10 lg:p-12 overflow-hidden"
              data-aos="fade-left"
              data-aos-delay="300"  
              id="our-mission"
            >
              <div className="absolute inset-0 bg-secondary-900/20 group-hover:bg-secondary-900/40 transition-all duration-500"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary-300 to-secondary-500 transform origin-left group-hover:scale-x-110 transition-transform duration-500"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-secondary-400/10 rounded-full blur-3xl group-hover:bg-secondary-400/20 group-hover:w-60 group-hover:h-60 transition-all duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center">
                  <div className="p-3 bg-secondary-900/60 rounded-lg mr-4 flex items-center justify-center">
                    <FiTarget className="text-2xl text-secondary-300" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-secondary-300 group-hover:text-secondary-200 transition-colors duration-300">Our Mission</h3>
                </div>
                
                <div className="mt-6 pl-16">
                  <p className="responsive-desc text-xl text-white/90 leading-relaxed">
                    To transform social development through collaborative research, innovative policy design, and impact-focused implementation that addresses the needs of underserved populations.
                  </p>
                  
                  <ul className="mt-8 space-y-3">
                    <li className="flex items-start text-sm md:text-base" data-aos="fade-up" data-aos-delay="400">
                      <span className="text-secondary-400 mr-2 mt-1">&#10095;</span> 
                      <span className="text-neutral-200">Conduct impactful research that informs action</span>
                    </li>
                    <li className="flex items-start text-sm md:text-base" data-aos="fade-up" data-aos-delay="500">
                      <span className="text-secondary-400 mr-2 mt-1">&#10095;</span> 
                      <span className="text-neutral-200">Design and advise on policies that promote equity</span>
                    </li>
                    <li className="flex items-start text-sm md:text-base" data-aos="fade-up" data-aos-delay="600">
                      <span className="text-secondary-400 mr-2 mt-1">&#10095;</span> 
                      <span className="text-neutral-200">Implement programs that achieve tangible results</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-neutral-500/50 to-transparent transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default MissionVision; 