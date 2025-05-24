import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionLayout from '../../layouts/SectionLayout';
import { FiFolder } from 'react-icons/fi';

const FeaturedProjects = () => {
  // Projects data
  const projects = [
    {
      id: 'project1',
      title: 'Water and Sanitation of Tea Plantation Workers',
      category: 'Health & Wellbeing',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      description: 'Improving water access and sanitation facilities for tea plantation communities in rural areas.',
      link: '/projects/water-sanitation-tea-plantation',
      featured: true
    },
    {
      id: 'project2',
      title: 'Rural Women Entrepreneurship Initiative',
      category: 'Gender Equality & Inclusion',
      image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      description: 'Supporting women entrepreneurs in rural areas through training, mentorship, and market access.',
      link: '/projects/rural-women-entrepreneurship'
    },
    {
      id: 'project3',
      title: 'Climate-Resilient Agriculture Program',
      category: 'Environmental Sustainability',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      description: 'Helping farmers adapt to climate change through sustainable agricultural practices and technology.',
      link: '/projects/climate-resilient-agriculture'
    }
  ];
  
  // Simplified animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <SectionLayout bgColor="bg-transparent" className="relative z-10 py-20">
      {/* Added structured data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": projects.map((project, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Article",
            "name": project.title,
            "description": project.description,
            "url": `https://insocia.org${project.link}`,
            "image": project.image
          }
        }))
      })}} />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* Premium Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
            <FiFolder className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-semibold text-primary-300 uppercase tracking-wider">Featured Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
            Impactful <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">Initiatives</span> in Action
          </h2>
          <p className="text-xl text-neutral-200 max-w-4xl mx-auto leading-relaxed">
            Explore some of our impactful initiatives across different focus areas
          </p>
        </motion.div>
        
        {/* Unified card design for both large and small cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Featured project - redesigned with proper image/text balance */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-8 row-span-1 md:row-span-2 flex flex-col"
          >
            <div className="h-full flex flex-col backdrop-blur-md bg-neutral-800/30 rounded-xl overflow-hidden border border-neutral-700/50 group hover:shadow-lg hover:shadow-primary-900/10 transition-all duration-300">
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <img 
                  src={projects[0].image} 
                  alt={projects[0].title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <span className="self-start px-3 py-1 mb-3 text-xs font-medium bg-primary-900/60 text-primary-300 rounded-full">
                  {projects[0].category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">{projects[0].title}</h3>
                <p className="text-neutral-200 mb-4 flex-grow">{projects[0].description}</p>
                <Link 
                  to={projects[0].link} 
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-700/70 backdrop-blur-sm rounded-lg hover:bg-primary-600/80 transition-all duration-300 hover:translate-x-1 self-start mt-auto"
                  aria-label={`View details about ${projects[0].title}`}
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Standard sized projects with matching glassmorphism */}
          {projects.slice(1).map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              className="lg:col-span-4"
            >
              <div className="h-full flex flex-col backdrop-blur-md bg-neutral-800/30 rounded-xl overflow-hidden border border-neutral-700/50 group hover:shadow-lg hover:shadow-primary-900/10 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <span className="self-start px-3 py-1 mb-2 text-xs font-medium bg-primary-900/60 text-primary-300 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-neutral-300 mb-4 text-sm flex-grow">{project.description}</p>
                  <Link 
                    to={project.link} 
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 text-sm font-medium transition-all duration-300 hover:translate-x-1 self-start mt-auto"
                    aria-label={`View details about ${project.title}`}
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced counter cards with professional design */}
        <motion.div 
          variants={itemVariants}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {/* Impact metrics - redesigned with better visual hierarchy and subtle animation */}
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="backdrop-blur-md bg-neutral-800/30 border border-neutral-700/50 rounded-xl p-6 relative overflow-hidden group hover:shadow-lg hover:shadow-primary-900/20 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-primary-400 opacity-70"></div>
            <div className="relative z-10">
              <div className="text-3xl font-bold text-primary-400 mb-2 group-hover:text-primary-300 transition-colors duration-300">15+</div>
              <div className="text-lg font-semibold text-white mb-1">Projects</div>
              <p className="text-neutral-300 text-sm">Successfully implemented across focus areas</p>
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-primary-600/10 rounded-full -mr-5 -mb-5 blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="backdrop-blur-md bg-neutral-800/30 border border-neutral-700/50 rounded-xl p-6 relative overflow-hidden group hover:shadow-lg hover:shadow-primary-900/20 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-70"></div>
            <div className="relative z-10">
              <div className="text-3xl font-bold text-primary-400 mb-2 group-hover:text-primary-300 transition-colors duration-300">50,000+</div>
              <div className="text-lg font-semibold text-white mb-1">Beneficiaries</div>
              <p className="text-neutral-300 text-sm">Directly impacted by our interventions</p>
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-secondary-600/10 rounded-full -mr-5 -mb-5 blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="backdrop-blur-md bg-neutral-800/30 border border-neutral-700/50 rounded-xl p-6 relative overflow-hidden group hover:shadow-lg hover:shadow-primary-900/20 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-500 to-primary-400 opacity-70"></div>
            <div className="relative z-10">
              <div className="text-3xl font-bold text-primary-400 mb-2 group-hover:text-primary-300 transition-colors duration-300">8</div>
              <div className="text-lg font-semibold text-white mb-1">Partner States</div>
              <p className="text-neutral-300 text-sm">Working across diverse geographies</p>
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-primary-500/10 rounded-full -mr-5 -mb-5 blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
          </motion.div>
        </motion.div>
        
        {/* Minimal floating button CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <Link 
            to="/projects" 
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg transition-all duration-300 group relative"
            aria-label="View all InSocia development projects"
          >
            <span className="absolute inset-0 bg-primary-700/60 backdrop-blur-sm rounded-lg group-hover:bg-primary-600/70 transition-colors duration-300"></span>
            <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 overflow-hidden">
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 opacity-30"></span>
            </span>
            <span className="relative text-white flex items-center z-10">
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </SectionLayout>
  );
};

export default FeaturedProjects; 