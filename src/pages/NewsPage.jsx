import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import SectionLayout from '../layouts/SectionLayout';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiArrowRight, FiExternalLink, FiUser, FiMapPin, FiTag, FiEye, FiShare2, FiBookmark, FiFilter, FiSearch, FiFileText, FiBookOpen, FiTrendingUp, FiGlobe, FiTarget, FiMail, FiPhone } from 'react-icons/fi';
import SEO from '../components/SEO';

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEventType, setSelectedEventType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const newsSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Insocia Consultancy",
          "url": "https://insocia.in",
    "sameAs": [
      "https://linkedin.com/company/insocia",
      "https://twitter.com/insocia"
    ]
  };

  const newsArticles = [
    {
      id: 1,
      title: "Advancing Rural Healthcare Through Community-Based Interventions",
      excerpt: "Our latest research reveals how community health worker programs can dramatically improve healthcare access in rural areas, with promising results from pilot implementations.",
      category: "Research",
      author: "Dr. Priya Sharma",
      date: "2024-03-15",
      readTime: "8 min",
      tags: ["Healthcare", "Rural Development", "Community Health"],
      views: 2840,
      featured: true,
      image: "/images/news/healthcare-rural.jpg"
    },
    {
      id: 2,
      title: "Policy Brief: Strengthening Social Protection Systems",
      excerpt: "New policy recommendations for enhancing social protection coverage and effectiveness, based on comprehensive analysis of existing frameworks.",
      category: "Policy",
      author: "Policy Research Team",
      date: "2024-03-10",
      readTime: "12 min",
      tags: ["Social Protection", "Policy", "Governance"],
      views: 1950,
      featured: true,
      image: "/images/news/social-protection.jpg"
    },
    {
      id: 3,
      title: "Partnership Spotlight: Collaborating for Educational Innovation",
      excerpt: "Highlighting our partnership with leading educational institutions to develop innovative learning solutions for underserved communities.",
      category: "Partnerships",
      author: "Partnerships Team",
      date: "2024-03-05",
      readTime: "6 min",
      tags: ["Education", "Partnerships", "Innovation"],
      views: 1680,
      featured: false,
      image: "/images/news/education-partnership.jpg"
    },
    {
      id: 4,
      title: "Impact Story: Transforming Lives Through Skill Development",
      excerpt: "Meet the beneficiaries whose lives have been transformed through our comprehensive skill development and livelihood programs.",
      category: "Impact Stories",
      author: "Impact Measurement Team",
      date: "2024-02-28",
      readTime: "10 min",
      tags: ["Skills", "Livelihoods", "Impact"],
      views: 3200,
      featured: false,
      image: "/images/news/skills-impact.jpg"
    },
    {
      id: 5,
      title: "Research Insights: Gender Equality in Development Programming",
      excerpt: "Key findings from our comprehensive study on gender integration in development programs and recommendations for improvement.",
      category: "Research",
      author: "Gender Research Unit",
      date: "2024-02-20",
      readTime: "15 min",
      tags: ["Gender", "Research", "Development"],
      views: 2100,
      featured: false,
      image: "/images/news/gender-research.jpg"
    },
    {
      id: 6,
      title: "Upcoming Event: Annual Development Conference 2024",
      excerpt: "Join us for our flagship annual conference bringing together development practitioners, researchers, and policymakers.",
      category: "Events",
      author: "Events Team",
      date: "2024-02-15",
      readTime: "4 min",
      tags: ["Conference", "Events", "Networking"],
      views: 1420,
      featured: false,
      image: "/images/news/conference.jpg"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Development Symposium 2024",
      type: "Conference",
      date: "2024-02-15",
      time: "09:00 AM - 05:00 PM",
      location: "Kozhikode, Kerala",
      description: "Join us for our flagship annual event bringing together development practitioners, researchers, and policymakers to discuss emerging trends and innovations in social development.",
      registration: "Open",
      price: "Free",
      capacity: "300 participants",
      featured: true
    },
    {
      id: 2,
      title: "Participatory Research Methods Workshop",
      type: "Workshop",
      date: "2024-01-20",
      time: "10:00 AM - 04:00 PM",
      location: "Online",
      description: "A hands-on workshop on implementing participatory research approaches in development projects, including practical tools and case studies.",
      registration: "Open",
      price: "₹2,500",
      capacity: "50 participants",
      featured: false
    },
    {
      id: 3,
      title: "Policy Design for Social Impact Masterclass",
      type: "Training",
      date: "2024-01-25",
      time: "09:30 AM - 12:30 PM",
      location: "Bangalore, Karnataka",
      description: "Intensive training on evidence-based policy design, featuring real-world case studies and interactive policy simulation exercises.",
      registration: "Open",
      price: "₹5,000",
      capacity: "25 participants",
      featured: true
    },
    {
      id: 4,
      title: "Gender-Responsive Budgeting Seminar",
      type: "Seminar",
      date: "2024-02-08",
      time: "02:00 PM - 05:00 PM",
      location: "New Delhi",
      description: "Expert-led seminar on implementing gender-responsive budgeting practices in government and organizational contexts.",
      registration: "Open",
      price: "₹1,500",
      capacity: "75 participants",
      featured: false
    },
    {
      id: 5,
      title: "Data Visualization for Development Professionals",
      type: "Workshop",
      date: "2024-02-20",
      time: "10:00 AM - 03:00 PM",
      location: "Online",
      description: "Learn to create compelling data visualizations that effectively communicate development impacts and research findings.",
      registration: "Open",
      price: "₹3,000",
      capacity: "40 participants",
      featured: false
    },
    {
      id: 6,
      title: "Sustainable Development Goals: Progress and Challenges",
      type: "Panel Discussion",
      date: "2024-03-05",
      time: "04:00 PM - 06:00 PM",
      location: "Mumbai, Maharashtra",
      description: "High-level panel discussion on SDG progress in India, featuring government officials, UN representatives, and civil society leaders.",
      registration: "Open",
      price: "Free",
      capacity: "200 participants",
      featured: false
    }
  ];

  const categories = ['all', 'Research', 'Policy', 'Impact Stories', 'Partnerships', 'Events', 'Insights'];
  const eventTypes = ['all', 'Conference', 'Workshop', 'Training', 'Seminar', 'Panel Discussion'];

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
                         article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const searchResults = searchTerm !== '' ? filteredArticles : [];
  const displayArticles = searchTerm === '' ? filteredArticles : [];

  const filteredEvents = selectedEventType === 'all'
    ? upcomingEvents
    : upcomingEvents.filter(event => event.type === selectedEventType);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Research': 'bg-blue-100 text-blue-700 border-blue-300',
      'Policy': 'bg-purple-100 text-purple-700 border-purple-300',
      'Impact Stories': 'bg-green-100 text-green-700 border-green-300',
      'Partnerships': 'bg-orange-100 text-orange-700 border-orange-300',
      'Events': 'bg-pink-100 text-pink-700 border-pink-300',
      'Insights': 'bg-teal-100 text-teal-700 border-teal-300'
    };
    return colors[category] || 'bg-neutral-100 text-neutral-700 border-neutral-300';
  };

  const getEventTypeColor = (type) => {
    const colors = {
      'Conference': 'bg-blue-100 text-blue-700 border-blue-300',
      'Workshop': 'bg-green-100 text-green-700 border-green-300',
      'Training': 'bg-purple-100 text-purple-700 border-purple-300',
      'Seminar': 'bg-orange-100 text-orange-700 border-orange-300',
      'Panel Discussion': 'bg-pink-100 text-pink-700 border-pink-300'
    };
    return colors[type] || 'bg-neutral-100 text-neutral-700 border-neutral-300';
  };

  return (
    <>
      <Helmet>
        <title>News & Insights | Insocia Consultancy - Latest Updates</title>
        <meta 
          name="description" 
          content="Stay updated with the latest news, insights, and research from Insocia Consultancy. Discover our impact stories, policy briefs, and upcoming events." 
        />
        <meta 
          name="keywords" 
          content="development news, research insights, policy briefs, impact stories, InSocia updates, social development events" 
        />
        <script type="application/ld+json">
          {JSON.stringify(newsSchema)}
        </script>
      </Helmet>

      <SEO 
        title="News & Insights"
        description="Stay updated with latest insights, research findings, and impact stories from Insocia Consultancy."
        keywords="development news, research insights, impact stories, social development"
      />

      <SectionLayout bgColor="bg-transparent" className="min-h-screen">
        {/* Hero Section */}
        <div className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
                <FiBookOpen className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">News & Insights</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-neutral-900 leading-tight">
                Latest <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Updates</span> & Insights
              </h1>
              <p className="responsive-desc text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                Stay informed with our latest research findings, policy insights, impact stories, and upcoming events in the development sector.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-16" data-aos="fade-up">
              <div className="backdrop-blur-md bg-white/90 rounded-2xl border border-neutral-200/50 p-8 shadow-xl shadow-primary-200/20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-7">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiSearch className="h-5 w-5 text-neutral-400" />
                      </div>
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search articles, topics, or keywords..."
                        className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors bg-white/80 backdrop-blur-sm text-neutral-900"
                      />
                    </div>
                  </div>
                  
                  <div className="md:col-span-3">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors bg-white/80 backdrop-blur-sm text-neutral-900"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category === 'all' ? 'All Categories' : category}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="md:col-span-2 flex items-center">
                    {(searchTerm || selectedCategory !== 'all') && (
                      <button
                        onClick={() => {
                          setSearchTerm('');
                          setSelectedCategory('all');
                        }}
                        className="w-full text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                      >
                        Clear All
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Results Section */}
        {searchTerm && (
          <div className="py-8 animate-in slide-in-from-top-5 duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="backdrop-blur-md bg-white/95 rounded-2xl border border-primary-200/50 p-8 shadow-xl shadow-primary-200/30">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-neutral-900">
                    Search Results for "<span className="text-primary-600">{searchTerm}</span>"
                  </h2>
                  <span className="text-sm text-neutral-600">
                    {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
                  </span>
                </div>
                
                {searchResults.length > 0 ? (
                                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 responsive-grid-small">
                    {searchResults.map((article, index) => (
                      <article
                        key={article.id}
                        className="group relative overflow-hidden animate-in fade-in-0 duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="relative backdrop-blur-md bg-white/90 rounded-xl border border-neutral-200/50 hover:border-primary-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary-200/20 overflow-hidden h-full">
                          <div className="relative z-10 p-6 flex flex-col h-full">
                            <div className="flex items-center justify-between mb-4">
                              <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getCategoryColor(article.category)}`}>
                                {article.category}
                              </span>
                              <div className="flex items-center gap-1 text-xs text-neutral-500">
                                <FiEye className="w-3 h-3" />
                                <span>{article.views.toLocaleString()}</span>
                              </div>
                            </div>
                            
                            <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 mb-3 line-clamp-2">
                              {article.title}
                            </h3>
                            
                            <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300 leading-relaxed mb-4 flex-grow line-clamp-3 text-sm">
                              {article.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between pt-4 border-t border-neutral-200/50">
                              <div className="flex items-center gap-2 text-xs text-neutral-600">
                                <FiCalendar className="w-3 h-3" />
                                <span>{formatDate(article.date)}</span>
                              </div>
                              
                              <button className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300 group/btn">
                                <span className="text-xs">Read</span>
                                <FiArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiSearch className="w-8 h-8 text-neutral-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">No Results Found</h3>
                    <p className="text-neutral-600">Try adjusting your search terms or browse all articles below.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Featured Articles - Only show when not searching */}
        {!searchTerm && displayArticles.filter(article => article.featured).length > 0 && (
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16" data-aos="fade-up">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
                  <FiTrendingUp className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Featured</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-neutral-900 leading-tight">
                  Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Articles</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {displayArticles.filter(article => article.featured).map((article, index) => (
                  <article
                    key={article.id}
                    className="group relative overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="relative backdrop-blur-md bg-white/90 rounded-2xl border border-neutral-200/50 hover:border-primary-400/50 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary-200/30 overflow-hidden h-full">
                      
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10 p-8 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-6">
                          <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getCategoryColor(article.category)}`}>
                            {article.category}
                          </span>
                          <div className="flex items-center gap-4 text-sm text-neutral-500">
                            <div className="flex items-center gap-1">
                              <FiEye className="w-4 h-4" />
                              <span>{article.views.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 mb-4 line-clamp-2">
                          {article.title}
                        </h3>
                        
                        <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300 leading-relaxed mb-6 flex-grow line-clamp-3">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {article.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="text-xs bg-neutral-100 text-neutral-700 px-2 py-1 rounded-full border border-neutral-200/50">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-neutral-200/50">
                          <div className="flex items-center gap-4 text-sm text-neutral-600">
                            <div className="flex items-center gap-2">
                              <FiUser className="w-4 h-4" />
                              <span>{article.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FiCalendar className="w-4 h-4" />
                              <span>{formatDate(article.date)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FiClock className="w-4 h-4" />
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                          
                          <button className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300 group/btn">
                            <span className="text-sm">Read More</span>
                            <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>
                      </div>

                      {/* Animated border effect */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-primary-500/0 blur-sm"></div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* All Articles - Only show when not searching */}
        {!searchTerm && (
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16" data-aos="fade-up">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
                  <FiBookOpen className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">All Articles</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-neutral-900 leading-tight">
                  Latest <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Updates</span>
                </h2>
              </div>

                                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 responsive-grid-small">
                {displayArticles.map((article, index) => (
                  <article
                    key={article.id}
                    className="group relative overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="relative backdrop-blur-md bg-white/80 rounded-2xl border border-neutral-200/50 hover:border-primary-400/50 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary-200/30 overflow-hidden h-full">
                      
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10 p-6 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getCategoryColor(article.category)}`}>
                            {article.category}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-neutral-500">
                            <FiEye className="w-3 h-3" />
                            <span>{article.views.toLocaleString()}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 mb-3 line-clamp-2">
                          {article.title}
                        </h3>
                        
                        <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300 leading-relaxed mb-4 flex-grow line-clamp-3 text-sm">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {article.tags.slice(0, 2).map((tag, idx) => (
                            <span key={idx} className="text-xs bg-neutral-100 text-neutral-700 px-2 py-1 rounded-full border border-neutral-200/50">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-neutral-200/50">
                          <div className="flex items-center gap-2 text-xs text-neutral-600">
                            <FiCalendar className="w-3 h-3" />
                            <span>{formatDate(article.date)}</span>
                          </div>
                          
                          <button className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300 group/btn">
                            <span className="text-xs">Read</span>
                            <FiArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>
                      </div>

                      {/* Animated border effect */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-primary-500/0 blur-sm"></div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Call to Action Section */}
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center" data-aos="fade-up">
              <div className="relative backdrop-blur-md bg-white/90 rounded-2xl border border-neutral-200/50 p-12 shadow-xl shadow-primary-200/20 overflow-hidden">
                
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl"></div>
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-secondary-500/10 to-primary-500/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
                    <FiTarget className="w-4 h-4 text-primary-600" />
                    <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Ready to Collaborate?</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-neutral-900 leading-tight">
                    Let's Create <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Impact Together</span>
                  </h2>
                  
                  <p className="responsive-desc text-xl text-neutral-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                    Have a project in mind or want to discuss partnership opportunities? We'd love to hear from you and explore how we can work together to drive meaningful social change.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link
                      to="/contact"
                      className="primary-btn"
                    >
                      <FiMail className="w-5 h-5" />
                      <span>Start a Conversation</span>
                      <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    
                    <a
                      href="tel:+911145678900"
                      className="group inline-flex items-center gap-3 backdrop-blur-md bg-white/80 hover:bg-white/90 text-neutral-700 hover:text-primary-700 font-semibold px-8 py-4 rounded-xl border border-neutral-200 hover:border-primary-400/50 transition-all duration-300 shadow-lg hover:shadow-neutral-200/50 transform hover:scale-105"
                    >
                      <FiPhone className="w-5 h-5" />
                      <span>Call Us Now</span>
                    </a>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-neutral-200/50">
                    <p className="text-sm text-neutral-600">
                      <span className="font-semibold text-neutral-900">Quick Response:</span> We typically respond to inquiries within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default NewsPage; 