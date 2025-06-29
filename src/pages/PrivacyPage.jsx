import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FiShield, FiLock, FiEye, FiUser, FiDatabase, FiMail } from 'react-icons/fi';

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: FiShield,
      content: [
        'InSocia Development Consultancy LLP ("InSocia," "we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.',
        'We understand the importance of data privacy in the social development sector and adhere to the highest standards of data protection to maintain the trust of our clients, partners, and website visitors.'
      ]
    },
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: FiDatabase,
      content: [
        'We collect information that you provide directly to us, such as when you:',
        '• Contact us through our website forms or email',
        '• Register for events, training programs, or newsletters',
        '• Participate in research studies or evaluations',
        '• Engage our consulting services',
        '• Apply for employment opportunities',
        '',
        'We also automatically collect certain information when you visit our website, including IP addresses, browser type, device information, and website usage patterns through cookies and similar technologies.'
      ]
    },
    {
      id: 'data-use',
      title: 'How We Use Your Information',
      icon: FiUser,
      content: [
        'We use the information we collect to:',
        '• Provide and improve our consulting services',
        '• Respond to your inquiries and communicate with you',
        '• Conduct research and evaluation activities',
        '• Analyze website usage and optimize user experience',
        '• Send relevant updates about our work and the development sector',
        '• Comply with legal obligations and protect our rights',
        '',
        'We process personal data based on legitimate business interests, contractual necessity, legal obligations, or with your explicit consent as required by applicable data protection laws.'
      ]
    },
    {
      id: 'data-sharing',
      title: 'Information Sharing and Disclosure',
      icon: FiEye,
      content: [
        'We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:',
        '• With trusted service providers who assist in operating our website and conducting business',
        '• With research partners when you have consented to participate in collaborative studies',
        '• When required by law or to protect our rights and safety',
        '• In connection with business transfers (with appropriate safeguards)',
        '',
        'Any third parties who access your information are bound by confidentiality agreements and must comply with applicable privacy laws.'
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: FiLock,
      content: [
        'We implement comprehensive security measures to protect your personal information:',
        '• Encryption of data in transit and at rest',
        '• Regular security assessments and updates',
        '• Access controls and authentication protocols',
        '• Staff training on data protection best practices',
        '• Secure data storage and backup systems',
        '',
        'While we strive to use commercially acceptable means to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We continuously work to enhance our security measures.'
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Privacy Rights',
      icon: FiUser,
      content: [
        'Depending on your location, you may have the following rights regarding your personal information:',
        '• Access: Request a copy of the personal information we hold about you',
        '• Correction: Request correction of inaccurate or incomplete information',
        '• Deletion: Request deletion of your personal information',
        '• Portability: Request transfer of your data to another organization',
        '• Restriction: Request limitation of processing in certain circumstances',
        '• Objection: Object to processing based on legitimate interests',
        '',
        'To exercise these rights, please contact us using the information provided below. We will respond to your request within the timeframe required by applicable law.'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy | InSocia Consultancy</title>
        <meta
          name="description"
          content="Privacy Policy for InSocia Development Consultancy. Learn how we collect, use, and protect your personal information in accordance with data protection laws."
        />
        <meta name="keywords" content="privacy policy, data protection, personal information, GDPR, InSocia" />
        <link rel="canonical" href={`${window.location.origin}/privacy-policy`} />
      </Helmet>

      {/* Banner Section - Fixed padding for navbar */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full object-cover">
          <div className="absolute inset-0"></div>
          <img src="/images/banners/privacy.webp" alt="Abstract background" className="w-full h-full object-cover"/>
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
                <FiShield className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-neutral-900 mb-6 leading-tight">
              Privacy Policy
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed mb-12 responsive-desc max-w-4xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information to maintain your trust and comply with data protection regulations.
            </p>
            
            <div className="flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
            </div>
          </motion.div>
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

            {/* Contact Section - Enhanced */}
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
                    Contact Us About Privacy
                  </h2>
                  <p className="text-lg text-neutral-600 leading-relaxed responsive-desc max-w-2xl mx-auto">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/80 rounded-2xl p-8 border border-neutral-200/50 shadow-sm">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">General Inquiries</h3>
                    <p className="text-neutral-600">
                      <strong>Email:</strong> connect@insocia.in<br />
                      <strong>Website:</strong> www.insocia.in
                    </p>
                  </div>
                  
                  <div className="bg-white/80 rounded-2xl p-8 border border-neutral-200/50 shadow-sm">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">Data Protection Officer</h3>
                    <p className="text-neutral-600">
                      <strong>Email:</strong> privacy@insocia.in<br />
                      <strong>Address:</strong> Kozhikode, Kerala, India
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-neutral-200/50 text-center">
                  <p className="text-sm text-neutral-500">
                    <strong>Effective Date:</strong> January 1, 2025 | <strong>Last Updated:</strong> January 1, 2025
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

export default PrivacyPage; 