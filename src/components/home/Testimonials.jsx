import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionLayout from '../../layouts/SectionLayout';

const Testimonials = () => {
  const testimonials = [
    {
      id: 'testimonial1',
      quote: "InSocia's evidence-based approach to rural water management transformed our community's health outcomes significantly.",
      author: "Dr. Sarah Mathews",
      title: "Health Ministry Official",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      organization: "Ministry of Health"
    },
    {
      id: 'testimonial2',
      quote: "The training and mentorship we received through InSocia's women entrepreneurship program created sustainable income sources for 200+ families.",
      author: "Priya Singh",
      title: "Community Leader",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
      organization: "Rural Women's Collective"
    },
    {
      id: 'testimonial3',
      quote: "InSocia's rigorous research methodology and policy recommendations have been invaluable in our education reform initiatives.",
      author: "James Wilson",
      title: "Education Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      organization: "Global Education Partnership"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  };

  return (
    <SectionLayout bgColor="bg-transparent" className="relative z-10 py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1] opacity-30">
        <div className="absolute top-40 left-10 w-80 h-80 rounded-full border border-primary-600/20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full border border-secondary-600/20"></div>
        <div className="absolute top-20 right-20 w-60 h-60 rounded-full border-2 border-primary-600/10"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-white">
            Success <span className="text-primary-400">Stories</span>
          </h2>
          <p className="text-lg text-neutral-200 max-w-3xl mx-auto">
            Hear from the communities and partners we've collaborated with
          </p>
        </div>

        {/* Testimonial showcase with unique hexagonal layout */}
        <div className="relative">
          {/* Left decorative pattern */}
          <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className="grid grid-cols-2 gap-2">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={`hex-left-${i}`} 
                  className="w-8 h-8 bg-primary-700/20 rounded-full backdrop-blur-sm"
                  style={{ animation: `pulse 3s infinite ${i * 0.5}s` }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Main testimonial card with hexagonal avatar frame */}
          <div className="backdrop-blur-md bg-neutral-800/40 rounded-2xl p-6 md:p-10 border border-neutral-700/40">
            <div className="relative">
              {/* Quote decorative element */}
              <div className="absolute -top-6 -left-6 text-primary-700/30 text-7xl font-serif hidden md:block">"</div>
              
              <div className="md:flex items-center gap-8">
                {/* Testimonial avatar */}
                <div className="mb-6 md:mb-0 flex-shrink-0 mx-auto md:mx-0 relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 relative">
                    {/* Hexagonal frame */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 rounded-full backdrop-blur-md"></div>
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].author} 
                      className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full p-2 relative z-10"
                    />
                  </div>
                  
                  {/* Organization badge */}
                  <div className="absolute -bottom-2 -right-2 bg-primary-700/80 text-white text-xs py-1 px-2 rounded-full backdrop-blur-sm">
                    {testimonials[activeIndex].organization}
                  </div>
                </div>
                
                {/* Testimonial content */}
                <div className="flex-1">
                  <blockquote className="text-lg md:text-xl text-white italic mb-6">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-white">{testimonials[activeIndex].author}</p>
                      <p className="text-neutral-300 text-sm">{testimonials[activeIndex].title}</p>
                    </div>
                    
                    {/* Navigation controls */}
                    <div className="flex gap-2">
                      <motion.button 
                        onClick={prevTestimonial}
                        className="p-2 bg-neutral-700/50 rounded-full text-white hover:bg-primary-700/50 transition-colors"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.button>
                      <motion.button 
                        onClick={nextTestimonial}
                        className="p-2 bg-neutral-700/50 rounded-full text-white hover:bg-primary-700/50 transition-colors"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right decorative pattern */}
          <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className="grid grid-cols-2 gap-2">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={`hex-right-${i}`} 
                  className="w-8 h-8 bg-secondary-700/20 rounded-full backdrop-blur-sm"
                  style={{ animation: `pulse 3s infinite ${i * 0.5}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Testimonial indicators */}
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={`indicator-${index}`}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                index === activeIndex ? 'bg-primary-500' : 'bg-neutral-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Testimonial stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="backdrop-blur-md bg-neutral-800/30 p-4 rounded-xl border border-neutral-700/40 text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary-400">240+</div>
            <div className="text-sm text-neutral-300">Partner Organizations</div>
          </div>
          <div className="backdrop-blur-md bg-neutral-800/30 p-4 rounded-xl border border-neutral-700/40 text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary-400">35</div>
            <div className="text-sm text-neutral-300">Program Countries</div>
          </div>
          <div className="backdrop-blur-md bg-neutral-800/30 p-4 rounded-xl border border-neutral-700/40 text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary-400">98%</div>
            <div className="text-sm text-neutral-300">Satisfied Clients</div>
          </div>
          <div className="backdrop-blur-md bg-neutral-800/30 p-4 rounded-xl border border-neutral-700/40 text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary-400">12+</div>
            <div className="text-sm text-neutral-300">Years of Experience</div>
          </div>
        </div>
      </div>
      
      {/* Add pulse animation */}
      <style jsx="true">{`
        @keyframes pulse {
          0% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 0.6; transform: scale(1.05); }
          100% { opacity: 0.3; transform: scale(0.95); }
        }
      `}</style>
    </SectionLayout>
  );
};

export default Testimonials; 