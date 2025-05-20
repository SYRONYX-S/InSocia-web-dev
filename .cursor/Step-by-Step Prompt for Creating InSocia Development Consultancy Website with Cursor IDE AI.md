# Step-by-Step Prompt for Creating InSocia Development Consultancy Website with Cursor IDE AI

## Project Overview
Create a modern, professional React website for InSocia Development Consultancy, a social development organization focused on research, policy design, and project implementation. The website should be sleek, responsive, and optimized for performance while being structured to accommodate a future admin panel.

## Technology Stack
- React.js for frontend
- Tailwind CSS for styling
- AOS library for animations
- React Router for navigation
- React Helmet for SEO
- GitHub for version control
- Vercel for deployment

## Project Setup

1. **Initialize the project**
   ```bash
   npx create-react-app insocia-website
   cd insocia-website
   ```

2. **Install required dependencies**
   ```bash
   npm install tailwindcss postcss autoprefixer aos react-router-dom react-helmet react-icons
   npm install -D @tailwindcss/forms @tailwindcss/typography
   ```

3. **Initialize Tailwind CSS**
   ```bash
   npx tailwindcss init -p
   ```

4. **Configure Tailwind CSS**
   Create a `tailwind.config.js` file with the following content:
   ```javascript
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {
         colors: {
           // Define a professional color palette suitable for a development consultancy
           // Primary colors
           primary: {
             50: '#f0f9ff',
             100: '#e0f2fe',
             200: '#bae6fd',
             300: '#7dd3fc',
             400: '#38bdf8',
             500: '#0ea5e9',
             600: '#0284c7',
             700: '#0369a1',
             800: '#075985',
             900: '#0c4a6e',
           },
           // Secondary colors
           secondary: {
             50: '#f5f3ff',
             100: '#ede9fe',
             200: '#ddd6fe',
             300: '#c4b5fd',
             400: '#a78bfa',
             500: '#8b5cf6',
             600: '#7c3aed',
             700: '#6d28d9',
             800: '#5b21b6',
             900: '#4c1d95',
           },
           // Neutral colors
           neutral: {
             50: '#fafafa',
             100: '#f5f5f5',
             200: '#e5e5e5',
             300: '#d4d4d4',
             400: '#a3a3a3',
             500: '#737373',
             600: '#525252',
             700: '#404040',
             800: '#262626',
             900: '#171717',
           },
         },
         fontFamily: {
           sans: ['Inter', 'sans-serif'],
           serif: ['Merriweather', 'serif'],
         },
       },
     },
     plugins: [
       require('@tailwindcss/forms'),
       require('@tailwindcss/typography'),
     ],
   }
   ```

5. **Set up project structure**
   ```
   src/
   ├── assets/
   │   ├── images/
   │   └── icons/
   ├── components/
   │   ├── common/
   │   │   ├── Button.jsx
   │   │   ├── Card.jsx
   │   │   ├── Footer.jsx
   │   │   ├── Header.jsx
   │   │   ├── Navbar.jsx
   │   │   ├── Preloader.jsx
   │   │   └── SectionHeading.jsx
   │   ├── home/
   │   │   ├── Hero.jsx
   │   │   ├── MissionStatement.jsx
   │   │   ├── FocusAreas.jsx
   │   │   ├── FeaturedProjects.jsx
   │   │   └── PartnerLogos.jsx
   │   ├── about/
   │   ├── services/
   │   ├── focus-areas/
   │   ├── projects/
   │   ├── partnerships/
   │   ├── resources/
   │   ├── news/
   │   ├── careers/
   │   └── contact/
   ├── contexts/
   ├── hooks/
   ├── layouts/
   │   ├── MainLayout.jsx
   │   └── SectionLayout.jsx
   ├── pages/
   │   ├── HomePage.jsx
   │   ├── AboutPage.jsx
   │   ├── ServicesPage.jsx
   │   ├── FocusAreasPage.jsx
   │   ├── ProjectsPage.jsx
   │   ├── PartnershipsPage.jsx
   │   ├── ResourcesPage.jsx
   │   ├── NewsPage.jsx
   │   ├── CareersPage.jsx
   │   ├── ContactPage.jsx
   │   └── NotFoundPage.jsx
   ├── utils/
   │   ├── animations.js
   │   ├── seo.js
   │   └── helpers.js
   ├── data/
   │   ├── focusAreas.js
   │   ├── services.js
   │   ├── projects.js
   │   ├── team.js
   │   ├── partners.js
   │   └── resources.js
   ├── App.js
   ├── index.js
   └── index.css
   ```

