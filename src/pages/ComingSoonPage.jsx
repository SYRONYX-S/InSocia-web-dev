import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiCalendar, FiUsers, FiTarget, FiGlobe, FiHeart, FiZap } from 'react-icons/fi';

const ComingSoonPage = () => {
  // Calculate time until June 1, 2025
  const targetDate = new Date('2025-06-01T00:00:00');
  const now = new Date();
  const timeDifference = targetDate.getTime() - now.getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((timeDifference % (1000 * 60)) / 1000)
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newSeconds = prevTime.seconds > 0 ? prevTime.seconds - 1 : 59;
        const newMinutes = prevTime.seconds > 0 ? prevTime.minutes : prevTime.minutes > 0 ? prevTime.minutes - 1 : 59;
        const newHours = prevTime.seconds > 0 || prevTime.minutes > 0 ? prevTime.hours : prevTime.hours > 0 ? prevTime.hours - 1 : 23;
        const newDays = prevTime.seconds > 0 || prevTime.minutes > 0 || prevTime.hours > 0 ? prevTime.days : prevTime.days - 1;

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Coming Soon | InSocia Development Consultancy - Launching Soon</title>
        <meta 
          name="description" 
          content="InSocia Development Consultancy is launching soon. Get ready for innovative social development solutions through research, policy design, and implementation." 
        />
        <meta 
          name="keywords" 
          content="coming soon, development consultancy, social impact, policy research, launching soon, InSocia" 
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden py-4">
        {/* Static grainy gradient background */}
        <div className="absolute inset-0 pointer-events-none select-none">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/15 to-cyan-900/20"></div>
          
          {/* Subtle static gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-neutral-800/30 via-transparent to-blue-800/20"></div>
          
          {/* Grain texture for premium feel */}
          <div 
            className="absolute inset-0 opacity-40 mix-blend-soft-light"
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
              backgroundSize: '150px 150px'
            }}
          ></div>
          
          {/* Subtle radial highlights */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-cyan-500/5 rounded-full"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-8 py-12 md:py-16">
          <div className="max-w-6xl mx-auto text-center">
            {/* Brand area */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                InSocia Development Consultancy
              </h1>
              <p className="text-lg text-blue-300 font-medium">Research • Innovation • Action</p>
            </div>

            {/* Coming Soon Message */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full px-6 py-3 mb-6">
                <FiZap className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">Coming Soon</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Something <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">Amazing</span> is Coming
              </h2>
              
              <p className="text-xl md:text-2xl text-neutral-200 mb-8 leading-relaxed max-w-4xl mx-auto">
                We're crafting innovative solutions for sustainable social development. Our platform will bridge the gap between research, policy, and implementation to create meaningful change.
              </p>

              {/* Key features preview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-lg flex items-center justify-center mx-auto mb-4 border border-blue-400/20">
                    <FiTarget className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Evidence-Based Research</h3>
                  <p className="text-neutral-300 text-sm">Rigorous research and data-driven insights for effective policy decisions</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-cyan-600/30 rounded-lg flex items-center justify-center mx-auto mb-4 border border-cyan-400/20">
                    <FiUsers className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Collaborative Partnerships</h3>
                  <p className="text-neutral-300 text-sm">Working with governments, NGOs, and international development agencies</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/30 to-emerald-600/30 rounded-lg flex items-center justify-center mx-auto mb-4 border border-emerald-400/20">
                    <FiHeart className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Sustainable Impact</h3>
                  <p className="text-neutral-300 text-sm">Creating lasting change through systems-level interventions</p>
                </div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Launching June 1, 2025</h3>
              <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-neutral-300 font-medium uppercase tracking-wider">{unit}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <FiMail className="w-5 h-5 text-blue-400" />
                  <div className="text-left">
                    <div className="text-sm text-neutral-300">Email</div>
                    <div className="text-white font-medium">info@insocia.org</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <FiPhone className="w-5 h-5 text-cyan-400" />
                  <div className="text-left">
                    <div className="text-sm text-neutral-300">Phone</div>
                    <div className="text-white font-medium">+91 701 234 5678</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <FiMapPin className="w-5 h-5 text-emerald-400" />
                  <div className="text-left">
                    <div className="text-sm text-neutral-300">Location</div>
                    <div className="text-white font-medium">Kozhikode, Kerala</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Our Journey</h4>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
                >
                  <FiTwitter className="w-5 h-5" />
                </a>
                <a
                  href="mailto:info@insocia.org"
                  className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 hover:scale-110"
                >
                  <FiMail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Focus Areas Preview */}
            <div className="max-w-4xl mx-auto">
              <h4 className="text-lg font-semibold text-white mb-6">Our Focus Areas</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                {[
                  'Health & Wellbeing',
                  'Education & Skills Development', 
                  'Sustainable Livelihoods',
                  'Gender Equality & Inclusion',
                  'Environmental Sustainability',
                  'Rural Development & Agriculture'
                ].map((area, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center">
                    <span className="text-neutral-200">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-neutral-400 text-sm mb-2">
                © 2024 InSocia Development Consultancy. All rights reserved.
              </p>
              <p className="text-neutral-500 text-xs">
                Designed by <a href="https://edot.studio" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium transition-colors hover:underline">EdotStudio</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoonPage; 