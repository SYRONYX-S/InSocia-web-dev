import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FiEye, FiHeart, FiUsers, FiSettings, FiCheck, FiMail, FiMonitor, FiNavigation } from 'react-icons/fi';

const AccessibilityPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: 'commitment',
      title: 'Our Accessibility Commitment',
      icon: FiHeart,
      content: [
        'InSocia Development Consultancy is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards to achieve these goals.',
        'We believe that accessibility is not just a legal requirement, but a fundamental aspect of inclusive design that benefits all users. Our commitment extends beyond compliance to creating meaningful and equitable experiences for everyone who interacts with our digital platforms.'
      ]
    },
    {
      id: 'standards',
      title: 'Accessibility Standards',
      icon: FiCheck,
      content: [
        'Our website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and user-friendly for everyone.',
        'We follow four main principles of accessibility:',
        '• Perceivable: Information must be presentable in ways users can perceive',
        '• Operable: Interface components must be operable by all users',
        '• Understandable: Information and UI operation must be understandable',
        '• Robust: Content must be robust enough for interpretation by assistive technologies'
      ]
    },
    {
      id: 'features',
      title: 'Accessibility Features',
      icon: FiSettings,
      content: [
        'Our website includes the following accessibility features:',
        '• Alternative text for images and graphics',
        '• Keyboard navigation support for all interactive elements',
        '• High contrast color schemes and readable fonts',
        '• Clear heading structure for screen readers',
        '• Descriptive link text and button labels',
        '• Consistent navigation and layout patterns',
        '• Responsive design that works across all devices',
        '• Semantic HTML markup for better screen reader compatibility'
      ]
    },
    {
      id: 'assistive-tech',
      title: 'Assistive Technology Support',
      icon: FiMonitor,
      content: [
        'Our website is designed to be compatible with assistive technologies, including:',
        '• Screen readers (NVDA, JAWS, VoiceOver, TalkBack)',
        '• Voice recognition software',
        '• Keyboard-only navigation',
        '• Screen magnification software',
        '• Alternative input devices',
        '',
        'We regularly test our website with various assistive technologies to ensure optimal compatibility and usability for users with different accessibility needs.'
      ]
    },
    {
      id: 'inclusive-design',
      title: 'Inclusive Design Principles',
      icon: FiUsers,
      content: [
        'Our approach to accessibility is grounded in inclusive design principles that consider the full range of human diversity:',
        '• Cognitive accessibility: Clear language, logical structure, and consistent design',
        '• Motor accessibility: Large click targets and keyboard alternatives',
        '• Visual accessibility: High contrast, scalable text, and alternative formats',
        '• Auditory accessibility: Captions, transcripts, and visual alternatives to audio',
        '',
        'We recognize that accessibility benefits everyone, including users with temporary impairments, situational limitations, or changing abilities.'
      ]
    },
    {
      id: 'ongoing-efforts',
      title: 'Ongoing Accessibility Efforts',
      icon: FiNavigation,
      content: [
        'Accessibility is an ongoing commitment. Our current and planned efforts include:',
        '• Regular accessibility audits and testing',
        '• Staff training on accessibility best practices',
        '• User testing with people with disabilities',
        '• Continuous monitoring and improvement of accessibility features',
        '• Integration of accessibility considerations in all new development',
        '• Partnership with accessibility consultants and disability advocacy groups',
        '',
        'We view accessibility as a journey of continuous improvement rather than a one-time achievement.'
      ]
    }
  ];

  const guidelines = [
    {
      title: 'Keyboard Navigation',
      description: 'All interactive elements can be accessed using keyboard alone',
      icon: FiSettings
    },
    {
      title: 'Screen Reader Support',
      description: 'Proper markup and labeling for screen reader compatibility',
      icon: FiEye
    },
    {
      title: 'Color Contrast',
      description: 'High contrast ratios for better readability',
      icon: FiMonitor
    },
    {
      title: 'Responsive Design',
      description: 'Accessible across all devices and screen sizes',
      icon: FiNavigation
    }
  ];

  return (
    <>
      <Helmet>
        <title>Accessibility Statement | InSocia Consultancy</title>
        <meta
          name="description"
          content="InSocia Consultancy's commitment to digital accessibility. Learn about our accessibility features, standards compliance, and ongoing efforts to ensure inclusive design for all users."
        />
        <meta name="keywords" content="accessibility, WCAG, inclusive design, digital accessibility, InSocia, web accessibility" />
        <link rel="canonical" href={`${window.location.origin}/accessibility`} />
      </Helmet>

      {/* Banner Section - Fixed padding for navbar */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full object-cover">
          <div className="absolute inset-0"></div>
          <img src="/images/banners/accessibility.webp" alt="Abstract background" className="w-full h-full object-cover"/>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl flex items-center justify-center shadow-xl">
                <FiUsers className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-neutral-900 mb-6 leading-tight">
              Accessibility Statement
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed mb-12 responsive-desc max-w-4xl mx-auto">
              We are committed to ensuring digital accessibility for people with disabilities. Everyone should have equal access to information and functionality on our website.
            </p>
            
            <div className="flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guidelines Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl xl:text-4xl font-heading font-bold text-neutral-900 mb-6">
                Accessibility Guidelines
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto responsive-desc">
                Our website follows established accessibility standards to ensure everyone can access and use our content effectively.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {guidelines.map((guideline, index) => (
                <motion.div
                  key={guideline.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white/90 backdrop-blur-sm border border-neutral-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <guideline.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3">{guideline.title}</h3>
                    <p className="text-neutral-600 text-sm responsive-desc">{guideline.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections - Wider layout */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 xl:gap-16">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <div className="bg-white/90 backdrop-blur-sm border border-neutral-200/50 rounded-3xl p-8 xl:p-10 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-center mb-8">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                        <section.icon className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-2xl xl:text-3xl font-heading font-bold text-neutral-900">
                        {section.title}
                      </h2>
                    </div>
                    
                    <div className="prose prose-lg prose-neutral max-w-none">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className={`text-neutral-600 leading-relaxed responsive-desc ${paragraph === '' ? 'mb-0' : 'mb-4'} ${paragraph.startsWith('•') ? 'ml-4' : ''}`}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feedback Section - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 border border-primary-200/50 rounded-3xl p-10 xl:p-12 shadow-xl">
                <div className="text-center mb-10">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <FiMail className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl xl:text-4xl font-heading font-bold text-neutral-900 mb-4">
                    Accessibility Feedback
                  </h2>
                  <p className="text-lg text-neutral-600 leading-relaxed responsive-desc max-w-2xl mx-auto">
                    We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers:
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/80 rounded-2xl p-8 border border-neutral-200/50 shadow-sm">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">Report Issues</h3>
                    <p className="text-neutral-600 mb-4">
                      If you experience any accessibility issues, please contact us:
                    </p>
                    <p className="text-neutral-600">
                      <strong>Email:</strong> accessibility@insocia.in<br />
                      <strong>Subject:</strong> Accessibility Feedback
                    </p>
                  </div>
                  
                  <div className="bg-white/80 rounded-2xl p-8 border border-neutral-200/50 shadow-sm">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">Response Commitment</h3>
                    <p className="text-neutral-600 mb-4">
                      We aim to respond to accessibility feedback within:
                    </p>
                    <p className="text-neutral-600">
                      <strong>Initial Response:</strong> 2 business days<br />
                      <strong>Resolution Timeline:</strong> Based on complexity
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-neutral-200/50 text-center">
                  <p className="text-sm text-neutral-500">
                    <strong>Last Reviewed:</strong> January 1, 2025 | <strong>Next Review:</strong> July 1, 2025
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccessibilityPage; 