6. **Configure AOS animations**
   In `src/index.js`, add:
   ```javascript
   import AOS from 'aos';
   import 'aos/dist/aos.css';
   
   // Initialize AOS
   AOS.init({
     duration: 800,
     easing: 'ease-out',
     once: true,
   });
   ```

## Implementation Steps

### 1. Create Base Components

1. **Create Preloader Component**
   Create a professional, lightweight preloader that matches the site's design theme:
   ```jsx
   // src/components/common/Preloader.jsx
   import React, { useEffect, useState } from 'react';
   
   const Preloader = () => {
     const [loading, setLoading] = useState(true);
   
     useEffect(() => {
       const timer = setTimeout(() => {
         setLoading(false);
       }, 2000);
   
       return () => clearTimeout(timer);
     }, []);
   
     if (!loading) return null;
   
     return (
       <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
         <div className="flex flex-col items-center">
           <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
           <h2 className="mt-4 text-xl font-semibold text-primary-800">InSocia Development Consultancy</h2>
         </div>
       </div>
     );
   };
   
   export default Preloader;
   ```

2. **Create Header and Navbar Components**
   ```jsx
   // src/components/common/Navbar.jsx
   import React, { useState, useEffect } from 'react';
   import { Link, useLocation } from 'react-router-dom';
   
   const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false);
     const [scrolled, setScrolled] = useState(false);
     const location = useLocation();
     
     // Navigation items
     const navItems = [
       { name: 'Home', path: '/' },
       { name: 'About', path: '/about' },
       { name: 'Services', path: '/services' },
       { name: 'Focus Areas', path: '/focus-areas' },
       { name: 'Projects', path: '/projects' },
       { name: 'Partnerships', path: '/partnerships' },
       { name: 'Resources', path: '/resources' },
       { name: 'News & Insights', path: '/news' },
       { name: 'Careers', path: '/careers' },
       { name: 'Contact', path: '/contact' },
     ];
     
     // Handle scroll effect
     useEffect(() => {
       const handleScroll = () => {
         if (window.scrollY > 10) {
           setScrolled(true);
         } else {
           setScrolled(false);
         }
       };
       
       window.addEventListener('scroll', handleScroll);
       return () => window.removeEventListener('scroll', handleScroll);
     }, []);
     
     // Close mobile menu when route changes
     useEffect(() => {
       setIsOpen(false);
     }, [location]);
     
     return (
       <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
         <div className="container mx-auto px-4 md:px-6">
           <div className="flex justify-between items-center">
             {/* Logo */}
             <Link to="/" className="flex items-center">
               <span className="text-xl font-bold text-primary-700">InSocia</span>
             </Link>
             
             {/* Desktop Navigation */}
             <div className="hidden lg:flex space-x-8">
               {navItems.map((item) => (
                 <Link
                   key={item.name}
                   to={item.path}
                   className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                     location.pathname === item.path ? 'text-primary-600' : 'text-neutral-700'
                   }`}
                 >
                   {item.name}
                 </Link>
               ))}
             </div>
             
             {/* Mobile menu button */}
             <button
               className="lg:hidden focus:outline-none"
               onClick={() => setIsOpen(!isOpen)}
             >
               <svg
                 className="w-6 h-6 text-neutral-700"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 {isOpen ? (
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     d="M6 18L18 6M6 6l12 12"
                   />
                 ) : (
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     d="M4 6h16M4 12h16M4 18h16"
                   />
                 )}
               </svg>
             </button>
           </div>
           
           {/* Mobile Navigation */}
           {isOpen && (
             <div className="lg:hidden mt-4 pb-4">
               <div className="flex flex-col space-y-4">
                 {navItems.map((item) => (
                   <Link
                     key={item.name}
                     to={item.path}
                     className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                       location.pathname === item.path ? 'text-primary-600' : 'text-neutral-700'
                     }`}
                   >
                     {item.name}
                   </Link>
                 ))}
               </div>
             </div>
           )}
         </div>
       </nav>
     );
   };
   
   export default Navbar;
   ```

3. **Create Footer Component**
   ```jsx
   // src/components/common/Footer.jsx
   import React from 'react';
   import { Link } from 'react-router-dom';
   
   const Footer = () => {
     const currentYear = new Date().getFullYear();
     
     return (
       <footer className="bg-neutral-800 text-white pt-16 pb-8">
         <div className="container mx-auto px-4 md:px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {/* Column 1: About */}
             <div>
               <h3 className="text-xl font-bold mb-4">InSocia</h3>
               <p className="text-neutral-300 mb-4">
                 Creating equitable societies through innovative policy approaches and rigorous research.
               </p>
               <div className="flex space-x-4">
                 {/* Social Media Icons */}
                 <a href="#" className="text-white hover:text-primary-400">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                     <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                   </svg>
                 </a>
                 <a href="#" className="text-white hover:text-primary-400">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                   </svg>
                 </a>
                 <a href="#" className="text-white hover:text-primary-400">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                     <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                   </svg>
                 </a>
                 <a href="#" className="text-white hover:text-primary-400">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                     <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                   </svg>
                 </a>
               </div>
             </div>
             
             {/* Column 2: Quick Links */}
             <div>
               <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
               <ul className="space-y-2">
                 <li><Link to="/about" className="text-neutral-300 hover:text-white">About Us</Link></li>
                 <li><Link to="/services" className="text-neutral-300 hover:text-white">Our Services</Link></li>
                 <li><Link to="/focus-areas" className="text-neutral-300 hover:text-white">Focus Areas</Link></li>
                 <li><Link to="/projects" className="text-neutral-300 hover:text-white">Projects</Link></li>
                 <li><Link to="/careers" className="text-neutral-300 hover:text-white">Careers</Link></li>
               </ul>
             </div>
             
             {/* Column 3: Resources */}
             <div>
               <h3 className="text-lg font-semibold mb-4">Resources</h3>
               <ul className="space-y-2">
                 <li><Link to="/resources" className="text-neutral-300 hover:text-white">Knowledge Hub</Link></li>
                 <li><Link to="/resources/data-repository" className="text-neutral-300 hover:text-white">Data Repository</Link></li>
                 <li><Link to="/resources/methodology-center" className="text-neutral-300 hover:text-white">Methodology Center</Link></li>
                 <li><Link to="/resources/policy-innovation-lab" className="text-neutral-300 hover:text-white">Policy Innovation Lab</Link></li>
                 <li><Link to="/resources/training-resources" className="text-neutral-300 hover:text-white">Training Resources</Link></li>
               </ul>
             </div>
             
             {/* Column 4: Contact */}
             <div>
               <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
               <p className="text-neutral-300 mb-2">Email: info@insocia.in</p>
               <p className="text-neutral-300 mb-4">Headquarters: Kozhikode</p>
               <p className="text-neutral-300 mb-2">Regional Office: Banglore</p>
             </div>
           </div>
           
           {/* Bottom Footer */}
           <div className="border-t border-neutral-700 mt-12 pt-8">
             <div className="flex flex-col md:flex-row justify-between items-center">
               <p className="text-neutral-400 text-sm">
                 &copy; {currentYear} InSocia Development Consultancy LLP. All Rights Reserved.
               </p>
               <div className="flex space-x-6 mt-4 md:mt-0">
                 <Link to="/privacy-policy" className="text-neutral-400 text-sm hover:text-white">Privacy Policy</Link>
                 <Link to="/terms-of-use" className="text-neutral-400 text-sm hover:text-white">Terms of Use</Link>
                 <Link to="/accessibility" className="text-neutral-400 text-sm hover:text-white">Accessibility Statement</Link>
               </div>
             </div>
           </div>
         </div>
       </footer>
     );
   };
   
   export default Footer;
   ```

4. **Create Button Component**
   ```jsx
   // src/components/common/Button.jsx
   import React from 'react';
   import { Link } from 'react-router-dom';
   
   const Button = ({ 
     children, 
     to, 
     href, 
     variant = 'primary', 
     size = 'md', 
     className = '',
     onClick,
     ...props 
   }) => {
     const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
     
     const variants = {
       primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
       secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500',
       outline: 'border border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
       ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
     };
     
     const sizes = {
       sm: 'py-1.5 px-3 text-sm',
       md: 'py-2 px-4 text-base',
       lg: 'py-2.5 px-5 text-lg',
     };
     
     const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
     
     if (to) {
       return (
         <Link to={to} className={classes} {...props}>
           {children}
         </Link>
       );
     }
     
     if (href) {
       return (
         <a href={href} className={classes} {...props}>
           {children}
         </a>
       );
     }
     
     return (
       <button className={classes} onClick={onClick} {...props}>
         {children}
       </button>
     );
   };
   
   export default Button;
   ```

5. **Create SectionHeading Component**
   ```jsx
   // src/components/common/SectionHeading.jsx
   import React from 'react';
   
   const SectionHeading = ({ 
     title, 
     subtitle, 
     centered = false, 
     light = false,
     className = '' 
   }) => {
     return (
       <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
         <h2 
           className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-neutral-800'}`}
           data-aos="fade-up"
         >
           {title}
         </h2>
         {subtitle && (
           <p 
             className={`text-lg ${light ? 'text-neutral-200' : 'text-neutral-600'}`}
             data-aos="fade-up" 
             data-aos-delay="100"
           >
             {subtitle}
           </p>
         )}
       </div>
     );
   };
   
   export default SectionHeading;
   ```

6. **Create Card Component**
   ```jsx
   // src/components/common/Card.jsx
   import React from 'react';
   
   const Card = ({ 
     title, 
     content, 
     icon, 
     image,
     className = '',
     ...props 
   }) => {
     return (
       <div 
         className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg ${className}`}
         data-aos="fade-up"
         {...props}
       >
         {image && (
           <div className="h-48 overflow-hidden">
             <img 
               src={image} 
               alt={title} 
               className="w-full h-full object-cover transition-transform hover:scale-105"
             />
           </div>
         )}
         <div className="p-6">
           {icon && (
             <div className="flex justify-center mb-4">
               {icon}
             </div>
           )}
           <h3 className="text-xl font-semibold mb-2">{title}</h3>
           <p className="text-neutral-600">{content}</p>
         </div>
       </div>
     );
   };
   
   export default Card;
   ```

### 2. Create Layout Components

1. **Create MainLayout Component**
   ```jsx
   // src/layouts/MainLayout.jsx
   import React from 'react';
   import Navbar from '../components/common/Navbar';
   import Footer from '../components/common/Footer';
   import Preloader from '../components/common/Preloader';
   
   const MainLayout = ({ children }) => {
     return (
       <div className="flex flex-col min-h-screen">
         <Preloader />
         <Navbar />
         <main className="flex-grow pt-16">
           {children}
         </main>
         <Footer />
       </div>
     );
   };
   
   export default MainLayout;
   ```

2. **Create SectionLayout Component**
   ```jsx
   // src/layouts/SectionLayout.jsx
   import React from 'react';
   
   const SectionLayout = ({ 
     children, 
     className = '', 
     bgColor = 'bg-white',
     containerClass = '',
     id
   }) => {
     return (
       <section id={id} className={`py-16 md:py-24 ${bgColor} ${className}`}>
         <div className={`container mx-auto px-4 md:px-6 ${containerClass}`}>
           {children}
         </div>
       </section>
     );
   };
   
   export default SectionLayout;
   ```

### 3. Create Home Page Components

1. **Create Hero Component**
   ```jsx
   // src/components/home/Hero.jsx
   import React from 'react';
   import Button from '../common/Button';
   
   const Hero = () => {
     return (
       <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white pt-32 pb-20 md:pt-40 md:pb-32">
         <div className="container mx-auto px-4 md:px-6">
           <div className="max-w-3xl">
             <h1 
               className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
               data-aos="fade-up"
             >
               Advancing Equitable Social Policies Through Research, Innovation, and Action
             </h1>
             <p 
               className="text-xl md:text-2xl mb-8 text-neutral-100"
               data-aos="fade-up" 
               data-aos-delay="100"
             >
               InSocia partners with governments, NGOs, and international development agencies to design evidence-based solutions for sustainable social development.
             </p>
             <div 
               className="flex flex-col sm:flex-row gap-4"
               data-aos="fade-up" 
               data-aos-delay="200"
             >
               <Button to="/about" size="lg">
                 Explore Our Work
               </Button>
               <Button to="/contact" variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                 Partner With Us
               </Button>
             </div>
           </div>
         </div>
         
         {/* Background pattern */}
         <div className="absolute bottom-0 right-0 w-full h-full max-w-3xl opacity-10 overflow-hidden">
           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
             <path fill="currentColor" d="M42.8,-65.2C54.9,-56.3,63.7,-42.8,69.2,-28.1C74.8,-13.4,77.2,2.5,73.2,16.8C69.3,31.1,59,43.9,46.4,53.5C33.8,63.1,18.9,69.5,2.4,67.7C-14.1,65.9,-32.2,55.9,-45.8,43.1C-59.5,30.3,-68.7,14.8,-70.4,-2.2C-72.1,-19.2,-66.3,-37.7,-54.5,-47.5C-42.7,-57.3,-24.9,-58.4,-8.2,-48.7C8.5,-39,30.7,-74.1,42.8,-65.2Z" transform="translate(100 100)" />
           </svg>
         </div>
       </section>
     );
   };
   
   export default Hero;
   ```

2. **Create MissionStatement Component**
   ```jsx
   // src/components/home/MissionStatement.jsx
   import React from 'react';
   import SectionLayout from '../../layouts/SectionLayout';
   import SectionHeading from '../common/SectionHeading';
   
   const MissionStatement = () => {
     return (
       <SectionLayout bgColor="bg-neutral-50">
         <SectionHeading 
           title="Mission Statement" 
           centered
         />
         <div className="max-w-4xl mx-auto text-center">
           <p 
             className="text-lg md:text-xl text-neutral-700 mb-8"
             data-aos="fade-up"
           >
             At InSocia Development Consultancy, we believe in creating equitable societies through innovative policy approaches and rigorous research. Our institute serves as a collaborative platform where data-driven insights meet practical implementation to address complex social challenges.
           </p>
           <div 
             className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
             data-aos="fade-up"
             data-aos-delay="100"
           >
             <div className="bg-white p-6 rounded-lg shadow-md">
               <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                 </svg>
               </div>
               <h3 className="text-xl font-semibold text-center mb-2">Research</h3>
               <p className="text-neutral-600 text-center">Conducting rigorous, evidence-based research to inform policy decisions</p>
             </div>
             
             <div className="bg-white p-6 rounded-lg shadow-md">
               <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
               </div>
               <h3 className="text-xl font-semibold text-center mb-2">Innovation</h3>
               <p className="text-neutral-600 text-center">Developing creative solutions to complex social challenges</p>
             </div>
             
             <div className="bg-white p-6 rounded-lg shadow-md">
               <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                 </svg>
               </div>
               <h3 className="text-xl font-semibold text-center mb-2">Action</h3>
               <p className="text-neutral-600 text-center">Implementing practical solutions that create lasting impact</p>
             </div>
           </div>
         </div>
       </SectionLayout>
     );
   };
   
   export default MissionStatement;
   ```

3. **Create FocusAreas Component**
   ```jsx
   // src/components/home/FocusAreas.jsx
   import React from 'react';
   import { Link } from 'react-router-dom';
   import SectionLayout from '../../layouts/SectionLayout';
   import SectionHeading from '../common/SectionHeading';
   
   const FocusAreas = () => {
     const areas = [
       {
         id: 'health',
         title: 'Health & Wellbeing',
         icon: (
           <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
           </svg>
         ),
         description: 'Strengthening health systems and improving health outcomes for vulnerable populations.',
         link: '/focus-areas/health-wellbeing'
       },
       {
         id: 'education',
         title: 'Education & Skills Development',
         icon: (
           <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path d="M12 14l9-5-9-5-9 5 9 5z" />
             <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
           </svg>
         ),
         description: 'Improving educational access, quality, and outcomes through evidence-based approaches.',
         link: '/focus-areas/education-skills'
       },
       {
         id: 'livelihoods',
         title: 'Sustainable Livelihoods',
         icon: (
           <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
           </svg>
         ),
         description: 'Promoting economic opportunities that are inclusive and sustainable for communities.',
         link: '/focus-areas/sustainable-livelihoods'
       },
       {
         id: 'gender',
         title: 'Gender Equality & Inclusion',
         icon: (
           <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
           </svg>
         ),
         description: 'Advancing gender-responsive policies and programs for equitable development.',
         link: '/focus-areas/gender-equality'
       },
       {
         id: 'environment',
         title: 'Environmental Sustainability',
         icon: (
           <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
           </svg>
         ),
         description: 'Integrating environmental considerations into social policy for sustainable development.',
         link: '/focus-areas/environmental-sustainability'
       },
       {
         id: 'rural',
         title: 'Rural Development & Agriculture',
         icon: (
           <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
           </svg>
         ),
         description: 'Strengthening rural communities and agricultural systems for sustainable growth.',
         link: '/focus-areas/rural-development'
       }
     ];
     
     return (
       <SectionLayout>
         <SectionHeading 
           title="Key Focus Areas" 
           subtitle="Our work spans across these interconnected domains to create holistic social impact"
           centered
         />
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {areas.map((area, index) => (
             <div 
               key={area.id}
               className="bg-white rounded-lg shadow-md p-6 transition-transform hover:shadow-lg hover:-translate-y-1"
               data-aos="fade-up"
               data-aos-delay={index * 100}
             >
               <div className="text-primary-600 mb-4">
                 {area.icon}
               </div>
               <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
               <p className="text-neutral-600 mb-4">{area.description}</p>
               <Link 
                 to={area.link} 
                 className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
               >
                 Learn more
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                   <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                 </svg>
               </Link>
             </div>
           ))}
         </div>
       </SectionLayout>
     );
   };
   
   export default FocusAreas;
   ```

4. **Create FeaturedProjects Component**
   ```jsx
   // src/components/home/FeaturedProjects.jsx
   import React from 'react';
   import { Link } from 'react-router-dom';
   import SectionLayout from '../../layouts/SectionLayout';
   import SectionHeading from '../common/SectionHeading';
   import Button from '../common/Button';
   
   const FeaturedProjects = () => {
     // Placeholder images - replace with actual project images
     const projects = [
       {
         id: 'project1',
         title: 'Water and Sanitation of Tea Plantation Workers',
         category: 'Health & Wellbeing',
         image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
         description: 'Improving water access and sanitation facilities for tea plantation communities in rural areas.',
         link: '/projects/water-sanitation-tea-plantation'
       },
       {
         id: 'project2',
         title: 'Rural Women Entrepreneurship Initiative',
         category: 'Gender Equality & Inclusion',
         image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
         description: 'Supporting women entrepreneurs in rural areas through training, mentorship, and market access.',
         link: '/projects/rural-women-entrepreneurship'
       },
       {
         id: 'project3',
         title: 'Climate-Resilient Agriculture Program',
         category: 'Environmental Sustainability',
         image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
         description: 'Helping farmers adapt to climate change through sustainable agricultural practices and technology.',
         link: '/projects/climate-resilient-agriculture'
       }
     ];
     
     return (
       <SectionLayout bgColor="bg-neutral-50">
         <SectionHeading 
           title="Featured Projects" 
           subtitle="Explore some of our impactful initiatives across different focus areas"
           centered
         />
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {projects.map((project, index) => (
             <div 
               key={project.id}
               className="bg-white rounded-lg shadow-md overflow-hidden"
               data-aos="fade-up"
               data-aos-delay={index * 100}
             >
               <div className="h-48 overflow-hidden">
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover transition-transform hover:scale-105"
                 />
               </div>
               <div className="p-6">
                 <div className="text-sm font-medium text-primary-600 mb-2">{project.category}</div>
                 <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                 <p className="text-neutral-600 mb-4">{project.description}</p>
                 <Link 
                   to={project.link} 
                   className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                 >
                   View Project
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                     <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                   </svg>
                 </Link>
               </div>
             </div>
           ))}
         </div>
         
         <div className="text-center mt-12">
           <Button to="/projects" variant="outline">
             View All Projects
           </Button>
         </div>
       </SectionLayout>
     );
   };
   
   export default FeaturedProjects;
   ```

5. **Create PartnerLogos Component**
   ```jsx
   // src/components/home/PartnerLogos.jsx
   import React from 'react';
   import SectionLayout from '../../layouts/SectionLayout';
   
   const PartnerLogos = () => {
     // Placeholder logos - replace with actual partner logos
     const partners = [
       {
         id: 'partner1',
         name: 'Impact',
         logo: 'https://via.placeholder.com/150x80?text=Impact'
       },
       {
         id: 'partner2',
         name: 'ID Log',
         logo: 'https://via.placeholder.com/150x80?text=ID+Log'
       },
       {
         id: 'partner3',
         name: 'CIGI',
         logo: 'https://via.placeholder.com/150x80?text=CIGI'
       },
       {
         id: 'partner4',
         name: 'People\'s Foundation',
         logo: 'https://via.placeholder.com/150x80?text=People\'s+Foundation'
       }
     ];
     
     return (
       <SectionLayout className="py-12 md:py-16">
         <div className="text-center mb-8">
           <h3 
             className="text-xl font-semibold text-neutral-700"
             data-aos="fade-up"
           >
             Our Trusted Partners
           </h3>
         </div>
         
         <div 
           className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
           data-aos="fade-up"
           data-aos-delay="100"
         >
           {partners.map((partner) => (
             <div 
               key={partner.id}
               className="grayscale hover:grayscale-0 transition-all duration-300"
             >
               <img 
                 src={partner.logo} 
                 alt={partner.name} 
                 className="h-12 md:h-16"
               />
             </div>
           ))}
         </div>
       </SectionLayout>
     );
   };
   
   export default PartnerLogos;
   ```

### 4. Create Pages

1. **Create HomePage**
   ```jsx
   // src/pages/HomePage.jsx
   import React from 'react';
   import { Helmet } from 'react-helmet';
   import MainLayout from '../layouts/MainLayout';
   import Hero from '../components/home/Hero';
   import MissionStatement from '../components/home/MissionStatement';
   import FocusAreas from '../components/home/FocusAreas';
   import FeaturedProjects from '../components/home/FeaturedProjects';
   import PartnerLogos from '../components/home/PartnerLogos';
   
   const HomePage = () => {
     return (
       <MainLayout>
         <Helmet>
           <title>InSocia Development Consultancy | Research, Innovation, Action</title>
           <meta name="description" content="InSocia Development Consultancy partners with governments, NGOs, and international development agencies to design evidence-based solutions for sustainable social development." />
           <meta name="keywords" content="development consultancy, social policy, research, innovation, sustainable development" />
           <script type="application/ld+json">
             {`
               {
                 "@context": "https://schema.org",
                 "@type": "Organization",
                 "name": "InSocia Development Consultancy",
                 "url": "https://insocia.in",
                 "logo": "https://insocia.in/logo.png",
                 "description": "Creating equitable societies through innovative policy approaches and rigorous research.",
                 "address": {
                   "@type": "PostalAddress",
                   "addressLocality": "Kozhikode",
                   "addressRegion": "Kerala",
                   "addressCountry": "India"
                 }
               }
             `}
           </script>
         </Helmet>
         
         <Hero />
         <MissionStatement />
         <FocusAreas />
         <FeaturedProjects />
         <PartnerLogos />
       </MainLayout>
     );
   };
   
   export default HomePage;
   ```

2. **Create NotFoundPage**
   ```jsx
   // src/pages/NotFoundPage.jsx
   import React from 'react';
   import { Helmet } from 'react-helmet';
   import { Link } from 'react-router-dom';
   import MainLayout from '../layouts/MainLayout';
   import Button from '../components/common/Button';
   
   const NotFoundPage = () => {
     return (
       <MainLayout>
         <Helmet>
           <title>Page Not Found | InSocia Development Consultancy</title>
           <meta name="robots" content="noindex, nofollow" />
         </Helmet>
         
         <div className="flex items-center justify-center min-h-[70vh] px-4">
           <div className="text-center">
             <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
             <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
             <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
               The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
             </p>
             <Button to="/" size="lg">
               Return to Homepage
             </Button>
           </div>
         </div>
       </MainLayout>
     );
   };
   
   export default NotFoundPage;
   ```

### 5. Set Up Routing

1. **Configure App.js**
   ```jsx
   // src/App.js
   import React from 'react';
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
   import HomePage from './pages/HomePage';
   import NotFoundPage from './pages/NotFoundPage';
   
   function App() {
     return (
       <Router>
         <Routes>
           <Route path="/" element={<HomePage />} />
           {/* Add other routes as they are developed */}
           <Route path="*" element={<NotFoundPage />} />
         </Routes>
       </Router>
     );
   }
   
   export default App;
   ```

2. **Update index.css**
   ```css
   /* src/index.css */
   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:wght@400;700&display=swap');
   
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   
   body {
     @apply font-sans text-neutral-800 antialiased;
   }
   
   /* Smooth scrolling */
   html {
     scroll-behavior: smooth;
   }
   
   /* Additional custom styles */
   .transition-transform {
     transition-property: transform;
     transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
     transition-duration: 300ms;
   }
   ```

### 6. Future Admin Panel Integration Preparation

1. **Create a services directory for API calls**
   ```jsx
   // src/services/api.js
   // This file will be used for API calls when the admin panel is implemented
   
   const API_URL = process.env.REACT_APP_API_URL || '/api';
   
   export const fetchData = async (endpoint) => {
     try {
       const response = await fetch(`${API_URL}/${endpoint}`);
       if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
       }
       return await response.json();
     } catch (error) {
       console.error('API fetch error:', error);
       throw error;
     }
   };
   
   export const postData = async (endpoint, data) => {
     try {
       const response = await fetch(`${API_URL}/${endpoint}`, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
       });
       if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
       }
       return await response.json();
     } catch (error) {
       console.error('API post error:', error);
       throw error;
     }
   };
   ```

2. **Create a context for future authentication**
   ```jsx
   // src/contexts/AuthContext.js
   import React, { createContext, useState, useContext } from 'react';
   
   const AuthContext = createContext();
   
   export const useAuth = () => useContext(AuthContext);
   
   export const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(false);
     
     // These functions will be implemented when the admin panel is added
     const login = async (credentials) => {
       // Placeholder for future implementation
       console.log('Login function will be implemented with admin panel');
     };
     
     const logout = () => {
       // Placeholder for future implementation
       console.log('Logout function will be implemented with admin panel');
     };
     
     const value = {
       user,
       loading,
       login,
       logout,
     };
     
     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
   };
   ```

### 7. SEO Optimization

1. **Create SEO utility functions**
   ```jsx
   // src/utils/seo.js
   export const generateMetaTags = (data) => {
     const { title, description, keywords, ogImage, ogUrl, ogType = 'website' } = data;
     
     return (
       <>
         <title>{title}</title>
         <meta name="description" content={description} />
         {keywords && <meta name="keywords" content={keywords} />}
         
         {/* Open Graph / Facebook */}
         <meta property="og:type" content={ogType} />
         <meta property="og:title" content={title} />
         <meta property="og:description" content={description} />
         {ogImage && <meta property="og:image" content={ogImage} />}
         {ogUrl && <meta property="og:url" content={ogUrl} />}
         
         {/* Twitter */}
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:title" content={title} />
         <meta name="twitter:description" content={description} />
         {ogImage && <meta name="twitter:image" content={ogImage} />}
       </>
     );
   };
   
   export const generateSchemaMarkup = (data) => {
     return {
       __html: JSON.stringify(data)
     };
   };
   ```

### 8. Deployment Setup

1. **Create a GitHub workflow file**
   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to Vercel
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         
         - name: Setup Node.js
           uses: actions/setup-node@v2
           with:
             node-version: '16'
             
         - name: Install dependencies
           run: npm ci
           
         - name: Build
           run: npm run build
           
         - name: Deploy to Vercel
           uses: amondnet/vercel-action@v20
           with:
             vercel-token: ${{ secrets.VERCEL_TOKEN }}
             vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
             vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
             vercel-args: '--prod'
   ```

2. **Create a vercel.json configuration file**
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "package.json",
         "use": "@vercel/static-build",
         "config": { "distDir": "build" }
       }
     ],
     "routes": [
       { "handle": "filesystem" },
       { "src": "/.*", "dest": "/index.html" }
     ]
   }
   ```

### 9. Testing and Optimization

1. **Add a basic test for the HomePage component**
   ```jsx
   // src/pages/HomePage.test.js
   import { render, screen } from '@testing-library/react';
   import { BrowserRouter } from 'react-router-dom';
   import HomePage from './HomePage';
   
   test('renders hero section with headline', () => {
     render(
       <BrowserRouter>
         <HomePage />
       </BrowserRouter>
     );
     const headingElement = screen.getByText(/Advancing Equitable Social Policies/i);
     expect(headingElement).toBeInTheDocument();
   });
   ```

2. **Create a performance optimization utility**
   ```jsx
   // src/utils/performance.js
   export const lazyLoadImages = () => {
     if ('loading' in HTMLImageElement.prototype) {
       const images = document.querySelectorAll('img[loading="lazy"]');
       images.forEach(img => {
         img.src = img.dataset.src;
       });
     } else {
       // Fallback for browsers that don't support lazy loading
       const script = document.createElement('script');
       script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
       document.body.appendChild(script);
     }
   };
   
   export const deferNonCriticalCSS = (url) => {
     const link = document.createElement('link');
     link.rel = 'stylesheet';
     link.href = url;
     link.media = 'print';
     link.onload = function() {
       this.media = 'all';
     };
     document.head.appendChild(link);
   };
   ```

## Additional Pages to Implement

Continue implementing the remaining pages following the same pattern:

1. AboutPage
2. ServicesPage
3. FocusAreasPage
4. ProjectsPage
5. PartnershipsPage
6. ResourcesPage
7. NewsPage
8. CareersPage
9. ContactPage

Each page should:
- Use the MainLayout component
- Include proper SEO with Helmet
- Implement schema markup where appropriate
- Use AOS for animations
- Be fully responsive
- Follow the established design system

## Final Steps

1. **Review and test the entire website**
   - Test on multiple devices and browsers
   - Ensure all animations work smoothly
   - Verify responsive design at all breakpoints
   - Check loading performance

2. **Optimize for production**
   - Run `npm run build` to create optimized production build
   - Test the production build locally
   - Deploy to Vercel

3. **Prepare for future admin panel integration**
   - Ensure data structures are well-organized
   - Keep component structure modular
   - Document API integration points

4. **Document the codebase**
   - Add README.md with setup instructions
   - Document component structure
   - Include notes on future admin panel integration

This comprehensive approach ensures a modern, professional website that meets all the client's requirements while being future-proof for admin panel integration.
