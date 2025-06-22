import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import MainLayout from '../layouts/MainLayout';
import SectionLayout from '../layouts/SectionLayout';
import SectionHeading from '../components/common/SectionHeading';

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <Helmet>
                <title>Terms of Use | Insocia Consultancy</title>
        <meta 
          name="description" 
          content="Terms of Use for Insocia Consultancy website and services. Learn about our terms and conditions for using our platform and engaging with our consultancy services." 
        />
        <meta name="keywords" content="terms of use, conditions, legal, policy, development consultancy, InSocia" />
        <link rel="canonical" href={`${window.location.origin}/terms`} />
      </Helmet>

      <SectionLayout>
        <div className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              title="Terms of Use"
              subtitle="Please read these terms and conditions carefully before using our website or services"
              center
            />

            <div className="max-w-4xl mx-auto prose prose-lg prose-neutral">
              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">1. Introduction</h2>
                <p className="text-neutral-600 leading-relaxed">
                  Welcome to Insocia Consultancy ("Insocia," "we," "our," or "us"). These Terms of Use ("Terms") 
                  govern your access to and use of our website, services, and any content provided by InSocia Development 
                  Consultancy LLP. By accessing or using our website and services, you agree to be bound by these Terms and 
                  our Privacy Policy.
                </p>
                <p className="text-neutral-600 leading-relaxed mt-4">
                  InSocia is a social development consultancy that partners with governments, NGOs, international development 
                  agencies, and academic institutions to design evidence-based solutions for sustainable social development 
                  through research, policy advisory, project management, and capacity building services.
                </p>
              </div>

              {/* Definitions */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">2. Definitions</h2>
                <ul className="text-neutral-600 leading-relaxed space-y-2">
                  <li><strong>"Services"</strong> refers to all consulting services, research activities, policy advisory, project management, training, and digital platforms provided by InSocia.</li>
                  <li><strong>"Client"</strong> refers to any organization, government entity, NGO, or individual that engages InSocia for consulting services.</li>
                  <li><strong>"Content"</strong> includes all information, data, reports, methodologies, and intellectual property available through our website and services.</li>
                  <li><strong>"Platform"</strong> refers to our website and any digital tools or systems we provide for project management and knowledge sharing.</li>
                </ul>
              </div>

              {/* Use of Services */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">3. Use of Our Services</h2>
                
                <h3 className="text-xl font-medium text-neutral-700 mb-3 mt-6">3.1 Permitted Use</h3>
                <p className="text-neutral-600 leading-relaxed">
                  You may use our website and services for legitimate purposes related to social development, research, 
                  policy formulation, and organizational capacity building. Our services are intended for:
                </p>
                <ul className="text-neutral-600 leading-relaxed mt-3 space-y-1">
                  <li>• Government agencies seeking evidence-based policy solutions</li>
                  <li>• NGOs requiring technical assistance and capacity building</li>
                  <li>• International development organizations implementing social programs</li>
                  <li>• Academic institutions conducting development research</li>
                  <li>• Corporate entities engaged in CSR and social impact initiatives</li>
                </ul>

                <h3 className="text-xl font-medium text-neutral-700 mb-3 mt-6">3.2 Prohibited Use</h3>
                <p className="text-neutral-600 leading-relaxed">You agree not to:</p>
                <ul className="text-neutral-600 leading-relaxed mt-3 space-y-1">
                  <li>• Use our services for any unlawful or unauthorized purpose</li>
                  <li>• Interfere with or disrupt the integrity or performance of our services</li>
                  <li>• Access data or materials not intended for you</li>
                  <li>• Reproduce, duplicate, copy, or sell any part of our proprietary content without authorization</li>
                  <li>• Use our services to harm vulnerable populations or undermine social development goals</li>
                  <li>• Share confidential information obtained through our services without proper authorization</li>
                </ul>
              </div>

              {/* Service Agreements */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">4. Service Agreements and Consulting Engagements</h2>
                
                <h3 className="text-xl font-medium text-neutral-700 mb-3">4.1 Consulting Services</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Specific consulting engagements are governed by separate service agreements that detail scope of work, 
                  deliverables, timelines, and compensation. These Terms provide a general framework but do not supersede 
                  specific contractual arrangements.
                </p>

                <h3 className="text-xl font-medium text-neutral-700 mb-3 mt-6">4.2 Research and Data Collection</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Our research activities follow strict ethical guidelines and comply with relevant data protection regulations. 
                  When conducting research involving human subjects, we obtain necessary approvals and informed consent as required.
                </p>

                <h3 className="text-xl font-medium text-neutral-700 mb-3 mt-6">4.3 Training and Capacity Building</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Training programs and capacity building services include specific learning objectives and evaluation criteria. 
                  Participants are expected to engage constructively and respect intellectual property rights of training materials.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">5. Intellectual Property Rights</h2>
                
                <h3 className="text-xl font-medium text-neutral-700 mb-3">5.1 InSocia's Intellectual Property</h3>
                <p className="text-neutral-600 leading-relaxed">
                  All content, methodologies, frameworks, and materials developed by InSocia remain our intellectual property 
                  unless explicitly transferred through written agreement. This includes research methodologies, evaluation 
                  frameworks, training curricula, and analytical tools.
                </p>

                <h3 className="text-xl font-medium text-neutral-700 mb-3 mt-6">5.2 Client and Partner Contributions</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We respect the intellectual property rights of our clients and partners. Data, information, and materials 
                  provided by clients remain their property, though we may use aggregated, anonymized insights for research 
                  and knowledge development purposes with appropriate permissions.
                </p>

                <h3 className="text-xl font-medium text-neutral-700 mb-3 mt-6">5.3 Open Source and Public Knowledge</h3>
                <p className="text-neutral-600 leading-relaxed">
                  InSocia is committed to contributing to the global knowledge commons. We may release certain methodologies, 
                  research findings, and tools under open source or Creative Commons licenses to advance social development practice.
                </p>
              </div>

              {/* Privacy and Data Protection */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">6. Privacy and Data Protection</h2>
                <p className="text-neutral-600 leading-relaxed">
                  InSocia takes data protection seriously and complies with applicable privacy laws and regulations. 
                  Our handling of personal data is governed by our Privacy Policy, which forms part of these Terms. 
                  We implement appropriate technical and organizational measures to protect data confidentiality, 
                  integrity, and availability.
                </p>
                <p className="text-neutral-600 leading-relaxed mt-4">
                  When conducting research or evaluations involving personal data, we follow strict protocols for data 
                  minimization, purpose limitation, and secure data handling. Sensitive data is processed only with 
                  explicit consent and necessary legal basis.
                </p>
              </div>

              {/* Confidentiality */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">7. Confidentiality</h2>
                <p className="text-neutral-600 leading-relaxed">
                  InSocia maintains strict confidentiality regarding client information, project details, and sensitive 
                  data encountered during our engagements. We require similar confidentiality commitments from our 
                  staff, partners, and subcontractors.
                </p>
                <p className="text-neutral-600 leading-relaxed mt-4">
                  Clients and users of our services are also expected to maintain confidentiality regarding proprietary 
                  methodologies, unpublished research findings, and sensitive information shared during collaborations.
                </p>
              </div>

              {/* Disclaimers and Limitations */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">8. Disclaimers and Limitations of Liability</h2>
                
                <h3 className="text-xl font-medium text-neutral-700 mb-3">8.1 Service Disclaimer</h3>
                <p className="text-neutral-600 leading-relaxed">
                  While InSocia strives to provide high-quality consulting services based on best practices and evidence, 
                  we cannot guarantee specific outcomes or results from our recommendations. Social development involves 
                  complex systems and multiple variables beyond our control.
                </p>

                <h3 className="text-xl font-medium text-neutral-700 mb-3 mt-6">8.2 Research and Data Limitations</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Research findings and data analysis are based on available information and methodological approaches 
                  appropriate at the time of study. Findings should be interpreted within their specific context and 
                  limitations clearly documented in our reports.
                </p>

                <h3 className="text-xl font-medium text-neutral-700 mb-3 mt-6">8.3 Third-Party Content</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Our website may contain links to third-party resources and references to external research. We do not 
                  endorse or take responsibility for the accuracy, completeness, or reliability of third-party content.
                </p>
              </div>

              {/* Professional Standards */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">9. Professional Standards and Ethics</h2>
                <p className="text-neutral-600 leading-relaxed">
                  InSocia adheres to the highest professional and ethical standards in all our work. Our services are 
                  guided by principles of:
                </p>
                <ul className="text-neutral-600 leading-relaxed mt-3 space-y-1">
                  <li>• Evidence-based practice and rigorous methodology</li>
                  <li>• Commitment to social justice and equity</li>
                  <li>• Transparency and accountability in our processes</li>
                  <li>• Respect for local contexts and community voices</li>
                  <li>• Collaborative and participatory approaches</li>
                  <li>• Continuous learning and adaptive management</li>
                </ul>
              </div>

              {/* Termination */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">10. Termination</h2>
                <p className="text-neutral-600 leading-relaxed">
                  Either party may terminate consulting engagements according to the terms specified in individual 
                  service agreements. We reserve the right to suspend or terminate access to our website and services 
                  for violations of these Terms or for legitimate business reasons with appropriate notice.
                </p>
                <p className="text-neutral-600 leading-relaxed mt-4">
                  Upon termination, confidentiality obligations and intellectual property rights continue to apply as 
                  specified in relevant agreements.
                </p>
              </div>

              {/* Governing Law */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">11. Governing Law and Dispute Resolution</h2>
                <p className="text-neutral-600 leading-relaxed">
                  These Terms are governed by the laws of India. Any disputes arising from these Terms or our services 
                  will be resolved through good faith negotiations. If necessary, disputes will be subject to the 
                  jurisdiction of courts in Kozhikode, Kerala, India.
                </p>
                <p className="text-neutral-600 leading-relaxed mt-4">
                  For international clients, specific dispute resolution mechanisms may be agreed upon in individual 
                  service contracts, including mediation or arbitration under relevant international frameworks.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">12. Changes to These Terms</h2>
                <p className="text-neutral-600 leading-relaxed">
                  InSocia reserves the right to update these Terms periodically to reflect changes in our services, 
                  legal requirements, or business practices. We will notify users of significant changes through our 
                  website and direct communication where appropriate.
                </p>
                <p className="text-neutral-600 leading-relaxed mt-4">
                  Continued use of our services after changes to these Terms constitutes acceptance of the updated terms. 
                  We encourage regular review of these Terms to stay informed of any modifications.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-800 mb-4">13. Contact Information</h2>
                <p className="text-neutral-600 leading-relaxed">
                  If you have questions about these Terms or our services, please contact us:
                </p>
                <div className="bg-neutral-50 p-6 rounded-lg mt-4">
                  <p className="text-neutral-700 font-medium">Insocia Consultancy LLP</p>
                  <p className="text-neutral-600 mt-2">
                                          Email: connect@insocia.in<br />
                    Website: www.insocia.in<br />
                    Address: Kozhikode, Kerala, India
                  </p>
                  <p className="text-neutral-600 mt-4">
                    For partnership inquiries: partnerships@insocia.in
                  </p>
                </div>
              </div>

              {/* Effective Date */}
              <div className="border-t border-neutral-200 pt-6">
                <p className="text-sm text-neutral-500">
                  <strong>Effective Date:</strong> These Terms of Use are effective as of January 1, 2025.
                </p>
                <p className="text-sm text-neutral-500 mt-2">
                  <strong>Last Updated:</strong> January 1, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </MainLayout>
  );
};

export default TermsPage; 