import React from 'react';
import SectionLayout from '../../layouts/SectionLayout';
import { FiArrowRight, FiEye, FiTarget, FiActivity } from 'react-icons/fi';

const AboutHero = () => {
  return (
    <SectionLayout 
      bgColor="bg-transparent"
      className="relative overflow-hidden text-white h-screen flex items-center pt-28 pb-0 border-b border-neutral-800/30"
      id="our-story"
    >
      {/* Abstract background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute w-96 h-96 -top-12 -right-12 bg-secondary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 bottom-0 left-1/3 bg-primary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left Column - Our Story */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="h-px w-12 bg-gradient-to-r from-primary-400 to-primary-600"></div>
              <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm">Our Story</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Pioneering <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-300">Social Change</span> 
              <span className="block mt-2">Through Evidence & Action</span>
            </h1>
            
            <div className="border-l-2 border-primary-500/40 pl-6 py-2">
              <p className="text-lg md:text-xl text-neutral-100 leading-relaxed font-light">
                InSocia Development Consultancy delivers rigorous research, evidence-based solutions, and measurable impact through strategic interventions.
              </p>
            </div>
            
            <div className="space-y-6 text-neutral-300 leading-relaxed">
              <p>
                Our foundation, built by seasoned policy experts, researchers, and social impact specialists, creates a powerful bridge between sophisticated academic research and impactful implementation.
              </p>
              <p>
                Driven by the critical question of how social policies can genuinely serve their intended beneficiaries, we meticulously craft our approach to every project and partnership we undertake.
              </p>
            </div>
            
            <div className="pt-4 flex items-center">
              <a href="#our-values" className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors shadow-lg shadow-primary-900/30 group">
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
                <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800/50 rounded-xl shadow-2xl overflow-hidden group-hover:border-primary-800/40 transition-all duration-300 relative">
                  {/* Top Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-60"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 transform-gpu"></div>
                  
                  <div className="p-8 relative z-10">
                    <div className="flex items-center mb-5">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary-900/80 text-primary-400 mr-5 ring-1 ring-primary-700/50 shadow-lg shadow-primary-900/20 group-hover:shadow-primary-900/40 transition-all duration-300">
                        <FiEye className="w-7 h-7" />
                      </div>
                      <h2 className="text-2xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300">Our Vision</h2>
                    </div>
                    
                    <p className="text-white text-lg mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                      A world where evidence-based social policies create equitable opportunities for all communities to thrive.
                    </p>
                    
                    <ul className="space-y-4 text-neutral-300">
                      <li className="flex items-center group-hover:translate-x-1 transition-all duration-300">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="group-hover:text-white transition-colors duration-300">Innovate in policy design for lasting impact</span>
                      </li>
                      <li className="flex items-center group-hover:translate-x-1 transition-all duration-300">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="group-hover:text-white transition-colors duration-300">Foster collaboration between diverse stakeholders</span>
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
                <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800/50 rounded-xl shadow-2xl overflow-hidden group-hover:border-secondary-800/40 transition-all duration-300 relative">
                  {/* Top Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary-500/50 to-transparent opacity-60"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 transform-gpu"></div>
                  
                  <div className="p-8 relative z-10">
                    <div className="flex items-center mb-5">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center bg-secondary-900/80 text-secondary-400 mr-5 ring-1 ring-secondary-700/50 shadow-lg shadow-secondary-900/20 group-hover:shadow-secondary-900/40 transition-all duration-300">
                        <FiTarget className="w-7 h-7" />
                      </div>
                      <h2 className="text-2xl font-bold text-white group-hover:text-secondary-300 transition-colors duration-300">Our Mission</h2>
                    </div>
                    
                    <p className="text-white text-lg mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                      To transform social development through collaborative research, innovative policy design, and impact-focused implementation.
                    </p>
                    
                    <ul className="space-y-4 text-neutral-300">
                      <li className="flex items-center group-hover:translate-x-1 transition-all duration-300">
                        <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="group-hover:text-white transition-colors duration-300">Conduct impactful research that informs action</span>
                      </li>
                      <li className="flex items-center group-hover:translate-x-1 transition-all duration-300">
                        <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="group-hover:text-white transition-colors duration-300">Design and implement projects that create meaningful change</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-neutral-950/50 to-transparent"></div>
    </SectionLayout>
  );
};

export default AboutHero; 