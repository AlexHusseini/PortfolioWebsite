'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/50 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Get In Touch
          </h2>
          <div className="w-24 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out to me through any of the channels below.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <a 
                href="mailto:alex@alexhusseini.com" 
                className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <EmailIcon fontSize="medium" />
                </div>
                <div>
                  <div className="font-medium text-lg mb-1">Email</div>
                  <span>alex@alexhusseini.com</span>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/alexander-husseini-547a10314/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <LinkedInIcon fontSize="medium" />
                </div>
                <div>
                  <div className="font-medium text-lg mb-1">LinkedIn</div>
                  <span>linkedin.com/in/alexander-husseini-547a10314</span>
                </div>
              </a>
              
              <a 
                href="https://github.com/AlexHusseini"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <GitHubIcon fontSize="medium" />
                </div>
                <div>
                  <div className="font-medium text-lg mb-1">GitHub</div>
                  <span>github.com/AlexHusseini</span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 