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

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <Link href="#home" className="text-xl font-bold text-blue-600 dark:text-blue-400">
              Alexander<span className="text-indigo-600 dark:text-indigo-400">.dev</span>
            </Link>
            
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
                href="mailto:alex@alexhusseini.com"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="Email Contact"
              >
                <EmailIcon />
              </a>
            </div>
          </div>
          
          <button 
            onClick={toggleTheme}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <>
                <LightModeIcon fontSize="small" /> Light Mode
              </>
            ) : (
              <>
                <DarkModeIcon fontSize="small" /> Dark Mode
              </>
            )}
          </button>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-6 pt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            &copy; {currentYear} Alexander Husseini
          </p>
        </div>
      </div>
    </footer>
  );
} 