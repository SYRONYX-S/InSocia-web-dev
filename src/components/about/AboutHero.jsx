import React from 'react';
import SectionLayout from '../../layouts/SectionLayout';
import { FiArrowRight, FiEye, FiTarget, FiActivity } from 'react-icons/fi';

const AboutHero = () => {
  return (
    <SectionLayout 
      bgColor="bg-transparent"
      className="relative overflow-hidden text-neutral-900 min-h-screen flex items-center mt-24 md:pt-16 pb-16 border-b border-neutral-200/30 "
      id="our-story"
    >
      {/* Abstract background pattern - Light theme */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-96 h-96 -top-12 -right-12 bg-secondary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 bottom-0 left-1/3 bg-primary-500/8 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left Column - Our Story */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="h-px w-12 bg-gradient-to-r from-primary-600 to-primary-700"></div>
              <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">About InSocia</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-neutral-900">
              Transforming Society Through <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-700">Evidence-Based</span> 
              <span className="block mt-2">Solutions</span>
            </h1>
            
            <div className="border-l-2 border-primary-500/60 pl-6 py-2">
              <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-light">
                We are a policy research and development consulting firm established with the mission to create transformative social change through evidence-based solutions, inclusive governance, and sustainable development practices.
              </p>
            </div>
            
            <div className="space-y-6 text-neutral-600 leading-relaxed">
              <p>
                Our organization was founded on the fundamental belief that equitable development requires rigorous analysis, participatory approaches, and systematic evaluation to ensure that policies and programs effectively address the root causes of social and economic challenges.
              </p>
              <p>
                We empower communities and strengthen institutional capacity across all sectors of society while promoting human dignity and social justice through comprehensive research, strategic advocacy, and evidence-driven decision-making.
              </p>
            </div>
            
            <div className="pt-4 flex items-center">
              <a href="#our-values" className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors shadow-lg shadow-primary-600/20 group">
                Explore Our Values
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
          
          {/* Right Column - Vision & Mission */}
          <div className="space-y-8">
            {/* Vision Card */}
            <div 
              id="our-vision"
              className="group"
            >
              <div className="flex flex-col h-full">
                <div className="glass-card-hero rounded-xl shadow-2xl overflow-hidden group-hover:border-primary-300/60 transition-all duration-300 relative">
                  {/* Top Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-60"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/5 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 transform-gpu"></div>
                  
                  <div className="p-8 relative z-10">
                    <div className="flex items-center mb-5">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary-100 text-primary-600 mr-5 ring-1 ring-primary-200 shadow-lg shadow-primary-200/20 group-hover:shadow-primary-200/40 transition-all duration-300">
                        <FiEye className="w-7 h-7" />
                      </div>
                      <h2 className="text-2xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300">Our Vision</h2>
                    </div>
                    
                    <p className="text-neutral-800 text-lg mb-6 leading-relaxed group-hover:text-neutral-900 transition-colors duration-300">
                      Our vision is to build a society where effective governance, accountable institutions, and evidence-driven decision-making create opportunities for all individuals and communities to thrive, regardless of their socio-economic background, gender, or geographical location.
                    </p>
                    
                    <ul className="space-y-4 text-neutral-600">
                      <li className="flex items-center group-hover:translate-x-1 transition-all duration-300">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="group-hover:text-neutral-800 transition-colors duration-300">Policy formulation informed by comprehensive research</span>
                      </li>
                      <li className="flex items-center group-hover:translate-x-1 transition-all duration-300">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="group-hover:text-neutral-800 transition-colors duration-300">Inclusive economic growth and social empowerment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mission Card */}
            <div 
              id="our-mission"
              className="group"
            >
              <div className="flex flex-col h-full">
                <div className="glass-card-hero rounded-xl shadow-2xl overflow-hidden group-hover:border-secondary-300/60 transition-all duration-300 relative">
                  {/* Top Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary-500/50 to-transparent opacity-60"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-600/5 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 transform-gpu"></div>
                  
                  <div className="p-8 relative z-10">
                    <div className="flex items-center mb-5">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center bg-secondary-100 text-secondary-600 mr-5 ring-1 ring-secondary-200 shadow-lg shadow-secondary-200/20 group-hover:shadow-secondary-200/40 transition-all duration-300">
                        <FiTarget className="w-7 h-7" />
                      </div>
                      <h2 className="text-2xl font-bold text-neutral-900 group-hover:text-secondary-700 transition-colors duration-300">Our Mission</h2>
                    </div>
                    
                    <p className="text-neutral-800 text-lg mb-6 leading-relaxed group-hover:text-neutral-900 transition-colors duration-300">
                      We are a policy research and development consulting firm established with the mission to create transformative social change through evidence-based solutions, inclusive governance, and sustainable development practices that empower communities and strengthen institutional capacity across all sectors of society.
                    </p>
                    
                    <ul className="space-y-4 text-neutral-600">
                      <li className="flex items-center group-hover:translate-x-1 transition-all duration-300">
                        <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="group-hover:text-neutral-800 transition-colors duration-300">Rigorous analysis and systematic evaluation</span>
                      </li>
                      <li className="flex items-center group-hover:translate-x-1 transition-all duration-300">
                        <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="group-hover:text-neutral-800 transition-colors duration-300">Promoting human dignity and social justice</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutHero; 