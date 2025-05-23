import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative text-white min-h-screen flex items-center" style={{ marginTop: 0 }}>
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 lg:pr-8">
            <div className="inline-flex items-center px-4 py-2 rounded-md border border-white/10 text-sm font-semibold text-white/90 mb-8 bg-white/5">
              <span className="flex h-2 w-2 mr-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              EMPOWERING SUSTAINABLE CHANGE
            </div>
            
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Advancing <span className="text-primary-400">Equitable</span> Social Policies
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              We partner with governments, NGOs, and international agencies to design evidence-based solutions for sustainable social development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center px-8 py-3.5 font-medium rounded-lg bg-primary-600 text-white"
              >
                Explore Our Work
                <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-3.5 font-medium rounded-lg bg-white/5 text-white border border-white/20"
              >
                Partner With Us
                <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            {/* Stats - Static */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
              <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-5">
                <div>
                  <p className="text-3xl font-bold text-white">25+</p>
                  <p className="text-sm text-white/70 mt-1">Projects</p>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-5">
                <div>
                  <p className="text-3xl font-bold text-white">18</p>
                  <p className="text-sm text-white/70 mt-1">Countries</p>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-5">
                <div>
                  <p className="text-3xl font-bold text-white">40+</p>
                  <p className="text-sm text-white/70 mt-1">Partners</p>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-5">
                <div>
                  <p className="text-3xl font-bold text-white">100K+</p>
                  <p className="text-sm text-white/70 mt-1">Lives Impacted</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image Section */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative h-[480px]">
              {/* Main visual container */}
              <div className="absolute right-0 h-[340px] w-[400px] rounded-lg border border-white/10">
                <div className="relative h-full w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80" 
                    alt="Policy analysis meeting" 
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                  
                  {/* Info card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/10 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 5a2 2 0 012 2h2a2 2 0 012-2" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-white/70">Professional Solutions</p>
                        <p className="text-sm font-semibold text-white mt-0.5">Evidence-Based Policy Design</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Top data card */}
              <div className="absolute top-0 left-0 w-64 bg-white/10 rounded-lg border border-white/10">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-medium text-white/90">Policy Impact</div>
                    <div className="h-6 w-6 rounded-full flex items-center justify-center bg-primary-500/20">
                      <svg className="w-3.5 h-3.5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-full h-1.5 bg-white/10 rounded-full">
                      <div className="h-full w-3/4 bg-primary-500 rounded-full"></div>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full">
                      <div className="h-full w-2/3 bg-secondary-500 rounded-full"></div>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full">
                      <div className="h-full w-4/5 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-3 gap-1 text-center text-[10px] text-white/70">
                    <div>Research</div>
                    <div>Analysis</div>
                    <div>Implementation</div>
                  </div>
                </div>
              </div>
              
              {/* Bottom analysis card */}
              <div className="absolute bottom-6 left-10 w-48 bg-white/10 rounded-lg border border-white/10">
                <div className="p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-secondary-400"></div>
                    <div className="text-xs font-medium text-white/90">Project Analytics</div>
                  </div>
                  
                  <div className="flex items-end h-16 mt-2 space-x-1">
                    {[40, 65, 35, 75, 50, 80, 45].map((height, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-sm ${i % 2 === 0 ? 'bg-white/20' : 'bg-primary-500/50'}`}
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero); 