import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiMail, FiPhone, FiArrowRight, FiExternalLink, FiCheckCircle } from 'react-icons/fi';

const MaintenanceOverlay = () => {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    const { name } = event.target;
    let { value } = event.target;

    // Ensure phone field only accepts digits, "+" and "-"
    if (name === 'phone') {
      value = value.replace(/[^0-9+-]/g, '');
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prevent double submissions
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatusMessage('Sending your message...');

    try {
      const formDataToSend = new FormData();

      // Append form fields expected by Web3Forms
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append(
        'subject',
        formData.subject || 'New enquiry from maintenance page'
      );
      formDataToSend.append('message', formData.message);

      // Web3Forms access key
      formDataToSend.append(
        'access_key',
        '66aa297a-9ddb-4485-8426-4277a6b1c347'
      );

      // Set recipient email address
      formDataToSend.append('to', 'connect@insocia.in');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage('Thank you! Your message has been sent successfully.');
        // Reset local form state
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setStatusMessage(
          'Something went wrong while sending your message. Please try again.'
        );
      }
    } catch (error) {
      console.error('Web3Forms submission error:', error);
      setStatusMessage(
        'Unable to send your message right now. Please try again in a moment.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-2 py-4 md:px-4 relative overflow-hidden">
      {/* Background with subtle gradients and effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-neutral-50/30 to-primary-50/20"></div>
      
      {/* Floating accent elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-radial from-primary-500/8 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-radial from-secondary-500/6 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-primary-500/4 to-transparent rounded-full blur-3xl"></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative backdrop-blur-xl bg-white/95 rounded-3xl border border-neutral-200/60 shadow-2xl shadow-primary-200/10 p-4 sm:p-6 lg:p-12 overflow-hidden"
        >
          {/* Enhanced glassmorphism background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/95 to-neutral-50/90 rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/3 to-secondary-500/3 rounded-3xl"></div>
          
          {/* Subtle noise texture */}
          <div 
            className="absolute inset-0 rounded-3xl opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px'
            }}
          ></div>
          
          {/* Subtle border gradient */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500/10 via-transparent to-secondary-500/10 opacity-50"></div>
          
          <div className="relative z-10">
            {/* Logo/Brand Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              {/* Add CSS for logo icon swaying animation */}
              <style>
                {`
                  @keyframes logo-sway {
                    0% { transform: rotate(4deg); }
                    50% { transform: rotate(-4deg); }
                    100% { transform: rotate(4deg); }
                  }
                  
                  .logo-icon-sway {
                    animation: logo-sway 3s ease-in-out infinite;
                    transform-origin: center bottom;
                  }
                `}
              </style>
              
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-400/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
                <FiClock className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Under Maintenance</span>
              </div>
              
              {/* Logo with animation */}
              <div className="flex items-center justify-center space-x-1 mb-8">
                {/* Icon part with swaying animation */}
                <img 
                  src="/images/logo-icon.svg" 
                  alt="InSocia Icon" 
                  className="h-16 w-auto transition-all duration-300 hover:scale-110 hover:drop-shadow-lg logo-icon-sway"
                />
                {/* Text part - static */}
                <img 
                  src="/images/logo-text.svg" 
                  alt="InSocia Text" 
                  className="h-16 w-auto transition-all duration-300 hover:drop-shadow-lg"
                />
              </div>
              
              <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                We're currently updating our website to bring you an even better experience. 
                We'll be back online shortly with exciting new content and features.
              </p>
            </motion.div>

            {/* Status Card */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative backdrop-blur-md bg-white/80 rounded-2xl border border-neutral-200/40 p-8 mb-8 max-w-2xl mx-auto shadow-lg"
            >
              
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-neutral-50/80 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Expected Launch</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                  Coming Soon
                </h2>
                
                <p className="text-neutral-600 leading-relaxed">
                  Our team is working hard to finalize the design and content. 
                  We appreciate your patience during this brief maintenance period.
                </p>
              </div>
            </motion.div> */}

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8"
            >
              <div className="group relative backdrop-blur-md bg-white/70 rounded-xl border border-neutral-200/40 p-6 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-neutral-50/70 rounded-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FiMail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">Email Us</h3>
                  <p className="text-sm text-neutral-600">connect@insocia.in</p>
                </div>
              </div>
              
              <div className="group relative backdrop-blur-md bg-white/70 rounded-xl border border-neutral-200/40 p-6 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-neutral-50/70 rounded-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FiPhone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">Call Us</h3>
                  <p className="text-sm text-neutral-600">+91 95262 08742</p>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative backdrop-blur-md bg-gradient-to-br from-primary-50/60 to-secondary-50/60 rounded-2xl border border-primary-200/40 p-4 sm:p-6 lg:p-8 shadow-lg overflow-hidden"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-neutral-50/80 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/8 to-secondary-500/8 rounded-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">
                  Stay Connected
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Follow us on social media for updates and announcements about our launch.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:+919526208742"
                    className="inline-flex items-center gap-2 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300 ease-out transform hover:scale-105 relative overflow-hidden group"
                    style={{
                      background: 'rgb(237 87 43)',
                      boxShadow: '0 3px 12px rgba(237, 87, 43, 0.25)'
                    }}
                  >
                    <span>Contact Us</span>
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/company/insocia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary-light-btn  group"
                  >
                    <span>Follow on LinkedIn</span>
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="relative backdrop-blur-md bg-white/90 rounded-3xl border border-neutral-200/50 p-4 sm:p-6 md:p-8 mt-8 md:mt-10 text-left shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-neutral-50/85 rounded-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/6 to-secondary-500/6 rounded-3xl opacity-70"></div>
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-200/40 rounded-full px-4 py-1.5 mb-3">
                    <FiMail className="w-4 h-4 text-primary-600" />
                    <span className="text-xs font-semibold text-primary-700 uppercase tracking-[0.3em]">
                      Quick Note
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-900">
                    Need to discuss something?
                  </h3>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Full name"
                      className="w-full rounded-2xl border border-neutral-200 bg-white/85 px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-primary-400 focus:ring focus:ring-primary-100 outline-none transition-all"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Email address"
                      className="w-full rounded-2xl border border-neutral-200 bg-white/85 px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-primary-400 focus:ring focus:ring-primary-100 outline-none transition-all"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      inputMode="tel"
                      pattern="[0-9+-]*"
                      placeholder="+91 95262 08742"
                      className="w-full rounded-2xl border border-neutral-200 bg-white/85 px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-primary-400 focus:ring focus:ring-primary-100 outline-none transition-all"
                    />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject (optional)"
                      className="w-full rounded-2xl border border-neutral-200 bg-white/85 px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-primary-400 focus:ring focus:ring-primary-100 outline-none transition-all"
                    />
                  </div>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Message"
                    className="w-full rounded-2xl border border-neutral-200 bg-white/85 px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-primary-400 focus:ring focus:ring-primary-100 outline-none transition-all resize-none"
                  ></textarea>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    {statusMessage && (
                      <div className="order-2 sm:order-1 inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-primary-50/80 px-4 py-2 text-xs text-primary-700 shadow-sm shadow-primary-100">
                        <FiCheckCircle className="w-4 h-4" />
                        <span>{statusMessage}</span>
                      </div>
                    )}
                    <button
                      className="order-1 sm:order-2 sm:ml-auto primary-btn px-5 py-3 text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="mr-2 inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <FiArrowRight className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {!statusMessage && (
                    <div className="hidden sm:block h-5" />
                  )}
                </form>
              </div>
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-8"
            >
              {/* Bottom Copyright Bar */}
              <div className="relative">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-300/50 to-transparent"></div>
                <div className="pt-6 rounded-xl">
                  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-neutral-500 text-sm">
                      © {currentYear} Insocia Consultancy. All rights reserved.
                    </p>
                    <p className="text-neutral-500 text-sm flex items-center space-x-2">
                      <span>Powered by</span>
                      <a 
                        href="https://edot.studio" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary-600 hover:text-primary-700 transition-colors font-medium inline-flex items-center space-x-1 group"
                      >
                        <span>edot.studio</span>
                        <FiExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MaintenanceOverlay;
