import React from 'react';
import { Helmet } from 'react-helmet';
import SectionLayout from '../layouts/SectionLayout';
import SectionHeading from '../components/common/SectionHeading';
import { Link } from 'react-router-dom';
import { FiUsers, FiHeart, FiTrendingUp, FiGlobe, FiAward, FiBook, FiTarget, FiStar, FiMail, FiBell, FiCheckCircle, FiClock, FiMapPin, FiArrowRight } from 'react-icons/fi';

const CareersPage = () => {
  const careersSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "InSocia Development Consultancy",
      "url": "https://insocia.org"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kozhikode",
        "addressCountry": "IN"
      }
    }
  };

  const benefits = [
    {
      icon: FiHeart,
      title: "Purpose-Driven Work",
      description: "Contribute to meaningful projects that create lasting social impact across communities"
    },
    {
      icon: FiGlobe,
      title: "Global Exposure",
      description: "Work on international development projects across multiple countries and regions"
    },
    {
      icon: FiTrendingUp,
      title: "Professional Growth",
      description: "Continuous learning opportunities and career advancement in a dynamic environment"
    },
    {
      icon: FiUsers,
      title: "Collaborative Culture",
      description: "Join a team of passionate professionals committed to excellence and innovation"
    },
    {
      icon: FiAward,
      title: "Competitive Package",
      description: "Attractive compensation, benefits, and flexible work arrangements"
    },
    {
      icon: FiBook,
      title: "Learning & Development",
      description: "Access to training programs, conferences, and skill development opportunities"
    }
  ];

  const fellowshipPrograms = [
    {
      title: "Research Fellowship",
      duration: "6-12 months",
      description: "Deep dive into policy research and analysis with senior researchers",
      requirements: ["Master's degree", "Research experience", "Analytical skills"],
      color: "primary"
    },
    {
      title: "Policy Innovation Fellowship",
      duration: "8-10 months",
      description: "Work on cutting-edge policy design and innovation projects",
      requirements: ["Policy background", "Creative thinking", "Collaboration skills"],
      color: "secondary"
    },
    {
      title: "Impact Assessment Fellowship",
      duration: "6-9 months",
      description: "Contribute to monitoring, evaluation, and impact measurement initiatives",
      requirements: ["M&E experience", "Statistical knowledge", "Field experience"],
      color: "green"
    }
  ];

  const careerJourney = [
    {
      stage: "Application",
      description: "Submit your application through our career portal",
      icon: FiMail
    },
    {
      stage: "Initial Review",
      description: "Our HR team reviews applications and shortlists candidates",
      icon: FiCheckCircle
    },
    {
      stage: "Interview Process",
      description: "Multiple rounds including technical and cultural fit assessments",
      icon: FiUsers
    },
    {
      stage: "Final Decision",
      description: "Offer letter and onboarding process for successful candidates",
      icon: FiStar
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers | InSocia Development Consultancy - Join Our Mission for Social Impact</title>
        <meta 
          name="description" 
          content="Join InSocia's mission to create equitable societies. Explore career opportunities, fellowship programs, and be part of a team driving meaningful social change through evidence-based development work." 
        />
        <meta 
          name="keywords" 
          content="careers, jobs, development sector careers, fellowship programs, social impact careers, research jobs, policy jobs, InSocia jobs" 
        />
        <script type="application/ld+json">
          {JSON.stringify(careersSchema)}
        </script>
      </Helmet>

      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden pt-24 pb-16">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute w-[700px] h-[700px] -top-32 -left-32 bg-gradient-to-br from-primary-500/15 to-secondary-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute w-[500px] h-[500px] bottom-0 right-0 bg-gradient-to-tl from-secondary-500/15 to-primary-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute w-[300px] h-[300px] top-1/3 left-1/3 bg-gradient-to-r from-primary-600/8 to-secondary-600/8 rounded-full blur-2xl"></div>
        </div>

        <div className="w-full px-4 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 rounded-full px-5 py-2 mb-6">
              <FiUsers className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-semibold text-primary-300 uppercase tracking-wider">Join Our Mission</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Shape the <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 animate-gradient-x">Future</span> of Social Development
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto">
              Join a dynamic team of changemakers working on evidence-based solutions that create lasting impact for communities worldwide. Be part of the transformation.
            </p>

            {/* Career highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-lg flex items-center justify-center mx-auto mb-3 border border-primary-400/20">
                  <FiHeart className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Purpose-Driven</h3>
                <p className="text-sm text-white/70">Meaningful work with real social impact</p>
              </div>
              
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-lg flex items-center justify-center mx-auto mb-3 border border-primary-400/20">
                  <FiGlobe className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Global Reach</h3>
                <p className="text-sm text-white/70">International projects across continents</p>
              </div>

              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-lg flex items-center justify-center mx-auto mb-3 border border-primary-400/20">
                  <FiTrendingUp className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Growth-Focused</h3>
                <p className="text-sm text-white/70">Continuous learning and development</p>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { number: '25+', label: 'Team Members', icon: FiUsers },
                { number: '18', label: 'Countries', icon: FiGlobe },
                { number: '95%', label: 'Employee Satisfaction', icon: FiHeart },
                { number: '50+', label: 'Projects Completed', icon: FiTarget }
              ].map((stat, index) => (
                <div key={index} className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-3 text-center group hover:bg-white/15 transition-all duration-300">
                  <stat.icon className="w-4 h-4 text-primary-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-lg lg:text-xl font-bold text-white mb-1">{stat.number}</p>
                  <p className="text-xs text-white/70 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Join InSocia */}
      <SectionLayout bgColor="bg-transparent" className="py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
            <FiHeart className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-semibold text-primary-300 uppercase tracking-wider">Why Join InSocia</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
            More Than a <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">Career</span> – A Mission
          </h2>
          <p className="text-xl text-neutral-200 max-w-4xl mx-auto leading-relaxed">
            At InSocia, you're not just joining a team – you're becoming part of a movement dedicated to creating equitable societies through innovative policy and impactful research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary-400/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-xl flex items-center justify-center mb-6 border border-primary-400/20 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-neutral-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </SectionLayout>

      {/* Current Openings Status */}
      <SectionLayout bgColor="bg-transparent" className="py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary-500/20 to-amber-500/20 border border-secondary-400/30 rounded-full px-6 py-3 mb-8">
            <FiBell className="w-4 h-4 text-secondary-400" />
            <span className="text-sm font-semibold text-secondary-300 uppercase tracking-wider">Current Opportunities</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
            Building Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-amber-400">Dream Team</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-secondary-500/10 to-amber-500/10 backdrop-blur-sm rounded-2xl p-12 border border-secondary-500/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary-500/30 to-amber-500/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-secondary-400/20">
              <FiClock className="w-8 h-8 text-secondary-400" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              No Current Openings – But Exciting Opportunities Ahead!
            </h3>
            
            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
              We're currently at full capacity with our amazing team, but we're always growing! New positions will be posted here as we expand our impact. 
              Stay connected to be the first to know about future opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <FiBell className="w-8 h-8 text-secondary-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white mb-3">Get Notified</h4>
                <p className="text-sm text-neutral-300 mb-4">Be the first to hear about new openings</p>
                <button className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-secondary-600 hover:bg-secondary-700 rounded-lg transition-colors">
                  Subscribe to Alerts
                </button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <FiMail className="w-8 h-8 text-secondary-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white mb-3">Send Your CV</h4>
                <p className="text-sm text-neutral-300 mb-4">Submit your profile for future consideration</p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-secondary-400 border border-secondary-400 hover:bg-secondary-400 hover:text-white rounded-lg transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <p className="text-sm text-neutral-400">
              💡 Tip: Follow us on LinkedIn for real-time updates on new positions and company news
            </p>
          </div>
        </div>
      </SectionLayout>

      {/* Fellowship Programs */}
      <SectionLayout bgColor="bg-transparent" className="py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full px-6 py-3 mb-8">
            <FiBook className="w-4 h-4 text-green-400" />
            <span className="text-sm font-semibold text-green-300 uppercase tracking-wider">Fellowship Programs</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
            Start Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">Development</span> Journey
          </h2>
          <p className="text-xl text-neutral-200 max-w-4xl mx-auto leading-relaxed">
            Launch your career in development with our comprehensive fellowship programs designed to nurture the next generation of social impact leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fellowshipPrograms.map((program, index) => (
            <div key={index} className={`bg-gradient-to-br from-${program.color}-500/10 to-${program.color}-600/5 backdrop-blur-sm rounded-2xl p-8 border border-${program.color}-500/20 hover:border-${program.color}-400/40 transition-all duration-300 group`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">{program.title}</h3>
                <span className={`inline-block px-3 py-1 text-xs font-medium bg-${program.color}-500/20 text-${program.color}-300 rounded-full`}>
                  {program.duration}
                </span>
              </div>
              
              <p className="text-neutral-300 mb-6 leading-relaxed">{program.description}</p>
              
              <div className="space-y-2 mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Requirements:</h4>
                {program.requirements.map((req, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-neutral-400">
                    <div className={`w-1.5 h-1.5 bg-${program.color}-400 rounded-full`}></div>
                    <span>{req}</span>
                  </div>
                ))}
              </div>
              
              <button className={`w-full text-${program.color}-400 hover:text-${program.color}-300 text-sm font-medium transition-colors flex items-center justify-center py-3 border border-${program.color}-400/30 hover:border-${program.color}-400/50 rounded-lg`}>
                Learn More
                <FiArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </SectionLayout>

      {/* Career Journey */}
      <SectionLayout bgColor="bg-transparent" className="py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-400/30 rounded-full px-6 py-3 mb-8">
            <FiTarget className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">Application Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
            Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">Journey</span> With Us
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerJourney.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-indigo-500/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-400/20">
                    <step.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.stage}</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">{step.description}</p>
                </div>
                {index < careerJourney.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-full w-6 h-px bg-gradient-to-r from-purple-400/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionLayout>

      {/* CTA Section */}
      <SectionLayout bgColor="bg-transparent" className="py-16">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm rounded-2xl border border-primary-500/20"></div>
          <div className="relative p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make an <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">Impact</span>?
            </h2>
            <p className="text-neutral-300 text-lg mb-8 max-w-3xl mx-auto">
              Even though we don't have current openings, we're always interested in connecting with passionate individuals who share our vision for social change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 rounded-lg transition-all duration-200 hover:scale-105"
              >
                Get In Touch
                <FiArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary-400 border border-primary-400 hover:bg-primary-400 hover:text-white rounded-lg transition-all duration-200">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default CareersPage; 