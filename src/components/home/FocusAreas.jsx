import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionLayout from '../../layouts/SectionLayout';

const FocusAreas = () => {
  const areas = [
    {
      id: 'health',
      title: 'Health & Wellbeing',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      description: 'Strengthening health systems and improving health outcomes for vulnerable populations.',
      link: '/focus-areas/health-wellbeing',
      iconColor: 'text-rose-400',
      borderColor: 'border-rose-700/30'
    },
    {
      id: 'education',
      title: 'Education & Skills Development',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      description: 'Improving educational access, quality, and outcomes through evidence-based approaches.',
      link: '/focus-areas/education-skills',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-700/30'
    },
    {
      id: 'livelihoods',
      title: 'Sustainable Livelihoods',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Promoting economic opportunities that are inclusive and sustainable for communities.',
      link: '/focus-areas/sustainable-livelihoods',
      iconColor: 'text-emerald-400',
      borderColor: 'border-emerald-700/30'
    },
    {
      id: 'gender',
      title: 'Gender Equality & Inclusion',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      description: 'Advancing gender-responsive policies and programs for equitable development.',
      link: '/focus-areas/gender-equality',
      iconColor: 'text-purple-400',
      borderColor: 'border-purple-700/30'
    },
    {
      id: 'environment',
      title: 'Environmental Sustainability',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Integrating environmental considerations into social policy for sustainable development.',
      link: '/focus-areas/environmental-sustainability',
      iconColor: 'text-green-400',
      borderColor: 'border-green-700/30'
    },
    {
      id: 'rural',
      title: 'Rural Development & Agriculture',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      description: 'Strengthening rural communities and agricultural systems for sustainable growth.',
      link: '/focus-areas/rural-development',
      iconColor: 'text-amber-400',
      borderColor: 'border-amber-700/30'
    }
  ];
  
  // Simpler animation variants with better performance
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <SectionLayout bgColor="bg-transparent" className="relative z-10 py-20">
      {/* Added structured data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": areas.map((area, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": area.title,
          "description": area.description,
          "url": `https://insocia.org${area.link}`
        }))
      })}} />
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={container}
      >
        {/* Section header with improved contrast */}
        <motion.div variants={item} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-white">
            Our <span className="text-primary-400">Focus Areas</span>
          </h2>
          <p className="text-lg text-neutral-200 max-w-3xl mx-auto">
            We develop evidence-based solutions across these key domains to create holistic social impact
          </p>
        </motion.div>
        
        {/* Redesigned grid with improved card layout and glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((area) => (
            <motion.div
              key={area.id}
              variants={item}
              className="h-full"
            >
              <Link 
                to={area.link} 
                className={`block h-full backdrop-blur-md bg-neutral-800/30 rounded-xl border ${area.borderColor} overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/30 hover:border-neutral-600`}
                aria-label={`Learn more about ${area.title}`}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex mb-4">
                    <div className={`w-12 h-12 shrink-0 ${area.iconColor} bg-neutral-900/60 rounded-lg flex items-center justify-center`}>
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-semibold ml-4 text-white">{area.title}</h3>
                  </div>
                  
                  <p className="text-neutral-200 mb-4">{area.description}</p>
                  
                  <div className="mt-auto inline-flex items-center text-sm font-medium text-white/80 hover:text-white transition-colors">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Added summary section with glassmorphism for SEO and content value */}
        <motion.div 
          variants={item}
          className="mt-14 backdrop-blur-md bg-neutral-800/30 rounded-xl p-6 md:p-8 border border-neutral-700/40"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">Our Integrated Approach</h3>
            <p className="text-neutral-200 mb-5">
              At InSocia, we recognize that sustainable development challenges are interconnected. Our cross-cutting 
              approach integrates expertise across focus areas, creating synergistic solutions that address multiple 
              dimensions of social development simultaneously.
            </p>
            
            <div className="flex justify-center">
              <Link 
                to="/focus-areas" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-700/70 backdrop-blur-sm rounded-lg hover:bg-primary-600/80 transition-colors duration-300"
              >
                Explore All Focus Areas
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionLayout>
  );
};

export default FocusAreas; 