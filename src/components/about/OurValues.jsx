import React from 'react';
import SectionLayout from '../../layouts/SectionLayout';
import { FiFileText, FiUsers, FiBox, FiRefreshCw, FiTrendingUp } from 'react-icons/fi';

const OurValues = () => {
  const values = [
    {
      icon: <FiFileText className="w-8 h-8" />,
      title: 'Evidence-First Approach',
      description: 'We prioritize rigorous research and data-driven insights in all our work, ensuring our strategies are grounded in solid evidence.',
      color: 'primary',
      gridClass: 'col-span-12 md:col-span-6 lg:col-span-4'
    },
    {
      icon: <FiBox className="w-8 h-8" />,
      title: 'Inclusive Innovation',
      description: 'We design solutions that are accessible, equitable, and beneficial to diverse communities, fostering innovation that leaves no one behind.',
      color: 'secondary',
      gridClass: 'col-span-12 md:col-span-6 lg:col-span-4'
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Collaborative Partnership',
      description: 'We believe in co-creating solutions by fostering strong partnerships with stakeholders at all levels, from local communities to global entities.',
      color: 'primary',
      gridClass: 'col-span-12 md:col-span-12 lg:col-span-4'
    },
    {
      icon: <FiRefreshCw className="w-8 h-8" />,
      title: 'Adaptive Learning',
      description: 'We continuously refine our approaches based on iterative feedback, learning, and the evolving contexts of the communities we serve.',
      color: 'secondary',
      gridClass: 'col-span-12 md:col-span-6 lg:col-span-6'
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: 'Sustainable Impact',
      description: 'We focus on creating lasting, systemic change through interventions that are environmentally sound, socially equitable, and economically viable.',
      color: 'primary',
      gridClass: 'col-span-12 md:col-span-6 lg:col-span-6'
    },
  ];

  return (
    <SectionLayout 
      bgColor="bg-transparent"
      className="py-20 md:py-28 text-white relative overflow-hidden"
      id="our-values"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-[800px] h-[800px] -top-[400px] -right-[400px] bg-primary-600/5 rounded-full blur-3xl"></div>
        <div className="absolute w-[600px] h-[600px] bottom-[10%] left-[5%] bg-secondary-600/5 rounded-full blur-3xl"></div>
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="text-base uppercase tracking-wider text-primary-400 mb-3 font-semibold">Our Guiding Principles</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-300">Core Values</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            These are the fundamental principles that shape our culture, drive our approach, and guide our commitment to creating a more equitable and sustainable world.
          </p>
        </div>

        <div 
          className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-fr"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {values.map((value, index) => (
            <div
              key={index}
              className={`${value.gridClass} group relative overflow-hidden flex flex-col`}
              data-aos="fade-up"
              data-aos-delay={300 + (index * 100)}
            >
              {/* Card background with glassmorphism */}
              <div className="absolute inset-0 rounded-xl bg-neutral-900/40 backdrop-blur-md"></div>
              
              {/* Card border */}
              <div className="absolute inset-0 rounded-xl border border-neutral-700/30 group-hover:border-neutral-600/50 transition-colors duration-300"></div>
              
              {/* Top gradient line */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${value.color === 'primary' 
                ? 'from-transparent via-primary-500/70 to-transparent' 
                : 'from-transparent via-secondary-500/70 to-transparent'} opacity-70 group-hover:opacity-100 transition-all duration-300`}>
              </div>
              
              {/* Glow effect */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${value.color === 'primary' 
                ? 'bg-primary-600/5' 
                : 'bg-secondary-600/5'} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform-gpu`}>
              </div>
              
              <div className="relative z-10 p-6 md:p-8 flex flex-col flex-grow h-full">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${value.color === 'primary' 
                  ? 'bg-primary-900/30 text-primary-300 ring-1 ring-primary-500/30 shadow-lg shadow-primary-900/10' 
                  : 'bg-secondary-900/30 text-secondary-300 ring-1 ring-secondary-500/30 shadow-lg shadow-secondary-900/10'} group-hover:scale-105 group-hover:shadow-xl transition-all duration-300`}>
                  {value.icon}
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 ${value.color === 'primary' 
                  ? 'text-primary-300 group-hover:text-primary-200' 
                  : 'text-secondary-300 group-hover:text-secondary-200'} transition-colors duration-300`}>
                  {value.title}
                </h3>
                
                <p className="text-neutral-300 leading-relaxed text-base flex-grow group-hover:text-neutral-200 transition-colors duration-300">
                  {value.description}
                </p>
                
                {/* Subtle decorative element at the bottom */}
                <div className={`absolute bottom-3 right-3 w-12 h-12 rounded-full opacity-10 ${value.color === 'primary' 
                  ? 'bg-primary-500/10' 
                  : 'bg-secondary-500/10'} group-hover:opacity-20 transition-opacity duration-300`}>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default OurValues; 