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
      <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
        {/* Additional floating accent elements for visual interest - more prominent and varied */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle floating gradients */}
          <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-gradient-to-r from-primary-500/25 to-secondary-500/25 rounded-full blur-3xl opacity-80"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gradient-to-r from-secondary-500/20 to-primary-500/20 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute top-[15%] right-[10%] w-[25%] h-[25%] bg-gradient-radial from-primary-400/20 to-transparent blur-2xl opacity-90"></div>
          <div className="absolute bottom-[20%] left-[5%] w-[20%] h-[40%] bg-gradient-radial from-secondary-400/15 to-transparent blur-3xl opacity-80 -rotate-12"></div>
          <div className="absolute top-[50%] left-[50%] w-[50%] h-[50%] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-primary-500/10 to-transparent blur-3xl opacity-60"></div>
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