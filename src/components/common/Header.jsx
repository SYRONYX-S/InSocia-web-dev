import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Navbar from './Navbar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold text-primary-600 flex items-center"
          aria-label="InSocia - Home"
        >
          <span className="ml-2">InSocia</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <Navbar />
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="lg:hidden text-neutral-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-neutral-800 focus:outline-none"
              aria-label="Close menu"
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>
          <div className="px-4 py-2">
            <Link
              to="/"
              className="text-xl font-bold text-primary-600 mb-6 block"
              onClick={toggleMenu}
            >
              InSocia
            </Link>
            <nav className="mt-8">
              <ul className="space-y-4">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About', path: '/about' },
                  { name: 'Services', path: '/services' },
                  { name: 'Focus Areas', path: '/focus-areas' },
                  { name: 'Projects', path: '/projects' },
                  { name: 'Partnerships', path: '/partnerships' },
                  { name: 'Resources', path: '/resources' },
                  { name: 'News', path: '/news' },
                  { name: 'Careers', path: '/careers' },
                  { name: 'Contact', path: '/contact' },
                ].map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block py-2 px-4 text-base font-medium rounded-md transition-colors ${
                          isActive
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-neutral-600 hover:text-primary-600 hover:bg-primary-50'
                        }`
                      }
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 