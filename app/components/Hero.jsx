'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import AnimatedBackground from './AnimatedBackground';
import { useState } from 'react';

export default function Hero() {
  const [isDownloadDisabled, setIsDownloadDisabled] = useState(false);

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setIsDownloadDisabled(true);
    setTimeout(() => {
      setIsDownloadDisabled(false);
    }, 2000);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding pt-32">
      <AnimatedBackground />
      <div className="container mx-auto px-4 z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-2">
            Software Developer
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
        >
          Alexander Husseini
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-8"
        >
          Majoring in Software Engineering with a minor in Cybersecurity at Kennesaw State University
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <Link href="#projects" className="button button-primary">
            View My Work
          </Link>
          <a 
            href="/pdf/Alex_Husseini_Resume.pdf" 
            download="Alex_Husseini_Resume.pdf"
            className="button button-secondary flex items-center gap-2"
          >
            <DownloadIcon fontSize="small" /> Download Resume
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-6"
        >
          <a 
            href="https://www.linkedin.com/in/alexander-husseini-547a10314/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a 
            href="https://github.com/AlexHusseini" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a 
            href="mailto:alex@alexhusseini.com"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            aria-label="Email Contact"
          >
            <EmailIcon fontSize="large" />
          </a>
        </motion.div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/30 dark:bg-blue-900/10 rounded-bl-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-100/30 dark:bg-indigo-900/10 rounded-tr-full blur-3xl" />
    </section>
  );
} 