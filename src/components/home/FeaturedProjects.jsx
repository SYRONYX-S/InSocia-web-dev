import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionLayout from '../../layouts/SectionLayout';

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
    <SectionLayout bgColor="bg-neutral-900" className="relative z-10 py-20">
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
      
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Section header with improved contrast */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-white">
              Featured <span className="text-primary-400">Projects</span>
            </h2>
            <p className="text-lg text-neutral-200 max-w-3xl mx-auto">
              Explore some of our impactful initiatives across different focus areas
            </p>
          </motion.div>
          
          {/* Simplified grid layout with better contrast */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Featured project - uses more columns */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-8 row-span-1 md:row-span-2"
            >
              <div className="relative h-full rounded-xl overflow-hidden border border-neutral-700 group bg-neutral-800">
                <img 
                  src={projects[0].image} 
                  alt={projects[0].title} 
                  className="w-full h-60 md:h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold bg-primary-700 text-white rounded-full">
                    {projects[0].category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">{projects[0].title}</h3>
                  <p className="text-neutral-200 mb-5 max-w-lg">{projects[0].description}</p>
                  <Link 
                    to={projects[0].link} 
                    className="inline-flex items-center px-4 py-2 text-sm rounded-lg bg-primary-700 text-white hover:bg-primary-600 transition-colors duration-300"
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
            
            {/* Standard sized projects */}
            {projects.slice(1).map((project) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                className="lg:col-span-4"
              >
                <div className="h-full bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 group">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-primary-900/60 text-primary-300 rounded-full">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                    <p className="text-neutral-300 mb-4 text-sm">{project.description}</p>
                    <Link 
                      to={project.link} 
                      className="inline-flex items-center text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors duration-300"
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
          
          {/* Project impact metrics for added SEO value and content */}
          <motion.div 
            variants={itemVariants}
            className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 text-center"
          >
            <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
              <div className="text-3xl font-bold text-primary-400 mb-2">15+</div>
              <div className="text-lg font-semibold text-white mb-1">Projects</div>
              <p className="text-neutral-300 text-sm">Successfully implemented across focus areas</p>
            </div>
            <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
              <div className="text-3xl font-bold text-primary-400 mb-2">50,000+</div>
              <div className="text-lg font-semibold text-white mb-1">Beneficiaries</div>
              <p className="text-neutral-300 text-sm">Directly impacted by our interventions</p>
            </div>
            <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
              <div className="text-3xl font-bold text-primary-400 mb-2">8</div>
              <div className="text-lg font-semibold text-white mb-1">Partner States</div>
              <p className="text-neutral-300 text-sm">Working across diverse geographies</p>
            </div>
          </motion.div>
          
          {/* Call to action */}
          <motion.div
            variants={itemVariants}
            className="mt-10 text-center"
          >
            <Link 
              to="/projects" 
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-600 transition-colors duration-300"
              aria-label="View all InSocia development projects"
            >
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default FeaturedProjects; 