import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import SectionLayout from '../layouts/SectionLayout';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiArrowRight, FiExternalLink, FiUser, FiMapPin, FiTag, FiEye, FiShare2, FiBookmark, FiFilter, FiSearch, FiFileText } from 'react-icons/fi';

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEventType, setSelectedEventType] = useState('all');

  const newsSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "InSocia Development Consultancy",
    "url": "https://insocia.org",
    "sameAs": [
      "https://linkedin.com/company/insocia",
      "https://twitter.com/insocia"
    ]
  };

  const newsArticles = [
    {
      id: 1,
      title: "InSocia Partners with Government of Kerala on Rural Healthcare Initiative",
      excerpt: "A groundbreaking partnership to strengthen primary healthcare systems across rural districts, focusing on community health worker training and digital health integration.",
      category: "Partnerships",
      author: "InSocia Communications Team",
      date: "2023-11-15",
      readTime: "5 min read",
      image: "kerala-healthcare.jpg",
      views: "2.4K",
      featured: true,
      tags: ["Healthcare", "Government Partnership", "Rural Development"]
    },
    {
      id: 2,
      title: "New Research Publication: Climate-Resilient Agriculture Practices",
      excerpt: "Our latest research identifies successful climate adaptation strategies implemented by smallholder farmers across three states in India.",
      category: "Research",
      author: "Dr. Priya Sharma",
      date: "2023-11-08",
      readTime: "8 min read",
      image: "climate-agriculture.jpg",
      views: "1.8K",
      featured: true,
      tags: ["Climate Change", "Agriculture", "Research"]
    },
    {
      id: 3,
      title: "Fellowship Program 2024: Applications Now Open",
      excerpt: "Announcing our expanded fellowship program for early-career professionals passionate about social development and policy research.",
      category: "Announcements",
      author: "HR Team",
      date: "2023-11-01",
      readTime: "3 min read",
      image: "fellowship-2024.jpg",
      views: "3.2K",
      featured: false,
      tags: ["Careers", "Fellowship", "Applications"]
    },
    {
      id: 4,
      title: "Impact Assessment: Women's Economic Empowerment Program Shows Promising Results",
      excerpt: "Mid-term evaluation reveals significant improvements in women's financial literacy and business development across program locations.",
      category: "Impact",
      author: "M&E Team",
      date: "2023-10-25",
      readTime: "6 min read",
      image: "women-empowerment-impact.jpg",
      views: "1.5K",
      featured: false,
      tags: ["Gender Equality", "Impact Assessment", "Women's Empowerment"]
    },
    {
      id: 5,
      title: "InSocia Presents at International Development Conference in Geneva",
      excerpt: "Our research on participatory governance models was showcased at the Global Development Innovation Summit, receiving recognition from international peers.",
      category: "Events",
      author: "Research Team",
      date: "2023-10-18",
      readTime: "4 min read",
      image: "geneva-conference.jpg",
      views: "1.1K",
      featured: false,
      tags: ["Conference", "International", "Governance"]
    },
    {
      id: 6,
      title: "Technology for Development: Digital Solutions Workshop Series Launched",
      excerpt: "Introducing our new workshop series on leveraging technology for social development, featuring hands-on sessions with development practitioners.",
      category: "Training",
      author: "Capacity Building Team",
      date: "2023-10-10",
      readTime: "3 min read",
      image: "tech-workshop.jpg",
      views: "900",
      featured: false,
      tags: ["Technology", "Training", "Workshops"]
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

  const categories = ['all', 'Partnerships', 'Research', 'Announcements', 'Impact', 'Events', 'Training'];
  const eventTypes = ['all', 'Conference', 'Workshop', 'Training', 'Seminar', 'Panel Discussion'];

  const filteredNews = selectedCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const filteredEvents = selectedEventType === 'all'
    ? upcomingEvents
    : upcomingEvents.filter(event => event.type === selectedEventType);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <>
      <Helmet>
        <title>News & Insights | InSocia Development Consultancy - Latest Updates & Events</title>
        <meta 
          name="description" 
          content="Stay updated with InSocia's latest news, research publications, partnerships, and upcoming events. Explore insights from our development work and join our training programs." 
        />
        <meta 
          name="keywords" 
          content="development news, social impact updates, research publications, development events, training workshops, policy insights, InSocia news" 
        />
        <script type="application/ld+json">
          {JSON.stringify(newsSchema)}
        </script>
      </Helmet>

      {/* Premium Hero Section */}
      <section className="relative bg-transparent overflow-hidden hero-section min-h-screen">
        {/* Static background effects */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute w-[600px] h-[600px] -top-32 -left-32 bg-gradient-to-br from-primary-500/15 to-secondary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute w-[400px] h-[400px] bottom-0 right-0 bg-gradient-to-tl from-secondary-500/15 to-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-600/8 to-secondary-600/8 rounded-full blur-2xl"></div>
        </div>

        <div className="w-full px-4 md:px-8 relative z-10 flex items-center min-h-screen mt-16 sm:mt-0">
          <div className="max-w-6xl mx-auto text-center w-full">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 rounded-full px-5 py-2 mb-6">
              <FiFileText className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-semibold text-primary-300 uppercase tracking-wider">News & Insights</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Stay <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400">Connected</span> with Our Impact
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto">
              Discover the latest developments in our work, research insights, partnership announcements, and upcoming events that are shaping the future of social development.
            </p>

            {/* News highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500/30 to-primary-600/30 rounded-lg flex items-center justify-center mx-auto mb-3 border border-primary-400/20">
                  <FiEye className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Latest Updates</h3>
                <p className="text-sm text-white/70">Fresh insights weekly</p>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary-500/30 to-secondary-600/30 rounded-lg flex items-center justify-center mx-auto mb-3 border border-secondary-400/20">
                  <FiCalendar className="w-5 h-5 text-secondary-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Upcoming Events</h3>
                <p className="text-sm text-white/70">Join our programs</p>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500/30 to-green-600/30 rounded-lg flex items-center justify-center mx-auto mb-3 border border-green-400/20">
                  <FiShare2 className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Research Insights</h3>
                <p className="text-sm text-white/70">Evidence-based findings</p>
              </div>
            </div>

            {/* Quick navigation */}
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#latest" className="inline-flex items-center gap-2 bg-primary-600/20 hover:bg-primary-600/30 border border-primary-400/30 hover:border-primary-400/50 rounded-full px-6 py-3 text-primary-300 hover:text-primary-200 transition-all duration-300">
                <span className="text-sm font-medium">Latest News</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
              <a href="#events" className="inline-flex items-center gap-2 bg-secondary-600/20 hover:bg-secondary-600/30 border border-secondary-400/30 hover:border-secondary-400/50 rounded-full px-6 py-3 text-secondary-300 hover:text-secondary-200 transition-all duration-300">
                <span className="text-sm font-medium">Events Calendar</span>
                <FiCalendar className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <SectionLayout id="latest" bgColor="bg-transparent" className="py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
            <FiEye className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-semibold text-primary-300 uppercase tracking-wider">Latest News</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
            Stay <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">Informed</span> About Our Work
          </h2>
          <p className="text-xl text-neutral-200 max-w-4xl mx-auto leading-relaxed">
            Follow our journey, research breakthroughs, partnerships, and impact stories from the field.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white border border-primary-500'
                  : 'bg-white/5 text-neutral-300 border border-white/10 hover:border-primary-400/50 hover:text-primary-300'
              }`}
            >
              {category === 'all' ? 'All News' : category}
            </button>
          ))}
        </div>

        {/* Featured Articles */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Featured Stories</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredNews.filter(article => article.featured).map((article) => (
              <div key={article.id} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary-400/30 transition-all duration-300 group overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-500/80 text-white rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-white/80">{formatDate(article.date)}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <FiUser className="w-3 h-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiClock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiEye className="w-3 h-3" />
                        <span>{article.views}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="inline-block px-2 py-1 text-xs bg-white/5 text-neutral-400 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors">
                      Read More <FiArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Articles Grid */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">All Updates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.filter(article => !article.featured).map((article) => (
              <div key={article.id} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary-400/30 transition-all duration-300 group overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary-500/10 to-secondary-500/10 relative">
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-black/60 text-white rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-3">
                    <span>{formatDate(article.date)}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>{article.views} views</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                    {article.excerpt.length > 120 ? `${article.excerpt.substring(0, 120)}...` : article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-neutral-400">
                      By {article.author}
                    </div>
                    <button className="inline-flex items-center gap-1 text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors">
                      Read <FiArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionLayout>

      {/* Events Calendar Section */}
      <SectionLayout id="events" bgColor="bg-transparent" className="py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary-500/20 to-cyan-500/20 border border-secondary-400/30 rounded-full px-6 py-3 mb-8">
            <FiCalendar className="w-4 h-4 text-secondary-400" />
            <span className="text-sm font-semibold text-secondary-300 uppercase tracking-wider">Events Calendar</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
            Join Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-cyan-400">Learning</span> Community
          </h2>
          <p className="text-xl text-neutral-200 max-w-4xl mx-auto leading-relaxed">
            Participate in workshops, conferences, and training programs designed to advance your development practice.
          </p>
        </div>

        {/* Event Type Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {eventTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedEventType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedEventType === type
                  ? 'bg-secondary-600 text-white border border-secondary-500'
                  : 'bg-white/5 text-neutral-300 border border-white/10 hover:border-secondary-400/50 hover:text-secondary-300'
              }`}
            >
              {type === 'all' ? 'All Events' : type}
            </button>
          ))}
        </div>

        {/* Featured Events */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Featured Events</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEvents.filter(event => event.featured).map((event) => (
              <div key={event.id} className="bg-gradient-to-br from-secondary-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl border border-secondary-500/20 hover:border-secondary-400/40 transition-all duration-300 group p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center border border-secondary-400/20">
                      <FiCalendar className="w-6 h-6 text-secondary-400" />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary-500/20 text-secondary-300 rounded-full mb-2">
                        {event.type}
                      </span>
                      <div className="text-sm text-neutral-400">
                        {formatDate(event.date)} • {event.time}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-secondary-300">{event.price}</div>
                    <div className="text-xs text-neutral-400">{event.capacity}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-secondary-300 transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-neutral-300 leading-relaxed mb-6">
                  {event.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <FiMapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-green-500/20 text-green-300 rounded-full">
                      {event.registration}
                    </span>
                    <button className="inline-flex items-center gap-2 bg-secondary-600 hover:bg-secondary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Register <FiArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Events List */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredEvents.filter(event => !event.featured).map((event) => (
              <div key={event.id} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-secondary-400/30 transition-all duration-300 group p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary-500/20 text-secondary-300 rounded-full mb-2">
                      {event.type}
                    </span>
                    <h3 className="text-lg font-semibold text-white group-hover:text-secondary-300 transition-colors">
                      {event.title}
                    </h3>
                  </div>
                  <div className="text-right text-sm">
                    <div className="font-medium text-secondary-300">{event.price}</div>
                    <div className="text-xs text-neutral-400">{event.capacity}</div>
                  </div>
                </div>

                <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                  {event.description.length > 150 ? `${event.description.substring(0, 150)}...` : event.description}
                </p>

                <div className="space-y-2 mb-4 text-sm text-neutral-400">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="w-3 h-3" />
                    <span>{formatDate(event.date)} • {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMapPin className="w-3 h-3" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-green-500/20 text-green-300 rounded-full">
                    {event.registration}
                  </span>
                  <button className="inline-flex items-center gap-2 text-secondary-400 hover:text-secondary-300 text-sm font-medium transition-colors">
                    Learn More <FiArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-secondary-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl border border-secondary-500/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Don't Miss Out on Our Events</h3>
            <p className="text-neutral-200 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive early notifications about upcoming workshops, conferences, and training opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:border-secondary-400/50 focus:ring-1 focus:ring-secondary-400/25 transition-colors"
              />
              <button className="bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default NewsPage; 