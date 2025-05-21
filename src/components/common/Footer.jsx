import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Enhanced background with animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-primary-900/10 to-neutral-950 opacity-80"></div>
      
      {/* Improved grainy texture overlay with animation */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjgiIHN0aXRjaFRpbGVzPSJzdGl0Y2giIHR5cGU9ImZyYWN0YWxOb2lzZSIgbnVtT2N0YXZlcz0iNCIgc2VlZD0iMTIzIiByZXN1bHQ9InR1cmJ1bGVuY2UiPjwvZmVUdXJidWxlbmNlPjxmZURpZmZ1c2VMaWdodGluZyBpbj0idHVyYnVsZW5jZSIgbGlnaHRpbmdDb2xvcj0iIzY2NiIgc3VyZmFjZVNjYWxlPSIxLjUiIHJlc3VsdD0ibGlnaHQiPjwvZmVEaWZmdXNlTGlnaHRpbmc+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDUiPjwvcmVjdD48L3N2Zz4=')] mix-blend-overlay opacity-40 animate-subtle-drift"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-80"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary-900/10 rounded-full blur-3xl"></div>
      
      {/* Radial glow effect */}
      <div className="absolute inset-0 bg-radial-gradient opacity-20"></div>
      
      {/* Main Footer Content */}
      <div className="container relative z-10 mx-auto px-6 pt-16 pb-10">
        {/* Footer logo section with enhanced design */}
        <div className="flex flex-col items-center justify-center mb-10">
          <Link to="/" className="inline-block mb-4 relative">
            <span className="text-4xl font-heading font-bold text-white bg-clip-text bg-gradient-to-r from-white via-primary-300/90 to-white">
              InSocia
            </span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent"></span>
          </Link>
          <p className="text-neutral-300 max-w-2xl text-center font-light leading-relaxed mb-4">
            Creating equitable societies through innovative policy approaches and rigorous research 
            that drives sustainable social development across communities.
          </p>
          
          {/* Social Links with improved hover effects in a more prominent position */}
          <div className="flex items-center space-x-4 mt-4">
            <a href="#" aria-label="Facebook" className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-800/80 text-neutral-300 hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-800/80 text-neutral-300 hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-800/80 text-neutral-300 hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-800/80 text-neutral-300 hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Main footer links in a compact layout with more content */}
        <div className="backdrop-blur-sm bg-neutral-900/30 rounded-2xl p-6 border border-neutral-800/50 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1: Quick Links - More comprehensive content */}
            <div>
              <h3 className="text-white font-heading font-semibold text-lg mb-3 pb-2 border-b border-primary-500/30 flex items-center">
                <span className="w-1.5 h-4 bg-primary-500 rounded-full mr-2 opacity-80"></span>
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1.5">
                <div>
                  <Link to="/" className="text-neutral-300 hover:text-primary-400 transition-all duration-300 inline-block py-1 hover:translate-x-1">
                    <span className="inline-block w-4 h-px bg-primary-500 mr-2 opacity-70 align-middle"></span>
                    Home
                  </Link>
                </div>
                <div>
                  <Link to="/about" className="text-neutral-300 hover:text-primary-400 transition-all duration-300 inline-block py-1 hover:translate-x-1">
                    <span className="inline-block w-4 h-px bg-primary-500 mr-2 opacity-70 align-middle"></span>
                    About Us
                  </Link>
                </div>
                <div>
                  <Link to="/services" className="text-neutral-300 hover:text-primary-400 transition-all duration-300 inline-block py-1 hover:translate-x-1">
                    <span className="inline-block w-4 h-px bg-primary-500 mr-2 opacity-70 align-middle"></span>
                    Services
                  </Link>
                </div>
                <div>
                  <Link to="/focus-areas" className="text-neutral-300 hover:text-primary-400 transition-all duration-300 inline-block py-1 hover:translate-x-1">
                    <span className="inline-block w-4 h-px bg-primary-500 mr-2 opacity-70 align-middle"></span>
                    Focus Areas
                  </Link>
                </div>
                <div>
                  <Link to="/projects" className="text-neutral-300 hover:text-primary-400 transition-all duration-300 inline-block py-1 hover:translate-x-1">
                    <span className="inline-block w-4 h-px bg-primary-500 mr-2 opacity-70 align-middle"></span>
                    Projects
                  </Link>
                </div>
                <div>
                  <Link to="/partnerships" className="text-neutral-300 hover:text-primary-400 transition-all duration-300 inline-block py-1 hover:translate-x-1">
                    <span className="inline-block w-4 h-px bg-primary-500 mr-2 opacity-70 align-middle"></span>
                    Partnerships
                  </Link>
                </div>
                <div>
                  <Link to="/news" className="text-neutral-300 hover:text-primary-400 transition-all duration-300 inline-block py-1 hover:translate-x-1">
                    <span className="inline-block w-4 h-px bg-primary-500 mr-2 opacity-70 align-middle"></span>
                    News & Insights
                  </Link>
                </div>
                <div>
                  <Link to="/careers" className="text-neutral-300 hover:text-primary-400 transition-all duration-300 inline-block py-1 hover:translate-x-1">
                    <span className="inline-block w-4 h-px bg-primary-500 mr-2 opacity-70 align-middle"></span>
                    Careers
                  </Link>
                </div>
                <div>
                  <Link to="/resources" className="text-neutral-300 hover:text-primary-400 transition-all duration-300 inline-block py-1 hover:translate-x-1">
                    <span className="inline-block w-4 h-px bg-primary-500 mr-2 opacity-70 align-middle"></span>
                    Resources
                  </Link>
                </div>
                <div>
                  <Link to="/contact" className="text-neutral-300 hover:text-primary-400 transition-all duration-300 inline-block py-1 hover:translate-x-1">
                    <span className="inline-block w-4 h-px bg-primary-500 mr-2 opacity-70 align-middle"></span>
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Column 2: Resources - More comprehensive content */}
            <div>
              <h3 className="text-white font-heading font-semibold text-lg mb-3 pb-2 border-b border-secondary-500/30 flex items-center">
                <span className="w-1.5 h-4 bg-secondary-500 rounded-full mr-2 opacity-80"></span>
                Resources
              </h3>
              <div className="space-y-1.5">
                <div>
                  <Link to="/resources" className="text-neutral-300 hover:text-secondary-400 transition-all duration-300 inline-block py-1 hover:translate-x-1">
                    <span className="inline-block w-4 h-px bg-secondary-500 mr-2 opacity-70 align-middle"></span>
                    Knowledge Hub
                  </Link>
                </div>
                <div>
                  <Link to="/resources/data-repository" className="text-neutral-300 hover:text-secondary-400 transition-all duration-300 inline-block py-1 hover:translate-x-1">
                    <span className="inline-block w-4 h-px bg-secondary-500 mr-2 opacity-70 align-middle"></span>
                    Data Repository
                  </Link>
                </div>
                <div>
                  <Link to="/resources/methodology-center" className="text-neutral-300 hover:text-secondary-400 transition-all duration-300 inline-block py-1 hover:translate-x-1">
                    <span className="inline-block w-4 h-px bg-secondary-500 mr-2 opacity-70 align-middle"></span>
                    Methodology Center
                  </Link>
                </div>
                <div>
                  <Link to="/resources/policy-lab" className="text-neutral-300 hover:text-secondary-400 transition-all duration-300 inline-block py-1 hover:translate-x-1">
                    <span className="inline-block w-4 h-px bg-secondary-500 mr-2 opacity-70 align-middle"></span>
                    Policy Innovation Lab
                  </Link>
                </div>
                <div>
                  <Link to="/resources/training" className="text-neutral-300 hover:text-secondary-400 transition-all duration-300 inline-block py-1 hover:translate-x-1">
                    <span className="inline-block w-4 h-px bg-secondary-500 mr-2 opacity-70 align-middle"></span>
                    Training Resources
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Column 3: Contact Info with enhanced styling - Combined locations & hours to reduce height */}
            <div>
              <h3 className="text-white font-heading font-semibold text-lg mb-3 pb-2 border-b border-primary-500/30 flex items-center">
                <span className="w-1.5 h-4 bg-primary-500 rounded-full mr-2 opacity-80"></span>
                Get in Touch
              </h3>
              <div className="space-y-3">
                <a href="mailto:info@insocia.in" className="flex group">
                  <div className="mr-3 mt-1 w-8 h-8 flex-shrink-0 rounded-full bg-neutral-800/80 group-hover:bg-primary-600 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                    <svg className="w-4 h-4 text-neutral-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Email Us</p>
                    <p className="text-neutral-300 group-hover:text-primary-400 transition-colors duration-300">info@insocia.in</p>
                  </div>
                </a>
                
                <a href="tel:+917012345678" className="flex group">
                  <div className="mr-3 mt-1 w-8 h-8 flex-shrink-0 rounded-full bg-neutral-800/80 group-hover:bg-primary-600 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                    <svg className="w-4 h-4 text-neutral-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Call Us</p>
                    <p className="text-neutral-300 group-hover:text-primary-400 transition-colors duration-300">+91 701 234 5678</p>
                  </div>
                </a>
                
                <div className="flex group">
                  <div className="mr-3 mt-1 w-8 h-8 flex-shrink-0 rounded-full bg-neutral-800/80 group-hover:bg-primary-600 flex items-center justify-center transition-all duration-300">
                    <svg className="w-4 h-4 text-neutral-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Our Offices</p>
                    <p className="text-neutral-300 group-hover:text-primary-400 transition-colors duration-300">Headquarters: Kozhikode</p>
                    <p className="text-neutral-300 group-hover:text-primary-400 transition-colors duration-300 mt-1">Regional Office: Bangalore</p>
                    <p className="text-neutral-300 group-hover:text-primary-400 transition-colors duration-300 mt-1 text-xs">Hours: Monday - Friday, 9AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Policy Links added to the bottom of the main card */}
          <div className="mt-8 pt-5 border-t border-neutral-700/30">
            <div className="flex justify-center items-center space-x-8">
              <Link to="/privacy-policy" className="text-neutral-400 text-sm hover:text-primary-400 transition-colors">Privacy Policy</Link>
              <span className="text-neutral-600">|</span>
              <Link to="/terms-of-use" className="text-neutral-400 text-sm hover:text-primary-400 transition-colors">Terms of Use</Link>
              <span className="text-neutral-600">|</span>
              <Link to="/accessibility" className="text-neutral-400 text-sm hover:text-primary-400 transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced bottom footer with copyright and credit on opposite sides */}
      <div className="relative bg-black/40 backdrop-blur-sm py-4">
        <div className="absolute top-0 left-0 right-0 h-[1px]">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-neutral-500/10 to-transparent"></div>
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-2 md:mb-0">
              © {currentYear} InSocia Development Consultancy. All rights reserved.
            </p>
            <p className="text-neutral-400 text-sm">
              Designed & Developed by <a href="https://edotstudio.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors font-medium hover:underline">EdotStudio</a>
            </p>
          </div>
        </div>
      </div>
      
      {/* Add animation keyframes */}
      <style jsx>{`
        @keyframes subtle-drift {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
          50% { transform: translate(2px, 2px) rotate(0.5deg); opacity: 0.5; }
          100% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
        }
        .animate-subtle-drift {
          animation: subtle-drift 8s ease-in-out infinite;
        }
        .bg-radial-gradient {
          background: radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
        }
      `}</style>
    </footer>
  );
};

export default Footer; 