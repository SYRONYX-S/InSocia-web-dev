import React from 'react';
import { Helmet } from 'react-helmet';
import SectionLayout from '../layouts/SectionLayout';
import { Link } from 'react-router-dom';
import { FiTarget, FiTrendingUp, FiUsers, FiGlobe, FiArrowRight, FiStar, FiHeart, FiZap, FiCheckCircle, FiCalendar, FiMapPin, FiAward, FiCompass, FiBriefcase } from 'react-icons/fi';

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

      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden">
        {/* Static background effects */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute w-[600px] h-[600px] -top-32 -left-32 bg-gradient-to-br from-primary-500/15 to-secondary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute w-[400px] h-[400px] bottom-0 right-0 bg-gradient-to-tl from-secondary-500/15 to-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-600/8 to-secondary-600/8 rounded-full blur-2xl"></div>
        </div>

        <div className="w-full px-4 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 rounded-full px-5 py-2 mb-6">
              <FiTarget className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-semibold text-primary-300 uppercase tracking-wider">Our Projects</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Building the <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400">Future</span> of Development
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto">
              We're preparing comprehensive development initiatives that will transform communities across multiple sectors. Our projects will showcase the power of evidence-based interventions and collaborative innovation.
            </p>

            {/* Current status highlight */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-full px-6 py-3 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-sm font-medium text-amber-300">Projects launching soon</span>
              </div>
              <div className="w-px h-4 bg-amber-400/30"></div>
              <span className="text-sm text-amber-200">Currently in preparation phase</span>
            </div>

            {/* Impact preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm font-medium text-white/90 mb-1">{stat.label}</div>
                  <div className="text-xs text-white/60">{stat.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Project Initiatives */}
      <SectionLayout bgColor="bg-transparent" className="py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
            <FiZap className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-semibold text-primary-300 uppercase tracking-wider">Upcoming Initiatives</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
            Transformative <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">Development</span> Programs
          </h2>
          <p className="text-xl text-neutral-200 max-w-4xl mx-auto leading-relaxed">
            Our upcoming projects span across six key focus areas, each designed to create sustainable impact and meaningful change in communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {upcomingProjectTypes.map((project, index) => (
            <div key={project.id} className={`bg-gradient-to-br ${project.color}/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group overflow-hidden`}>
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${project.color}/30 rounded-xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-white/70 mb-1">Expected Impact</div>
                    <div className="text-lg font-bold text-white">{project.expectedImpact}</div>
                  </div>
                </div>

                <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-full mb-4">
                  {project.focusArea}
                </span>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-neutral-200 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-sm text-neutral-300">
                    <FiCalendar className="w-4 h-4 text-primary-400" />
                    <span><strong>Duration:</strong> {project.duration}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-neutral-300">
                    <FiTarget className="w-4 h-4 text-primary-400 mt-0.5" />
                    <div>
                      <strong>Key Sectors:</strong>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {project.sectors.map((sector, idx) => (
                          <span key={idx} className="inline-block px-2 py-1 text-xs bg-white/10 text-white/70 rounded">
                            {sector}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-amber-500/20 text-amber-300 rounded-full">
                      In Development
                    </span>
                    <button className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors">
                      Learn More <FiArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionLayout>

      {/* Preparation Phase */}
      <SectionLayout bgColor="bg-transparent" className="py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary-500/20 to-cyan-500/20 border border-secondary-400/30 rounded-full px-6 py-3 mb-8">
            <FiCheckCircle className="w-4 h-4 text-secondary-400" />
            <span className="text-sm font-semibold text-secondary-300 uppercase tracking-wider">Current Phase</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
            Building <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-cyan-400">Strong</span> Foundations
          </h2>
          <p className="text-xl text-neutral-200 max-w-4xl mx-auto leading-relaxed">
            We're currently in the strategic preparation phase, laying the groundwork for impactful and sustainable development initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {preparationPhases.map((phase, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-secondary-400/30 transition-all duration-300 group p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary-500/30 to-cyan-500/30 rounded-lg flex items-center justify-center border border-secondary-400/20 group-hover:scale-110 transition-transform duration-300">
                  <phase.icon className="w-5 h-5 text-secondary-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white group-hover:text-secondary-300 transition-colors">
                      {phase.phase}
                    </h3>
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-green-500/20 text-green-300 rounded-full">
                      {phase.status}
                    </span>
                  </div>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Timeline */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-secondary-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl border border-secondary-500/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Project Launch Timeline</h3>
            <p className="text-neutral-200 mb-6 max-w-2xl mx-auto">
              We're targeting to launch our first set of pilot projects in Q2 2024, with full-scale implementation beginning in Q4 2024.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                <span className="text-sm font-medium text-amber-300">Current Phase: Preparation</span>
              </div>
              <div className="hidden sm:block w-8 h-px bg-white/20"></div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm font-medium text-green-300">Next: Pilot Launch (Q2 2024)</span>
              </div>
              <div className="hidden sm:block w-8 h-px bg-white/20"></div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
                <span className="text-sm font-medium text-primary-300">Full Implementation (Q4 2024)</span>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Stay Updated CTA */}
      <SectionLayout bgColor="bg-transparent" className="py-16">
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm rounded-2xl border border-primary-500/20 p-8 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-xl flex items-center justify-center mx-auto mb-6 border border-primary-400/20">
              <FiAward className="w-8 h-8 text-primary-400" />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4">Be Part of Our Journey</h3>
            <p className="text-neutral-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Stay updated on our project developments, partnership opportunities, and impact stories. Be among the first to know when our transformative initiatives launch.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email for updates"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:border-primary-400/50 focus:ring-1 focus:ring-primary-400/25 transition-colors"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/partnerships" 
                className="inline-flex items-center gap-2 bg-secondary-600/20 hover:bg-secondary-600/30 border border-secondary-400/30 hover:border-secondary-400/50 rounded-full px-6 py-3 text-secondary-300 hover:text-secondary-200 transition-all duration-300"
              >
                <span className="text-sm font-medium">Partnership Opportunities</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-primary-600/20 hover:bg-primary-600/30 border border-primary-400/30 hover:border-primary-400/50 rounded-full px-6 py-3 text-primary-300 hover:text-primary-200 transition-all duration-300"
              >
                <span className="text-sm font-medium">Get Involved</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default ProjectsPage; 