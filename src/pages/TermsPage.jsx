import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FiFileText, FiUsers, FiShield, FiBook, FiGlobe, FiMail, FiAlertCircle } from 'react-icons/fi';

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: FiFileText,
      content: [
        'Welcome to InSocia Development Consultancy LLP ("InSocia," "we," "our," or "us"). These Terms of Use govern your access to and use of our website, services, and any content provided by InSocia Development Consultancy.',
        'By accessing or using our website and services, you agree to be bound by these Terms and our Privacy Policy. InSocia is a social development consultancy that partners with governments, NGOs, international development agencies, and academic institutions to design evidence-based solutions for sustainable social development.'
      ]
    },
    {
      id: 'definitions',
      title: 'Key Definitions',
      icon: FiBook,
      content: [
        '"Services" refers to all consulting services, research activities, policy advisory, project management, training, and digital platforms provided by InSocia.',
        '"Client" refers to any organization, government entity, NGO, or individual that engages InSocia for consulting services.',
        '"Content" includes all information, data, reports, methodologies, and intellectual property available through our website and services.',
        '"Platform" refers to our website and any digital tools or systems we provide for project management and knowledge sharing.'
      ]
    },
    {
      id: 'permitted-use',
      title: 'Permitted Use of Services',
      icon: FiUsers,
      content: [
        'You may use our website and services for legitimate purposes related to social development, research, policy formulation, and organizational capacity building. Our services are intended for:',
        '• Government agencies seeking evidence-based policy solutions',
        '• NGOs requiring technical assistance and capacity building',
        '• International development organizations implementing social programs',
        '• Academic institutions conducting development research',
        '• Corporate entities engaged in CSR and social impact initiatives'
      ]
    },
    {
      id: 'prohibited-use',
      title: 'Prohibited Activities',
      icon: FiAlertCircle,
      content: [
        'You agree not to:',
        '• Use our services for any unlawful or unauthorized purpose',
        '• Interfere with or disrupt the integrity or performance of our services',
        '• Access data or materials not intended for you',
        '• Reproduce, duplicate, copy, or sell any part of our proprietary content without authorization',
        '• Use our services to harm vulnerable populations or undermine social development goals',
        '• Share confidential information obtained through our services without proper authorization'
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property Rights',
      icon: FiShield,
      content: [
        'All content, methodologies, frameworks, and materials developed by InSocia remain our intellectual property unless explicitly transferred through written agreement. This includes research methodologies, evaluation frameworks, training curricula, and analytical tools.',
        'We respect the intellectual property rights of our clients and partners. Data, information, and materials provided by clients remain their property, though we may use aggregated, anonymized insights for research and knowledge development purposes with appropriate permissions.',
        'InSocia is committed to contributing to the global knowledge commons. We may release certain methodologies, research findings, and tools under open source or Creative Commons licenses to advance social development practice.'
      ]
    },
    {
      id: 'professional-standards',
      title: 'Professional Standards & Ethics',
      icon: FiShield,
      content: [
        'InSocia adheres to the highest professional and ethical standards in all our work. Our services are guided by principles of:',
        '• Evidence-based practice and rigorous methodology',
        '• Commitment to social justice and equity',
        '• Transparency and accountability in our processes',
        '• Respect for local contexts and community voices',
        '• Collaborative and participatory approaches',
        '• Continuous learning and adaptive management'
      ]
    },
    {
      id: 'liability',
      title: 'Disclaimers & Limitations',
      icon: FiAlertCircle,
      content: [
        'While InSocia strives to provide high-quality consulting services based on best practices and evidence, we cannot guarantee specific outcomes or results from our recommendations. Social development involves complex systems and multiple variables beyond our control.',
        'Research findings and data analysis are based on available information and methodological approaches appropriate at the time of study. Findings should be interpreted within their specific context and limitations clearly documented in our reports.',
        'Our website may contain links to third-party resources and references to external research. We do not endorse or take responsibility for the accuracy, completeness, or reliability of third-party content.'
      ]
    },
    {
      id: 'governing-law',
      title: 'Governing Law & Disputes',
      icon: FiGlobe,
      content: [
        'These Terms are governed by the laws of India. Any disputes arising from these Terms or our services will be resolved through good faith negotiations. If necessary, disputes will be subject to the jurisdiction of courts in Kozhikode, Kerala, India.',
        'For international clients, specific dispute resolution mechanisms may be agreed upon in individual service contracts, including mediation or arbitration under relevant international frameworks.'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Use | InSocia Consultancy</title>
        <meta
          name="description"
          content="Terms of Use for InSocia Development Consultancy website and services. Learn about our terms and conditions for using our platform and engaging with our consultancy services."
        />
        <meta name="keywords" content="terms of use, conditions, legal, policy, development consultancy, InSocia" />
        <link rel="canonical" href={`${window.location.origin}/terms`} />
      </Helmet>

      {/* Banner Section - Fixed padding for navbar */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full object-cover">
          <div className="absolute inset-0 "></div>
          <img src="/images/banners/terms.webp" alt="Abstract background" className="w-full h-full object-cover"/>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-3xl flex items-center justify-center shadow-xl">
                <FiFileText className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-neutral-900 mb-6 leading-tight">
              Terms of Use
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed mb-12 responsive-desc max-w-4xl mx-auto">
              Please read these terms and conditions carefully before using our website or engaging with our services. These terms establish a fair and transparent framework for our collaboration.
            </p>
            
            <div className="flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full"></div>
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
                      <div className="w-14 h-14 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                        <section.icon className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-2xl xl:text-3xl font-heading font-bold text-neutral-900">
                        {section.title}
                      </h2>
                    </div>
                    
                    <div className="prose prose-lg prose-neutral max-w-none">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className={`text-neutral-600 leading-relaxed responsive-desc ${paragraph === '' ? 'mb-0' : 'mb-4'} ${paragraph.startsWith('•') || paragraph.startsWith('"') ? 'ml-4' : ''}`}>
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
              <div className="bg-gradient-to-br from-secondary-50 to-primary-50 border border-secondary-200/50 rounded-3xl p-10 xl:p-12 shadow-xl">
                <div className="text-center mb-10">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <FiMail className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl xl:text-4xl font-heading font-bold text-neutral-900 mb-4">
                    Questions About Terms?
                  </h2>
                  <p className="text-lg text-neutral-600 leading-relaxed responsive-desc max-w-2xl mx-auto">
                    If you have questions about these Terms of Use or our services, please contact us:
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/80 rounded-2xl p-8 border border-neutral-200/50 shadow-sm">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">General Inquiries</h3>
                    <p className="text-neutral-600">
                      <strong>Email:</strong> connect@insocia.in<br />
                      <strong>Website:</strong> www.insocia.in<br />
                      <strong>Phone:</strong> +91 701 234 5678
                    </p>
                  </div>
                  
                  <div className="bg-white/80 rounded-2xl p-8 border border-neutral-200/50 shadow-sm">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">Partnership Inquiries</h3>
                    <p className="text-neutral-600">
                      <strong>Email:</strong> partnerships@insocia.in<br />
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

export default TermsPage; 