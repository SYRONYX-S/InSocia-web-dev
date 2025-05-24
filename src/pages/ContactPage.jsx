import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import SectionLayout from '../layouts/SectionLayout';
import SectionHeading from '../components/common/SectionHeading';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiUser, FiMessageSquare, FiBriefcase, FiLinkedin, FiTwitter, FiFacebook, FiExternalLink, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "InSocia Development Consultancy",
    "url": "https://insocia.org",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-701-234-5678",
        "contactType": "customer service",
        "email": "info@insocia.org"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Innovation Drive",
      "addressLocality": "Kozhikode",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    }
  };

  const contactMethods = [
    {
      icon: FiMail,
      title: "Email Us",
      primary: "info@insocia.org",
      secondary: "partnerships@insocia.org",
      description: "Get in touch for general inquiries or partnership opportunities",
      color: "primary"
    },
    {
      icon: FiPhone,
      title: "Call Us",
      primary: "+91 701 234 5678",
      secondary: "Mon-Fri: 9:00 AM - 5:00 PM IST",
      description: "Speak directly with our team during business hours",
      color: "secondary"
    },
    {
      icon: FiMapPin,
      title: "Visit Us",
      primary: "Kozhikode, Kerala",
      secondary: "Bangalore, Karnataka",
      description: "Headquarters and regional office locations",
      color: "green"
    }
  ];

  const offices = [
    {
      city: "Kozhikode",
      type: "Headquarters",
      address: "Innovation Drive, Kozhikode, Kerala 673001, India",
      phone: "+91 701 234 5678",
      email: "kozhikode@insocia.org",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM IST",
      color: "primary"
    },
    {
      city: "Bangalore",
      type: "Regional Office",
      address: "Tech Hub, Bangalore, Karnataka 560001, India",
      phone: "+91 701 234 5679",
      email: "bangalore@insocia.org",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM IST",
      color: "secondary"
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'research', label: 'Research Collaboration' },
    { value: 'consulting', label: 'Consulting Services' },
    { value: 'media', label: 'Media & Press' },
    { value: 'careers', label: 'Career Inquiry' }
  ];

  const socialLinks = [
    { icon: FiLinkedin, name: "LinkedIn", url: "#", color: "blue" },
    { icon: FiTwitter, name: "Twitter", url: "#", color: "sky" },
    { icon: FiFacebook, name: "Facebook", url: "#", color: "indigo" }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | InSocia Development Consultancy - Get in Touch</title>
        <meta 
          name="description" 
          content="Connect with InSocia Development Consultancy. Reach out for partnerships, consultations, or general inquiries. Multiple ways to get in touch with our team." 
        />
        <meta 
          name="keywords" 
          content="contact InSocia, get in touch, partnerships, consulting inquiries, office locations, contact form" 
        />
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
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
              <FiMail className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-semibold text-primary-300 uppercase tracking-wider">Get in Touch</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400">Connect</span> and Create Impact
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto">
              Ready to collaborate on meaningful social development initiatives? We'd love to hear from you. Let's explore how we can work together to drive positive change.
            </p>

            {/* Contact highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
              {contactMethods.map((method, index) => (
                <div key={index} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className={`w-10 h-10 bg-gradient-to-br from-${method.color}-500/30 to-${method.color}-600/30 rounded-lg flex items-center justify-center mx-auto mb-3 border border-${method.color}-400/20`}>
                    <method.icon className={`w-5 h-5 text-${method.color}-400`} />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{method.title}</h3>
                  <p className="text-sm text-white/70">{method.primary}</p>
                </div>
              ))}
            </div>

            {/* Quick response promise */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full px-4 py-2">
              <FiCheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-300">We respond within 24 hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods - Detailed */}
      <SectionLayout bgColor="bg-transparent" className="py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
            <FiPhone className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-semibold text-primary-300 uppercase tracking-wider">Contact Methods</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
            Multiple Ways to <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">Reach</span> Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <div key={index} className={`bg-gradient-to-br from-${method.color}-500/10 to-${method.color}-600/5 backdrop-blur-sm rounded-2xl p-8 border border-${method.color}-500/20 hover:border-${method.color}-400/40 transition-all duration-300 group`}>
              <div className={`w-12 h-12 bg-gradient-to-br from-${method.color}-500/30 to-${method.color}-600/30 rounded-xl flex items-center justify-center mb-6 border border-${method.color}-400/20 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className={`w-6 h-6 text-${method.color}-400`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{method.title}</h3>
              <div className="space-y-2 mb-4">
                <p className={`text-${method.color}-300 font-medium`}>{method.primary}</p>
                <p className="text-neutral-400 text-sm">{method.secondary}</p>
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed">{method.description}</p>
            </div>
          ))}
        </div>
      </SectionLayout>

      {/* Contact Form & Office Info */}
      <SectionLayout bgColor="bg-transparent" className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary-500/20 to-cyan-500/20 border border-secondary-400/30 rounded-full px-6 py-3 mb-6">
                <FiMessageSquare className="w-4 h-4 text-secondary-400" />
                <span className="text-sm font-semibold text-secondary-300 uppercase tracking-wider">Send Message</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
                Drop Us a <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-cyan-400">Message</span>
              </h2>
              <p className="text-lg text-neutral-200 leading-relaxed">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:border-secondary-400/50 focus:ring-1 focus:ring-secondary-400/25 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:border-secondary-400/50 focus:ring-1 focus:ring-secondary-400/25 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Organization
                  </label>
                  <div className="relative">
                    <FiBriefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:border-secondary-400/50 focus:ring-1 focus:ring-secondary-400/25 transition-colors"
                      placeholder="Your organization"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:border-secondary-400/50 focus:ring-1 focus:ring-secondary-400/25 transition-colors"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value} className="bg-neutral-800">
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:border-secondary-400/50 focus:ring-1 focus:ring-secondary-400/25 transition-colors"
                  placeholder="Brief subject of your inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:border-secondary-400/50 focus:ring-1 focus:ring-secondary-400/25 transition-colors resize-none"
                  placeholder="Tell us more about your inquiry or how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-secondary-600 to-cyan-600 hover:from-secondary-700 hover:to-cyan-700 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <FiSend className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Office Locations */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full px-6 py-3 mb-6">
                <FiMapPin className="w-4 h-4 text-green-400" />
                <span className="text-sm font-semibold text-green-300 uppercase tracking-wider">Our Offices</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
                Visit Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">Locations</span>
              </h2>
              <p className="text-lg text-neutral-200 leading-relaxed mb-8">
                We have offices in key locations to better serve our partners and communities.
              </p>
            </div>

            <div className="space-y-6">
              {offices.map((office, index) => (
                <div key={index} className={`bg-gradient-to-br from-${office.color}-500/10 to-${office.color}-600/5 backdrop-blur-sm rounded-2xl p-6 border border-${office.color}-500/20`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{office.city}</h3>
                      <span className={`inline-block px-3 py-1 text-xs font-medium bg-${office.color}-500/20 text-${office.color}-300 rounded-full`}>
                        {office.type}
                      </span>
                    </div>
                    <div className={`w-10 h-10 bg-gradient-to-br from-${office.color}-500/30 to-${office.color}-600/30 rounded-lg flex items-center justify-center border border-${office.color}-400/20`}>
                      <FiMapPin className={`w-5 h-5 text-${office.color}-400`} />
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <FiMapPin className="w-4 h-4 text-neutral-400 mt-0.5 flex-shrink-0" />
                      <p className="text-neutral-300">{office.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <FiPhone className="w-4 h-4 text-neutral-400" />
                      <p className="text-neutral-300">{office.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <FiMail className="w-4 h-4 text-neutral-400" />
                      <p className="text-neutral-300">{office.email}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <FiClock className="w-4 h-4 text-neutral-400" />
                      <p className="text-neutral-300">{office.hours}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8 p-6 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm rounded-2xl border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gradient-to-br from-${social.color}-500/30 to-${social.color}-600/30 rounded-lg flex items-center justify-center border border-${social.color}-400/20 hover:border-${social.color}-400/40 transition-all duration-300 group`}
                  >
                    <social.icon className={`w-5 h-5 text-${social.color}-400 group-hover:scale-110 transition-transform duration-300`} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Partnership Inquiries */}
      <SectionLayout bgColor="bg-transparent" className="py-16">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm rounded-2xl border border-primary-500/20"></div>
          <div className="relative p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Interested in <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">Partnership</span>?
            </h2>
            <p className="text-neutral-300 text-lg mb-8 max-w-3xl mx-auto">
              We're always looking for strategic partnerships with organizations that share our commitment to evidence-based social development. Let's explore collaboration opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:partnerships@insocia.org"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <FiMail className="mr-2 w-4 h-4" />
                partnerships@insocia.org
              </a>
              <button className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary-400 border border-primary-400 hover:bg-primary-400 hover:text-white rounded-lg transition-all duration-200">
                Partnership Guidelines
                <FiExternalLink className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default ContactPage; 