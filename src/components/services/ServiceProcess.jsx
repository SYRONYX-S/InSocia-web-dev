import React from 'react';
import { defaultAnimations, getStaggeredAnimation } from '../../utils/animations';

const ServiceProcess = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We begin with a thorough understanding of your needs, challenges, and objectives.',
      icon: 'fas fa-comments'
    },
    {
      number: '02',
      title: 'Strategic Planning',
      description: 'Our team develops a customized strategy aligned with your goals.',
      icon: 'fas fa-chess'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We execute the plan with precision, ensuring quality and efficiency.',
      icon: 'fas fa-cogs'
    },
    {
      number: '04',
      title: 'Monitoring & Evaluation',
      description: 'Continuous assessment and optimization of outcomes.',
      icon: 'fas fa-chart-line'
    }
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            {...defaultAnimations.fadeIn}
          >
            Our Process
          </h2>
          <p 
            className="text-xl text-neutral-300"
            {...defaultAnimations.fadeIn}
          >
            A systematic approach to delivering exceptional results
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/50 to-secondary-500/50 transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="group relative"
                {...getStaggeredAnimation(index)}
              >
                <div className="relative bg-neutral-800/30 backdrop-blur-sm rounded-xl p-8 border border-neutral-700/30 hover:border-primary-500/30 transition-all duration-300">
                  <div className="flex items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary-500/5 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <i className={`${step.icon} text-2xl text-primary-400`}></i>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-2xl font-bold text-primary-400">{step.number}</span>
                        <h3 className="text-2xl font-semibold text-white group-hover:text-primary-400 transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-neutral-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess; 