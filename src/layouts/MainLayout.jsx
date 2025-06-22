import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Preloader from '../components/common/Preloader';
import FloatingButtons from '../components/common/FloatingButtons';
import SafariBrowserWarning from '../components/common/SafariBrowserWarning';
import AOS from 'aos';

const MainLayout = ({ children }) => {
  React.useEffect(() => {
    // Reinitialize AOS on component mount
    AOS.refresh();
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Global light theme background */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-section-light">
        {/* Additional floating accent elements for visual interest */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle floating gradients */}
          <div className="absolute top-[20%] right-[15%] w-[40%] h-[40%] rounded-full bg-gradient-radial from-primary-500/6 to-transparent blur-3xl"></div>
          <div className="absolute bottom-[25%] left-[10%] w-[35%] h-[35%] rounded-full bg-gradient-radial from-secondary-500/5 to-transparent blur-3xl"></div>
          <div className="absolute top-[60%] right-[40%] w-[25%] h-[25%] rounded-full bg-gradient-radial from-primary-400/4 to-transparent blur-2xl"></div>
        </div>
      </div>
      
      <Preloader />
      <SafariBrowserWarning />
      <Navbar />
      
      <main className="flex-grow relative z-10">
        {children}
      </main>
      
      <FloatingButtons />
      <Footer />
    </div>
  );
};

export default MainLayout; 