import React from 'react';
import { Helmet } from 'react-helmet';
import SectionLayout from '../layouts/SectionLayout';
import SectionHeading from '../components/common/SectionHeading';
import { Link } from 'react-router-dom';
import { FiUsers, FiHeart, FiTrendingUp, FiGlobe, FiAward, FiBook, FiTarget, FiStar, FiMail, FiBell, FiCheckCircle, FiClock, FiMapPin, FiArrowRight, FiBriefcase } from 'react-icons/fi';
import SEO from '../components/SEO';

const CareersPage = () => {
  const careersSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Insocia Consultancy",
              "url": "https://insocia.in"
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
        <title>Careers | Insocia Consultancy - Join Our Mission for Social Impact</title>
        <meta 
          name="description" 
          content="Join Insocia's mission to create equitable societies. Explore career opportunities, fellowship programs, and be part of a team driving meaningful social change through evidence-based development work." 
        />
        <meta 
          name="keywords" 
          content="careers, jobs, development sector careers, fellowship programs, social impact careers, research jobs, policy jobs, Insocia jobs" 
        />
        <script type="application/ld+json">
          {JSON.stringify(careersSchema)}
        </script>
      </Helmet>

      <SEO 
        title="Careers"
        description="Join Insocia's mission to create equitable societies. Explore career opportunities, fellowship programs, and be part of meaningful social change."
        keywords="careers, jobs, development sector careers, fellowship programs, social impact careers"
      />

      {/* Premium Hero Section */}
      <section className="relative bg-transparent overflow-hidden hero-section min-h-screen">
        {/* Static background effects */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute w-[600px] h-[600px] -top-32 -left-32 bg-gradient-to-br from-primary-500/15 to-secondary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute w-[400px] h-[400px] bottom-0 right-0 bg-gradient-to-tl from-secondary-500/15 to-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-600/8 to-secondary-600/8 rounded-full blur-2xl"></div>
        </div>

        <div className="w-full px-4 md:px-8 relative z-10 flex items-center min-h-screen mt-24 sm:mt-0">
          <div className="max-w-6xl mx-auto text-center w-full">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
              <FiBriefcase className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Join Our Team</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              Shape the <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Future</span> of Social Development
            </h1>
            
                          <p className="responsive-desc text-xl md:text-2xl text-neutral-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              Join a dynamic team of changemakers working on evidence-based solutions that create lasting impact for communities worldwide.
            </p>

            {/* Career highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 responsive-grid-small" data-aos="fade-up">
              <div className="backdrop-blur-md bg-white/80 border border-neutral-200/50 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-primary-200/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 rounded-lg flex items-center justify-center mx-auto mb-4 border border-primary-200/50">
                  <FiHeart className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Purpose-Driven</h3>
                <p className="text-neutral-600">Meaningful work with real social impact</p>
              </div>
              
              <div className="backdrop-blur-md bg-white/80 border border-neutral-200/50 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-primary-200/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 rounded-lg flex items-center justify-center mx-auto mb-4 border border-primary-200/50">
                  <FiGlobe className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Global Reach</h3>
                <p className="text-neutral-600">International projects across continents</p>
              </div>

              <div className="backdrop-blur-md bg-white/80 border border-neutral-200/50 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-primary-200/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 rounded-lg flex items-center justify-center mx-auto mb-4 border border-primary-200/50">
                  <FiTrendingUp className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Growth-Focused</h3>
                <p className="text-neutral-600">Continuous learning and development</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 responsive-grid-small" data-aos="fade-up">
              {[
                { number: '25+', label: 'Team Members', icon: FiUsers },
                { number: '18', label: 'Countries', icon: FiGlobe },
                { number: '95%', label: 'Employee Satisfaction', icon: FiHeart },
                { number: '50+', label: 'Projects Completed', icon: FiTarget }
              ].map((stat, index) => (
                <div key={index} className="backdrop-blur-md bg-white/80 border border-neutral-200/50 rounded-xl p-6 text-center hover:bg-primary-50/50 transition-all duration-300 group">
                  <stat.icon className="w-6 h-6 text-primary-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-2xl font-bold text-neutral-900 mb-2">{stat.number}</p>
                  <p className="text-sm text-neutral-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Join InSocia */}
      <SectionLayout bgColor="bg-transparent" className="py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
            <FiHeart className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Why Join Insocia</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-neutral-900 leading-tight">
            Benefits & <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Perks</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We offer more than just a job - join a mission-driven organization committed to your growth and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative backdrop-blur-md bg-white/80 rounded-2xl border border-neutral-200/50 hover:border-primary-400/50 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary-200/30 overflow-hidden h-full p-8">
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-primary-200/50">
                    <benefit.icon className="w-7 h-7 text-primary-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-primary-500/0 blur-sm"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionLayout>

        {/* Current Opportunities */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
                <FiBell className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Current Opportunities</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-neutral-900 leading-tight">
                Building Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Dream Team</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto" data-aos="fade-up">
              <div className="backdrop-blur-md bg-white/90 rounded-2xl border border-neutral-200/50 p-12 text-center shadow-xl shadow-primary-200/20">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary-200/50">
                  <FiClock className="w-8 h-8 text-primary-600" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                  No Current Openings – But Exciting Opportunities Ahead!
                </h3>
                
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  We're currently at full capacity with our amazing team, but we're always growing! New positions will be posted here as we expand our impact. 
                  Stay connected to be the first to know about future opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="backdrop-blur-md bg-white/80 rounded-xl p-6 border border-neutral-200/50 hover:border-primary-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-200/30">
                    <FiBell className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                    <h4 className="text-lg font-semibold text-neutral-900 mb-3">Get Notified</h4>
                    <p className="text-sm text-neutral-600 mb-4">Be the first to hear about new openings</p>
                                          <button className="secondary-btn text-sm">
                      Subscribe to Alerts
                    </button>
                  </div>

                  <div className="backdrop-blur-md bg-white/80 rounded-xl p-6 border border-neutral-200/50 hover:border-primary-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-200/30">
                    <FiMail className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                    <h4 className="text-lg font-semibold text-neutral-900 mb-3">Send Your CV</h4>
                    <p className="text-sm text-neutral-600 mb-4">Submit your profile for future consideration</p>
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-neutral-700 border border-neutral-300 hover:border-primary-400 hover:bg-primary-50 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>

                <p className="text-sm text-neutral-500">
                  💡 Tip: Follow us on LinkedIn for real-time updates on new positions and company news
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fellowship Programs */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
                <FiBook className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Fellowship Programs</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-neutral-900 leading-tight">
                Start Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Development</span> Journey
              </h2>
              <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                Launch your career in development with our comprehensive fellowship programs designed to nurture the next generation of social impact leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fellowshipPrograms.map((program, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative backdrop-blur-md bg-white/80 rounded-2xl border border-neutral-200/50 hover:border-primary-400/50 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary-200/30 overflow-hidden h-full">
                    
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 p-8 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-medium text-primary-800 bg-primary-50/80 px-3 py-1 rounded-full border border-primary-200/50">
                          {program.duration}
                        </span>
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 rounded-lg flex items-center justify-center border border-primary-200/50">
                          <FiTarget className="w-4 h-4 text-primary-600" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 mb-4">
                        {program.title}
                      </h3>
                      
                      <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300 leading-relaxed mb-6 flex-grow">
                        {program.description}
                      </p>
                      
                      <div className="pt-4 border-t border-neutral-200/50">
                        <h4 className="text-sm font-semibold text-neutral-900 mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {program.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-neutral-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Animated border effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-primary-500/0 blur-sm"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
                <FiMail className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Application Process</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-neutral-900 leading-tight">
                Your Journey <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Starts Here</span>
              </h2>
              <p className="responsive-desc text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Simple, transparent application process designed to help us get to know you better.
              </p>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {careerJourney.map((step, index) => (
                  <div
                    key={index}
                    className="text-center relative"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 rounded-2xl flex items-center justify-center mx-auto border border-primary-200/50 hover:scale-110 transition-transform duration-300 relative z-10">
                        <step.icon className="w-8 h-8 text-primary-600" />
                      </div>
                      {/* Individual connecting line for each step except the last */}
                      {index < careerJourney.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%+2rem)] h-0.5 bg-gradient-to-r from-primary-500/40 to-primary-500/20"></div>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-bold text-neutral-900 mb-3">
                      {step.stage}
                    </h3>
                    
                    <p className="text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>

        {/* Full-width CTA Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              {/* Subtle background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-3xl"></div>
              
              <div className="relative backdrop-blur-md bg-white/90 rounded-3xl border border-neutral-200/50 overflow-hidden shadow-2xl shadow-primary-200/20">
                {/* Top section */}
                <div className="p-8 md:p-12 text-center border-b border-neutral-200/50">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
                    <FiHeart className="w-4 h-4 text-primary-600" />
                    <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Ready to Collaborate</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                    Ready to Make an <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Impact?</span>
                  </h2>
                  
                  <p className="responsive-desc text-lg md:text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                    We're always looking for passionate individuals who want to contribute to meaningful social change. Join our mission to create evidence-based solutions that transform communities worldwide.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                    <Link 
                      to="/contact" 
                      className="primary-btn"
                    >
                      Start Your Journey
                      <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <button 
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-neutral-700 backdrop-blur-sm bg-white/80 hover:bg-white border border-neutral-200 hover:border-neutral-300 rounded-xl transition-all duration-300"
                      onClick={() => {
                        // Add newsletter subscription logic here
                        alert("Newsletter subscription coming soon!");
                      }}
                    >
                      Stay Updated
                    </button>
                  </div>
                  
                  {/* Career highlights */}
                  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 text-left backdrop-blur-md bg-white/80 border border-neutral-200/50 rounded-xl p-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 rounded-lg flex items-center justify-center border border-primary-200/50">
                        <FiHeart className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-neutral-900 mb-1">Purpose-Driven</h3>
                        <p className="text-xs text-neutral-600">Meaningful work with real impact</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-left backdrop-blur-md bg-white/80 border border-neutral-200/50 rounded-xl p-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 rounded-lg flex items-center justify-center border border-primary-200/50">
                        <FiTrendingUp className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-neutral-900 mb-1">Growth-Focused</h3>
                        <p className="text-xs text-neutral-600">Continuous learning opportunities</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-left backdrop-blur-md bg-white/80 border border-neutral-200/50 rounded-xl p-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 rounded-lg flex items-center justify-center border border-primary-200/50">
                        <FiGlobe className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-neutral-900 mb-1">Global Impact</h3>
                        <p className="text-xs text-neutral-600">International reach and influence</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom section with stats */}
                <div className="grid grid-cols-2 md:grid-cols-4">
                  {[
                    { number: '25+', label: 'Team Members', icon: FiUsers },
                    { number: '18', label: 'Countries Served', icon: FiGlobe },
                    { number: '95%', label: 'Employee Satisfaction', icon: FiHeart },
                    { number: '50+', label: 'Projects Completed', icon: FiTarget }
                  ].map((stat, index) => (
                    <div key={index} className="group p-6 md:p-8 text-center border-r border-neutral-200/50 last:border-r-0 hover:bg-primary-50/50 transition-all duration-300">
                      <stat.icon className="w-6 h-6 text-primary-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors">{stat.number}</p>
                      <p className="text-sm text-neutral-600 group-hover:text-neutral-700 transition-colors font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default CareersPage; 