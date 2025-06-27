import React from 'react';
import { Helmet } from 'react-helmet';
import SectionLayout from '../layouts/SectionLayout';
import { Link } from 'react-router-dom';
import { FiTarget, FiTrendingUp, FiUsers, FiGlobe, FiArrowRight, FiStar, FiHeart, FiZap, FiCheckCircle, FiCalendar, FiMapPin, FiAward, FiCompass, FiBriefcase } from 'react-icons/fi';
import SEO from '../components/SEO';

const ProjectsPage = () => {
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "InSocia Development Consultancy",
    "url": "https://insocia.org",
    "description": "Upcoming development projects and initiatives by InSocia Development Consultancy",
    "knowsAbout": [
      "Social Development",
      "Policy Research",
      "Development Projects",
      "Community Impact"
    ]
  };

  const upcomingProjectTypes = [
    {
      id: 1,
      title: "Rural Healthcare Strengthening",
      focusArea: "Health & Wellbeing",
      description: "Comprehensive initiatives to strengthen primary healthcare systems in rural and underserved communities through community health worker training, digital health integration, and health infrastructure development.",
      expectedImpact: "50,000+ lives",
      duration: "3-5 years",
      sectors: ["Community Health", "Digital Health", "Health Infrastructure"],
      icon: FiHeart,
      color: "from-red-500 to-pink-600"
    },
    {
      id: 2,
      title: "Education Innovation & Access",
      focusArea: "Education & Skills Development",
      description: "Transformative educational programs focusing on improving learning outcomes, teacher capacity building, digital education integration, and ensuring equitable access to quality education.",
      expectedImpact: "25,000+ students",
      duration: "2-4 years",
      sectors: ["EdTech", "Teacher Training", "Curriculum Development"],
      icon: FiStar,
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 3,
      title: "Sustainable Livelihoods & Economic Empowerment",
      focusArea: "Sustainable Livelihoods",
      description: "Economic empowerment programs supporting entrepreneurship, financial inclusion, skills development, and creating sustainable income opportunities for marginalized communities.",
      expectedImpact: "10,000+ families",
      duration: "3-6 years",
      sectors: ["Microfinance", "Skills Training", "Entrepreneurship"],
      icon: FiTrendingUp,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 4,
      title: "Climate-Resilient Agriculture",
      focusArea: "Environmental Sustainability",
      description: "Agricultural transformation initiatives promoting climate-smart farming practices, water conservation, sustainable resource management, and building farmer resilience to climate change.",
      expectedImpact: "5,000+ farmers",
      duration: "4-7 years",
      sectors: ["Climate Adaptation", "Water Management", "Sustainable Farming"],
      icon: FiGlobe,
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 5,
      title: "Gender Equality & Social Inclusion",
      focusArea: "Gender Equality & Inclusion",
      description: "Comprehensive programs advancing gender equality, women's empowerment, social inclusion, and creating equal opportunities across all development interventions.",
      expectedImpact: "20,000+ women",
      duration: "2-5 years",
      sectors: ["Women's Empowerment", "Social Inclusion", "Leadership Development"],
      icon: FiUsers,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 6,
      title: "Governance & Policy Innovation",
      focusArea: "Governance & Policy",
      description: "Strengthening governance systems, enhancing transparency, promoting citizen participation, and developing innovative policy solutions for sustainable development challenges.",
      expectedImpact: "Multiple states",
      duration: "5-8 years",
      sectors: ["Policy Development", "Governance Systems", "Citizen Engagement"],
      icon: FiBriefcase,
      color: "from-orange-500 to-red-600"
    }
  ];

  const preparationPhases = [
    {
      phase: "Research & Analysis",
      description: "Conducting comprehensive baseline studies and needs assessments",
      icon: FiCompass,
      status: "In Progress"
    },
    {
      phase: "Partnership Development",
      description: "Building strategic partnerships with government agencies and development organizations",
      icon: FiUsers,
      status: "Active"
    },
    {
      phase: "Funding & Resource Mobilization",
      description: "Securing funding and resources from various donors and partners",
      icon: FiTarget,
      status: "Ongoing"
    },
    {
      phase: "Pilot Program Design",
      description: "Developing pilot programs and proof-of-concept initiatives",
      icon: FiZap,
      status: "Planning"
    }
  ];

  const stats = [
    { number: '6', label: 'Focus Areas', subtitle: 'Comprehensive coverage' },
    { number: '100K+', label: 'Projected Impact', subtitle: 'Lives to be transformed' },
    { number: '15+', label: 'Partner Organizations', subtitle: 'Already committed' },
    { number: '25+', label: 'Expert Team', subtitle: 'Ready to deploy' }
  ];

  return (
    <>
      <Helmet>
        <title>Our Projects | InSocia Development Consultancy - Transformative Development Initiatives</title>
        <meta 
          name="description" 
          content="Explore InSocia's upcoming development projects and initiatives. We're preparing comprehensive programs across health, education, livelihoods, and governance to create meaningful social impact." 
        />
        <meta 
          name="keywords" 
          content="development projects, social impact initiatives, community development, healthcare projects, education programs, sustainable development, policy innovation" 
        />
        <script type="application/ld+json">
          {JSON.stringify(projectsSchema)}
        </script>
      </Helmet>

      <SEO 
        title="Our Projects"
        description="Explore InSocia's upcoming development projects and initiatives across health, education, livelihoods, and governance to create meaningful social impact."
        keywords="development projects, social impact initiatives, community development, healthcare projects, education programs"
      />

      <SectionLayout bgColor="bg-transparent" className="min-h-screen">
        {/* Hero Section */}
        <div className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
                <FiTarget className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Our Projects</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-neutral-900 leading-tight">
                Building the <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Future</span> of Development
              </h1>
              <p className="responsive-desc text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                We're preparing comprehensive development initiatives that will transform communities across multiple sectors through evidence-based interventions.
              </p>
            </div>

            {/* Current Status */}
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-100/80 to-orange-100/80 border border-amber-300/50 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-sm font-medium text-amber-700">Projects launching soon</span>
                </div>
                <div className="w-px h-4 bg-amber-400/30"></div>
                <span className="text-sm text-amber-600">Currently in preparation phase</span>
              </div>
            </div>

            {/* Impact Preview Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 responsive-grid-small" data-aos="fade-up">
              {stats.map((stat, index) => (
                <div key={index} className="backdrop-blur-md bg-white/80 border border-neutral-200/50 rounded-xl p-6 text-center hover:bg-primary-50/50 transition-all duration-300 group">
                  <div className="text-3xl font-bold text-neutral-900 mb-2">{stat.number}</div>
                  <div className="text-sm font-medium text-neutral-700 mb-1">{stat.label}</div>
                  <div className="text-xs text-neutral-500">{stat.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Project Initiatives */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
                <FiZap className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Upcoming Initiatives</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-neutral-900 leading-tight">
                Transformative <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Development</span> Programs
              </h2>
              <p className="responsive-desc text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                Our upcoming projects span six critical development sectors, each designed to create sustainable impact and transform communities through innovative approaches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingProjectTypes.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative backdrop-blur-md bg-white/80 rounded-2xl border border-neutral-200/50 hover:border-primary-400/50 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary-200/30 overflow-hidden h-full">
                    
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 p-8 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 rounded-xl flex items-center justify-center border border-primary-200/50 group-hover:scale-110 transition-transform duration-300">
                          <project.icon className="w-7 h-7 text-primary-600" />
                        </div>
                        <span className="text-xs font-medium text-primary-800 bg-primary-50/80 px-3 py-1 rounded-full border border-primary-200/50">
                          {project.focusArea}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 mb-4">
                        {project.title}
                      </h3>
                      
                      <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300 leading-relaxed mb-6 flex-grow">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.sectors.map((sector, idx) => (
                          <span key={idx} className="text-xs bg-neutral-100 text-neutral-700 px-2 py-1 rounded-full border border-neutral-200/50">
                            {sector}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-neutral-200/50">
                        <div>
                          <div className="text-sm font-semibold text-neutral-900">{project.expectedImpact}</div>
                          <div className="text-xs text-neutral-500">Expected Impact</div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-neutral-900">{project.duration}</div>
                          <div className="text-xs text-neutral-500">Duration</div>
                        </div>
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

        {/* Preparation Progress */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
                <FiCheckCircle className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Preparation Progress</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-neutral-900 leading-tight">
                Getting Ready for <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Launch</span>
              </h2>
              <p className="responsive-desc text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                We're actively working across multiple preparation phases to ensure our projects deliver maximum impact from day one.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 responsive-grid-small">
              {preparationPhases.map((phase, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative backdrop-blur-md bg-white/80 rounded-2xl border border-neutral-200/50 hover:border-primary-400/50 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary-200/30 overflow-hidden h-full p-6">
                    
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 rounded-xl flex items-center justify-center mx-auto mb-4 border border-primary-200/50 group-hover:scale-110 transition-transform duration-300">
                        <phase.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      
                      <div className="inline-flex items-center gap-2 bg-green-50/80 border border-green-200/50 rounded-full px-3 py-1 mb-4">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs font-medium text-green-700">{phase.status}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 mb-3">
                        {phase.phase}
                      </h3>
                      
                      <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300 leading-relaxed text-sm">
                        {phase.description}
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
          </div>
        </div>

        {/* Partnership & Collaboration */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center" data-aos="fade-up">
              <div className="backdrop-blur-md bg-white/90 rounded-2xl border border-neutral-200/50 p-8 shadow-xl shadow-primary-200/20">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-6">
                  <FiUsers className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Join Our Mission</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
                  Partner with Us for <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Impact</span>
                </h2>
                <p className="responsive-desc text-xl text-neutral-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Whether you're a development organization, government agency, or funding partner, we invite you to collaborate with us in creating transformative change.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/partnerships"
                    className="primary-btn"
                  >
                    <span>Explore Partnerships</span>
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-3 bg-white hover:bg-neutral-50 text-neutral-900 font-semibold px-8 py-4 rounded-xl border border-neutral-200 hover:border-neutral-300 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <span>Get in Touch</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default ProjectsPage; 