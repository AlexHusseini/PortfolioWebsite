'use client';

import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { useTheme } from './ThemeProvider';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Footer() {
  const { theme, toggleTheme } = useTheme();
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="#home" className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 block">
              Alexander<span className="text-indigo-600 dark:text-indigo-400">.dev</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Building modern, responsive web experiences with clean code and intuitive user interfaces.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/alexander-husseini-547a10314/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon />
              </a>
              <a 
                href="https://github.com/AlexHusseini" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <GitHubIcon />
              </a>
              <a 
                href="mailto:alexander.husseini@gmail.com"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="Email Contact"
              >
                <EmailIcon />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Contact</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
            <a 
              href="mailto:alexander.husseini@gmail.com" 
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              alexander.husseini@gmail.com
            </a>
            
            <div className="mt-4">
              <button 
                onClick={toggleTheme}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <>
                    <LightModeIcon fontSize="small" /> Switch to Light Mode
                  </>
                ) : (
                  <>
                    <DarkModeIcon fontSize="small" /> Switch to Dark Mode
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Alexander Husseini. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Built with Next.js, React and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
} 