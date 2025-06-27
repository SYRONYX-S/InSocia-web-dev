import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import SectionLayout from '../layouts/SectionLayout';
import SectionHeading from '../components/common/SectionHeading';
import { Link } from 'react-router-dom';
import { FiBook, FiDatabase, FiSettings, FiLayers, FiUsers, FiDownload, FiEye, FiShare2, FiArrowRight, FiTarget, FiCheckCircle, FiGrid, FiFileText, FiVideo, FiExternalLink, FiSearch, FiFilter, FiCalendar, FiUser, FiTag, FiTrendingUp, FiClock, FiHeadphones, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFormat, setSelectedFormat] = useState('all');

  const resourcesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "Insocia Consultancy",
              "url": "https://insocia.in"
    },
    "serviceType": "Knowledge Resources",
    "areaServed": "Global"
  };

  const categories = [
    'all',
    'Research Papers',
    'Policy Briefs',
    'Case Studies',
    'Best Practices',
    'Toolkits',
    'Reports'
  ];

  const formats = [
    'all',
    'PDF',
    'Video',
    'Podcast',
    'Interactive',
    'Infographic'
  ];

  const resources = [
    {
      id: 1,
      title: "Community Health Systems Strengthening: A Comprehensive Toolkit",
      description: "A detailed guide for implementing community-based health interventions, including assessment frameworks, implementation strategies, and monitoring tools.",
      category: "Toolkits",
      format: "PDF",
      author: "InSocia Health Team",
      publishDate: "2024-03-20",
      downloadCount: 2847,
      readTime: "45 min",
      pages: 86,
      tags: ["Healthcare", "Community Development", "Implementation"],
      featured: true,
      fileSize: "12.4 MB",
      language: "English"
    },
    {
      id: 2,
      title: "Gender-Responsive Policy Implementation: Lessons from Three States",
      description: "Analysis of gender-responsive policy implementation across three Indian states, highlighting successes, challenges, and recommendations for scale-up.",
      category: "Research Papers",
      format: "PDF",
      author: "Dr. Meera Patel",
      publishDate: "2024-03-15",
      downloadCount: 1923,
      readTime: "25 min",
      pages: 45,
      tags: ["Gender", "Policy", "Implementation"],
      featured: true,
      fileSize: "8.7 MB",
      language: "English"
    },
    {
      id: 3,
      title: "Rural Livelihood Enhancement Case Study: Maharashtra Model",
      description: "Comprehensive case study examining the Maharashtra rural livelihood enhancement program, including impact assessment and replication guidelines.",
      category: "Case Studies",
      format: "PDF",
      author: "Rural Development Unit",
      publishDate: "2024-03-10",
      downloadCount: 1654,
      readTime: "30 min",
      pages: 62,
      tags: ["Livelihoods", "Rural Development", "Case Study"],
      featured: false,
      fileSize: "15.2 MB",
      language: "English"
    },
    {
      id: 4,
      title: "Digital Financial Inclusion: Policy Brief and Recommendations",
      description: "Policy brief examining the current state of digital financial inclusion in India and providing actionable recommendations for policymakers.",
      category: "Policy Briefs",
      format: "PDF",
      author: "Financial Inclusion Team",
      publishDate: "2024-03-05",
      downloadCount: 2156,
      readTime: "15 min",
      pages: 24,
      tags: ["Financial Inclusion", "Digital", "Policy"],
      featured: false,
      fileSize: "5.8 MB",
      language: "English"
    },
    {
      id: 5,
      title: "Participatory Monitoring and Evaluation: Best Practices Guide",
      description: "Comprehensive guide to implementing participatory monitoring and evaluation systems in development programs, with practical tools and templates.",
      category: "Best Practices",
      format: "PDF",
      author: "M&E Team",
      publishDate: "2024-02-28",
      downloadCount: 1789,
      readTime: "35 min",
      pages: 78,
      tags: ["M&E", "Participation", "Best Practices"],
      featured: false,
      fileSize: "11.3 MB",
      language: "English"
    },
    {
      id: 6,
      title: "Climate-Resilient Agriculture: Implementation Strategies",
      description: "Detailed report on climate-resilient agriculture practices, implementation strategies, and impact assessment from pilot programs across multiple states.",
      category: "Reports",
      format: "PDF",
      author: "Climate & Agriculture Team",
      publishDate: "2024-02-20",
      downloadCount: 2034,
      readTime: "40 min",
      pages: 94,
      tags: ["Climate", "Agriculture", "Resilience"],
      featured: false,
      fileSize: "18.6 MB",
      language: "English"
    },
    {
      id: 7,
      title: "Social Protection Systems: Video Training Series",
      description: "Comprehensive video training series on designing and implementing effective social protection systems, featuring expert interviews and case studies.",
      category: "Best Practices",
      format: "Video",
      author: "Training Team",
      publishDate: "2024-02-15",
      downloadCount: 956,
      readTime: "120 min",
      pages: null,
      tags: ["Social Protection", "Training", "Video"],
      featured: false,
      fileSize: "2.1 GB",
      language: "English"
    },
    {
      id: 8,
      title: "Development Conversations Podcast: Season 2",
      description: "Latest season of our popular podcast featuring conversations with development practitioners, researchers, and beneficiaries about real-world challenges and solutions.",
      category: "Best Practices",
      format: "Podcast",
      author: "Communications Team",
      publishDate: "2024-02-10",
      downloadCount: 1247,
      readTime: "Various",
      pages: null,
      tags: ["Podcast", "Conversations", "Insights"],
      featured: false,
      fileSize: "Various",
      language: "English"
    }
  ];

  const featuredResources = resources.filter(resource => resource.featured);
  
  // All resources for search (including featured)
  const allResources = resources;
  
  // Search results - only show when there's a search term
  const searchResults = searchTerm.trim().length > 0 ? allResources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesFormat = selectedFormat === 'all' || resource.format === selectedFormat;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         resource.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesFormat && matchesSearch;
  }) : [];
  
  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesFormat = selectedFormat === 'all' || resource.format === selectedFormat;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesFormat && matchesSearch && !resource.featured;
  });

  // Clear search function
  const clearSearch = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedFormat('all');
  };

  const getFormatIcon = (format) => {
    switch (format) {
      case 'PDF': return FiFileText;
      case 'Video': return FiVideo;
      case 'Podcast': return FiHeadphones;
      case 'Interactive': return FiExternalLink;
      case 'Infographic': return FiEye;
      default: return FiBook;
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Research Papers': 'bg-blue-100 text-blue-700 border-blue-300',
      'Policy Briefs': 'bg-purple-100 text-purple-700 border-purple-300',
      'Case Studies': 'bg-green-100 text-green-700 border-green-300',
      'Best Practices': 'bg-orange-100 text-orange-700 border-orange-300',
      'Toolkits': 'bg-pink-100 text-pink-700 border-pink-300',
      'Reports': 'bg-indigo-100 text-indigo-700 border-indigo-300'
    };
    return colors[category] || 'bg-neutral-100 text-neutral-700 border-neutral-300';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Helmet>
        <title>Resources | Insocia Consultancy - Knowledge Center & Development Resources</title>
        <meta 
          name="description" 
          content="Access our comprehensive Knowledge Center featuring research publications, datasets, methodologies, policy innovations, and training resources for development professionals worldwide." 
        />
        <meta 
          name="keywords" 
          content="development resources, knowledge center, research publications, datasets, methodology guides, policy innovation, training materials, development tools" 
        />
        <script type="application/ld+json">
          {JSON.stringify(resourcesSchema)}
        </script>
      </Helmet>

      <SEO 
        title="Resources"
        description="Access our comprehensive collection of research papers, policy briefs, toolkits, and best practices in development and social impact."
        keywords="development resources, research papers, policy briefs, toolkits, best practices, case studies"
      />

      <SectionLayout bgColor="bg-transparent" className="min-h-screen">
        {/* Hero Section */}
        <div className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
                <FiBook className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Resource Library</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-neutral-900 leading-tight">
                Knowledge <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Repository</span>
              </h1>
              <p className="responsive-desc text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                Access our comprehensive collection of research papers, policy briefs, toolkits, and best practices to advance your development work.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="max-w-6xl mx-auto mb-8" data-aos="fade-up">
              <div className="backdrop-blur-md bg-white/90 rounded-2xl border border-neutral-200/50 p-6 shadow-xl shadow-primary-200/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiSearch className="h-5 w-5 text-neutral-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search resources..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors bg-white/80 backdrop-blur-sm"
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiFilter className="h-5 w-5 text-neutral-400" />
                    </div>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-8 py-3 border border-neutral-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors bg-white/80 backdrop-blur-sm"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category === 'all' ? 'All Categories' : category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiFileText className="h-5 w-5 text-neutral-400" />
                    </div>
                    <select
                      value={selectedFormat}
                      onChange={(e) => setSelectedFormat(e.target.value)}
                      className="w-full pl-10 pr-8 py-3 border border-neutral-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors bg-white/80 backdrop-blur-sm"
                    >
                      {formats.map((format) => (
                        <option key={format} value={format}>
                          {format === 'all' ? 'All Formats' : format}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Search Results Section */}
            <AnimatePresence mode="wait">
              {searchResults.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="max-w-6xl mx-auto mb-16"
                >
                  <div className="backdrop-blur-md bg-gradient-to-br from-primary-50/90 to-secondary-50/90 rounded-2xl border border-primary-200/50 shadow-xl shadow-primary-200/20 overflow-hidden">
                    
                    {/* Search Results Header */}
                    <div className="flex items-center justify-between p-6 border-b border-primary-200/50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 rounded-lg flex items-center justify-center border border-primary-200/50">
                          <FiSearch className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-neutral-900">
                            Search Results for "{searchTerm}"
                          </h3>
                          <p className="text-sm text-neutral-600">
                            Found {searchResults.length} {searchResults.length === 1 ? 'resource' : 'resources'}
                            {(selectedCategory !== 'all' || selectedFormat !== 'all') && (
                              <span> (filtered)</span>
                            )}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={clearSearch}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 bg-white/80 hover:bg-white rounded-lg border border-neutral-200/50 hover:border-neutral-300 transition-all duration-300"
                      >
                        <FiX className="w-4 h-4" />
                        <span>Clear</span>
                      </button>
                    </div>

                    {/* Search Results Grid */}
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 responsive-grid-small">
                        {searchResults.slice(0, 9).map((resource, index) => {
                          const FormatIcon = getFormatIcon(resource.format);
                          return (
                            <motion.div
                              key={resource.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="group relative overflow-hidden"
                            >
                              <div className="relative backdrop-blur-md bg-white/90 rounded-xl border border-neutral-200/50 hover:border-primary-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary-200/20 overflow-hidden h-full">
                                
                                <div className="relative z-10 p-5 flex flex-col h-full">
                                  <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                      <span className={`text-xs font-medium px-2 py-1 rounded-full border ${getCategoryColor(resource.category)}`}>
                                        {resource.category}
                                      </span>
                                      {resource.featured && (
                                        <span className="text-xs font-medium px-2 py-1 bg-yellow-100 text-yellow-700 border border-yellow-300 rounded-full">
                                          Featured
                                        </span>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-neutral-500">
                                      <FormatIcon className="w-3 h-3" />
                                      <span>{resource.format}</span>
                                    </div>
                                  </div>
                                  
                                  <h4 className="text-base font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 mb-2 line-clamp-2">
                                    {resource.title}
                                  </h4>
                                  
                                  <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300 leading-relaxed mb-3 flex-grow line-clamp-2 text-sm">
                                    {resource.description}
                                  </p>
                                  
                                  <div className="flex items-center justify-between pt-3 border-t border-neutral-200/50">
                                    <div className="text-xs text-neutral-600">
                                      <div className="flex items-center gap-1 mb-1">
                                        <FiUser className="w-3 h-3" />
                                        <span>{resource.author}</span>
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <FiDownload className="w-3 h-3" />
                                        <span>{resource.downloadCount.toLocaleString()}</span>
                                      </div>
                                    </div>
                                    
                                    <button className="small-btn text-xs">
                                      <FiDownload className="w-3 h-3" />
                                      <span>Download</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Show more results button */}
                      {searchResults.length > 9 && (
                        <div className="text-center mt-6">
                          <button className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-neutral-900 font-medium px-6 py-3 rounded-lg border border-neutral-200/50 hover:border-primary-400/50 transition-all duration-300 shadow-md hover:shadow-lg">
                            <FiGrid className="w-4 h-4" />
                            <span>View All {searchResults.length} Results</span>
                            <FiArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mb-8"></div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 responsive-grid-small" data-aos="fade-up">
              {[
                { number: '150+', label: 'Resources Available', icon: FiBook },
                { number: '25K+', label: 'Total Downloads', icon: FiDownload },
                { number: '12', label: 'Languages', icon: FiShare2 },
                { number: '50+', label: 'Research Studies', icon: FiTrendingUp }
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

        {/* Featured Resources */}
        {featuredResources.length > 0 && searchResults.length === 0 && (
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16" data-aos="fade-up">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
                  <FiTrendingUp className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Featured</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-neutral-900 leading-tight">
                  Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Resources</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredResources.map((resource, index) => {
                  const FormatIcon = getFormatIcon(resource.format);
                  return (
                    <div
                      key={resource.id}
                      className="group relative overflow-hidden"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="relative backdrop-blur-md bg-white/90 rounded-2xl border border-neutral-200/50 hover:border-primary-400/50 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary-200/30 overflow-hidden h-full">
                        
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10 p-8 flex flex-col h-full">
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                              <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getCategoryColor(resource.category)}`}>
                                {resource.category}
                              </span>
                              <div className="flex items-center gap-1 text-xs text-neutral-500">
                                <FormatIcon className="w-3 h-3" />
                                <span>{resource.format}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-neutral-500">
                              <div className="flex items-center gap-1">
                                <FiDownload className="w-4 h-4" />
                                <span>{resource.downloadCount.toLocaleString()}</span>
                              </div>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 mb-4 line-clamp-2">
                            {resource.title}
                          </h3>
                          
                          <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300 leading-relaxed mb-6 flex-grow line-clamp-3">
                            {resource.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {resource.tags.slice(0, 3).map((tag, idx) => (
                              <span key={idx} className="text-xs bg-neutral-100 text-neutral-700 px-2 py-1 rounded-full border border-neutral-200/50">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between pt-4 border-t border-neutral-200/50">
                            <div className="flex items-center gap-4 text-sm text-neutral-600">
                              <div className="flex items-center gap-2">
                                <FiUser className="w-4 h-4" />
                                <span>{resource.author}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <FiCalendar className="w-4 h-4" />
                                <span>{formatDate(resource.publishDate)}</span>
                              </div>
                              {resource.readTime && (
                                <div className="flex items-center gap-2">
                                  <FiClock className="w-4 h-4" />
                                  <span>{resource.readTime}</span>
                                </div>
                              )}
                            </div>
                            
                            <button className="secondary-btn">
                              <FiDownload className="w-4 h-4" />
                              <span className="text-sm">Download</span>
                            </button>
                          </div>
                        </div>

                        {/* Animated border effect */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-primary-500/0 blur-sm"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* All Resources */}
        {searchResults.length === 0 && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
                <FiFileText className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">All Resources</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-neutral-900 leading-tight">
                Complete <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Collection</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource, index) => {
                const FormatIcon = getFormatIcon(resource.format);
                return (
                  <div
                    key={resource.id}
                    className="group relative overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="relative backdrop-blur-md bg-white/80 rounded-2xl border border-neutral-200/50 hover:border-primary-400/50 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary-200/30 overflow-hidden h-full">
                      
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10 p-6 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getCategoryColor(resource.category)}`}>
                              {resource.category}
                            </span>
                            <div className="flex items-center gap-1 text-xs text-neutral-500">
                              <FormatIcon className="w-3 h-3" />
                              <span>{resource.format}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-neutral-500">
                            <FiDownload className="w-3 h-3" />
                            <span>{resource.downloadCount.toLocaleString()}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 mb-3 line-clamp-2">
                          {resource.title}
                        </h3>
                        
                        <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300 leading-relaxed mb-4 flex-grow line-clamp-3 text-sm">
                          {resource.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {resource.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="text-xs bg-neutral-100 text-neutral-700 px-2 py-1 rounded-full border border-neutral-200/50">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="space-y-2 mb-4 text-xs text-neutral-600">
                          <div className="flex items-center justify-between">
                            <span>By {resource.author}</span>
                            <span>{formatDate(resource.publishDate)}</span>
                          </div>
                          {resource.pages && (
                            <div className="flex items-center justify-between">
                              <span>{resource.pages} pages</span>
                              <span>{resource.fileSize}</span>
                            </div>
                          )}
                          {resource.readTime && (
                            <div className="flex items-center gap-1">
                              <FiClock className="w-3 h-3" />
                              <span>{resource.readTime}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-3 pt-4 border-t border-neutral-200/50">
                          <button className="secondary-btn flex-1">
                            <FiDownload className="w-4 h-4" />
                            <span className="text-sm">Download</span>
                          </button>
                          
                          <button className="inline-flex items-center justify-center w-10 h-10 text-neutral-600 hover:text-white border border-neutral-200 hover:border-primary-600 rounded-lg transition-all duration-300 hover:bg-primary-600">
                            <FiEye className="w-4 h-4" />
                          </button>
                          
                          <button className="inline-flex items-center justify-center w-10 h-10 text-neutral-600 hover:text-white border border-neutral-200 hover:border-primary-600 rounded-lg transition-all duration-300 hover:bg-primary-600">
                            <FiShare2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Animated border effect */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-primary-500/0 blur-sm"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Load More / Pagination */}
            {filteredResources.length === 0 && (
              <div className="text-center py-16" data-aos="fade-up">
                <div className="backdrop-blur-md bg-white/80 rounded-2xl border border-neutral-200/50 p-8 max-w-md mx-auto">
                  <FiSearch className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">No Resources Found</h3>
                  <p className="text-neutral-600 text-sm">Try adjusting your search criteria or browse all categories.</p>
                </div>
              </div>
            )}

            {/* CTA Section */}
            <div className="text-center mt-16" data-aos="fade-up">
              <div className="backdrop-blur-md bg-gradient-to-br from-white/95 to-primary-50/90 rounded-3xl border border-primary-200/50 p-12 shadow-xl shadow-primary-200/20">
                <div className="max-w-4xl mx-auto">
                  <div className="inline-flex items-center gap-2 bg-primary-100/80 border border-primary-200/50 rounded-full px-6 py-3 mb-8">
                    <FiTarget className="w-4 h-4 text-primary-600" />
                    <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Ready to Apply These Insights?</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                    Transform Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Development Impact</span>
                  </h3>
                  <p className="responsive-desc text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
                    Ready to implement evidence-based solutions? Let our expertise help you design, evaluate, and scale your development programs effectively.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <Link
                      to="/contact"
                      className="primary-btn"
                    >
                      <FiArrowRight className="w-5 h-5" />
                      <span>Start Your Project</span>
                    </Link>
                    
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-3 bg-white/90 hover:bg-white text-neutral-900 font-semibold px-8 py-4 rounded-xl border border-neutral-200/50 hover:border-primary-400/50 transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
                    >
                      <FiGrid className="w-5 h-5" />
                      <span>Explore Services</span>
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-neutral-200/50">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary-100/80 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <FiCheckCircle className="w-6 h-6 text-primary-600" />
                      </div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Evidence-Based Approach</h4>
                      <p className="text-sm text-neutral-600">Leverage proven methodologies and best practices from our resource library</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-secondary-100/80 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <FiUsers className="w-6 h-6 text-secondary-600" />
                      </div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Expert Team</h4>
                      <p className="text-sm text-neutral-600">Work with researchers and practitioners who authored these resources</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary-100/80 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <FiTrendingUp className="w-6 h-6 text-primary-600" />
                      </div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Measurable Results</h4>
                      <p className="text-sm text-neutral-600">Apply rigorous evaluation frameworks to track and improve your impact</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </SectionLayout>
    </>
  );
};

export default ResourcesPage; 