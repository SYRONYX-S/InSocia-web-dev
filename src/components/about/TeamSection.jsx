import React, { useState } from 'react';
import SectionLayout from '../../layouts/SectionLayout';
import { teamData } from '../../data/teamData';
import { FiLinkedin, FiTwitter, FiInstagram, FiMessageCircle, FiChevronDown, FiChevronUp, FiBriefcase, FiUsers } from 'react-icons/fi';
import { motion } from 'framer-motion';

const TeamMemberCard = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="backdrop-blur-md bg-white/80 rounded-xl overflow-hidden border border-neutral-200/50 shadow-lg hover:shadow-primary-200/30 transition-all duration-300 group h-full transform hover:-translate-y-1"
      data-aos="fade-up"
    >
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent"></div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 to-secondary-900/20 opacity-60 mix-blend-overlay"></div>
        
        {/* Name and role positioned over the image */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl font-bold text-white mb-0.5 group-hover:text-primary-300 transition-colors">
            {member.name}
          </h3>
          <p className="text-sm text-primary-300 font-medium">
            {member.role}
          </p>
        </div>
      </div>

      <div className="p-5 bg-white/70 backdrop-blur-sm flex flex-col flex-grow">
        {member.affiliation && (
          <p className="text-xs text-neutral-600 mb-3 flex items-center">
            <FiBriefcase className="mr-1.5 flex-shrink-0" /> {member.affiliation}
          </p>
        )}
        {member.specialization && (
          <p className="text-xs text-neutral-600 mb-3 flex items-center">
            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-1.5 flex-shrink-0"></span>
            <span>Expertise: {member.specialization}</span>
          </p>
        )}
        {member.focus && (
          <p className="text-xs text-neutral-600 mb-3 flex items-center">
            <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-1.5 flex-shrink-0"></span>
            <span>Focus: {member.focus}</span>
          </p>
        )}

        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-48' : 'max-h-0'}`}>
          <p className="text-neutral-700 text-sm leading-relaxed mb-4 pt-3">
            {member.bio}
          </p>
        </div>

        <div className="mt-auto pt-3 border-t border-neutral-200/50 flex justify-between items-center">
          <div className="flex space-x-3">
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-600 transition-colors">
                <FiLinkedin className="w-4 h-4" />
              </a>
            )}
            {member.twitter && (
              <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-600 transition-colors">
                <FiTwitter className="w-4 h-4" />
              </a>
            )}
            {member.instagram && (
              <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-600 transition-colors">
                <FiInstagram className="w-4 h-4" />
              </a>
            )}
            {member.whatsapp && (
              <a href={member.whatsapp} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-600 transition-colors">
                <FiMessageCircle className="w-4 h-4" />
              </a>
            )}
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs text-primary-600 hover:text-primary-700 font-medium flex items-center transition-colors"
            aria-expanded={isExpanded}
            aria-label={isExpanded ? `Collapse details for ${member.name}` : `Expand details for ${member.name}`}
          >
            {isExpanded ? 'Show Less' : 'Show More'}
            {isExpanded ? <FiChevronUp className="ml-1 w-4 h-4" /> : <FiChevronDown className="ml-1 w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const tabs = [
    { name: 'Leadership Team', data: teamData.leadership },
    { name: 'Advisory Board', data: teamData.advisoryBoard },
    { name: 'Research Associates & Project Managers', data: [...teamData.researchAssociates, ...teamData.projectManagers] },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const currentTeam = tabs.find(tab => tab.name === activeTab)?.data || [];

  return (
    <SectionLayout 
      bgColor="bg-transparent"
      className="py-16 md:py-24"
      id="our-team"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div 
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
            <FiUsers className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Our People</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-neutral-900 leading-tight">
            Meet Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Team</span>
          </h2>
                      <p className="responsive-desc text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            Meet the dedicated experts driving our mission through expertise, passion, and commitment to social impact.
          </p>
        </div>

        {/* Sleek Tab Navigation */}
        <div 
          className="mb-16 relative"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex justify-center">
            <div className="relative border-b border-neutral-200/50 flex">
              {tabs.map((tab, index) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`px-5 py-3 text-sm sm:text-base font-medium transition-all duration-300 relative ${
                    activeTab === tab.name 
                      ? 'text-neutral-900' 
                      : 'text-neutral-500 hover:text-neutral-700'
                  }`}
                >
                  {tab.name}
                  
                  {/* Active indicator - animated underline */}
                  {activeTab === tab.name && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"
                      layoutId="activeTabIndicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Centered Team Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 justify-items-center responsive-grid-small"
          data-aos="fade-up"
          data-aos-delay="300"
        > 
          {currentTeam.length > 0 ? (
            currentTeam.map((member, index) => (
              <div 
                key={member.id} 
                data-aos="fade-up" 
                data-aos-delay={400 + (index * 100)}
                className="w-full max-w-xs"
              >
                <TeamMemberCard member={member} />
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-neutral-500 py-10"
              data-aos="fade-up"
              data-aos-delay="400">
              Information for this team category is currently being updated. Please check back soon.
            </p>
          )}
        </div>
      </div>
    </SectionLayout>
  );
};

export default TeamSection; 