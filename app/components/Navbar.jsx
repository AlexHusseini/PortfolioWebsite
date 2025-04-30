'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

// Material UI Icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 shadow-md backdrop-blur-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#home" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
          Alexander Husseini
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 text-gray-700 dark:text-gray-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-full md:w-80 bg-white dark:bg-gray-900 p-8 shadow-2xl flex flex-col justify-center"
          >
            <div className="flex flex-col space-y-6 items-center text-xl">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
              
              <button 
                onClick={toggleTheme}
                className="mt-8 p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <>
                    <LightModeIcon className="mr-2" /> Light Mode
                  </>
                ) : (
                  <>
                    <DarkModeIcon className="mr-2" /> Dark Mode
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
} 