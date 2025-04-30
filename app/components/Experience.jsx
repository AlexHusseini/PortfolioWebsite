'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import LinkIcon from '@mui/icons-material/Link';

const experiences = [
  {
    id: 1,
    title: 'Lead Full Stack Developer',
    company: 'RS Photographies',
    location: 'Remote',
    period: 'Mar 2025 - Apr 2025',
    description: 'Developed a professional, responsive portfolio website for RS Photographies using React.js and Firebase Hosting. Built features including a dynamic photo gallery with category filtering, an About page, contact form, and secure admin panel for photo management. Optimized for performance and mobile compatibility, and deployed at rsphotographies.com.\n\nTechnologies: React.js, Firebase (Firestore, Auth, Storage, Hosting, Functions), JavaScript, CSS3, Git, Nodemailer, Jest',
    website: 'https://www.rsphotographies.com/'
  }
];

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900/50 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Experience
          </h2>
          <div className="w-24 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              ref={ref} 
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.01,
                y: -2,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.06)",
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 md:p-8 relative mb-8 last:mb-0 cursor-pointer"
            >
              {exp.website && (
                <a 
                  href={exp.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute top-6 right-6 flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <LinkIcon fontSize="small" />
                  <span>Visit Website</span>
                </a>
              )}
              
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400 block mb-2">
                {exp.period}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2 pr-32">
                {exp.title}
              </h3>
              <div className="text-gray-600 dark:text-gray-300 font-medium mb-4">
                {exp.company} • {exp.location}
              </div>
              
              {exp.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 