import React from 'react';
import SectionLayout from '../../layouts/SectionLayout';
import { FiShield, FiUsers, FiZap, FiTrendingUp } from 'react-icons/fi';

const OurValues = () => {
  const values = [
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Integrity',
      description: 'Maintaining the highest ethical standards in all our research, analysis, and consulting work.',
      color: 'primary',
      gridClass: 'col-span-12 md:col-span-6 lg:col-span-6'
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Inclusivity',
      description: 'Ensuring diverse voices and marginalized communities are represented in all our initiatives.',
      color: 'secondary',
      gridClass: 'col-span-12 md:col-span-6 lg:col-span-6'
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Developing creative, evidence-based solutions to complex social and economic challenges.',
      color: 'primary',
      gridClass: 'col-span-12 md:col-span-6 lg:col-span-6'
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: 'Impact',
      description: 'Focusing on measurable outcomes that create lasting positive change in communities.',
      color: 'secondary',
      gridClass: 'col-span-12 md:col-span-6 lg:col-span-6'
    }
  ];

  return (
    <SectionLayout 
      bgColor="bg-transparent"
      className="py-20 md:py-28 text-neutral-900 relative overflow-hidden"
      id="our-values"
    >
      {/* Background decoration - Light theme */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-[800px] h-[800px] -top-[400px] -right-[400px] bg-primary-600/8 rounded-full blur-3xl"></div>
        <div className="absolute w-[600px] h-[600px] bottom-[10%] left-[5%] bg-secondary-600/8 rounded-full blur-3xl"></div>
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
          <div className="inline-flex items-center gap-2 glass-card border border-primary-300/40 rounded-full px-6 py-3 mb-8">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Our Core Values (4i)</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-neutral-900 leading-tight">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Guiding Principles</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            Our core values center on integrity, inclusivity, innovation, and impact (4i), guiding our work to ensure that every intervention contributes to reducing inequalities, enhancing access to opportunities, strengthening democratic participation, and creating sustainable solutions to complex development challenges.
          </p>
        </div>

        <div 
          className="grid grid-cols-12 gap-6 md:gap-8 auto-rows-fr"
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
              {/* Card background with glassmorphism - Light theme */}
              <div className="absolute inset-0 rounded-xl glass-card"></div>
              
              {/* Card border */}
              <div className="absolute inset-0 rounded-xl border border-neutral-200/50 group-hover:border-neutral-300/70 transition-colors duration-300"></div>
              
              {/* Top gradient line */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${value.color === 'primary' 
                ? 'from-transparent via-primary-500/70 to-transparent' 
                : 'from-transparent via-secondary-500/70 to-transparent'} opacity-70 group-hover:opacity-100 transition-all duration-300`}>
              </div>
              
              {/* Glow effect - Light theme */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${value.color === 'primary' 
                ? 'bg-primary-600/5' 
                : 'bg-secondary-600/5'} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform-gpu`}>
              </div>
              
              <div className="relative z-10 p-6 md:p-8 flex flex-col flex-grow h-full">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${value.color === 'primary' 
                  ? 'bg-primary-100 text-primary-600 ring-1 ring-primary-200 shadow-lg shadow-primary-200/20' 
                  : 'bg-secondary-100 text-secondary-600 ring-1 ring-secondary-200 shadow-lg shadow-secondary-200/20'} group-hover:scale-105 group-hover:shadow-xl transition-all duration-300`}>
                  {value.icon}
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 ${value.color === 'primary' 
                  ? 'text-primary-700 group-hover:text-primary-800' 
                  : 'text-secondary-700 group-hover:text-secondary-800'} transition-colors duration-300`}>
                  {value.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed text-base flex-grow group-hover:text-neutral-700 transition-colors duration-300">
                  {value.description}
                </p>
                
                {/* Subtle decorative element at the bottom */}
                <div className={`absolute bottom-3 right-3 w-12 h-12 rounded-full opacity-10 ${value.color === 'primary' 
                  ? 'bg-primary-500/20' 
                  : 'bg-secondary-500/20'} group-hover:opacity-30 transition-opacity duration-300`}>
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