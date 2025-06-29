import React, { useState } from 'react';
import SectionLayout from '../../layouts/SectionLayout';
import { FaLinkedinIn } from 'react-icons/fa';
import team from '../../data/team';

const TeamMember = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
      data-aos="fade-up"
    >
      <div className="relative">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4">
          <a 
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-2 rounded-full shadow-md hover:bg-primary-50 transition-colors duration-300"
          >
            <FaLinkedinIn className="text-primary-600" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-neutral-800">{member.name}</h3>
        <p className="text-primary-600 mb-3">{member.role}</p>
        <div className={`text-neutral-600 ${isExpanded ? '' : 'line-clamp-3'}`}>
          {member.bio}
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors"
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
      </div>
    </div>
  );
};

const TeamSection = ({ title, members }) => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-neutral-800 mb-8 border-l-4 border-primary-500 pl-4">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map(member => (
          <TeamMember key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

const OurTeam = () => {
  return (
    <SectionLayout backgroundColor="bg-neutral-50" className="py-16">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-neutral-800">Our Team</h2>
        <p className="mt-4 text-neutral-600 max-w-3xl mx-auto">
          Meet the dedicated professionals working to create sustainable social impact.
        </p>
      </div>
      
      <TeamSection title="Leadership Team" members={team.leadership} />
      <TeamSection title="Advisory Board" members={team.advisoryBoard} />
      <TeamSection title="Research Associates & Project Managers" members={team.associates} />
      
      <div className="mt-16 text-center" data-aos="fade-up">
        <p className="text-neutral-700 mb-6">
          Interested in joining our team of experts?
        </p>
        <a 
          href="/careers" 
          className="secondary-light-btn"
        >
          View Current Openings
        </a>
      </div>
    </SectionLayout>
  );
};

export default OurTeam; 