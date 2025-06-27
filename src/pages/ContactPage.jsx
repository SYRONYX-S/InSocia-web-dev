import React, { useState } from 'react';
import SectionLayout from '../layouts/SectionLayout';
import SEO from '../components/SEO';
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare, FiGlobe, FiLinkedin, FiTwitter, FiCalendar, FiClock, FiCheck, FiArrowRight, FiCheckCircle, FiTarget } from 'react-icons/fi';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    // Reset form or show success message
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email Us",
      details: "connect@insocia.in",
      description: "Send us an email for general inquiries",
      action: "mailto:connect@insocia.in"
    },
    {
      icon: FiPhone,
      title: "Call Us",
      details: "+91 (11) 4567-8900",
      description: "Speak directly with our team",
      action: "tel:+911145678900"
    },
    {
      icon: FiMapPin,
      title: "Visit Our Office",
      details: "Bengaluru & Kozhikode, India",
      description: "Schedule an in-person meeting",
      action: "#office-location"
    }
  ];

  const officeLocations = [
    {
      city: "Bengaluru",
      address: "AECS Layout, Sanjayanagara, Bengaluru, Karnataka 560094",
      phone: "+91 701 234 5678",
      email: "connect@insocia.in",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM"
    },
    {
      city: "Kozhikode",
      address: "Kozhikode, Kerala - 673573",
      phone: "+91 701 234 5678",
      email: "connect@insocia.in",
      hours: "Monday - Friday: 9:30 AM - 6:30 PM"
    }
  ];

  const socialLinks = [
    {
      platform: "LinkedIn",
      icon: FiLinkedin,
      url: "https://linkedin.com/company/insocia-consultancy",
      handle: "Insocia Consultancy"
    },
    {
      platform: "Twitter",
      icon: FiTwitter,
      url: "https://twitter.com/insocia",
      handle: "@insocia_dev"
    }
  ];

  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with Insocia Consultancy. We're here to help with your development and social impact initiatives."
        keywords="contact InSocia, development consultancy contact, social impact consulting"
      />

      <SectionLayout bgColor="bg-transparent" className="min-h-screen">
        {/* Hero Section */}
        <div className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
                <FiMail className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Get in Touch</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-neutral-900 leading-tight">
                Let's Start a <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Conversation</span>
              </h1>
              <p className="responsive-desc text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                Ready to make a meaningful impact? We'd love to hear about your project and explore how we can work together to create positive change.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 responsive-grid-small" data-aos="fade-up">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  className="group relative overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative backdrop-blur-md bg-white/90 rounded-2xl border border-neutral-200/50 hover:border-primary-400/50 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary-200/30 overflow-hidden h-full p-8 text-center">
                    
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-primary-200/50">
                        <info.icon className="w-8 h-8 text-primary-600" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 mb-3">
                        {info.title}
                      </h3>
                      
                      <p className="text-lg font-semibold text-primary-600 mb-2">
                        {info.details}
                      </p>
                      
                      <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">
                        {info.description}
                      </p>
                    </div>

                    {/* Animated border effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-primary-500/0 blur-sm"></div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form & Info */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Contact Form */}
              <div className="lg:col-span-2" data-aos="fade-right">
                <div className="backdrop-blur-md bg-white/90 rounded-2xl border border-neutral-200/50 p-8 shadow-xl shadow-primary-200/20">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                      Send Us a Message
                    </h2>
                    <p className="text-neutral-600 leading-relaxed">
                      Fill out the form below and we'll get back to you within 24 hours. We're excited to learn about your project!
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-neutral-900 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiUser className="h-5 w-5 text-neutral-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors bg-white/80 backdrop-blur-sm text-neutral-900"
                            placeholder="Your full name"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiMail className="h-5 w-5 text-neutral-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors bg-white/80 backdrop-blur-sm text-neutral-900"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-sm font-semibold text-neutral-900 mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors bg-white/80 backdrop-blur-sm text-neutral-900"
                        placeholder="Your organization name"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-neutral-900 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors bg-white/80 backdrop-blur-sm text-neutral-900"
                      >
                        <option value="">Select a subject</option>
                        <option value="consulting">Consulting Services</option>
                        <option value="research">Research Collaboration</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="training">Training & Capacity Building</option>
                        <option value="media">Media & Press</option>
                        <option value="careers">Career Opportunities</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-2">
                        Message *
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none">
                          <FiMessageSquare className="h-5 w-5 text-neutral-400" />
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors bg-white/80 backdrop-blur-sm text-neutral-900 resize-none"
                          placeholder="Tell us about your project, goals, and how we can help..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                                              className="primary-btn w-full disabled:from-neutral-400 disabled:to-neutral-500 disabled:shadow-none disabled:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <FiSend className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Information Sidebar */}
              <div className="lg:col-span-1 space-y-6" data-aos="fade-left">
                
                {/* Office Locations */}
                <div className="backdrop-blur-md bg-white/90 rounded-2xl border border-neutral-200/50 p-6 shadow-xl shadow-primary-200/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 rounded-lg flex items-center justify-center border border-primary-200/50">
                      <FiMapPin className="w-5 h-5 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">Our Offices</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {officeLocations.map((office, index) => (
                      <div key={index} className="border-b border-neutral-200/50 pb-4 last:border-b-0 last:pb-0">
                        <h4 className="font-semibold text-neutral-900 mb-2">{office.city}</h4>
                        
                        <div className="space-y-1 text-neutral-600 text-sm">
                          <div className="flex items-start gap-2">
                            <FiMapPin className="w-3 h-3 text-primary-600 mt-1 flex-shrink-0" />
                            <span>{office.address}</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <FiPhone className="w-3 h-3 text-primary-600 flex-shrink-0" />
                            <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-neutral-600 hover:text-primary-700 transition-colors">
                              {office.phone}
                            </a>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <FiMail className="w-3 h-3 text-primary-600 flex-shrink-0" />
                            <a href={`mailto:${office.email}`} className="text-neutral-600 hover:text-primary-700 transition-colors">
                              {office.email}
                            </a>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <FiClock className="w-3 h-3 text-primary-600 flex-shrink-0" />
                            <span>{office.hours}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div className="backdrop-blur-md bg-white/90 rounded-2xl border border-neutral-200/50 p-6 shadow-xl shadow-primary-200/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 rounded-lg flex items-center justify-center border border-primary-200/50">
                      <FiLinkedin className="w-5 h-5 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">Follow Us</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200/50 hover:border-primary-400/50 hover:bg-primary-50/50 transition-all duration-300 group"
                      >
                        <social.icon className="w-4 h-4 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
                        <div className="flex-1">
                          <h4 className="font-medium text-neutral-900 group-hover:text-primary-700 transition-colors text-sm">
                            {social.platform}
                          </h4>
                          <p className="text-xs text-neutral-600 group-hover:text-neutral-700 transition-colors">
                            {social.handle}
                          </p>
                        </div>
                        <FiArrowRight className="w-3 h-3 text-neutral-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all duration-300" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Response Promise */}
                <div className="backdrop-blur-md bg-gradient-to-br from-green-50/90 to-emerald-50/90 rounded-2xl border border-green-200/50 p-6 shadow-xl shadow-green-200/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-100/80 to-emerald-100/80 rounded-lg flex items-center justify-center border border-green-200/50">
                      <FiClock className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-900">Quick Response</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <FiCheck className="w-3 h-3 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900 text-sm">24-Hour Response</h4>
                        <p className="text-xs text-green-700">We'll get back to you within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <FiCalendar className="w-3 h-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900 text-sm">Free Consultation</h4>
                        <p className="text-xs text-green-700">Schedule a complimentary discussion</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <FiMessageSquare className="w-3 h-3 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900 text-sm">Custom Proposal</h4>
                        <p className="text-xs text-green-700">Tailored solutions for your needs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* FAQ Schema for SEO */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What development consulting services does InSocia offer?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "InSocia provides comprehensive development consulting including program design and evaluation, impact assessment, policy analysis, research studies, capacity building, and technical assistance across health, education, livelihood, and social protection sectors."
                    }
                  },
                  {
                    "@type": "Question", 
                    "name": "How much do development consulting services cost in India?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our consulting fees vary based on project scope, duration, and complexity. We offer competitive rates for program evaluations (₹50,000-₹15,00,000), research studies (₹25,000-₹10,00,000), and capacity building (₹15,000-₹5,00,000). Contact us for a customized quote."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does a program evaluation take to complete?", 
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Program evaluation timelines depend on scope and methodology. Quick assessments take 4-8 weeks, mid-term evaluations require 8-16 weeks, while comprehensive impact evaluations span 16-24 weeks including data collection, analysis, and reporting."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you work with NGOs and international development organizations?",
                    "acceptedAnswer": {
                      "@type": "Answer", 
                      "text": "Yes, we collaborate with NGOs, international organizations (UN agencies, World Bank), bilateral donors (USAID, DFID), foundations, government agencies, and private sector clients across India and South Asia."
                    }
                  }
                ]
              })}
            </script>
            
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 bg-primary-100/80 border border-primary-200/50 rounded-full px-6 py-3 mb-8">
                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-neutral-900 leading-tight">
                Common <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Questions</span>
              </h2>
              <p className="responsive-desc text-lg text-neutral-600 max-w-3xl mx-auto">
                Find answers to the most commonly asked questions about our development consulting services and processes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16" data-aos="fade-up">
              {[
                {
                  question: "What development consulting services does InSocia offer?",
                  answer: "InSocia provides comprehensive development consulting including program design and evaluation, impact assessment, policy analysis, research studies, capacity building, and technical assistance across health, education, livelihood, and social protection sectors.",
                  keywords: "development consulting, program evaluation, impact assessment"
                },
                {
                  question: "How much do development consulting services cost in India?",
                  answer: "Our consulting fees vary based on project scope, duration, and complexity. We offer competitive rates for program evaluations (₹50,000-₹15,00,000), research studies (₹25,000-₹10,00,000), and capacity building (₹15,000-₹5,00,000). Contact us for a customized quote.",
                  keywords: "consulting fees India, development consulting cost, program evaluation cost"
                },
                {
                  question: "How long does a program evaluation take to complete?",
                  answer: "Program evaluation timelines depend on scope and methodology. Quick assessments take 4-8 weeks, mid-term evaluations require 8-16 weeks, while comprehensive impact evaluations span 16-24 weeks including data collection, analysis, and reporting.",
                  keywords: "program evaluation timeline, impact evaluation duration"
                },
                {
                  question: "Do you work with NGOs and international development organizations?",
                  answer: "Yes, we collaborate with NGOs, international organizations (UN agencies, World Bank), bilateral donors (USAID, DFID), foundations, government agencies, and private sector clients across India and South Asia.",
                  keywords: "NGO consulting, international development, UN agencies consulting"
                },
                {
                  question: "What makes InSocia different from other development consultants?",
                  answer: "InSocia combines rigorous academic research with practical field experience. Our team includes PhD researchers, former government officials, and grassroots practitioners, ensuring evidence-based solutions that are contextually relevant and implementable.",
                  keywords: "best development consultants India, research-based consulting"
                },
                {
                  question: "How do you ensure quality in research and evaluation studies?",
                  answer: "We follow international evaluation standards (OECD-DAC criteria), use mixed-methods approaches, conduct peer reviews, maintain data quality protocols, and provide detailed methodology documentation with all deliverables.",
                  keywords: "evaluation standards, research quality, OECD-DAC criteria"
                },
                {
                  question: "Can you help design new development programs from scratch?",
                  answer: "Absolutely! We provide end-to-end program design services including needs assessment, theory of change development, logical framework design, implementation strategy, monitoring systems, and risk management frameworks.",
                  keywords: "program design, theory of change, logical framework, development program"
                },
                {
                  question: "What sectors do you specialize in for development work?",
                  answer: "Our expertise spans health systems strengthening, education and skill development, rural livelihoods and agriculture, social protection, gender equality, governance and policy, climate resilience, and digital financial inclusion.",
                  keywords: "health systems, education development, rural livelihoods, social protection"
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="group"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="backdrop-blur-md bg-white/90 rounded-xl border border-neutral-200/50 hover:border-primary-300/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary-200/20 p-8 h-full">
                    <h3 className="text-xl font-bold text-neutral-900 mb-4 leading-tight group-hover:text-primary-700 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors duration-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Section */}
            <div className="backdrop-blur-md bg-gradient-to-br from-white/95 to-primary-50/90 rounded-3xl border border-primary-200/50 p-12 shadow-xl shadow-primary-200/20" data-aos="fade-up">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                  Ready to Start Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Development Project?</span>
                </h3>
                <p className="responsive-desc text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our expertise can help you achieve your development goals. Get a free consultation and customized proposal for your project.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                                          href="mailto:connect@insocia.in"
                    className="primary-btn"
                  >
                    <FiMail className="w-5 h-5" />
                    <span>Start a Conversation</span>
                  </a>
                  
                  <div className="text-sm text-neutral-500 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Typically respond within 24 hours</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-neutral-200/50 responsive-grid-small">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-100/80 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <FiCheckCircle className="w-6 h-6 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Free Consultation</h4>
                    <p className="text-sm text-neutral-600">No-cost initial discussion about your project needs</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-secondary-100/80 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <FiTarget className="w-6 h-6 text-secondary-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Customized Proposal</h4>
                    <p className="text-sm text-neutral-600">Tailored solutions designed for your specific requirements</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-100/80 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <FiClock className="w-6 h-6 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Quick Turnaround</h4>
                    <p className="text-sm text-neutral-600">Fast response times and efficient project delivery</p>
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

export default ContactPage; 